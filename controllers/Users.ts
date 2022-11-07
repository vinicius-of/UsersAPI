import { Router } from 'express';
import router from '.';
import { UsersData } from '../data';
import UserRepository from '../repository/User';

const routerUser = Router();

const userRepository = new UserRepository().setDataset(UsersData);

routerUser.use('/users', (req, res, next) => {
    const { calledId }: any = req.query;
    const user = userRepository.find({ id: calledId });

    if (user && user.permissao === 'ADMIN') {
        next();
    } else {
        res.status(401).send('Your account does not have the authorization to have access.');
    }
});

routerUser.route('/users')
    .get((req, res) => {
        const listOfUsers = userRepository.getAll();
        res.status(200).json({ data: listOfUsers });
    })
    .post((req, res) => {
        const { nome, empresa, permissao } = req.body;
        const countOfUsers = userRepository.getAll().length;

        const userToBeInserted = { nome, empresa, permissao, id: countOfUsers + 1 };
        const userInserted = userRepository.insert(userToBeInserted);

        res.status(201).json({ data: userInserted });
    });

routerUser.route('/users/:id')
    .patch((req, res) => {
        const { nome, empresa, permissao } = req.body;
        const { id } = req.params;
        const userToBeUpdated = {nome, empresa, permissao};

        try {
            const userUpdated = userRepository.update({ id: Number(id) }, userToBeUpdated);
            return res.status(200).json({ data: userUpdated });
        } catch (error) {
            res.status(400).send('This user was not found into the dataset. Please check the id for any mistakes.');
        }

    })
    .delete((req, res) => {
        const { id } = req.params;
        
        try {
            const userDeleted = userRepository.delete({ id: Number(id) });
            res.status(200).json({ data: userDeleted });
        } catch (error) {
            res.status(400).send('This user was not found into the dataset. Please check the id for any mistakes.');
        }
    });

export default routerUser;
