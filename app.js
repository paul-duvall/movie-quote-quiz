const questionsDatabase = [
  {
    question: 'Life is like a box of chocolates, you never know what youre going to get',
    option1: 'Forest Gump',
    option2: 'The Remains of the day',
    option3: 'Back to the future',
    option4: 'Top Gun',
    correctAnswer: 'option1'
  },
  {
    question: 'Great Scott!',
    option1: 'Ace Ventura',
    option2: 'Doc Hollywood',
    option3: 'Independence Day',
    option4: 'Back to the future',
    correctAnswer: 'option4'
  },
  {
    question: 'I\'m not going to waste my time arguing with a man who\'s lining up to be a hot lunch.',
    option1: 'Men In Black',
    option2: 'Jaws',
    option3: 'Pulp Fiction',
    option4: 'Top Gun',
    correctAnswer: 'option2'
  },
  {
    question: 'Why do we feel it\'s necessary to yak about bullshit in order to be comfortable?',
    option1: 'Fight Club',
    option2: 'Jaws',
    option3: 'Pulp Fiction',
    option4: 'One Flew Over the Cuckoo\'s Nest',
    correctAnswer: 'option3'
  },
  {
    question: 'I\'m a goddamn marvel of modern science.',
    option1: 'Fight Club',
    option2: 'The Silence of the Lambs',
    option3: 'Saving Private Ryan',
    option4: 'One Flew Over the Cuckoo\'s Nest',
    correctAnswer: 'option4'
  },
  {
    question: 'It\'s only after we\'ve lost everything that we\'re free to do anything.',
    option1: 'Fight Club',
    option2: 'The Silence of the Lambs',
    option3: '12 Angry Men',
    option4: 'Seven',
    correctAnswer: 'option1'
  },
  {
    question: 'What\'s in the box?',
    option1: 'Whiplash',
    option2: 'The Silence of the Lambs',
    option3: 'Gladiator',
    option4: 'Seven',
    correctAnswer: 'option4'
  },  
    {
    question: 'A census taker once tried to test me. I ate his liver with some fava beans and a nice chianti.',
    option1: 'Whiplash',
    option2: 'The Silence of the Lambs',
    option3: 'It\'s a wonderful life',
    option4: 'Leon: The Professional',
    correctAnswer: 'option2'
  },  
    {
    question: 'No man is a failure who has friends.',
    option1: 'Apocalypse Now',
    option2: 'The Pianist',
    option3: 'It\'s a wonderful life',
    option4: 'Leon: The Professional',
    correctAnswer: 'option3'
  },
  {
    question: 'Is life always this hard, or is it just when you\'re a kid?',
    option1: 'Apocalypse Now',
    option2: 'American Beauty',
    option3: 'The Shining',
    option4: 'Leon: The Professional',
    correctAnswer: 'option4'
  },
  {
    question: 'I\'d give my goddamned soul for just a glass of beer.',
    option1: 'L.A. Confidential',
    option2: 'American Beauty',
    option3: 'The Shining',
    option4: 'Reservoir Dogs',
    correctAnswer: 'option3'
  },
    {
    question: 'You shoot me in a dream, you better wake up and apologize.',
    option1: 'L.A. Confidential',
    option2: 'The Sting',
    option3: 'Grand Budapest Hotel',
    option4: 'Reservoir Dogs',
    correctAnswer: 'option4'
  },
  {
    question: 'You see, there are still faint glimmers of civilization left in this barbaric slaughterhouse that was once known as humanity.',
    option1: 'Oldboy',
    option2: 'The Sting',
    option3: 'Grand Budapest Hotel',
    option4: 'Avengers: Age Of Ultron',
    correctAnswer: 'option3'
  },
  {
    question: 'I love the smell of napalm in the morning.',
    option1: 'Inception',
    option2: 'Apocalypse Now',
    option3: 'Grand Budapest Hotel',
    option4: '2001: A Space Odyssey',
    correctAnswer: 'option2'
  },
  {
    question: 'Show me the money!',
    option1: 'Jerry Maguire',
    option2: 'The Sting',
    option3: 'Grand Budapest Hotel',
    option4: 'Midnight Cowboy',
    correctAnswer: 'option1'
  },
  {
    question: 'If you build it, he will come.',
    option1: 'Terminator',
    option2: 'Field of Dreams',
    option3: 'The Graduate',
    option4: 'Jaws',
    correctAnswer: 'option2'
  },
  {
    question: 'Gentlemen, you can\'t fight in here! This is the War Room!',
    option1: 'Scarface',
    option2: 'Planet of the Apes',
    option3: 'Dr. Strangelove',
    option4: 'Poltergeist',
    correctAnswer: 'option3'
  },
  {
    question: 'You can’t handle the truth!',
    option1: 'Jerry Maguire',
    option2: 'Toy Story',
    option3: 'Dr. No',
    option4: 'A Few Good Men',
    correctAnswer: 'option4'
  },
  {
    question: 'To infinity and beyond!',
    option1: 'Toy Story',
    option2: 'Die Hard',
    option3: 'ET',
    option4: 'The Sixth Sense',
    correctAnswer: 'option1'
  },
  {
    question: 'Carpe Diem. Seize the day, boys',
    option1: 'Apollo 13',
    option2: 'The Shining',
    option3: 'The Graduate',
    option4: 'Dead Poets Society',
    correctAnswer: 'option4'
  },
  {
    question: 'You don\'t understand! I could\'ve had class. I could\'ve been a contender. I could\'ve been somebody, instead of a bum, which is what I am.',
    option1: 'Network',
    option2: 'On the Waterfront',
    option3: 'The Usual Suspects',
    option4: 'The Godfather',
    correctAnswer: 'option2'
  },
  {
    question: 'I\'m as mad as hell, and I\'m not going to take this anymore!',
    option1: 'The Usual Suspects',
    option2: 'The Sting',
    option3: 'Network',
    option4: 'It\'s a Wonderful Life',
    correctAnswer: 'option3'
  },
  {
    question: 'The greatest trick the devil ever pulled was convincing the world he didn\'t exist.',
    option1: 'The Usual Suspects',
    option2: 'Sunset Boulevard',
    option3: 'Goldfinger',
    option4: 'Finding Nemo',
    correctAnswer: 'option1'
  },
  {
    question: 'Keep your friends close, but your enemies closer.',
    option1: 'Cool Hand Luke',
    option2: 'Godfather Part 2',
    option3: 'Who Framed Roger Rabbit',
    option4: 'The Silence of the Lambs',
    correctAnswer: 'option2'
  },
  {
    question: 'Just keep swimming.',
    option1: 'Who Framed Roger Rabbit',
    option2: 'Sunset Boulevard',
    option3: 'Goldfinger',
    option4: 'Finding Nemo',
    correctAnswer: 'option4'
  },
  {
    question: 'I\'m not bad. I\'m just drawn that way.',
    option1: 'The Usual Suspects',
    option2: 'The Big Lebowski',
    option3: 'Who Framed Roger Rabbit',
    option4: 'The Wizard of Oz',
    correctAnswer: 'option3'
  },
  {
    question: 'I\'m also just a girl, standing in front of a boy, asking him to love her.',
    option1: 'A Streetcar Named Desire',
    option2: 'Sunset Boulevard',
    option3: 'When Harry Met Sally',
    option4: 'Notting Hill',
    correctAnswer: 'option4'
  },
  {
    question: 'I mean, funny like I\'m a clown? I amuse you?',
    option1: 'The Usual Suspects',
    option2: 'Goodfellas',
    option3: 'Argo',
    option4: 'Good Morning, Vietnam',
    correctAnswer: 'option2'
  },
  {
    question: 'Wax on, wax off',
    option1: '12 Years a Slave',
    option2: 'The Jazz Singer',
    option3: 'Pulp Fiction',
    option4: 'The Karate Kid',
    correctAnswer: 'option4'
  },
  {
    question: 'Nobody’s perfect.',
    option1: 'Some Like It Hot',
    option2: 'Sunset Boulevard',
    option3: 'The Devil Wears Prada',
    option4: 'King Kong',
    correctAnswer: 'option1'
  },
  {
    question: 'These go to eleven.',
    option1: 'Chinatown',
    option2: 'This Is Spinal Tap',
    option3: 'As Good As It Gets',
    option4: 'Clueless',
    correctAnswer: 'option2'
  },
  {
    question: 'As if!',
    option1: 'King Kong',
    option2: 'There Will Be Blood',
    option3: 'Star Wars: The Force Awakens',
    option4: 'Clueless',
    correctAnswer: 'option4'
  },
  {
    question: 'I drink your milkshake!',
    option1: 'Planet of the Apes',
    option2: 'There Will Be Blood',
    option3: 'Gladiator',
    option4: 'As Good As It Gets',
    correctAnswer: 'option2'
  },
  {
    question: 'If you let my daughter go now, that\'ll be the end of it. I will not look for you, I will not pursue you. But if you don\'t, I will look for you, I will find you, and I will kill you.',
    option1: 'The Usual Suspects',
    option2: 'Planet of the Apes',
    option3: 'Taken',
    option4: 'Jerry Maguire',
    correctAnswer: 'option3'
  },
  {
    question: 'When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.',
    option1: 'There Will Be Blood',
    option2: 'When Harry Met Sally',
    option3: 'Braveheart',
    option4: 'Four Weddings and a funeral',
    correctAnswer: 'option2'
  },
  {
    question: 'Some people can’t believe in themselves until someone else believes in them first.',
    option1: 'The Usual Suspects',
    option2: 'Harry Potter and the Chamber of Secrets',
    option3: 'Fight Club',
    option4: 'Good Will Hunting',
    correctAnswer: 'option4'
  },
  {
    question: 'It is not our abilities that show what we truly are… it is our choices. ',
    option1: 'The Lion King',
    option2: 'Sunset Boulevard',
    option3: 'Finding Nemo',
    option4: 'Harry Potter and the Chamber of Secrets',
    correctAnswer: 'option4'
  },
  {
    question: 'Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it.',
    option1: 'Ferris Bueller\'s Day Off',
    option2: 'American Beauty',
    option3: 'Captain America: The Winter Soldier',
    option4: 'Finding Nemo',
    correctAnswer: 'option1'
  },
  {
    question: 'I believe whatever doesn’t kill you, simply makes you…stranger.',
    option1: 'American Beauty',
    option2: 'The Dark Knight',
    option3: 'Goldfinger',
    option4: 'The Departed',
    correctAnswer: 'option2'
  },
  {
    question: 'All those moments will be lost in time… like tears in rain.',
    option1: 'The Usual Suspects',
    option2: 'Ghandi',
    option3: 'Blade Runner',
    option4: 'Dead Poets Society',
    correctAnswer: 'option3'
  },
  {
    question: 'Get busy living, or get busy dying.',
    option1: 'The Hunger Games',
    option2: 'The Master',
    option3: 'Psycho',
    option4: 'Shawshank Redemption',
    correctAnswer: 'option4'
  },
  {
    question: 'All we have to decide is what to do with the time that is given to us.',
    option1: 'Lord of the Rings: Fellowship of the Ring',
    option2: 'Gladiator',
    option3: 'Rocky',
    option4: 'Castaway',
    correctAnswer: 'option1'
  },
  {
    question: 'I am serious. And don’t call me Shirley.',
    option1: 'Lord of the Rings: Fellowship of the Ring',
    option2: 'Airplane',
    option3: 'Blazing Saddles',
    option4: 'Castaway',
    correctAnswer: 'option2'
  },
    {
    question: 'I’m about to do to you what Limp Bizkit did to music in the late ’90s.',
    option1: 'Lord of the Rings: Fellowship of the Ring',
    option2: 'Kingsman: The Secret Service',
    option3: 'Blazing Saddles',
    option4: 'Deadpool',
    correctAnswer: 'option4'
  },
  {
    question: 'I’m in a glass case of emotion!',
    option1: 'The Big Lebowski',
    option2: 'Kingsman: The Secret Service',
    option3: 'Anchorman',
    option4: 'When Harry Met Sally',
    correctAnswer: 'option3'
  },
  {
    question: 'That rug really tied the room together, did it not?',
    option1: 'The Big Lebowski',
    option2: 'Mean Girls',
    option3: 'Anchorman',
    option4: 'Lost in Translation',
    correctAnswer: 'option1'
  },
];

