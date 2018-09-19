const ValidationContract = require('../validators/fluent.validator');
const repository = require('../repositores/product-repository');

//requisção de todos os produtos
exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

//requisição por slug
exports.getBySlug = async (req, res, next) => {
    try {
        var data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }

};

//requisição por ID
exports.getByID = async (req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }

};

//requisição por tags
exports.getByTag = async (req, res, next) => {
    try {
        const data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

//cadastro de produto
exports.post = async (req, res, next) => {
    //APLICANDO VALIDAÇÃO DO FLUENT-VALIDATOR
    // let contract = new ValidationContract();
    // contract.hasMinLen(req.body.title, 3, 'O Título deve conter pelo menos 3 caracteres');
    // contract.hasMinLen(req.body.slug, 3, 'O Slug deve conter pelo menos 3 caracteres');
    // contract.hasMinLen(req.body.description, 3, 'A Descrição deve conter pelo menos 3 caracteres');

    // if (!contract.isValid()) {
    //     res.status(400).send(contract.errors()).end();
    //    return;
    //  }
    try {
        await repository.create(req.body)
        res.status(201).send({ message: 'Produto cadastrado com sucesso!' });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Produto Atualizado com Sucesso'
        });

    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });

    }
};

exports.delete = async (req, res, next) => {
    try {
        await repository
            .delete(req.body.id)
        res.status(200).send({
            message: 'Produto Removido com Sucesso'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};