//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const cal = document.getElementById("cal");
const calHideBtn = document.getElementById("closeBtnIcon");
const calIcon = document.getElementById("calIcon");
const imageFunDiv = document.querySelector(".imageFun");
const theoryOption = document.querySelector(".theoryOption");
const imageFun = document.createElement("img");
let theoryImgURL;
const theoryImgA = document.getElementById("theoryImgA");
// const theoryImgB = document.getElementById("theoryImgB")
const theoryImgDiv = document.querySelector(".theoryImgDiv");
const imagePaths = [
  "image/s2.jpg",
  "image/s3.png",
  "image/s4.gif",
  "image/s5.gif",
  "image/s1.gif",
];
const courseGet = localStorage.getItem("selectedCourse");
const topicGet = localStorage.getItem("selectedTopic");
const yearGet = localStorage.getItem("selectedYear");
let questions = [];
let activatedArray = [];
const courseYear = document.getElementById("courseYear");

// if startQuiz button clicked
start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); //show info box
  courseYear.innerHTML = courseGet + " : " + yearGet;
};

// if exitQuiz button clicked
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide info box
};

// if continueQuiz button clicked
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.add("activeQuiz"); //show quiz box

  for (let i = 0; i < course.length; i++) {
    const questionObject = course[i];

    const courseMatch = courseGet && questionObject.course === courseGet;
    const topicMatch =
      topicGet &&
      questionObject.topic &&
      questionObject.topic.includes(topicGet);
    const yearMatch = yearGet && questionObject.year === yearGet;

    if (topicGet == "All Topics" && yearGet == "All Years") {
      if (courseMatch) {
        activatedArray.push(questionObject);
      }
    } else if (topicGet == "All Topics") {
      if (courseMatch && yearMatch) {
        activatedArray.push(questionObject);
      }
    } else if (yearGet == "All Years") {
      if (courseMatch && topicMatch) {
        activatedArray.push(questionObject);
      }
    } else if (courseMatch && topicMatch && yearMatch) {
      activatedArray.push(questionObject);
    }
  }

  if (localStorage.getItem("activated") === "false") {
    let activatedObjectNote = {
      imgNo: 3,
      number: `<h2 class="h2TagActivate">ACTIVATE NOW</h2>`,
      question: `<p class="pTagActivate">You are currently limited to only Two Questions at the moment, Kindly click on the 'Show Button' to view 'Activation Button' and  Activate this app to access full Features including more Past Questions</p>`,
      answerSet: [
        `<button class="button" onclick=redire()>Activate</button>`,
        "",
        "",
      ],
    };
    questions = activatedArray.slice(0, 2);
    questions.push(activatedObjectNote);
  } else {
    questions = activatedArray;
  }

  console.log(questions);

  showQuetions(0); //calling showQestions function
  queCounter(1); //passing 1 parameter to queCounter
  next_btn.classList.add("show"); //add the next button
  showWrongAnswer.classList.add("show"); //show the wrong button
  theoryOption.style.display = "none";
  theoryImgDiv.style.display = "none";
  mathsRender();
};

let timeValue = 60;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let viewedNo = 1;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

function redire() {
  window.location.href = "/ActivateApp";
}

// if restartQuiz button clicked
restart_quiz.onclick = () => {
  quiz_box.classList.add("activeQuiz"); //show quiz box
  result_box.classList.remove("activeResult"); //hide result box
  timeValue = 60;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  viewedNo = 1;
  showQuetions(que_count); //calling showQestions function
  queCounter(que_numb); //passing que_numb value to queCounter
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  startTimer(timeValue); //calling startTimer function
  startTimerLine(widthValue); //calling startTimerLine function
  timeText.textContent = "Time Left"; //change the text of timeText to Time Left
  next_btn.classList.add("show"); //add the next button
  showWrongAnswer.classList.add("show"); //show the wrong button
  back.classList.remove("show"); //hide the back button
  theoryOption.style.display = "none";
};

// if quitQuiz button clicked
quit_quiz.onclick = () => {
  window.location.reload(); //reload the current window
};

