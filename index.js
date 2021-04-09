const express = require('express');
const customerRouter = require('./routes/customer');

const app = express();

app.use('/customer/', customerRouter);

app.get('/', (req, res) => res.send('Sanity Check: OK'));
app.listen(3388, (err) => {
    if (err) return err;
    console.log('Listening On Port: ', 3388);
});
