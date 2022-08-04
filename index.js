const express = require('express');
const app = express();
// const fixtures = require('./functions/api/fixtures');

app.use(express.json({extended:false}));
// app.use('/api/fixtures',fixtures);
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({done:'yes'});
});

app.listen( PORT, ()=> console.log(`server is running on ${PORT}`));
