const quotes = {
  1: "There is a fine line between believing something and understanding it.",
  2: "Sometimes the person who's always there for everyone else needs someone to be there for them.",
  3: "Love is not about possession. Love is about appreciation.",
  4: "You don't find love, it finds you. It's got a little bit to do with destiny, fate, and what's written in the stars.",
  5: "One day, someone will walk into your life and make you realize why it never worked out with anyone else.",
  6: "Hardness and strength are death's companions.",
  7: "Grief is the terrible reminder of the depth of our love.",
  8: "It's better to be underestimated than being envied.",
  9: " To truely be loved,is to still be loved when it's inconvenient to love you.",
  10: "Winner define themselves what they made happen, loser define themselves by what happened to them.",
  11: "Echo always followed by silence, and what comes after that? WHATEVER YOU CHOOSE TO SHOUT NEXT!",
  12: " The hardest task is to do NOTHING at all!",
  13: "Love is something you offer to others without expectations!",
  14: "The tragedy of life is you will always be loved more than you will ever know.",
  15: "What goes around, comes around.",
  16: "I don't need to see your face to see your soul.",
  17: "Everyone out there trapped in their own perception.(Perception VS perspective)",
  18: " You can't love her, because you can't give her what you don't have.",
  19: "If familiarity mattered, then water wouldn't boil fish.",
  20: "Hope is the quiet rebellion against the darkness of the world.",
  21: "Those who are already cursed don't get cursed again.",
  22: " Beggars are not choosers.",
  23: "Selfless selfishness ",
  24: " No one can be like anyone!",
  25: "A apology without change in behaviour is  betrayal of trust.",
  26: "Talent hits a target that no one else can hit, genius Hits a target that no one else can see.",
  27: " You don't have to be religious, to have faith.",
  28: "Death doesn't have a schedule.",
  29: "A man's beauty is just a women's imagination.",
  30: "In this world even one uses everyone to climb uphill",
  31: "If i fall then let me, the person i will become, will catch me!",
  32: "This world is a contradiction.",
  33: "A heart that's broken is a heart that's been loved.",
  34: "If you can't control something, then you don't truely understand it. ",
  35: "She couldn't see when it was light, so he made it dark.",
  36: " Understanding is an art, and not everyone is an artist.",
  37: "May the fireflies follow you where the butterflies do not.",
  38: "Lion hunts for hunger, human hunts for greed.",
  39: "Things never happens same way twice .",
  40: "Love without action is just a feeling.",
  41: "Criticism in fact a form of admiration.",
  42: "Eyes are the proverbial windows to the soul.",
  43: "If you really think about it in this world  everyone is a Clown, so be a better clown!",
  44: "Love is not a feeling, it's a practice.",
  45: "Love is a feeling, but as a feeling it is not enough!",
  46: "How can I love you, when i haven't Learn how to love myself!",
  47: " One of our greatest freedom is how we react to things.",
  48: "There is always more than what meets the eye.",
  49: "Who looks outside dreams, who looks inside awakes.",
  50: "When you forgive, you love and when you love , god's light shine on you.",
  51: "Broke souls don't speak, they must be heard.",
  52: " Life is too short to hold grudges.",
  53: "If universe brings you to it, universe will bring you through it.",
  54: "Beautiful people never know who to trust.",
  55: "If your not engaging with anything external, you are engaging with yourself.",
  56: "Emotional with emotional, rational with rational.",
  57: " Life begins at the end of the comfort zone.",
  58: "You can lead a horse to water, but you can't make it drink.",
  59: "The things that you are attracted when you are broken, the things you will feel disgust when you heal.",
  60: " Consciousness is a terrible curse!",
  61: "Even in the darkest places, love can still shine through.",
  62: "You could be the tasties orange in the garden, yet there are some people who don't like Orange.",
  63: "Suicide is a permanent solution of temporary problems.",
  64: "Life's greatest lessons are learned through pain.",
  65: " Punctuality is the virue of lonlyness.",
  66: "It's controversial, but men have responsibility beyond themselves .",
  67: "The hardest choice requires the strangest will.",
  68: " Things never happens twice in life.",
  69: "The ME is losing form MYSELF.",
  70: "You are crazy until you are successful, then you are a genius.",
  71: "Everyone is a slave to something.",
  72: "Things glow coz they want to be found.",
  73: "The pain you feel today is the strength you will know tomorrow.",
  74: "Some people are too uneducated to understand what they don't know!",
  75: "Heros use pain villains are used by it.",
  76: "It's only the death alone that completes a human being.",
  77: "Achieving the goals is just the beginning not the final destination.",
  78: "A selfish, egotistical person can never make true friends.",
  79: " A friend is like a another self.",
  80: " A life without friendship is like a world without sunshine.",
  81: "Friendship is closer than kinship.",
  82: " A hundred friends are more precious than a hundred piece of gold.",
  83: "The challenge is what life is all about.",
  84: "Joy is a decision, a really brave one about how you are gonna respond to your life!!!",
  85: "You will never find happiness if you don't change yourself from within.",
  86: "Believing that, what is only an illusion is actually real.",
  87: " However much you may try, you can never run away from yourself.",
  88: " Love is not two people gazing at each other, but two people looking ahead together in the same direction. ",
  89: "Like a brilliant new sun rising at dawn, adolescence makes one's entry into a new stage of life.",
  90: "Sun always shines brightly on the other side of the clouds.",
  91: "",
  92: "",
  93: "",
  94: "",
  95: "",
  96: "",
  97: "",
  98: "",
  99: "",
  100: "",

};

let currentQuote = 1;

document.addEventListener('DOMContentLoaded', function () {
  // Initialize
  updateQuoteDisplay();
  updateActiveNav();

  // Add click handlers to quote links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      currentQuote = parseInt(this.getAttribute('data-quote'));
      updateQuoteDisplay();
      updateActiveNav();
      scrollToActiveLink();
    });
  });

  // Add click handlers to navigation buttons
  document.getElementById('prev-btn').addEventListener('click', prevQuote);
  document.getElementById('next-btn').addEventListener('click', nextQuote);

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      prevQuote();
    } else if (e.key === 'ArrowRight') {
      nextQuote();
    }
  });
});

function updateQuoteDisplay() {
  document.getElementById('quote-title').innerText = `Quotes ${currentQuote}`;
  document.getElementById('quote-text').innerText = quotes[currentQuote];
}

function updateActiveNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (parseInt(link.getAttribute('data-quote')) === currentQuote) {
      link.classList.add('active');
    }
  });
}

function scrollToActiveLink() {
  const activeLink = document.querySelector('.nav-link.active');
  if (activeLink) {
    activeLink.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }
}

function prevQuote() {
  if (currentQuote > 1) {
    currentQuote--;
    updateQuoteDisplay();
    updateActiveNav();
    scrollToActiveLink();
  }
}

function nextQuote() {
  if (currentQuote < Object.keys(quotes).length) {
    currentQuote++;
    updateQuoteDisplay();
    updateActiveNav();
    scrollToActiveLink();
  }
}