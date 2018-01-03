
const appItems = {
  questions: [
  {
    // #1 
    question: 'Why is the sky blue?',
    answers: [
          'The color is a reflection from the earth’s oceans',
          'The human eye is more sensitive to the color blue and sees it the easiest',
          'The molecules in the atmosphere scatter the blue light from the sun more than they scatter the other hues in the light spectrum',
          'Because blue is the best'
    ],
    correctAnswerString: 'The molecules in the atmosphere scatter the blue light from the sun more than they scatter the other hues in the light spectrum',
    correctAnswerValue: 2,
    extraInfoString: 'Blue light has shorter wavelengths and, therefore, more momentum than most of the other colors.  When sunlight moves through the atmosphere, the particles and molecules absorb and scatter the light.  The small size of the oxygen and nitrogen molecules interacting with the blue light ping ponging around them results in a blue sky.',
    picture: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/23722440_10214538283641134_1836920108772421482_n.jpg?oh=ca2072e4da10311d37c83fe030b9580c&oe=5AA922CC',
    altPicture: 'A bright blue sky'},
  {
    // #2
    question: 'From space, what color is the sun?',
    answers: [
          'Red',
          'White',
          'Blue',
          'Yellow'
    ],
    correctAnswerString: 'White',
    correctAnswerValue: 1,
    extraInfoString: 'Sunlight is made up of all of the wavelengths of light.  White light is the presence of all the colors of light, so the light emitted from the sun is white.  From earth, the sun can appear to be different colors ranging from yellow to orange to red because of the particles and molecules in the atmosphere absorbing, bending, and bouncing the rays of light.',
    picture: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/23844628_10214538285281175_2645175684613788332_n.jpg?oh=963970fa767ea541e01322ae770434ff&oe=5A8B8840',
    altPicture: 'The sun photographed from space'},
  {
    // #3
    question: 'What kind of daytime sky has a higher color temperature?',
    answers: [
          'A cloudless, bright, sunny day',
          'A partly cloudy day',
          'A mostly cloudy day',
          'A completely overcast day'
    ],
    correctAnswerString: 'A completely overcast day',
    correctAnswerValue: 3,
    extraInfoString: 'An overcast sky results in light with a higher color temperature because the clouds filter out the longer, slower light waves.  The smaller, stronger waves are able to pass thru the clouds.  Because of their short wavelength, they create more energy which results in more heat (higher color temperature).',
    picture: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/23755237_10214538283601133_5439697310822935552_n.jpg?oh=2f7fc3f8dfed982fb2c464d1fc526a7c&oe=5A9460DE',
    altPicture: 'A completely overcast sky'},
  {
    // #4
    question: 'What is the science of light called?',
    answers: [
          'Optics',
          'Acoustics',
          'Thermodynamics',
          'Astronomy'
    ],
    correctAnswerString: 'Optics',
    correctAnswerValue: 0,
    extraInfoString: 'Optics is the branch of physics which involves the behavior and properties of light including its interactions with matter.',
    picture: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/23795207_10214538283681135_1640409873921639255_n.jpg?oh=63e5f14a627179f4edd77fc5c0149816&oe=5AA1493A',
    altPicture: 'Separated colors of the visible spectrum'},
  {
    // #5
    question: 'How does most of the light in the electromagnetic spectrum appear to the human eye?',
    answers: [
          'Red',
          'Yellow',
          'Blue',
          'Invisible'
    ],
    correctAnswerString: 'Invisible',
    correctAnswerValue: 3,
    extraInfoString: 'The electromagnetic spectrum describes all the wavelengths of light.  That small sliver in the center of the spectrum is known as visible light.  The vast majority of light exists outside of that sliver and is invisible to the human eye.',
    picture: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/23844875_10214538284281150_5626923052182457423_n.jpg?oh=2e2b39cc7da263cb600ed17ffab65408&oe=5A912463',
    altPicture: 'The electromagnetic spectrum with the visible spectrum expanded'},
  {
    // #6
    question: 'How does the wavelength of a red light wave compare with the wavelength of a violet light wave?',
    answers: [
          'The wavelength of red light is a little shorter',
          'The wavelength of red light is roughly half the size',
          'The wavelength of red light is roughly twice the size',
          'The wavelength of red light is a little longer'
    ],
    correctAnswerString: 'The wavelength of red light is roughly twice the size',
    correctAnswerValue: 2,
    extraInfoString: 'Red light wavelengths range from 620 to 750 nanometers and, at their longest, are nearly twice as long as violet light wavelengths (380 to 450 nm) at their shortest.',
    picture: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/24129526_10214604354692869_7842859563260807923_n.jpg?oh=c647b547433d34a44340dfbafc8f1823&oe=5A9481D6',
    altPicture: 'The visible spectrum with the color wavelengths listed'},
  {
    // #7
    question: 'Light travels in a:',
    answers: [
          'straight line',
          'curved line',
          'zig zag pattern like lighting',
          'wibbily, wobbily, timey, wimey way'
    ],
    correctAnswerString: 'straight line',
    correctAnswerValue: 0,
    extraInfoString: 'Light, when unimpeded, travels along linear paths.  When an object is in between a light source and a surface, a shadow will appear.  That shadow will resemble the shape of the impeding object which demonstrates that light does indeed travel in straight lines.',
    picture: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/23659491_10214538284321151_456943791512209366_n.jpg?oh=82801586679ceb56aac2184629b596ba&oe=5AAC45D5',
    altPicture: 'An example of linear light paths'},
  {
    // #8
    question: 'What section of the electromagnetic spectrum do bees see?',
    answers: [
          'The visible spectrum same as humans',
          'A combination of the visible spectrum and ultraviolet',
          'Infrared',
          'Ultraviolet'
    ],
    correctAnswerString: 'A combination of the visible spectrum and ultraviolet',
    correctAnswerValue: 1,
    extraInfoString: 'Both humans and bees are trichromatic which means we have three photoreceptors within our eyes.  Humans base their color combinations on red, green, and blue, while bees base their colors on ultraviolet light, blue, and green.  As a matter of fact, bees cannot see the color red at all.  So, humans are able see more colors, but bees have a much broader range of color vision and see color faster than humans.',
    picture: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/24312921_10214604353172831_6277802609222541474_n.jpg?oh=654c622b0971d1177b3e0ae79c557af3&oe=5AD0F5ED',
    altPicture: 'A composite picture showing a flower and the difference in the way humans see it verses bees'},
  {
    //#9
    question: 'If the sun stopped producing light, how long would it take us, here on earth, to notice?',
    answers: [
          'Two weeks',
          'Four days',
          'Six hours',
          'Eight minutes'
    ],
    correctAnswerString: 'Eight minutes',
    correctAnswerValue: 3,
    extraInfoString: 'The earth is 150,000,000 kilometers from the sun and the speed of light is 299,792 km/sec.  What that means is that it takes 8 minutes for light to travel from the sun to the earth. By the way, anyone living on the ice ball, Pluto, wouldn’t know the sun went out until 7 hours after it happened.',
    picture: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/23794801_10214538284761162_3915362031138720949_n.jpg?oh=edc15216ee2d0877b177b1d3a35aeb8b&oe=5AA73007',
    altPicture: 'A pictorial example of the speed of light'},
  {
    // #10
    question: 'How do LEDs generate light?',
    answers: [
          'By heating up a filament',
          'By ionizing mercury vapor in a glass tube',
          'By moving electrons in compound semiconductors',
          'By moving electric current through a tube containing gas'
    ],
    correctAnswerString: 'By moving electrons in compound semiconductors',
    correctAnswer: 2,
    extraInfoString: 'LEDs are very efficient because they only emit light from the visible spectrum which results in the production of very little heat.',
    picture: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/23754947_10214538284721161_3289887037335294085_n.jpg?oh=48656587b8dbdc8fa13cbc42f9f9a235&oe=5A9BCF3A',
    altPicture: 'A diagram of a LED'},
  ]};

