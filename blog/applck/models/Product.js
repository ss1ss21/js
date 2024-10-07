const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const ProductSchema = new Schema({
    title: String,
    summary: String,
    content: String,
    cover: String,
    tag: String
},
{
    timestamps: true,
});

const ProductModel = model('Product', ProductSchema);

module.exports= ProductModel;