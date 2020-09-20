const { AssertionError } = require("assert");
const { assert } = require("console");

Feature('RandomSquare');

Scenario('Test random square of a number between 0 to \'n\'', async(I) => {
    I.amOnPage('/')
    I.see('Random Square')
    I.click('Random Square')
    I.fillField('#randSquare_input', 6)
    I.click('Get Random Square')

    var uiResult = await I.grabTextFrom('#myResult > div')

    var square = Math.pow(6, 2)

    assert((parseInt(uiResult) < square), 'Incorrect calculation!', Error('Incorrect calculation!'))

    assert((parseInt((uiResult) % 1) == 0), 'Incorrect square root!', Error('Incorrect square root!'))
});