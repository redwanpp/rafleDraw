require('dotenv').config();
// const express = require('express');
const app = require('./app/app');

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})