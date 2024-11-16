const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

// Endpoint 1: Calculate the Returns of the Stocks added

function calculateReturn(boughtAt, marketPrice, quantity) {
  return (marketPrice - boughtAt) * quantity;
}

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);
  let result = calculateReturn(boughtAt, marketPrice, quantity);

  res.send(result.toString());
});

// Endpoint 2: Calculate the Total Returns

function totalReturns(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}
app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let result = totalReturns(stock1, stock2, stock3, stock4);

  res.send(result.toString());
});

// Endpoint 3: Calculate the Return Percentage

function returnPercentage(returns, boughtAt) {
  return (returns / boughtAt) * 100;
}
app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  let result = returnPercentage(returns, boughtAt);

  res.send(result.toString());
});

// Endpoint 4: Calculate the Total Return Percentage

function totalPercentage(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let result = totalPercentage(stock1, stock2, stock3, stock4);

  res.send(result.toString());
});

// Endpoint 5: Identify the Status of Stocks based on their Return Value

function percentageStatus(returnPercentage) {
  let result;
  if (returnPercentage > 0) {
    result = 'profit';
  } else {
    result = 'loss';
  }
  return result;
}

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  let result = percentageStatus(returnPercentage);
  res.send(result);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
