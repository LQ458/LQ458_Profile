const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const PORT=process.env.PORT || 3001;    

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log(err);
});