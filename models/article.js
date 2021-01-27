// Article Schema

const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
    },
    markdown: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Article', articleSchema)