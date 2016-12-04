const express = require('express');
const router = express.Router();
const path = require('path');
const moment = require('moment');

router.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '/index.html')));

module.exports = router;
