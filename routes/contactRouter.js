
const { getContact,postContact, putContact, deleteContact } = require('../controllers/contactController');

const express = require('express');
const router = express.Router();
router.use( (req,res,next)=>{console.log("Middleware function inside router "),next()} )

router.route('/').get(getContact);

router.route('/').post(postContact);

router.route('/:id').put(putContact);

router.route('/:id').delete(deleteContact);

module.exports = router;
