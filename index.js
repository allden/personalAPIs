const express = require('express');
const router = require('./router');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(router);

app.listen(PORT, () => {
    console.log('Listening on ' + PORT);
});