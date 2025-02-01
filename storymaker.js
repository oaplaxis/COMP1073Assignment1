// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1NextButton = document.getElementById("noun1-next");
const noun1PrevButton = document.getElementById("noun1-prev");
const verbNextButton = document.getElementById("verb-next");
const verbPrevButton = document.getElementById("verb-prev");
const adjectiveNextButton = document.getElementById("adj-next");
const adjectivePrevButton = document.getElementById("adj-prev");
const noun2NextButton = document.getElementById("noun2-next");
const noun2PrevButton = document.getElementById("noun2-prev");
const settingNextButton = document.getElementById("setting-next");
const settingPrevButton = document.getElementById("setting-prev");

// Constants for p tag to display query selectors
const chosenNoun1 = document.getElementById("chosenNoun1");
const chosenVerb = document.getElementById("chosenVerb");
const chosenAdjective = document.getElementById("chosenAdjective");
const chosenNoun2 = document.getElementById("chosenNoun2");
const chosenSetting = document.getElementById("chosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback"); 
const randomButton = document.getElementById("random"); 
const resetButton = document.getElementById("reset");
const studentIdButton = document.getElementById("showStudentID"); 
const studentInfoParagraph = document.getElementById("studentInfo"); 

// Variables for pre-defined arrays
const noun1 = [
    "The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat",
    "The robot", "The dragon", "The alien", "The witch", "The pirate", "The superhero"
];

const verbs = [
    "sat on", "ate", "danced with", "saw", "doesn't like", "kissed", "kicked",
    "met", "chased", "fought", "rescued", "helped", "screamed at", "hunted",
    "discovered", "found", "flew", "captured"
];

const adjectives = [
    "a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat",
    "a smelly", "a weird", "a green", "a fast", "a shiny", "a fluffy",
    "a gigantic", "a sticky", "a squishy", "a sparkly", "an invisible"
];

const noun2 = [
    "goat", "monkey", "fish", "cow", "frog", "bug", "worm",
    "sandwich", "book", "sword", "boulder", "treasure", "potion",
    "pillow", "car", "ghost", "dragon", "crystal", "chair", "crown", "bear"
];

const settings = [
    "on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes",
    "at the park", "at the school", "at my house", "on the moon", "at a haunted mansion", 
    "on the beach", "at a secret laboratory", "in a mystical forest", "on a space station", 
    "near a volcano", "on a desert island", "on a snowy mountain", "in a spooky graveyard", 
    "in a futuristic city"
];

// Variables for count to grab array elements
let firstNoun = 0;
let verb = 0;
let adjective = 0;
let secondNoun = 0;
let setting = 0;

// Variable for student ID
const studentId = "200495638"
const studentName = "Linsie MacDonald"

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
document.getElementById("chosenNoun1").textContent = noun1[firstNoun];
}
function nextNoun1() {
    firstNoun = (firstNoun + 1) % noun1.length; // Cycle forward
    noun1_on_click();
}
function prevNoun1() {
    firstNoun = (firstNoun - 1 + noun1.length) % noun1.length; // Cycle backward
    noun1_on_click();
}

function verb_on_click() {
document.getElementById("chosenVerb").textContent = verbs[verb];
}
function nextVerb() {
    verb = (verb + 1) % verbs.length; // Cycle forward
    verb_on_click();
}
function prevVerb() {
    verb = (verb - 1 + verbs.length) % verbs.length; // Cycle backward
    verb_on_click();
}


function adjective_on_click() {
document.getElementById("chosenAdjective").textContent = adjectives[adjective];
}
function nextAdj() {
    adjective = (adjective + 1) % adjectives.length; // Cycle forward
    adjective_on_click();
}
function prevAdj() {
    adjective = (adjective - 1 + adjectives.length) % adjectives.length; // Cycle backward
    adjective_on_click();
}

function noun2_on_click() {
document.getElementById("chosenNoun2").textContent = noun2[secondNoun];  
}
function nextNoun2() {
    secondNoun = (secondNoun + 1) % noun2.length; // Cycle forward
    noun2_on_click();
}
function prevNoun2() {
    secondNoun = (secondNoun - 1 + noun2.length) % noun2.length; // Cycle backward
    noun2_on_click();
}

function setting_on_click() {
document.getElementById("chosenSetting").textContent = settings[setting];
}
function nextSetting() {
    setting = (setting + 1) % settings.length; // Cycle forward
    setting_on_click();
}
function prevSetting() {
    setting = (setting - 1 + settings.length) % settings.length; // Cycle backward
    setting_on_click();
}

function playback_on_click() {
    // Get the selected words from the page
    const noun1 = document.getElementById("chosenNoun1").textContent;
    const verb = document.getElementById("chosenVerb").textContent;
    const adjective = document.getElementById("chosenAdjective").textContent;
    const noun2 = document.getElementById("chosenNoun2").textContent;
    const setting = document.getElementById("chosenSetting").textContent;

    // Check if all parts are filled
    if (!noun1 || !verb || !adjective || !noun2 || !setting) {
        alert("Please choose words for all parts of the story!");
        return;
    }

    // Construct the story
    const story = `${noun1} ${verb} ${adjective} ${noun2} ${setting}.`;

    // Display the full story
    document.getElementById("story").textContent = story;
}

function random_on_click() {
    // Use the existing arrays you have defined
    const randomNoun1 = noun1[Math.floor(Math.random() * noun1.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun2 = noun2[Math.floor(Math.random() * noun2.length)];
    const randomSetting = settings[Math.floor(Math.random() * settings.length)];

    // Construct the random story
    const story = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}.`;

    document.getElementById("story").textContent = story;
}

function reset_on_click() {
    // Clear the displayed story
    document.getElementById("story").textContent = "";

    // Reset all selected words in the paragraphs
    document.getElementById("chosenNoun1").textContent = "";
    document.getElementById("chosenVerb").textContent = "";
    document.getElementById("chosenAdjective").textContent = "";
    document.getElementById("chosenNoun2").textContent = "";
    document.getElementById("chosenSetting").textContent = "";
}

function display_student_info() {
    studentInfoParagraph.textContent = `Created by: ${studentName}, Student Number ${studentId}`;
}

/* Event Listeners
-------------------------------------------------- */
noun1NextButton.addEventListener("click", nextNoun1);
noun1PrevButton.addEventListener("click", prevNoun1);;

verbNextButton.addEventListener("click", nextVerb);
verbPrevButton.addEventListener("click", prevVerb);

adjectiveNextButton.addEventListener("click", nextAdj);
adjectivePrevButton.addEventListener("click", prevAdj);

noun2NextButton.addEventListener("click", nextNoun2);
noun2PrevButton.addEventListener("click", prevNoun2);

settingNextButton.addEventListener("click", nextSetting);
settingPrevButton.addEventListener("click", prevSetting);


randomButton.addEventListener("click", random_on_click);
playbackButton.addEventListener("click", playback_on_click);
resetButton.addEventListener("click", reset_on_click);

studentIdButton.addEventListener("click", display_student_info)