const next_btn = document.querySelector("footer .next_btn");
const showWrongAnswer = document.querySelector("footer .showWrongAnswer");
const back = document.querySelector("footer .back");
const hide = document.querySelector("footer .hide");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    //if question count is less than total question length
    localStorage.removeItem(que_numb);
    que_count++; //increment the que_count value
    que_numb++; //increment the que_numb value
    showQuetions(que_count); //calling showQestions function
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the timeText to Time Left
    next_btn.classList.add("show"); //hide the next button
    queCounter(que_numb); //passing que_numb value to queCounter
    showWrongAnswer.classList.add("show"); //hide the show answer button
    hide.classList.remove("show");
    theoryOption.style.display = "none";
    imageFun.style.display = "block";
    theoryImgDiv.style.display = "none";
    nextBtnFixing();
    mathsRender();
    // imageFunDivFunction()
  } else {
    clearInterval(counter); //clear counter check
    clearInterval(counterLine); //clear counterLine check
    showResult(); //calling showResult function
  }
};

back.onclick = () => {
  localStorage.removeItem(que_numb);
  que_count--; //decrement the que_count value
  que_numb--; //decrement the que_numb value
  showQuetions(que_count); //calling showQestions function
  queCounter(que_numb); //passing que_numb value to queCounter
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  startTimer(timeValue); //calling startTimer function
  startTimerLine(widthValue); //calling startTimerLine function
  timeText.textContent = "Time Left"; //change the timeText to Time Left
  next_btn.classList.add("show"); //hide the next button
  showWrongAnswer.classList.add("show"); //show the show answer button
  hide.classList.remove("show");
  imageFun.style.display = "block";
  theoryOption.style.display = "none";
  theoryImgDiv.style.display = "none";
  nextBtnFixing();
  mathsRender();
  // imageFunDivFunction()
};

hide.onclick = () => {
  theoryOption.style.display = "none";
  imageFun.style.display = "block";
  showWrongAnswer.classList.add("show"); //show the show answer button
  hide.classList.remove("show");
  theoryImgDiv.style.display = "none";
  imgElement.style.display = "block";
};

//fuction to shuffle the answers positions
// function shuffleArray() {
//     const arr = [0, 1, 2, 3];
//     for (let i = arr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
//   }

function showTheoryImg(index) {
  //if statement to get the url of an image that will br placed in the question .js
  if (
    activatedArray[index].image == undefined ||
    activatedArray[index].image == null
  ) {
  } else if (activatedArray[index].image != undefined) {
    // if(localStorage.getItem(questions[index].imgNo) == undefined) {
    //     theoryImgURL = questions[index].answerSet[2]
    //     imgElement.src = theoryImgURL
    //     imgElement.style.width = "100%"
    //     theoryOption.appendChild(imgElement)

    //     imageFun.src = "image/s1.gif"
    //     imageFun.style.width = "100%"
    //     option_list.appendChild(imageFun)

    //     localStorage.setItem(questions[index].imgNo, "ttt")
    // }
    // theoryImgURL = questions[index].answerSet[2]

    let imageSet = activatedArray[index].image;

    for (let i = 0; i < imageSet.length; i++) {
      let imgElement = document.createElement("img"); // Create a new img element for each image
      let theoryImgURL = activatedArray[index].image[i];
      console.log(theoryImgURL);

      imgElement.src = theoryImgURL;
      imgElement.style.width = "100%";
      theoryOption.appendChild(imgElement);
    }
  } else {
  }
}

