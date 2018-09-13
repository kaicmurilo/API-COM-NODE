const mongoose = require('mongoose');
const Products = mongoose.model('Products');

//requisção de todos os produtos
exports.get = (req, res, next) => {
    Products.find({ active: true }, 'title price slug').then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });

};

//requisição por slug
exports.getBySlug = (req, res, next) => {
    Products.findOne({
        slug: req.params.slug,
        active: true
    }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });

};

//requisição por ID
exports.getByID = (req, res, next) => {
    Products.findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });

};

//requisição por tags
exports.getByTag = (req, res, next) => {
    Products.find({
        tags: req.params.tag,
        active: true
    }, ' title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};
//cadastro de produto
exports.post = (req, res, next) => {
    var products = new Products(req.body);
    products.save().then(x => {
        res.status(201).send({ message: 'Produto cadastrado com sucesso!' });
    }).catch(e => {
        res.status(400).send({ message: 'Falha ao cadastrar o produto!', data: e });
    });

};

exports.put = (req, res, next) => {
    Products.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            slug: req.body.slug
        }
    })
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
    Products.findOneAndRemove(req.body.id)
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