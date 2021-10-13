const express = require('express')
var axios = require('axios');
const app = express()
const port = 3003
const clientId = '<client_id>'
const clientSecret = '<client_secret>'
// Sandbox URL: "https://app-sandbox.columnapi.com/v1/users"
// Production URL: "https://app.columnapi.com/v1/users"
const columnUrl = "https://sandbox.columnapi.com/v1/users"

app.get('/token', (req, res) => {
    let apiKey = `${clientId}:${clientSecret}`;
    let auth = Buffer.from(apiKey).toString('base64')

    // An example user with mock data
    let user = {
        user_identifier: new Date().getTime(),
        first_name: "test",
        last_name: "test",
        date_of_birth: "1800-01-01",
        social_security_number: "AAA-GG-SSSS",
        email: "test@test.com",
        should_switch_direct_deposit: false,
        address: {
            street_1: "test",
            city: "test",
            state: "test",
            zip_code: "test"
        }
    }

    const body = JSON.stringify(user)

    const headers = {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
    };

    axios.post(columnUrl, body, {headers})
        .then((body) => {
            res.send(body.data["user_token"])
        })
        .catch((error) => {
            res.send("Bad API Keys or Wrong URL")
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})