// const topicsSelect = document.querySelector('#topicsSelect');
// const selectElement = document.getElementById('courseSelect');
// const maths102Topics = document.querySelector('#MATHS102Topics');
// const phy102Topics = document.querySelector('#PHY102Topics');
// const chem102Topics = document.querySelector('#CHEM102Topics');
// const bio102Topics = document.querySelector('#BIO102Topics');
// const eco142Topics = document.querySelector('#ECO142Topics');
// const frn102Topics = document.querySelector('#FRN102Topics');
// const pos102Topics = document.querySelector('#POS102Topics');
// const gst104Topics = document.querySelector('#GST104Topics');
// const years = document.querySelector('#years');
// const yearOptGroup = document.getElementById('yearOptGroup')
// let selectedOption

// window.onload = () => {
//     localStorage.removeItem('QuestionYear')
//     localStorage.removeItem('QuestionTopic')
//     localStorage.removeItem('QuestionCourse')
//     topicsSelect.style.display = "none";
//     maths102Topics.style.display = 'none';
//     phy102Topics.style.display = 'none';
//     chem102Topics.style.display = 'none';
//     bio102Topics.style.display = 'none';
//     gst104Topics.style.display = 'none';
//     eco142Topics.style.display = 'none'
//     frn102Topics.style.display = 'none'
//     pos102Topics.style.display = 'none'
//     years.style.display = 'none';
// };

// // Create an array of objects to store the values of each optgroup
// const topicsData = [
//     {
//       label: "MATH102",
//       id: "MATHS102Topics",
//       values: ["Permutation", "Calculus", "Limits", "Functions", "All Topics"],
//       years: ["2021", "2022"]
//     },
//     {
//       label: "PHY102",
//       id: "PHY102Topics",
//       values: ["Electric fields", "Gauss Law", "Capacitor", "All Topics"],
//       years: ["2021", "2022"]
//     },
//     {
//       label: "CHEM102",
//       id: "CHEM102Topics",
//       values: ["Atomic", "Electron", "Carbon", "Salt", "All Topics"],
//       years: ["2021", "2022"]
//     },
//     // Add objects for other subjects
//   ];
  
//   // Get a reference to the select element
//   // const topicsSelect = document.getElementById("topicsSelect");
  
//   // Loop through the topicsData array
//   for (const topic of topicsData) {
//     // Create an optgroup element
//     const optgroup = document.createElement("optgroup");
//     optgroup.label = topic.label;
//     optgroup.id = topic.id;
  
//     // Loop through the values and create options for each
//     for (const value of topic.values) {
//       const option = document.createElement("option");
//       option.value = value;
//       option.textContent = value;
//       optgroup.appendChild(option);
//     }

//     // Append the optgroup to the select element
//     topicsSelect.appendChild(optgroup);
//   }


// selectElement.addEventListener('change', function() {
//     localStorage.removeItem('QuestionCourse')

//     selectedOption = selectElement.options[selectElement.selectedIndex].value;
//     console.log(selectedOption);

//     // Reset and display the correct suboption
//     topicsSelect.style.display = "block";
//     maths102Topics.style.display = "none";
//     phy102Topics.style.display = "none";
//     chem102Topics.style.display = "none";
//     bio102Topics.style.display = "none";
//     gst104Topics.style.display = 'none';
//     eco142Topics.style.display = 'none'
//     frn102Topics.style.display = 'none'
//     pos102Topics.style.display = 'none'

//     if (selectedOption === 'MATH102') {
//         maths102Topics.style.display = "block";
//     } else if (selectedOption === 'PHY102') {
//         phy102Topics.style.display = "block";
//     } else if (selectedOption === 'CHEM102') {
//         chem102Topics.style.display = "block";
//     } else if (selectedOption === 'BIO102') {
//         bio102Topics.style.display = "block";
//     } else if (selectedOption === 'ECO142') {
//         eco142Topics.style.display = "block";
//     }else if (selectedOption === 'FRN102') {
//         frn102Topics.style.display = "block";
//     } else if (selectedOption === 'POS102') {
//         pos102Topics.style.display = "block";
//     } else if (selectedOption === 'GST104') {
//         gst104Topics.style.display = "block";
//     } 

//     localStorage.setItem('QuestionCourse', selectedOption)
    
// });

// topicsSelect.addEventListener('change', function () {
//     localStorage.removeItem('QuestionTopic')


//     const selectedTopicOption = topicsSelect.options[topicsSelect.selectedIndex];
//     console.log("Selected topic:", selectedTopicOption.value);
//         years.style.display = "block"
//     localStorage.setItem('QuestionTopic', selectedTopicOption.value)
// });

