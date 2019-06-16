const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    autor: String,
    local: String,
    descricao: String,
    hashtags: String,
    imagem: String,
    likes: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);