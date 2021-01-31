const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.send('In Articles')
})

router.get('/education',(req,res) => {
    res.send('In Articles')
})

router.get('/work',(req,res) => {
    res.send('In Articles')
})

router.get('/interests',(req,res) => {
    res.send('In Articles')
})

router.get('/other',(req,res) => {
    res.send('In Articles')
})

module.exports = router