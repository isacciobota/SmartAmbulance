const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hospital: {
        type: String,
        required: true
    },
    pictures: {
        type: [String]
    }
});

module.exports = mongoose.model('Patients', PatientSchema);