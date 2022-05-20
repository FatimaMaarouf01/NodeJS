const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        bloodtype: document.getElementById("bloodtype").value
    }
    fetch('http://localhost:5000/api/volunteer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(() => {
        alert('Form Submitted, Thank You!')
    })
})
