document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
      { quote: "Nine hundred years of time and space and I've never met someone who wasn't important.", author: "The Doctor" },
      { quote: "Everything's got to end sometime. Otherwise, nothing would ever get started.", author: "The Doctor" },
      {quote: "We all change, when you think about it. We're all different people through our lives. And that's okay, that's good, you gotta keep moving, so long as you remember all the people that you used to be.", author: "The Doctor"},
      {quote: "The name I choose is the Doctor. The name you choose it's like, it's like a promise you make.", author: "The Doctor"},

      {quote:"How can I tell when I’m being prompted by the Spirit?…Quit worrying about it. Quit fussing with it. Quit analyzing it. You be a good boy, you be a good girl, you honor your covenants, you keep the commandments; and I promise you in the name of the Lord Jesus Christ that as you press forward with faith in Christ, your footsteps will be guided. As you open your mouth, it will be filled, and you will be where you need to be, and most of the time, you will not even have any idea how you got there.", author:"Elder David A. Bednar"},

      {quote: "My philosophy is that worrying means you suffer twice.", author: "Newt Scamander"},

      {quote: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light", author: "Albus Dumbledore"},

      {quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison"},

      {quote: "...your future hasn't been written yet. No one's has. Your future is whatever you make it. So make it a good one...", author: "Doc Brown"},
    //   {quote: "", author: ""},
    //   {quote: "", author: ""},
      // Add more quotes and authors here
    ];
  
    const quoteContainer = document.getElementById("quote-container");
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    
    let shuffledQuotes = shuffleArray(quotes); // Shuffle the quotes array
    let currentQuoteIndex = 0;
    
   // Initial quote generation with typing animation
   generateRandomQuote();
    
   function generateRandomQuote() {
       const randomQuote = shuffledQuotes[currentQuoteIndex];
     
       changeAuthor(randomQuote.author, () => {
         typeOutQuote(randomQuote.quote, quoteElement, () => {
           setTimeout(generateNextQuote, 15000); // Wait for 15 seconds before generating the next quote
         });
       });
   }
   
   function generateNextQuote() {
     currentQuoteIndex = (currentQuoteIndex + 1) % shuffledQuotes.length; // Move to the next quote, loop if necessary
     generateRandomQuote();
   }
   
   function changeAuthor(newAuthor, callback) {
     authorElement.textContent = "- " + newAuthor;
     setTimeout(callback, 300); // Wait a bit before proceeding to typing out the quote
   }
   
   function typeOutQuote(text, element, callback) {
       element.textContent = ""; // Clear the element
       let index = 0;
     
       function type() {
         if (index === 0) {
           element.textContent += '"';
         }
         if (index < text.length) {
           element.textContent += text[index];
           index++;
           setTimeout(type, 50); // Adjust typing speed here (in milliseconds)
         } else if (index === text.length) {
           element.textContent += '"';
           // Cursor animation
           setTimeout(() => {
             element.innerHTML += '<span class="cursor">|</span>';
             callback();
           }, 300); // Delay after typing is complete before showing cursor
         }
       }
     
       type();
   }

   function shuffleArray(array) {
       const shuffledArray = array.slice();
       for (let i = shuffledArray.length - 1; i > 0; i--) {
           const j = Math.floor(Math.random() * (i + 1));
           [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
       }
       return shuffledArray;
   }
});