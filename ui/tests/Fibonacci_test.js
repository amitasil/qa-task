Feature('Fibonacci');

Scenario('Test fibonacci of number 6', (I) => {
    I.amOnPage('/')
    I.see('Fibonacci')
    I.click('Fibonacci')
    I.fillField('#fibonacci_input', 6)
    I.click('Get Fibonacci')
    I.see(8)
});

Scenario('Test fibonacci of number 10', (I) => {
    I.amOnPage('/')
    I.see('Fibonacci')
    I.click('Fibonacci')
    I.fillField('#fibonacci_input', 10)
    I.click('Get Fibonacci')
    I.see(55)
});