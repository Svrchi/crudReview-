const express = require('express');
const router = express.Router();

const testController = require('../controllers/testController');

router.post('/testDB', testController.createInput, (req, res) => {
    res.status(200).json({ form: res.locals.form });
});

module.exports = router;