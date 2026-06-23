const quotes = [

    "Picture abhi baaki hai mere dost 🎬",

    "Pushpa Raj... Main jhukega nahi 😎",

    "Daag achhe hain 🧼",

    "Ctrl + C and Ctrl + V are my cardio 💻",

    "Mood: Coffee + Good Music + Low Queue ☕",

    "Risk hai toh ishq hai ❤️",

    "Have you tried turning it off and on again? 🤖",

    "Thanda matlab Coca-Cola 🥤",

    "Escalation is a lifestyle 📞",

    "Honey never spoils 🍯",
    
    "Hamara Bajaj 🚲",

    "Washing Powder Nirma 🧼",

    "Samay Raina | Oye Hoye Kya Scene Hai | India's Got Latent Season 2 🎤",

    "Ocotopuses have three hearts 🐙",

    "Legendary Shift: Queue is empty 🏆",

   "Customer accepted resolution without follow-up 🎉",

   "Current Vibe: Suroor - Neha Kakkar & Bilal Saeed 🎵"

];
const ticker = document.getElementById("ticker");

let previousIndex = -1;

function showNextQuote(){

   let randomIndex;

   do {
    randomIndex = Math.floor(Math.random() * quotes.length);
   } while(randomIndex === previousIndex);

   previousIndex = randomIndex;

   ticker.textContent = '✨' + quotes[randomIndex];

}

showNextQuote();

ticker.addEventListener("animationiteration", () => {

    showNextQuote();

});