// getting questions and options from array
function showQuetions(index) {
  //     const shuffledArray = shuffleArray();
  // console.log(shuffledArray[1]); // Output: [3, 1, 0, 2] (Example output, will vary with each call)

  const que_text = document.querySelector(".que_text");

  var no = index + 1;

  if (questions.length <= 0) {
    que_text.innerHTML =
      "Sorry we do not have any Question to display based on your search";
  } else {
    // let options2
    // if(questions[index].answerSet[1] == undefined) {
    //     options2 = ""
    // } else if(questions[index].answerSet[1] != undefined) {
    //     options2 = questions[index].answerSet[1]
    // }

    // if(questions[index].answerSet[2] == undefined) {
    //     theoryImgB.src = ""
    // } else if(questions[index].answerSet[2] != undefined) {
    //     theoryImgB.src = questions[index].answerSet[2]
    // }

    // //creating a new span and div tag for question and option and passing the value us.ing array index
    // let que_tag = '<span>'+ questions[index].number + ". " + questions[index].question +'</span>';
    // let option_tag = '<div><span>'+ questions[index].answerSet[0] +'</span></div>'
    // + '<div><span>'+ options2 +'</span></div>';

    // MathJax.Hub.Queue(['Typeset', MathJax.Hub, que_text], function () {
    //     que_text.innerHTML = que_tag; // Adding new HTML content inside que_tag
    //     theoryOption.innerHTML = option_tag; // Adding new HTML content inside option_tag
    // });
    let que_tag;
    if (questions[index].maths == true) {
      que_tag = questions[index].number + ".  " + questions[index].question;
      // que_tag = '<div><span>'+ questions[index].number + ". " + questions[index].question +'</div></span>';;
    } else if (
      questions[index].maths == "false" ||
      questions[index].maths == undefined ||
      questions[index].maths == null
    ) {
      que_tag = questions[index].number + ". " + questions[index].question;
      // que_tag = '<span>'+ questions[index].number + ". " + questions[index].question +'</span>';
    }
    // Clear the existing content before adding new content
    theoryOption.innerHTML = "";
    let optionTag;

    let answerSet = questions[index].answerSet;
    let options = "";

    if (questions[index].maths == true) {
      // Loop through the answer set, starting from index 1 to skip the first empty summary string
      for (let i = 1; i < answerSet.length; i++) {
        options += answerSet[i];
      }

      optionTag = answerSet[0] + options;
    } else if (
      questions[index].maths == "false" ||
      questions[index].maths == undefined ||
      questions[index].maths == null
    ) {
      // Loop through the answer set, starting from index 1 to skip the first empty summary string
      for (let i = 1; i < answerSet.length; i++) {
        options += "<div><span>" + answerSet[i] + "</span></div>";
      }

      optionTag =
        '<div class="image-container"><span class="image-container">' +
        answerSet[0] +
        "</span></div>" +
        options;
    }

    // function rendering()

    // cont = questions[index]

    // cont.forEach((equation) => {
    //     katex.render(equation, que_tag); // Use katex.render to render equations
    //     katex.render(equation, optionTag);
    //     que_text.innerHTML = que_tag; // Adding new HTML content inside que_tag
    //     theoryOption.innerHTML += optionTag;
    // });

    if (questions[index].maths == true) {
      que_text.innerHTML = katex.renderToString(que_tag, { displayMode: true }); // Adding new HTML content inside que_tag
      theoryOption.innerHTML += katex.renderToString(optionTag);
    } else if (
      questions[index].maths == "false" ||
      questions[index].maths == undefined ||
      questions[index].maths == null
    ) {
      que_text.style.fontSize = "22px";
      que_text.style.fontWeight = "600";
      que_text.innerHTML = que_tag; // Adding new HTML content inside que_tag
      theoryOption.innerHTML += optionTag;
      let moreQuestionSet = activatedArray[index].moreQuestion;
      if (
        questions[index].moreQuestion == "false" ||
        questions[index].moreQuestion == undefined ||
        questions[index].moreQuestion == null
      ) {
      } else {
        for (let i = 0; i < moreQuestionSet.length; i++) {
          // let imgElement = document.createElement('img'); // Create a new img element for each image
          que_text.innerHTML += activatedArray[index].moreQuestion[i];
          //     console.log(theoryImgURL);

          //     imgElement.src = theoryImgURL;
          //     imgElement.style.width = "100%";
          //     theoryOption.appendChild(imgElement);
        }
      }
    } else {
      que_text.innerHTML = que_tag; // Adding new HTML content inside que_tag
      theoryOption.innerHTML += optionTag;
    }

    showTheoryImg(index);
  }
}

const option = option_list.querySelectorAll(".option");

// set onclick attribute to all available options
for (i = 0; i < option.length; i++) {
  option[i].setAttribute("onclick", "optionSelected(this)");
}
// creating the new div tags which for icons
// let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
// let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// function imageFunDivFunction() {
//     imageFun.src = "image/s1.gif"
//     imageFun.style.width = "100%"
//     option_list.appendChild(imageFun)
// }

// // Function to change the image
// function imageFunDivFunction() {
//     // Create a new image element

