const express = require('express');
const app = express();
const port = 80;

app.get('*', (req, res) => {
    const realSite = 'https://sorinmarta.com';
    let originalUrl = req.originalUrl;

    if(req.originalUrl === '/m'){
        res.redirect(realSite + '/meetings');
    }

    if(req.originalUrl === '/c'){
        res.redirect(realSite + '/call');
        return;
    }

    res.redirect(realSite + req.originalUrl);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});