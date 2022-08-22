const express = require('express');
const router = express.Router();
const functions = require("firebase-functions");
const getFixtures = require('./fixtures');
const getResults = require('./results');


router.get('/timestamp', (request,response) => {
    response.send(`Date ${Date.now()}`);
} )

router.get('/fixtures', async (req,res) => {
    try {
        const fixtures = await getFixtures();
        // functions.logger.log("fix");
        // functions.logger.log(fixtures);
        res.json({'fixtures':fixtures});
    } catch (error){
        console.error(error);
        return res.status(500).send('Server error');

    
    }   
})

router.get('/results', async (req,res) => {
    try {
        const results = await getResults();
        res.json({'results':results});
    } catch (error){
        console.error(error);
        return res.status(500).send('Server error getting results');

    
    }   
})

module.exports = router;