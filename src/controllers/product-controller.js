const mongoose = require('mongoose');
const Products = mongoose.model('Products');
const ValidationContract = require('../validators/fluent.validator');
const repository = require('../repositores/product-repositorey');

//requisção de todos os produtos
exports.get = (req, res, next) => {
    repository.get().then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });

};

//requisição por slug
exports.getBySlug = (req, res, next) => {
    repository.getBySlug(req.params.slug).then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });

};

//requisição por ID
exports.getByID = (req, res, next) => {
    repository.getById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });

};

//requisição por tags
exports.getByTag = (req, res, next) => {
   repository.getByTag(req.params.tag)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

//cadastro de produto
exports.post = (req, res, next) => {
    //APLICANDO VALIDAÇÃO DO FLUENT-VALIDATOR
    // let contract = new ValidationContract();
    // contract.hasMinLen(req.body.title, 3, 'O Título deve conter pelo menos 3 caracteres');
    // contract.hasMinLen(req.body.slug, 3, 'O Slug deve conter pelo menos 3 caracteres');
    // contract.hasMinLen(req.body.description, 3, 'A Descrição deve conter pelo menos 3 caracteres');

    // if (!contract.isValid()) {
    //     res.status(400).send(contract.errors()).end();
    //     return;
    // }
    repository.create(req.body)
    .then(x => {
        res.status(201).send({ message: 'Produto cadastrado com sucesso!' });
    }).catch(e => {
        res.status(400).send({ message: 'Falha ao cadastrar o produto!', data: e });
    });

};

exports.put = (req, res, next) => {
   repository.update(req.params.id, req.body)
        .then(x => {
            res.status(200).send({
                message: 'Produto Atualizado com Sucesso'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar produto',
                data: e
            });
        });
};

exports.delete = (req, res, next) => {
   repository.delete(req.body.id)
        .then(x => {
            res.status(200).send({
                message: 'Produto Removido com Sucesso'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover produto',
                data: e
            });
        });
};