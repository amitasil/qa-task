Feature('Factorial');

Scenario('Test factorial of number 5', (I) => {
    I.amOnPage('/')
    I.see('Factorial')
    I.click('Factorial')
    I.fillField('#factorial_input', 5)
    I.click('Get Factorial')
    I.see(120)
});

Scenario('Test factorial of number 10', (I) => {
    I.amOnPage('/')
    I.see('Factorial')
    I.click('Factorial')
    I.fillField('#factorial_input', 10)
    I.click('Get Factorial')
    I.see(3628800)
});