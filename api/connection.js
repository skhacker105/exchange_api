const express = require('express');
const router = express.Router();
const skops_mongo = require('../db/mongodb');
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const helper = require("../helper");
const mongo = require('../db/mongodb');

router.get('/', (req, res) => {
    
});

module.exports = router;