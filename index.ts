const { Router } = require('express');
const express = require('express');
const router = Router();

const app = express();

app.use(router)
router.get('/test', (req, res) => {
    console.log('test');
    res.status(200).send('Olá mundo!');
});

app.listen(5000, () => {
    console.log(`Server running on PORT ${process.env.PORT || 5000}`);
});


// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({
    // Override service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: 'test-apm',

    // Use if APM Server requires a token
    // secretToken: '',

    // Set custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'http://localhost:8200'
})