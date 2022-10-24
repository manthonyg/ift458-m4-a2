const {Loan} = require('../models/loanModel');

const getAllLoans = async () => {
    try {
    const loans = await Loan.find();
    return loans
    } catch(error) {
      throw new Error('There was a problem getting loans')
    }
  }

const getLoan = async id => {
    try {
    const loan = await Loan.findById(id);
    return loan
    } catch(error) {
      console.log({error})
      throw new Error('There was a problem getting loan');
    }
  }

const deleteLoan = async id => {
    try {
      const deletedLoan = await Loan.deleteOne({_id: id});
      return deletedLoan
    }
    catch(error) {
      throw new Error('There was a problem deleting the loan');
    }
  }

const updateLoan = async (id, loan) => {
    try {
      const loanToUpdate = await Loan.findById(id);

      if (!loanToUpdate) {
        throw new Error('No record found to update')
      }

      loanToUpdate.set({...loan});

      const updatedLoan = await loanToUpdate.save({...loan});
      return updatedLoan
    }
    catch(error) {
      console.log({error})
      throw new Error('There was a problem updating the loan');
    }
  }

const createLoan = async loan => {
    try {
      const newLoan = await Loan.create({...loan});
      return newLoan
    }
    catch(error) {
      console.log({error})
     throw new Error('There was a problem creating the loan')
  }
}

module.exports = {
  getLoan,
  getAllLoans,
  deleteLoan,
  updateLoan,
  createLoan
}