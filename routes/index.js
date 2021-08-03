const express = require('express');
const router = express.Router();

router.use('/', require('./cidades'));

module.exports = router;