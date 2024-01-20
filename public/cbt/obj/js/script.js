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
const a = "A. ";
const b = "B. ";
const c = "C. ";
const d = "D. ";
const courseGet = localStorage.getItem("QuestionCourse");
const yearGet = localStorage.getItem("QuestionYear");
let questions = [];
let activatedArray = [];
const courseYear = document.getElementById("courseYear");
const questionToggle = document.querySelector(".questionToggle");
const toggleButtons = document.querySelectorAll(".toggle");
const selectedArray = [];
const checkAnswer = [];
const minutesTimer = document.getElementById("minutesTimer");
const secondsTimer = document.getElementById("secondsTimer");
const timeing = document.getElementById("timeing");
const endTest = document.querySelector("footer .endTest");
const endTestText = document.querySelector("footer #endTestText");
let endCheck = false;
const allOptions = option_list.children.length; //getting all option items

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
    const yearMatch = yearGet && questionObject.year === yearGet;

    if (yearGet == "All Years") {
      if (courseMatch) {
        activatedArray.push(questionObject);
      }
    } else if (courseMatch && yearMatch) {
      activatedArray.push(questionObject);
    }
  }

  if (localStorage.getItem("activated") === "false") {
    let activatedObjectNote = {
      numb: 3,
      imgNo: 3,
      number: `<h2 class="h2TagActivate">ACTIVATE NOW</h2>`,
      question: `<p class="pTagActivate">You are currently limited to only Two Questions at the moment, Kindly click on the 'Show Button' to view 'Activation Button' and  Activate this app to access full Features including more Past Questions</p>`,
      answerSet: [
        `
               <a href="/ActivateApp"><button class="button">Activate</button></a>`,
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

  toggle(); //calling the button toggle function for the questions
  showQuetions(0); //calling showQestions function
  // queCounter(1); //passing 1 parameter to queCounter
  startTimer(60); //calling startTimer function
  startTimerLine(0); //calling startTimerLine function
  endTest.classList.add("show");
  countdown("minutesTimer", "secondsTimer", 40);
  endTestText.textContent = "End Test";
};

function redire() {
  window.location.href = "../index.html";
}

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
  // showQuetions(que_count); //calling showQestions function
  // queCounter(que_numb); //passing que_numb value to queCounter
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  startTimer(timeValue); //calling startTimer function
  startTimerLine(widthValue); //calling startTimerLine function
  timeText.textContent = "Time Left"; //change the text of timeText to Time Left
  // next_btn.classList.remove("show"); //hide the next button
  // showWrongAnswer.classList.remove("show"); //hide the wrong button
  // back.classList.remove("show"); //hide the back button
  // countdown('minutesTimer', 'secondsTimer', 0);
  timeing.style.display = "none";
  if (endCheck == false) {
    endTestText.textContent = "Exit";
    viewQuestion(que_count);
    endCheck = true;
    console.log(endCheck);
  }
};

//fuction to shuffle the answers positions
function shuffleArray() {
  const arr = [0, 1, 2, 3];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function viewQuestion(index) {
  option_list.children[0].classList.add("disabled");
  option_list.children[1].classList.add("disabled");
  option_list.children[2].classList.add("disabled");
  option_list.children[3].classList.add("disabled");

  const shuffledArray = shuffleArray();

  for (let i = 0; i < selectedArray.length; i++) {
    const questionObject = selectedArray[i];
    if (questionObject.correctAns == questionObject.selectedAns) {
      const que_text = document.querySelector(".que_text");

      let no = index + 1;

      if (index == 2) {
        if (localStorage.getItem("activated") === "false") {
          let que_tag =
            "<span>" +
            questions[index].number +
            ". " +
            questions[index].question +
            "</span>";
          // Clear the existing content before adding new content
          option_list.innerHTML = "";

          let answerSet = questions[index].answerSet;
          let options = "";

          // Loop through the answer set, starting from index 1 to skip the first empty summary string
          for (let i = 1; i < answerSet.length; i++) {
            options += "<div><span>" + answerSet[i] + "</span></div>";
          }

          let optionTag =
            "<div><span>" + answerSet[0] + "</span></div>" + options;

          que_text.innerHTML = que_tag; // Adding new HTML content inside que_tag
          option_list.innerHTML += optionTag;
        } else {
          let que_tag =
            "<span>" + no + ". " + selectedArray[index].question + "</span>";
          let option_tag =
            '<div class="option"><span>A. ' +
            selectedArray[index].options[0] +
            "</span></div>" +
            '<div class="option"><span>B. ' +
            selectedArray[index].options[1] +
            "</span></div>" +
            '<div class="option"><span>C. ' +
            selectedArray[index].options[2] +
            "</span></div>" +
            '<div class="option"><span>D. ' +
            selectedArray[index].option[3] +
            "</span></div>";
          que_text.innerHTML = que_tag; //adding new span tag inside que_tag
          option_list.innerHTML = option_tag; //adding new div tag inside option_tag
        }
      } else {
        //creating a new span and div tag for question and option and passing the value using array index
        let que_tag =
          "<span>" + no + ". " + selectedArray[index].question + "</span>";
        let option_tag =
          '<div class="option"><span>A. ' +
          selectedArray[index].options[0] +
          "</span></div>" +
          '<div class="option"><span>B. ' +
          selectedArray[index].options[1] +
          "</span></div>" +
          '<div class="option"><span>C. ' +
          selectedArray[index].options[2] +
          "</span></div>" +
          '<div class="option"><span>D. ' +
          selectedArray[index].option[3] +
          "</span></div>";
        que_text.innerHTML = que_tag; //adding new span tag inside que_tag
        option_list.innerHTML = option_tag; //adding new div tag inside option_tag

        // answer.classList.add("incorrect"); //adding red color to correct selected option
      }
    }
  }
}

// if quitQuiz button clicked
quit_quiz.onclick = () => {
  window.location.reload(); //reload the current window
};

const next_btn = document.querySelector("footer .next_btn");
const showWrongAnswer = document.querySelector("footer .showWrongAnswer");
const back = document.querySelector("footer .back");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
// next_btn.onclick = ()=>{
//     if(que_count < questions.length - 1){ //if question count is less than total question length
//         que_count++; //increment the que_count value
//         que_numb++; //increment the que_numb value
//         showQuetions(que_count); //calling showQestions function
//         clearInterval(counter); //clear counter
//         clearInterval(counterLine); //clear counterLine
//         startTimer(timeValue); //calling startTimer function
//         startTimerLine(widthValue); //calling startTimerLine function
//         timeText.textContent = "Time Left"; //change the timeText to Time Left
//         next_btn.classList.remove("show"); //hide the next button
//         queCounter(que_numb); //passing que_numb value to queCounter
//         showWrongAnswer.classList.remove("show"); //hide the show answer button
//         nextBtnFixing()
//     }else{
//         clearInterval(counter); //clear counter check
//         clearInterval(counterLine); //clear counterLine check
//         showResult(); //calling showResult function
//     }
// }

// back.onclick = ()=>{
//         que_count--; //decrement the que_count value
//         que_numb--; //decrement the que_numb value
//         showQuetions(que_count); //calling showQestions function
//         queCounter(que_numb); //passing que_numb value to queCounter
//         clearInterval(counter); //clear counter
//         clearInterval(counterLine); //clear counterLine
//         startTimer(timeValue); //calling startTimer function
//         startTimerLine(widthValue); //calling startTimerLine function
//         timeText.textContent = "Time Left"; //change the timeText to Time Left
//         next_btn.classList.add("show"); //hide the next button
//         showWrongAnswer.classList.remove("show"); //hide the show answer button
//         nextBtnFixing()
// }
function endTestF() {
  // console.log(endCheck)
  if (endCheck == true) {
    window.location.reload(); //reload the current window
  } else {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box

    let scoreNow = 0;

    for (let i = 0; i < selectedArray.length; i++) {
      const questionObject = selectedArray[i];

      if (questionObject.correctAns == questionObject.selectedAns) {
        scoreNow += 1;
      }
    }

    let avarage = scoreNow / questions.length;

    const scoreText = result_box.querySelector(".score_text");
    if (avarage > 0.8) {
      // if user scored more than 3
      //creating a new span tag and passing the user score number and total question number
      let scoreTag =
        "<span>and congrats! 🎉, You got <p>" +
        scoreNow +
        "</p> out of <p>" +
        questions.length +
        "</p></span>";
      scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
    } else if (userScore > 0.5) {
      // if user scored more than 1
      let scoreTag =
        "<span>and nice 😎, You got <p>" +
        scoreNow +
        "</p> out of <p>" +
        questions.length +
        "</p></span>";
      scoreText.innerHTML = scoreTag;
    } else {
      // if user scored less than 1
      let scoreTag =
        "<span>and sorry 😐, You got only <p>" +
        scoreNow +
        "</p> out of <p>" +
        questions.length +
        "</p></span>";
      scoreText.innerHTML = scoreTag;
    }
  }
}

endTest.onclick = () => {
  console.log(endCheck);
  if (endCheck == false) {
    endTestF();
  } else {
    window.location.reload(); //reload the current window
  }
};

// Add click event listener to buttons with class 'toggle'
function handleButtonClick(event) {
  const buttonId = event.target.id; // Get the ID of the clicked button
  // Do something with the buttonId, e.g., toggle the corresponding question
  showQuetions(buttonId);
}

// document.addEventListener('DOMContentLoaded', () => {
//     const toggleButtons = document.querySelectorAll('.toggle');
//     console.log(toggleButtons)
//     toggleButtons.forEach(button => {
//         button.addEventListener('click', handleButtonClick);
//     });
// });

function countdown(elementM, elementS, minutes) {
  // Get the current time.
  const now = new Date();

  // Calculate the end time.
  const endTime = new Date(now.getTime() + minutes * 60 * 1000);

  // Set the initial values.

  // Create a timer loop.
  let timer = setInterval(() => {
    // Get the current time.
    const now = new Date();

    // Calculate the remaining time.
    const remainingTime = endTime - now;

    // Update the minutes and seconds remaining.
    minutesRemaining = Math.floor(remainingTime / (60 * 1000));
    secondsRemaining = Math.floor(remainingTime / 1000) % 60;

    // Update the countdown timer.
    document.getElementById(elementM).innerHTML = minutesRemaining;
    document.getElementById(elementS).innerHTML = secondsRemaining;

    // If the timer is finished, stop it.
    if (minutesRemaining === 0 && secondsRemaining === 0) {
      clearInterval(timer);
      endTestF();
    }
  }, 1000);
}

function toggle() {
  for (let i = 0; i < questions.length; i++) {
    const button = document.createElement("button");
    button.textContent = i + 1;
    button.id = i;
    button.className = "toggle";
    button.style.width = "30px";
    button.style.height = "30px";

    questionToggle.appendChild(button);
  }

  // Attach click event listener immediately after creating buttons
  const toggleButtons = document.querySelectorAll(".toggle");
  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonId = parseInt(button.id); // Get the ID of the clicked button
      // Do something with the buttonId, e.g., toggle the corresponding question
      showQuetions(buttonId);
      que_count = buttonId;
      getArray();
      addColorBtn();
      // queCounter(buttonId + 1)
    });
  });
}

