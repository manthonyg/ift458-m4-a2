const express = require('express');
const loanController = require('../controllers/loanController');
const router = express.Router();

// 4.1 Add a new loan
// 4.2 Get All Loans
// 4.3 Get a Specific Loan By ID
// 4.4 Change an Existing Loan
// 4.5 Delete a Loan

router
  .route('/')
  .post(loanController.createLoan)
  .get(loanController.getAllLoans);

router
  .route('/:id')
  .get(loanController.getLoan)
  .patch(loanController.updateLoan)
  .delete(loanController.deleteLoan);

module.exports = router;
