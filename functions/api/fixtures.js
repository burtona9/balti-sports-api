const express = require('express');
const axios = require('axios')
const cheerio = require('cheerio');
const router = express.Router();

router.get('/timestamp', (request,response) => {
    response.send(`Date ${Date.now()}`);
} )

router.get('/fixtures',  (req,res) => {
    try {
        const fixtures = {'testy':'testy'};
        res.json({fixtures});
    } catch (error){
        console.error(error);
        return res.status(500).send('Server error');

    
    }   
})
module.exports = router;