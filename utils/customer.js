const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'fake_user',
    host: 'fake_host',
    database: 'customers',
    password: 'password',
    port: 5432,
});

const getUserById = (req, res) => {
    const id = parseInt(req.params.customerId);

    pool.query(
        'SELECT * FROM customers WHERE id = $1',
        [id],
        (err, results) => {
            if (err) throw err;
            return res.status(200).json(results.rows);
        }
    );
};

const createCustomer = (req, res) => {
    const { name } = req.body;

    pool.query(
        'INSERT INTO customers (name) VALUES ($1)',
        [name],
        (err, results) => {
            if (err) throw err;
            return res.status(201).json({ userCreated: results });
        }
    );
};

const updateCustomer = (req, res) => {
    const id = parseInt(req.params.customerId);
    const { name } = req.body;

    pool.query(
        'UPDATE customers SET name = $1 WHERE id = $2',
        [name, id],
        (err, results) => {
            if (err) throw err;
            res.status(200).json({ userUpdated: results });
        }
    );
};

const deleteCustomer = (req, res) => {
    const id = parseInt(req.params.customerId);
    const { name } = req.body;

    pool.query('DELETE FROM customers where id = $1', [id], (err, results) => {
        if (err) throw err;
        res.status(200).json({ userDeleted: results });
    });
};

module.exports = {
    getUserById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
};
