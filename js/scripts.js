// Student information
const studentId = "200556299";
const studentName = "Laxit Sompura";

// Function to dynamically add student information to the navbar
function addStudentInfo() {
    const navbar = document.querySelector('.navbar'); // Selecting the navbar element
    const studentInfo = document.createElement('div'); // Creating a new div element
    studentInfo.classList.add('student-info'); // Adding the 'student-info' class to the div
    studentInfo.textContent = `Student ID: ${studentId} | Name: ${studentName}`; // Setting the text content of the div
    navbar.appendChild(studentInfo); // Appending the div to the navbar
}

// Function to fetch a Chuck Norris joke
function fetchChuckNorrisJoke() {
    fetch('https://api.chucknorris.io/jokes/random') // Fetching Chuck Norris joke API
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const jokeElement = document.getElementById("chuck-norris-joke"); // Selecting the joke element
            jokeElement.textContent = data.value; // Setting the text content of the joke element
        })
        .catch(error => console.error("Error fetching Chuck Norris joke:", error)); // Handling errors
}

// Function to fetch a random image from Lorem Picsum
function fetchRandomImage() {
    fetch('https://picsum.photos/400/300') // Fetching random image from Lorem Picsum
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            const imageUrl = URL.createObjectURL(blob); // Creating a URL for the image blob
            const imageContainer = document.getElementById('random-image'); // Selecting the image container
            imageContainer.innerHTML = `<img src="${imageUrl}" alt="Random Image">`; // Setting the HTML content of the image container
        })
        .catch(error => console.error('Error fetching random image:', error)); // Handling errors
}

// Function to run when the window is loaded
window.onload = function() {
    fetchChuckNorrisJoke(); // Fetching Chuck Norris joke
    addStudentInfo(); // Adding student information to the navbar
};