// getting questions and options from array
function showQuetions(index) {
  const shuffledArray = shuffleArray();
  console.log(shuffledArray[1]); // Output: [3, 1, 0, 2] (Example output, will vary with each call)

  const que_text = document.querySelector(".que_text");

  let no = index + 1;

  if (questions.length <= 0) {
    que_text.innerHTML =
      "Sorry we do not have any Question to display based on your search";
  } else {
    if (index == 2) {
      if (localStorage.getItem("activated") === "false") {
        let que_tag =
          "<span>" +
          questions[index].number +
          ". " +
          questions[index].question +
          "</span>";
        // Clear the existing content before adding new content
        option_list.innerHTML = "";

        let answerSet = questions[index].answerSet;
        let options = "";

        // Loop through the answer set, starting from index 1 to skip the first empty summary string
        for (let i = 1; i < answerSet.length; i++) {
          options += "<div><span>" + answerSet[i] + "</span></div>";
        }

        let optionTag =
          "<div><span>" + answerSet[0] + "</span></div>" + options;

        que_text.innerHTML = que_tag; // Adding new HTML content inside que_tag
        option_list.innerHTML += optionTag;
      } else {
        let que_tag =
          "<span>" + no + ". " + selectedArray[index].question + "</span>";
        let option_tag =
          '<div class="option"><span>A. ' +
          selectedArray[index].options[0] +
          "</span></div>" +
          '<div class="option"><span>B. ' +
          selectedArray[index].options[1] +
          "</span></div>" +
          '<div class="option"><span>C. ' +
          selectedArray[index].options[2] +
          "</span></div>" +
          '<div class="option"><span>D. ' +
          selectedArray[index].option[3] +
          "</span></div>";
        que_text.innerHTML = que_tag; //adding new span tag inside que_tag
        option_list.innerHTML = option_tag; //adding new div tag inside option_tag
      }
    } else {
      //creating a new span and div tag for question and option and passing the value using array index
      let que_tag =
        "<span>" + no + ". " + questions[index].question + "</span>";
      let option_tag =
        '<div class="option"><span>A. ' +
        questions[index].options[shuffledArray[0]] +
        "</span></div>" +
        '<div class="option"><span>B. ' +
        questions[index].options[shuffledArray[1]] +
        "</span></div>" +
        '<div class="option"><span>C. ' +
        questions[index].options[shuffledArray[2]] +
        "</span></div>" +
        '<div class="option"><span>D. ' +
        questions[index].options[shuffledArray[3]] +
        "</span></div>";
      que_text.innerHTML = que_tag; //adding new span tag inside que_tag
      option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    }
  }

  const option = option_list.querySelectorAll(".option");

  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer) {
  clearInterval(counter); //clear counter check
  clearInterval(counterLine); //clear counterLine check
  let userAns1 = answer.textContent; //getting user selected option
  let userAns2 = userAns1.split("");
  userAns2.splice(0, 3);
  let userAns = userAns2.join("");
  console.log(userAns);
  let correcAns = questions[que_count].answer; //getting correct answer from array
  removeColor();
  const valueToDelete = parseInt(que_count) + 1; // Value to be deleted

  // Find the index of the object with key1 equal to valueToDelete
  const indexToDelete = selectedArray.findIndex(
    (obj) => obj.number === valueToDelete
  );

  if (indexToDelete !== -1) {
    // If the object was found, remove it from the array using splice()
    selectedArray.splice(indexToDelete, 1);
  }

  console.log(selectedArray);

  const newObj = {
    number: que_count + 1,
    correctAns: correcAns,
    selectedAns: userAns,
    // Add more properties as needed
  };
  selectedArray.push(newObj);
  console.log(selectedArray);

  for (i = 0; i < allOptions; i++) {
    let spliting = option_list.children[i].textContent.split("");
    spliting.splice(0, 3);
    let finalSpliting = spliting.join("");
    if (finalSpliting == userAns) {
      option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
      // option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
    } else {
      // option_list.children[i].removeAttribute("class", "option correct"); // Remove the added class
      // option_list.children[i].querySelector('.icon').remove(); // Remove the tick icon
    }
  }
  console.log("added");

  addColorBtn();

  // function showWrongAnswerFunction() {
  //     showWrongAnswer.classList.add("show");
  // }
  // showWrongAnswer.onclick = ()=>{
  //     for(i=0; i < allOptions; i++){
  //         // console.log(option_list.children[i].textContent)
  //         let spliting = option_list.children[i].textContent.split("")
  //         spliting.splice(0, 3)
  //         let finalSpliting = spliting.join("")
  //         if(finalSpliting == correcAns){ //if there is an option which is matched to an array answer
  //             option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
  //             option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
  //             console.log("Auto selected correct answer.");
  //         }
  //     }
  //     showWrongAnswer.classList.remove("show");
  // }
  if (userAns == correcAns) {
    //if user selected option is equal to array's correct answer
    userScore += 1; //upgrading score value with 1
    // answer.classList.add("correct"); //adding green color to correct selected option
    // answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    console.log("wrong");
    // showWrongAnswerFunction()
    // answer.classList.add("incorrect"); //adding red color to correct selected option
    // answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    // console.log("Wrong Answer");

    // for(i=0; i < allOptions; i++){
    //     if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
    //         option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
    //         option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
    //         console.log("Auto selected correct answer.");
    //     }
    // }
  }
  // for(i=0; i < allOptions; i++){
  //     option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
  // }
  // next_btn.classList.add("show"); //show the next button if user selected any option
}

