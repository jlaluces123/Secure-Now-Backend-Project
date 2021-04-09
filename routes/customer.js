const router = require('express').Router();

// API URL: /customer/...

router.get('/', (req, res) => {
    res.send('Sanity Check - Customer: OK');
});

router.get('/customer/:customerId', (req, res) => {
    let customer = req.params.customerId;

    // Helper Function to get customer
});

router.post('/customer/create', (req, res) => {
    // Helper Function to create customer
});

router.put('/customer/:customerId', (req, res) => {
    let customer = req.params.customerId;

    // Helper Function to edit customer
});

router.delete('/customer/:customerId', (req, res) => {
    let customer = req.params.customerId;

    // Helper Function to delete customer
});

module.exports = router;
