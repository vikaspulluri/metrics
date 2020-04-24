const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
  id: {type: String},
  dcAppData: {type: Object}
});

module.exports = mongoose.model('Activity', activitySchema);
