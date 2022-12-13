const express = require('express');
const router = express.Router();
// const skops_mongo = require('../db/mongodb');
// const jwt = require("jsonwebtoken");
// const auth = require("../middleware/auth");
const TwilioMessage = require("../messaging/twilio");
const helper = require("../helper");
const mongo = require('../db/mongodb');

router.post('/getOTP', (req, res) => {
    const phone = req.query.phone;
    const otp = helper.generateOTP();
    const m = otp + " is your OTP to log into your Exhange account. Do not share this OTP with anyone.";
    const msg = new TwilioMessage(m);
    msg.sendto(phone).send(message => {
        res.json({
            otp: otp,
            message: m
        });
    });
});

module.exports = router;