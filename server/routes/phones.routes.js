const router = require("express").Router()
const phones = require('./../data/phones.json')

router.get('/', (req, res, next) => {
    res.json(phones)
})

module.exports = router