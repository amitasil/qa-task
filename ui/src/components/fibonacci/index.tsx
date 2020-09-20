import React from 'react';
import { Layout } from '../shared/layout';
import ReactDOM, { render } from 'react-dom';

export const Fibonacci = () => {
    let myNumber = '';

    function handleChange(e: { target: { value: any; }; }) {
        myNumber = e.target.value;
        return myNumber;
    }

    function getFibonacci(number: string | undefined) {
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': '*',
            'Host': 'localhost:3001'
        }

        const apiUrl = 'api/math/fibonacci/' + number;

        fetch(apiUrl, { headers })
            .then((response) => response.json())
            .then(function (data) {
                console.log('This is the response: ' + data.result); const element = (<div>{data.result}</div>);
                ReactDOM.render(element, document.getElementById('myResult'))
            });
    }

    return (
        <Layout pageId="fibonacci">
            <p>
                TODO: Calculate n-th Fibonacci number - Fib(n)
            </p>
            <p>
                User inputs a number (n) in a textbox, then clicks a button to calculate Fib(n) via a corresponding API call.
                Then the correct result is displayed on the page.
            </p>
            <input id="fibonacci_input" name="fibonacci_input" type="text" onChange={handleChange} /><br />
            <button id="getFibonacci" onClick={() => getFibonacci(myNumber)}>Get Fibonacci</button>
            <div id="myResult"></div>
        </Layout>
    );
};