const mongoose = require('mongoose');
const config = require('../config/dev.config');

mongoose.connect(config.mongodb.connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
.then(res => console.log)
.catch(err => console.error)
