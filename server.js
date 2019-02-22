const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Require scrape function
const scrape = require('./scrape');

const app = express();
const router = express.Router();

var PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', router);

router.get('/news', (req, res) => {
    scrape()
    .then(data => {
        res.json({
            success: true,
            data: data
        })
    })
    .catch(err => {
        res.json({
            success: false
        })
    })
})

app.listen(PORT, () => {
    console.log('App is listening on port ' + PORT);
})