/** Articles route
 *  Credits to: Web Dev Simplified
 */

const express = require('express')
const router = express.Router()
module.exports = router

router.get('/',(req,res) => {
    res.send('In Articles')
})

router.get('/new',(req,res) => {
    res.render('articles/new')
})

router.get('/:id', (req, res) => {

})

router.post('/', async(req,res) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown,
    })
    try{
        article = await article.save() //Get ID of saved article
        res.redirect(`/articles/${article.id}`)
    }
    catch (e) {
        res.render('articles/new', {article: article})
    }
    res.render('articles/new')
})