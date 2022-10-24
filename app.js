const express = require('express');
const morgan = require('morgan');

const loanRouter = require('./routes/loanRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/loans', loanRouter);

// global error handler
app.use((err, req, res, next) => {
  if (err) {
    return res.status(500).json({error: "Internal Server Error"})
  }
})
module.exports = app;
