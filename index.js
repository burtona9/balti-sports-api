const express = require('express');
const app = express();
const fixtures = require('./public/api/fixtures');

app.use(express.json({extended:false}));
app.use('/api/fixtures',fixtures);
const PORT = process.env.PORT || 8080;

app.listen( PORT, ()=> console.log(`server is running on ${PORT}`));
