const { default: TestRunner } = require("jest-runner");
const getPrices = require('./main')

test('returns the number plus 5', ()=>{
    expect(getPrices(true)).toBe(6);
})