(function(){

  var quotes = [
    "Reality continues to ruin my life.",
    "Sometimes when I'm talking, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Probably so we can think twice.",
    "You know, Hobbes, some days even my lucky rocket ship underpants don't help.",
    "I think night time is dark so you can imagine your fears with less distraction.",
    "I'm killing time while I wait for life to shower me with meaning and happiness.",
    "I'm not dumb. I just have a command of thoroughly useless information.",
    "Life's a lot more fun when you aren't responsible for your actions.",
    "A day can really slip by when you're deliberately avoiding what you're supposed to do."
    ];

  var images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
  ];

  function chooseOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  window.onload = function() {
    var randomImage = chooseOne(images);
    var randomQuote = chooseOne(quotes);

    document.getElementById('background-image').style.backgroundImage = 'url("img/'+ randomImage +'")';
    document.getElementById('quote').innerHTML = randomQuote;
    document.getElementById('author').innerHTML = "— " +  'Calvin & Hobbes' + " —";

    document.getElementById('quote').className = 'move';
    document.getElementById('author').className = 'move';
  };

})();