let currentQuestion = null;
let correctAnswers = null;

function generateStartElement() {
  console.log("`generateStartElement` ran");
  return `
    <section role='section'>
      <div class="startPage js-start-page">
        <h1 class="start-one">How enLIGHTened are you?</h1>
        <h2 class="start-two">An illuminating quiz about light</h2>
        <button type="submit" class="start-btn js-start-btn">READY?</button>
      </div>
    </section>`;
}

function renderStartPage() {
  console.log("`renderStartPage` ran");
  let startPageString = generateStartElement();
  $(".container").html(startPageString);
}

function getAnswers() {
  let radioAnswers = " ";
  let Answers = " ";
  appItems.questions[currentQuestion].answers.forEach(function(choice) {
    Answers = `<label class="choice">
                <input type="radio" name="userAnswer" class="answers js-answers" value="${choice}"> ${choice}</label>
                <br/><br/>`;
    radioAnswers += Answers;
  });
  console.log("`getAnswers` ran");
  return radioAnswers;
}

function generateQuestionElement(item) {
  console.log('`generateQuestionElement` ran');
      let answers = getAnswers();
  return `
    <section role='section'>
      <div class="questionPage js-question-page">
        <div class="question-area">
        <p class="question-asked js-question-asked">${item.question}</p>
        </div>

        <div class="answers-area">
            <form id="answer-form">
            <fieldset name="answers">
            
            <legend>Answers</legend>
        ${answers}
                <button type="submit" class="submit-btn js-submit-btn">SUBMIT</button>
            </form>
        </div>
        
        <div class="nav-status">
          <div class="nav-bits status">
          <span class="count">Query ${currentQuestion+1}/10</span>
          </div>
          <div class="nav-bits score">
            <span class="count" >Score ${correctAnswers}/10</span>
          </div>
        </div>
        
      </div>
    </section>`;
}