function getArray() {
  for (let i = 0; i < selectedArray.length; i++) {
    const questionObject = selectedArray[i];

    const questionNumber = questionObject.number === que_count + 1;

    if (questionNumber) {
      const allOptions = option_list.children.length; //getting all option items
      for (i = 0; i < allOptions; i++) {
        let spliting = option_list.children[i].textContent.split("");
        spliting.splice(0, 3);
        let finalSpliting = spliting.join("");
        if (finalSpliting == questionObject.selectedAns) {
          option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
          // option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
        }
      }
    }
  }
}

function removeColor() {
  for (let i = 0; i < selectedArray.length; i++) {
    const questionObject = selectedArray[i];

    const questionNumber = questionObject.number === que_count + 1;

    if (questionNumber) {
      const allOptions = option_list.children.length; //getting all option items
      for (i = 0; i < allOptions; i++) {
        let spliting = option_list.children[i].textContent.split("");
        spliting.splice(0, 3);
        let finalSpliting = spliting.join("");
        if (finalSpliting == questionObject.selectedAns) {
          option_list.children[i].setAttribute("class", "option incorrect"); //adding green color to matched option
          // option_list.children[i].insertAdjacentHTML("beforeend", crossIconTag); //adding tick icon to matched option
        }
      }
    }
  }
}

function addColorBtn() {
  for (let i = 0; i < selectedArray.length; i++) {
    const questionObject = selectedArray[i];

    const questionNumber = questionObject.number - 1;

    let k = document.getElementById(questionNumber);
    k.style.color = "white";
    k.style.backgroundColor = "#66e201";
    k.style.border = "none";
  }
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
      // next_btn.classList.add("show"); //show the next button if user selected any option
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

// function queCounter(index){
//     console.log(viewedNo)
//     if(index < viewedNo){
//         // next_btn.classList.add("show")
//        } else if(index == viewedNo) {
//          viewedNo++
//          next_btn.classList.remove("show")
//        }
//     //creating a new span tag and passing the question number and total question
//     if(index != 1) {
//         // back.classList.add("show");
//     } else {
//         back.classList.remove("show");
//     }
//     // let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p>Q</span>';
//     bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
// }

// code on togging from cal to normal page
document.getElementById("openButton").addEventListener("click", function () {
  document.getElementById("coverLayout").classList.add("open");
});

document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("coverLayout").classList.remove("open");
});
