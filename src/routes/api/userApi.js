const express = require('express');
const router = express.Router();

const apiUser = require('../../contrrollers/api/apiUser');

router.get('/user', apiUser.list);
router.get('/user/:id', apiUser.detail);

module.exports = router;