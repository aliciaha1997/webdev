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

// Articles
app.use(express.urlencoded({extended: false}))
app.use('/articles', articleRouter)


app.use(express.static(__dirname));

// Access Views
app.get('/', (req, res) => {
    const articles = [{
        title: "Test Article",
        createdAt: new Date(),
        description: "description",
    }]
    res.render('articles/index', {
        articles: articles
    })
})

app.listen(5000)