async function getFact() {
    try {
        const response = await fetch("https://cat-fact.herokuapp.com/facts");
        const results = await response.json();
        console.log(facts[8].text);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("This will run whether there is an error not");
    }
}

getFact();
