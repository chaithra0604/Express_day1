
const { getContact,postContact, putContact, deleteContact } = require('../controllers/contactController');

const express = require('express');
const router = express.Router();

router.route('/').get(getContact);

router.route('/').post(postContact);

router.route('/:id').put(putContact);

router.route('/:id').delete(deleteContact);

module.exports = router;
