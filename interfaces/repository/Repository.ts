interface Repository<GenericModel> {
    getAll: () => GenericModel[],
    find: (where: Partial<GenericModel>) => GenericModel | undefined,
    insert: (document: GenericModel) => GenericModel,
    update: (where: Partial<GenericModel>, update: Omit<GenericModel, 'id'>) => GenericModel,
    delete: (where: Partial<GenericModel>) => GenericModel,
}

export default Repository;