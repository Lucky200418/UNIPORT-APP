const topicsSelect = document.querySelector('#topicsSelect');
const selectElement = document.getElementById('courseSelect');

const years = document.querySelector('#years');
let selectedOption

window.onload = () => {
    localStorage.removeItem('QuestionYear')
    localStorage.removeItem('QuestionCourse')
    years.style.display = 'none';
};

selectElement.addEventListener('change', function() {
    localStorage.removeItem('QuestionCourse')

    selectedOption = selectElement.options[selectElement.selectedIndex].value;
    console.log(selectedOption);

    // Reset and display the correct suboption
    years.style.display = "block";


    localStorage.setItem('QuestionCourse', selectedOption)
    
});


function showYearsSelect(option) {
    console.log("Selected topic:", option.value);
    // Display the years select element or perform other actions here
    years.style.display = "block";
}

years.addEventListener('change', function () {
    localStorage.removeItem('QuestionYear')


    const selectedYear = years.options[years.selectedIndex]
    console.log(selectedYear.value)

    localStorage.setItem('QuestionYear', selectedYear.value)

    if(selectedOption === 'GST104')  {
        window.location.href = "obj/obj.html"
    }
})


// $(document).ready(function() {
//     $('.courseSelect').select2({
//         theme: 'classic', // Use classic theme for better customization
//         dropdownCssClass: 'custom-dropdown', // Add a custom class for more styling
//     });
// });





