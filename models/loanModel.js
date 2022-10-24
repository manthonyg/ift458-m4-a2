const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    customerName: {
        type: String,
        required: [true, 'A loan name must have a customer name'],
    },
    phoneNumber:{
        type: String
    },
    address: {
        type: String,
        required: [true, 'A loan must have a address'],
    },
    loanAmount: {
        type: Number,
        required: [true, 'A loan must have an amount'],
    },
    interest: {
        type: Number,
        required: [true, 'A loan must have interest']
    },
    loanTermYears: {
        type: Number,
        required: [true, 'A loan must have a loanTermYears'],
    },
    loanType: {
        type: String,
        required: [true, 'A loan must have a loanType'],
    },
    payment: {
        type: Number,
        required: [true, 'A loan must have a payment'],
    },
    description: {
      type: String,
      required: [true, 'A loan must have a description'],
    }
});
const Loan = mongoose.model('loans', loanSchema);

module.exports = {Loan};