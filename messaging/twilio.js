module.exports = class TwilioMessage {
    msg;
    to;
    constructor(message) {
        this.msg = message;
    }

    sendto(to) {
        this.to = to;
        return this;
    }

    send(callback) {
        const accountSid = process.env.TWILIO_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);

        client.messages
            .create({
                body: this.msg,
                messagingServiceSid: 'MG116dd05b012e6a2a2b6b4dc93a445303',
                to: '+' + this.to
            })
            .then(callback)
            .done();
    }
}