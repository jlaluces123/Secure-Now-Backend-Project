const express = require('express');
const bodyParser = require('body-parser');
const customerRouter = require('./routes/customer');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/customer/', customerRouter);

app.get('/', (req, res) => res.send('Sanity Check: OK'));

app.listen(3388, (err) => {
    if (err) return err;
    console.log('Listening On Port: ', 3388);
});
