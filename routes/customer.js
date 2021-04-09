const router = require('express').Router();
const {
    getUserById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
} = require('../utils/customer');

// API URL: /customer/...

router.get('/', (req, res) => {
    res.send('Sanity Check - Customer: OK');
});

router.get('/:customerId', (req, res) => {
    console.log('Getting Customer', req.params.customerId);
    getUserById(req, res);
});

router.post('/create', (req, res) => {
    console.log('Creating Customer');
    createCustomer(req, res);
});

router.put('/:customerId', (req, res) => {
    console.log('Updating Customer');
    updateCustomer(req, res);
});

router.delete('/:customerId', (req, res) => {
    console.log('Deleting Customer');
    deleteCustomer(req, res);
});

module.exports = router;
