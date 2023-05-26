const Calculator = artifacts.require("Calculator");

contract('Calculator', async function(accounts) {
  it('adds two numbers', async function() {
    const contract = await Calculator.deployed();
    const result = await contract.add(1, 2, {from: accounts[0]});
    assert.equal(result, 3, 'Not equal to 3');
  })
  it('subtracts two numbers', async function() {
    const contract = await Calculator.deployed();
    const result = await contract.subtract(2, 1, {from: accounts[0]});
    assert.equal(result, 1, 'Not equal to 1');
  })
  it('multiplies two numbers', async function() {
    const contract = await Calculator.deployed();
    const result = await contract.multiply(1, 2, {from: accounts[0]});
    assert.equal(result, 2, 'Not equal to 2');
  })
  it('divides two numbers', async function() {
    const contract = await Calculator.deployed();
    const result = await contract.divide(5, 2, {from: accounts[0]});
    assert.equal(result, 2,5, 'Not equal to 2,5');
  })
})