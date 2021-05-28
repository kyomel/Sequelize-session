const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(router);
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server berjalan di localhost://${port}`);
})