// Generate a fresh array of questions that will track all questions not yet used, ensuring no question appears more than once
let questions = [...questionsDatabase];
let score = 0;
let lives = 3;

$(document).ready(function(){
  let randomNumber = generateRandomNumber();
    
  // Question and information section not visible on load
  $('#questionContainer').hide();
  $('#infoContainer').hide();
  
  // Generates random number used to select quote at random
  function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * questions.length);
    return randomNumber;
  }
  
  // Populates DOM with new quote
  function generateQuestion(){
    if(questions.length === 0) {
      // If there are no quotes remaining, triggers end of game
      handleEndOfGame();
    } else {
      randomNumber = generateRandomNumber();
      $('#question').empty().append(questions[randomNumber].question);
      $('#option1').empty().append(questions[randomNumber].option1);
      $('#option2').empty().append(questions[randomNumber].option2);
      $('#option3').empty().append(questions[randomNumber].option3);
      $('#option4').empty().append(questions[randomNumber].option4);
      $('#questionContainer').fadeIn(1000);  
    }
  }
  
  // Handles user's answer
  $('#questionContainer button').click(event, function(){
      let selectedAnswer = event.target.id;
      if(selectedAnswer === questions[randomNumber].correctAnswer){
        // Runs if answer is correct
        score = score + 1;
        $('#currentScore span').empty().append(score);
        $('#message')
          .empty()
          .fadeIn(100)
          .append('Correct!');
      } else {
        // Runs if answer is incorrect
        $('#message')
          .empty()
          .fadeIn(100)
          .append('Nope! Lose a life!');
        lives = lives - 1;
      }
    
    if(lives === 0){
      handleEndOfGame();
    }
     $('#lives span').empty().append(lives);
      let removed = questions.splice(randomNumber, 1);
      generateQuestion();
    });
  
  // Begin quiz when button clicked
  $('.start').click(function(){
    $('#mainContent').hide();
    generateQuestion();
    $('#currentScore span').append(score);
    $('#lives span').append(lives);
    $('#infoContainer').fadeIn(1000);
  });
  
  function handleEndOfGame(){
    // Remove the score and the question container
    $('#currentScore').hide();
    $('#lives').hide();
    $('#questionContainer').detach(); 
    // Generate end of game message
    $('#message').empty().append('Game over man, game over!<br>');
    if(questions.length === 0){
      $('#message').append('You answers all the questions!<br>');  
    } else if(lives === 0) {
      $('#message').append('You ran out of lives!<br>');  
    }
    $('#message').append('Your final score is ' + score + '.<br>');
    
    // Comment on score
    if(score <= 5){
      $('#message').append('Have you seen a movie before? Maybe try a quiz on popular music...');
    } else if(score > 5 && score <= 10) {
      $('#message').append('Not bad, not bad! You didn\'t entirely embarrass yourself!');
    } else if (score > 10) {
      $('#message').append('You nailed it! A true movie quote master!');
    }
    
    
    // Reset quiz
    $('#reset').click(function(){
      console.log('restart button clicked');
      let score = 0;
      let lives = 3;
      $('#currentScore span').empty();
      $('#lives span').empty();
      $('#mainContent').show();
      $('#infoContainer').hide();
    });
  }
});
