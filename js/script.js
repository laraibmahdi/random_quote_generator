/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
{quote: "Intellectual growth should commence at birth and cease only at death" , source: "Dr.Albert Einstien" , citation : "Book" , year :  ""

},
{ quote :"In the end its not the years in your life that count , its the life in those years" , source : "Abraham Lincoln" , citation : "" , year : 1860

},
{ quote :"If you judge people you have no time to love them" , source : "Mother teresa" , citation : "speech" , year : ""

},
{ quote :"I like criticism it makes you strong" , source : "Lebron James", citation : "After a match" , year : 2004

},
{ quote :"Your love makes me stronger , your hate makes me unstoppable  " , source : "Cristiano Ronaldo" , citation : "After a match" , year : ""

}

];


/***
 * `getRandomQuote` function
***/
let randomQuote;   // I declared variables 
let citation;
let year;
let randomSource;

function getRandomQuote() {
let randomNum = Math.floor(Math.random()*5);   // Created a variable that outputs a random Number
 citation = `${quotes[randomNum].citation}`;   // Used the random number to get data from the array
 year = `${quotes[randomNum].year}`; 
 randomQuote = `${quotes[randomNum].quote}`;
 randomSource = `${quotes[randomNum].source}`;
 
 
 



}





/***
 * `printQuote` function
***/
function printQuote() {
getRandomQuote();
let finalDisplay;   // created a variable for displaying final data on the webpage
// a variable with no year property
let noOptionalProperty =  `

<p class="quote">${randomQuote}.</p>
        <p class="source">${randomSource}



`;
let noYear = `       

<p class="quote">${randomQuote}.</p>
        <p class="source">${randomSource}<span class="citation">${citation}</span>



`;
// a variable with no citation property
let noCitaion = `
<p class="quote">${randomQuote}.</p>
        <p class="source">${randomSource}</span><span class="year">${year}</span></p

`;
// a variable that includes all properties
let html = `

<p class="quote">${randomQuote}.</p>
        <p class="source">${randomSource}<span class="citation">${citation}</span><span class="year">${year}</span></p>



`;

// if statement to show data if citation and year is not available
if (citation === "" && year === "") {
  
  finalDisplay =noOptionalProperty;
// else if to show if citaion is not available
}  else if (citation === "") {
  finalDisplay = noCitaion;
  // else if statement show if year is not available
}else if (year === "" ) {
  finalDisplay = noYear;
 // else statement to show if both of the properties are available
}else {
  finalDisplay = html;
}
 




document.getElementById("quote-box").innerHTML = finalDisplay;


}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);