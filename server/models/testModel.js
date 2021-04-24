const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
input: {type: String, required: true}
});

const TestDB = mongoose.model('TestDB', TestSchema);

module.exports = TestDB;