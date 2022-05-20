const mongoose = require('mongoose');

const DonorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    bloodtype: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
})

const Donor = mongoose.model('Donor', DonorSchema);

module.exports = Donor;