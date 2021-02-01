const express = require('express')
const mongoose = require('mongoose')
const http = require('http')

// Routes
const articleRouter = require('./routes/articles')
const aboutRouter = require('./routes/about')
const homeRouter = require('./routes/home')
const projectsRouter = require('./routes/projects')

const { use } = require('./routes/articles')

// Models
const Article = require('./models/article')

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
    res.render('home')
})

app.get('/about', async (req, res) => {
    res.render('./about/skills')
})

app.get('/articles', async (req, res) => {
    const articles = await Article.find().sort({createdAt: 'desc'})
    res.render('./articles/index', {articles: articles})
})

app.get('/projects', async (req, res) => {
    res.render('./projects/index')
})

app.use('/articles', articleRouter)
app.use('/projects', projectsRouter)
app.use('/', homeRouter)

app.listen(5000)