// function showYearsSelect(option) {
//     console.log("Selected topic:", option.value);
//     // Display the years select element or perform other actions here
//     years.style.display = "block";
// }

// years.addEventListener('change', function () {
//     localStorage.removeItem('QuestionYear')


//     const selectedYear = years.options[years.selectedIndex]
//     console.log(selectedYear.value)

//     localStorage.setItem('QuestionYear', selectedYear.value)

//     if(selectedOption === 'GST104')  {
//         window.location.href = "obj/obj.html"
//     } else  {
//         window.location.href = "theory/theory.html"
//     }
// })


// // $(document).ready(function() {
// //     $('.courseSelect').select2({
// //         theme: 'classic', // Use classic theme for better customization
// //         dropdownCssClass: 'custom-dropdown', // Add a custom class for more styling
// //     });
// // });





// // Remove the initial options you want to replace
// // const optionsToRemove = ["Permutation", "Calculus", "Limits"];
// // optionsToRemove.forEach((valueToRemove) => {
// //   const optionToRemove = topicsSelect.querySelector(`option[value="${valueToRemove}"]`);
// //   if (optionToRemove) {
// //     optionToRemove.remove();
// //   }
// // });







    const courseData = [
      {
        name: "MATH102",
        topics: ["All Topics"],
        years: [2020, 2021, "All Years"],
      },
      {
        name: "PHY102",
        topics: ["All Topics"],
        years: [2012, 2015, 2016, 2017, 2018, "All Years"],
      },
      {
        name: "BIO102",
        topics: ["All Topics"],
        years: [2011, 2012, 2014, 2015, 2016, 2017, 2018, 2019, 2021, "All Years"],
      },
      {
        name: "POS102",
        topics: ["All Topics"],
        years: [2022, "All Years"],
      },
      {
        name: "FRN102",
        topics: ["All Topics"],
        years: [2021, "All Years"],
      },
      {
        name: "ECO102",
        topics: ["All Topics"],
        years: [2020, "All Years"],
      },
      {
        name: "CHEM102",
        topics: ["All Topics"],
        years: [2011, 2011, 2015, 2016, 2019, 2021, "All Years"],
      },
      // Add more course objects
    ];

    const selectCourseButton = document.getElementById("selectCourseButton");
    const courseContainer = document.getElementById("courseContainer");
    const topicContainer = document.getElementById("topicContainer");
    const yearContainer = document.getElementById("yearContainer");

    selectCourseButton.addEventListener("click", () => {
      courseContainer.innerHTML = "";
      topicContainer.innerHTML = "";
      yearContainer.innerHTML = "";

      courseData.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course");
        courseDiv.textContent = course.name;

        if (localStorage.getItem("selectedCourse") === course.name) {
          courseDiv.classList.add("selected");
        }

        courseDiv.addEventListener("click", () => {
          localStorage.setItem("selectedCourse", course.name);
          courseContainer.querySelectorAll(".course").forEach(div => div.classList.remove("selected"));
          courseDiv.classList.add("selected");

          // Show topics for the selected course
          showTopics(course);
        });

        courseContainer.appendChild(courseDiv);
      });
    });

    function showTopics(course) {
      topicContainer.innerHTML = "";
      yearContainer.innerHTML = "";

      course.topics.forEach(topic => {
        const topicDiv = document.createElement("div");
        topicDiv.textContent = topic;
        topicDiv.addEventListener("click", () => {
          localStorage.setItem("selectedTopic", topic);

          // Show years for the selected topic
          showYears(course, topic);
        });

        topicContainer.appendChild(topicDiv);
      });
    }

    function showYears(course, topic) {
      yearContainer.innerHTML = "";

      course.years.forEach(year => {
        const yearDiv = document.createElement("div");
        yearDiv.textContent = year;
        yearDiv.addEventListener("click", () => {
          localStorage.setItem("selectedYear", year);
          yearContainer.querySelectorAll(".selected").forEach(div => div.classList.remove("selected"));
          yearDiv.classList.add("selected");
          let courseGet = localStorage.getItem('selectedCourse')

          if(courseGet === 'GST104' || courseGet === 'GST104')  {
                    window.location.href = "obj/obj.html"
                } else  {
                    window.location.href = "theory/theory.html"
                }
        });

        yearContainer.appendChild(yearDiv);
      });
    }


    // Clear local storage on page reload
    window.addEventListener("onload", () => {
      localStorage.removeItem(selectedCourse)
      localStorage.removeItem(selectedTopic)
      localStorage.removeItem(selectedYear)

    });
