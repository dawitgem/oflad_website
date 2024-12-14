const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config()

const Mailjet = require('node-mailjet');

const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY,
    process.env.MJ_SECRET_KEY
);




const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());


app.post('/send-email', async (req, res) => {
    const { name, from, subject, html } = req.body;
    try {
        console.log(from)
        const msg = await mailjet.post('send', { version: 'v3.1' }).request({
            Messages: [
                {
                    From: {
                        Email: "info@oflad.org",
                        Name: name
                    },
                    To: [
                        {
                            Email: "info@oflad.org",
                            Name: "oflad"
                        }
                    ],
                    Subject: subject,
                    HTMLPart: html,


                }
            ],
        })
        res.status(200).json("Email send successfully")

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
