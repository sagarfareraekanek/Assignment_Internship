var quotes = ['I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.','Be yourself; everyone else is already taken.', 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.','So many books, so little time','A room without books is like a body without a soul.','Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.'];
var author = ['Marilyn Monroe','Oscar Wilde','Albert Einstein', 'Frank Zappa' , 'Marcus Tullius Cicero', 'Bernard M. Baruch'];
var randomNumber;

function randomNumberGenrator(){
    randomNumber = Math.floor(Math.random()* (quotes.length)) ;
    return randomNumber;
}
function genrateQuote() {
    randomNumber = randomNumberGenrator() ;
    document.getElementById('printQuote').innerHTML = " " + quotes[randomNumber];
    authorName();
}
function authorName() {
    document.getElementById('printAuthor').innerHTML = author[randomNumber];
}