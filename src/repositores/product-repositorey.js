const mongoose = require('mongoose');
const Products = mongoose.model('Products');

//requisção de todos os produtos
exports.get = () => {
    return Products.find({
        active: true
    }, 'title price slug');
}

exports.getBySlug = (slug) => {
    return Products.findOne({
        slug: slug,
        active: true
    }, 'title description price slug tags');
}

exports.getById = (id) => {
    return Products.findById({
        id: id,
        active: true
    });
}

exports.getByTag = (tag) => {
    return Products.find({
        tags: tag,
        active: true
    }, 'title description price slug tags');
}

exports.create = (data) => {
    var products = new Products(data);
    return products.save()
}

exports.update = (id, data) => {
    return Products.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price,
            slug: data.slug
        }
    })
}

exports.delete = (id) => {
    return Products.findOneAndRemove(id);
}