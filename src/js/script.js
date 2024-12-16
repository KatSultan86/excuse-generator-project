
// This line of code will make sure the page is fully loaded
window.onload = function () {
    // Write the logic in this function

    // 1. Get the excuse element
    const excuse = document.getElementById('excuse');
    console.log(excuse);


    // 2. Generate a random excuse
    const whoToBlame = ["The dog",
        "My bad luck", "The internet",
        "My dad",
        "It wasn't me who",
        "Mercury caused",
        "The cat",
        "The weather",
        "My phone",
        "Blame the coffee that"];

    const whatTheyDid = ["broke everything",
        "stole",
        "ate",
        "spilled",
        "missed",
        "ruined",
        "lied about",
        "ignored",
        "caused",
        "started"];

    const whatDoYouWantToAvoid = ["my pen",
        "everything",
        "coffee",
        "the deadline",
        "it",
        "the instructions",
        "chaos",
        "the mess"];

    const whenDidItHappen = ["a week ago",
        "last year", "yesterday",
        "100 yeasr ago",
        "today", "100 b.c.",
        "last Friday",
        "the day before",
        "on Thursday",
        "on a weekend"];

    const indexPart1 = Math.floor(Math.random() * whoToBlame.length);
    const indexPart2 = Math.floor(Math.random() * whatTheyDid.length);
    const indexPart3 = Math.floor(Math.random() * whatDoYouWantToAvoid.length);
    const indexPart4 = Math.floor(Math.random() * whenDidItHappen.length);

    const quoteText = `${whoToBlame[indexPart1]} ${whatTheyDid[indexPart2]} ${whatDoYouWantToAvoid[indexPart3]}  ${whenDidItHappen[indexPart4]}`;


    // 3. Inseart the excuse into the excuse element
    excuse.innerHTML = quoteText;






}