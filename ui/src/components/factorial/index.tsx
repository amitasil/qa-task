import React, { useState, useEffect } from 'react';
import { Layout } from '../shared/layout';
import ReactDOM, { render } from 'react-dom';

export const Factorial = () => {
    let myNumber = '';
    
    function handleChange(e: { target: { value: any; }; }) {
        myNumber = e.target.value;
        return myNumber;
    }

    function getFactorial(number: string | undefined) {
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': '*',
            'Host': 'localhost:3001'
        }

        const apiUrl = 'api/math/factorial/' + number;

        fetch(apiUrl, { headers })
            .then((response) => response.json())
            .then(function (data) {
                console.log('This is the response: ' + data.result); const element = (<div>{data.result}</div>);
                ReactDOM.render(element, document.getElementById('myResult'))});
    }

    return (
        <Layout pageId="factorial">
            <p>
                TODO: Calculate n!
            </p>
            <p>
                User inputs a number (n) in a textbox, then clicks a button to calculate n! via a corresponding API call.
                Then the correct result is displayed on the page.
            </p>
            <input id="factorial_input" name="factorial_input" type="text" onChange={handleChange} /><br />
            <button id="getFactorial" onClick={() => getFactorial(myNumber)}>Get Factorial</button>
            <div id="myResult"></div>
        </Layout>
    );
};
