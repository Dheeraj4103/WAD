const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const country = document.getElementById('country');
const subject = document.getElementById('subject');

form.addEventListener("submit", (e) => {
    e.preventDefault()
    localStorage.setItem('fname', fname.value);
    localStorage.setItem('lname', lname.value);
    localStorage.setItem('country', country.value);
    localStorage.setItem('subject', subject.value);
    console.log(localStorage);
})