//     // Get a random index to choose a random image path from the array
//     const randomIndex = Math.floor(Math.random() * imagePaths.length);

//     // Set the src attribute of the new image element with the randomly chosen image path
//     imgElement.src = imagePaths[randomIndex];

//     // Set the style for the image
//     imgElement.style.width = "100%";

//     // Get a reference to the option_list element
//     const option_list = document.querySelector(".option_list");

//     // Clear any existing content inside option_list
//     option_list.innerHTML = "";

//     // Append the new image to the option_list element
//     option_list.appendChild(imgElement);
// }

// imageFunDivFunction()

function showWrongAnswerFunction() {
  showWrongAnswer.classList.add("show");
}
showWrongAnswer.onclick = () => {
  // for(i=0; i < allOptions; i++){
  //     if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
  //         option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
  //         option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
  //         console.log("Auto selected correct answer.");
  //     }
  // }
  theoryOption.style.display = "block";
  imageFun.style.display = "none";
  showWrongAnswer.classList.remove("show");
  hide.classList.add("show");
  theoryImgDiv.style.display = "block";
  imgElement.style.display = "none";
};

//if user clicked on option
function optionSelected(answer) {
  clearInterval(counter); //clear counter check
  clearInterval(counterLine); //clear counterLine check
  let userAns = answer.textContent; //getting user selected option
  let correcAns = questions[que_count].answer; //getting correct answer from array
  const allOptions = option_list.children.length; //getting all option items

  if (userAns == correcAns) {
    //if user selected option is equal to array's correct answer
    userScore += 1; //upgrading score value with 1
    answer.classList.add("correct"); //adding green color to correct selected option
    answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    showWrongAnswerFunction();
    answer.classList.add("incorrect"); //adding red color to correct selected option
    answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    console.log("Wrong Answer");

    // for(i=0; i < allOptions; i++){
    //     if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
    //         option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
    //         option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
    //         console.log("Auto selected correct answer.");
    //     }
    // }
  }
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
  }
  next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult() {
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.remove("activeQuiz"); //hide quiz box
  result_box.classList.add("activeResult"); //show result box
  // const scoreText = result_box.querySelector(".score_text");
  // if (userScore > 3){ // if user scored more than 3
  //     //creating a new span tag and passing the user score number and total question number
  //     let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
  //     scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
  // }
  // else if(userScore > 1){ // if user scored more than 1
  //     let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
  //     scoreText.innerHTML = scoreTag;
  // }
  // else{ // if user scored less than 1
  //     let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
  //     scoreText.innerHTML = scoreTag;
  // }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time; //changing the value of timeCount with time value
    time--; //decrement the time value
    if (time < 9) {
      //if timer is less than 9
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero; //add a 0 before time value
    }
    if (time < 0) {
      //if timer is less than 0
      clearInterval(counter); //clear counter
      timeText.textContent = "Time Off"; //change the time text to time off
      const allOptions = option_list.children.length; //getting all option items
      let correcAns = questions[que_count].answer; //getting correct answer from array
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          //if there is an option which is matched to an array answer
          option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
          console.log("Time Off: Auto selected correct answer.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
      }
      next_btn.classList.add("show"); //show the next button if user selected any option
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1; //upgrading time value with 1
    time_line.style.width = time + "px"; //increasing width of time_line with px by time value
    if (time > 549) {
      //if time value is greater than 549
      clearInterval(counterLine); //clear counterLine
    }
  }
}

function nextBtnFixing() {}

function queCounter(index) {
  console.log(viewedNo);
  if (index < viewedNo) {
    next_btn.classList.add("show");
  } else if (index == viewedNo) {
    viewedNo++;
    next_btn.classList.add("show");
  }
  //creating a new span tag and passing the question number and total question
  if (index != 1) {
    back.classList.add("show");
  } else {
    back.classList.remove("show");
  }
  let totalQueCounTag =
    "<span><p>" + index + "</p> of <p>" + questions.length + "</p></span>";
  bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
}

// code on togging from cal to normal page
document.getElementById("openButton").addEventListener("click", function () {
  document.getElementById("coverLayout").classList.add("open");
});

document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("coverLayout").classList.remove("open");
});
