const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const Article = require('./models/article')
const { use } = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname));

// Access Views
app.get('/', async (req, res) => {
    const articles = await Article.find()
    res.render('articles/index', {articles: articles})
})

app.use('/articles', articleRouter)

app.listen(5000)