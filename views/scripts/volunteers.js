

const loadData = async () => {
    await fetch('http://localhost:5000/api/getAllVolunteers')
        .then(res => res.json())
        .then(res => renderList(res))
        .catch(err => console.log(err));
}

const renderList = (data) => {
    const table = document.getElementById('table');
    data.data.forEach((volunteer) => {
        const tableRow = document.createElement('tr');
        const rd1 = document.createElement('td');
        const rd2 = document.createElement('td');
        const rd3 = document.createElement('td');
        
        const moreLink = document.createElement('a')
        moreLink.href = `/v/${volunteer._id}`
        moreLink.innerHTML = volunteer.name

        rd1.appendChild(moreLink)
        rd2.innerHTML = volunteer.age;
         
        const btn = document.createElement('button');
        btn.innerHTML = 'Delete';
        rd3.appendChild(btn);

        tableRow.appendChild(rd1);
        tableRow.appendChild(rd2);
        tableRow.appendChild(rd3);

        table.appendChild(tableRow);


        btn.addEventListener("click", function () {
            tableRow.remove();
            fetch(`http://localhost:5000/api/volunteer/${volunteer._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(() => {
                alert('Deleted!')
            })
        })
    })
}



document.addEventListener('DOMContentLoaded', function () {
    loadData()
})

