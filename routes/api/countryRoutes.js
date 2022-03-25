const express = require('express')
const router = express.Router()
const fetch = (...args)=> import('node-fetch').then(({default: fetch}) => fetch(...args))

// All Countries
// localhost:3000/countries
router.get('/', (req, res)=> {
    const URL = 'https://api.sampleapis.com/countries/countries'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/countries', {
                title: 'All Countries',
                name: 'Countries List',
                data
            })
        })
})

module.exports = router