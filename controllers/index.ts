import { Router } from 'express';
import routerUser from './Users';

const router = Router();

router.use(routerUser);

router.all('*', (req, res) => {
    res.sendStatus(404);
});

export default router;