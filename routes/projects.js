/** Projects route
 * 
 */

const express = require('express')
const router = express.Router()


router.get('/',(req,res) => {
    res.render('/projects')
})

router.get('/new',(req,res) => {
    res.render('/new', {article: new Article()})
})

router.get('/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    if (article == null) res.redirect('/')
    res.render('/show', {article: article})
})

router.post('/', async (req, res) => {
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown,
    })
    try{
        article = await article.save() //Get ID of saved article
        res.redirect(`/${article.id}`)
    }
    catch (e) {
        console.log(e)
        res.render('/new', {article: article})
    }
})
module.exports = router