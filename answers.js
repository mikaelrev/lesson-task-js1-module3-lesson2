// Question 1

function greet(name = "John") {
    return `Hello ${name}!`;
}



// Question 2

function divCreator(className, innerValue) {
    return `<div class="${className}">${innerValue}</div>`;
}



// Question 3

async function getFact() {
    try {
        const response = await fetch("https://cat-fact.herokuapp.com/facts");
        const results = await response.json();
        console.log(results[8].text); 
    }
    catch(error) {
        console.log("An error occured");
    }
    finally {
        console.log("This will run whether there is an error or not");
    }
}

getFact();