import React from 'react';
import { Layout } from '../shared/layout';
import ReactDOM, { render } from 'react-dom';

export const RandomSquare = () => {
    let myNumber = '';

    function handleChange(e: { target: { value: any; }; }) {
        myNumber = e.target.value;
        return myNumber;
    }

    function getRandomSquare(number: string | undefined) {
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': '*',
            'Host': 'localhost:3001'
        }

        const apiUrl = 'api/math/random-square/' + number;

        fetch(apiUrl, { headers })
            .then((response) => response.json())
            .then(function (data) {
                console.log('This is the response: ' + data.result); const element = (<div>{data.result}</div>);
                ReactDOM.render(element, document.getElementById('myResult'))
            });
    }

    return (
        <Layout pageId="randomSquare">
            <p>
                TODO: Calculate random square (i.e. rand(0, n)^2), where random number is between 0 and n.
            </p>
            <p>
                User inputs a number (n) in a textbox, then clicks a button to calculate RandomSquare(n) via a corresponding API call.
                Then the correct result is displayed on the page.
            </p>
            <input id="randSquare_input" name="randSquare_input" type="text" onChange={handleChange} /><br />
            <button id="getRandSquare" onClick={() => getRandomSquare(myNumber)}>Get Random Square</button>
            <div id="myResult"></div>
        </Layout>
    );
};