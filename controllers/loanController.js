const fs = require('fs');
const loanManager = require('../dataBaseManager/loanDbManager');


exports.getAllLoans = (req, res) => {
  loanManager.getAllLoans().then(loans => {
    console.log({loans})
   res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: loans.length,
    data: {
      loans
    }
  }); 
  }).catch(error => {
    res.status(400).json({error})
  })
};

exports.getLoan = (req, res) => {
  const id = req.params.id;
  loanManager.getLoan(id).then(loan => {
    res.status(200).json({
      status: 'success',
      data: {
        loan
      }
    });
  }).catch(error => {
    res.status(400).json({error})
  })
};

exports.createLoan = (req, res) => {
  const newLoan = Object.assign(req.body);
  loanManager.createLoan(newLoan).then(result => {
    res.status(200).json({
      status: 'success',
  }).catch(error => {
    res.status(400).json({error})
    })
  })
};

exports.updateLoan = (req, res) => {
  const id = req.params.id
  const updatedLoan = req.body;

  loanManager.updateLoan(id, updatedLoan).then(loan => {
    res.status(200).json({
      status: 'success',
      data: {
        loan: loan
      }
    })
  }).catch(error => {
    console.log({error})
    res.status(400).json({error})
  })
};

exports.deleteLoan = (req, res) => {
  const id = req.params.id;

  loanManager.deleteLoan(id).then(result => {
    res.status(200).json({result})
  }).catch(error => {
    res.status(400).json({error})
  })
};
