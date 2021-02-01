/** Projects route
 * 
 */

const express = require('express')
const router = express.Router()


router.get('/projects',(req,res) => {
    res.render('projects')
})

router.get('/air',(req,res) => {
    res.render('projects/air')
})

router.get('/agile',(req,res) => {
    res.render('projects/agile')
})

router.get('/this',(req,res) => {
    res.render('projects/this')
})

router.get('/garvan',(req,res) => {
    res.render('projects/garvan')
})

router.get('/groupmates',(req,res) => {
    res.render('projects/groupmates')
})

module.exports = router