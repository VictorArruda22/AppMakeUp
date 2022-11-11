const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const SoSController = {
    
    async sendMsg(req, res) {
        try {
                      
            await client.messages
                .create({body: 'Teste DEV', from: '+15017122661', to: '+5511941394862'})
                .then(message => console.log(message.sid));

            return res.status(200).json(message.sid);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
};

module.exports = SoSController;