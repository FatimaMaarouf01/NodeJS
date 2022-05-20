const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        bloodtype: document.getElementById("bloodtype").value
    }
    fetch('http://localhost:5000/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(() => {
        alert('Form Submitted, Thank You!')
    })
})
