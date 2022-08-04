const express = require('express');
const router = express.Router();


router.get('/test', async (req,res) => {
    try {
        
        res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

        res.json({
            status:200,
            message: 'Got data successfully',
        });
    } catch (error){
        console.error(error);
        return res.status(500).send('Server error');

    
    }   
})
module.exports = router;