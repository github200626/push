// Update the phone code when the country changes
document.getElementById('country-select').addEventListener('change', function() {
    let selectedCountryCode = this.value; // Get the selected country phone code
    document.getElementById('phone-code').textContent = selectedCountryCode;
});

// Handle the Next button click
// document.querySelector('.next-btn').addEventListener('dblclick', function() {
//     let phoneNumber = document.getElementById('phone-number').value;
//     let countryCode = document.getElementById('phone-code').textContent;

//     if (phoneNumber.length === 10) {
//         alert('Phone number submitted: ' + countryCode + ' ' + phoneNumber);
//     } else {
//         alert('Please enter a valid 10-digit phone number.');
//     }
// });

// Handle the Cancel button click
document.querySelector('.cancel-btn').addEventListener('click', function() {
    document.getElementById('phone-number').value = '';
});



// Get references to the elements
const selectElement = document.getElementById('country-select');
const inputElement = document.getElementById('phone-number');
const outputDiv = document.getElementById('output');

// Function to update the div with the select and input values
function updateOutput() {
    const selectValue = selectElement.value;
    const inputValue = inputElement.value;
    outputDiv.textContent = `${selectValue}${inputValue}`;
}

// Add event listeners to the select and input elements
selectElement.addEventListener('change', updateOutput);
inputElement.addEventListener('input', updateOutput);