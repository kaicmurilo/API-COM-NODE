const mongoose = require('mongoose');
const Products = mongoose.model('Products');

//requisção de todos os produtos
exports.get = async () => {
    const res = await Products.find({
        active: true
    }, 'title price slug');
    return res;
}

exports.getBySlug = async (slug) => {
    const res = await Products.findOne({
        slug: slug,
        active: true
    }, 'title description price slug tags');
    return res;
}

exports.getById = async (id) => {
    const res = await Products.findById({
        id: id,
        active: true
    });
    return res;
}

exports.getByTag = async (tag) => {
    const res = Products.find({
        tags: tag,
        active: true
    }, 'title description price slug tags');
    return res;
}

exports.create = async (data) => {
    var products = new Products(data);
    await products.save();
}

exports.update = async (id, data) => {
    await Products.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price,
            slug: data.slug
        }
    });
}

exports.delete = async (id) => {
    await Products.findOneAndRemove(id);
}