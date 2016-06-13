'use strict';

const router = require('express').Router();
const ctrl = require('../controllers/index');

router.post('/', ctrl.volume);

module.exports = router;