function renderQuestionPage() {
  console.log("`renderQuestionPage` ran");
  let questionPageString = generateQuestionElement(appItems.questions[currentQuestion]);
  $('.container').html(questionPageString);
  $('.js-submit-btn').hide();
}

function shuffle(bits) {
  for (let a = bits.length - 1; a > 0; a--) {
    let b = Math.floor(Math.random() * (a + 1));
    [bits[a], bits[b]] = [bits[b], bits[a]];
  }
}

function handleStartBtn() {
  $('.container').on('click', '.start-btn', function(event) {
    event.preventDefault();
    console.log('`handleStartBtn` ran');
    currentQuestion = 0;
    correctAnswers = 0;
    shuffle(appItems.questions);
    for (let i = 0; i < appItems.questions.length; i++) {
      const ans = appItems.questions[i].answers;
      shuffle(ans);
    }
    renderQuestionPage();
  });
}

function handleRadioSubmit() {
  $('.container').on('click', ".answers", function(event) {
    console.log('`handleRadioSubmit` ran');
    $('.js-submit-btn').show();
  });
}

function generateInfoElement(item, currentAnswer) {
  console.log("`generatingInfoElement` ran");
  const isAnswerCorrect = true;
  return `
  <section role='section'>
      <div class="info-area">
        <img src=${item.picture} class="info-image" alt="${item.altPicture}">
        <p class="user-message">${currentAnswer}</p>
        <p class="correct-answer">The correct answer is: ${item.correctAnswerString}</p>
        <p class="add-info">${item.extraInfoString}</p>
        <button type="submit" class="nav-next next-btn js-next-btn">NEXT</button>
      </div>
  </section>`;
}

function renderInfoPage(currentAnswer) {
  console.log("`renderInfoPage` ran");
  let infoPageString = generateInfoElement(appItems.questions[currentQuestion], currentAnswer);
  $('.container').html(infoPageString);
}

function handleAnswerCheck(userAnswer) {
  let userMessage = "holder";
  console.log("`handleAnswerCheck` ran");
    if (userAnswer == appItems.questions[currentQuestion].correctAnswerString) {
      correctAnswers++;
      console.log("Well done!");
      return "Well done!";
    }
    else {
      console.log("Sorry, your answer was not right.");
      return "Sorry, that was not the right answer.";
    }
}

function handleSubmitBtn() {
  $('.container').on('submit', '#answer-form', function(event) {
    event.preventDefault();
    const userAnswer = ( $(event.currentTarget).find('input[name="userAnswer"]:checked').val());
    console.log(userAnswer);
    console.log("`handleSubmitBtn` ran");
    let currentAnswer = handleAnswerCheck(userAnswer);
  renderInfoPage(currentAnswer);  
  });
}

function generateSummaryElement(scoreMsg) {
  console.log("`generateSummaryElement` ran");
  return `
  <section role='section'>
      <div class="sum-area js-sum-area">
        <h1 class="pass-fail-msg">${scoreMsg}</h1>
        <div class="total-score">
            <h2 class="user-score">Your final score was ${correctAnswers} out of 10.</h2>
        <button type="submit" class="start-btn js-start-btn">TRY AGAIN?</button>
      </div>
  </section>`;
}

function renderSummaryPage(scoreMsg) {
  console.log("`renderSummaryPage` ran");
  let summaryPageString = generateSummaryElement(scoreMsg);
  $('.container').html(summaryPageString);
}

function handleNextBtn() {
  $('.container').on('click', '.next-btn', function(event) {
  event.preventDefault();
  console.log("`handleNextBtn` ran");
  advanceQuiz();
  });
}

function handleFeedbackMsg() {
  console.log("`handleFeedbackMsg` ran");
  if (correctAnswers == 10) {
    console.log("You are perfectly enlightened!");
    return "You are perfectly enLIGHTened!";
  }
  else if (correctAnswers >= 8) {
    console.log("You are well on your way to total enlightenment.");
    return "You are well on your way to total enLIGHTenment.";
  }
  else if (correctAnswers >= 5) {
    console.log("You are stumblingly on the path to enlightenment.");
    return "You are stumblingly on the path to enLIGHTenment.";
  }
  else if (correctAnswers >= 1) {
    console.log("You have gotten off the path to enlightenment.");
    return "You have gotten off the path to enLIGHTenment.";
  }
  else
    console.log("You should start feeling around for the path to enlightenment!");
    return "You should start feeling around for the path to enLIGHTenment!";
}

function advanceQuiz() {
  console.log("`advanceQuiz' ran");
  currentQuestion++;
  if (currentQuestion < appItems.questions.length) { 
  renderQuestionPage();
  }
  else {
  console.log(currentQuestion);
  let scoreMsg = handleFeedbackMsg();
  console.log(scoreMsg);
  renderSummaryPage(scoreMsg);
  }
}

function lightAppQuiz() {
  renderStartPage();
  handleStartBtn();
  handleRadioSubmit();
  handleSubmitBtn();
  handleNextBtn();
}

$(lightAppQuiz);

