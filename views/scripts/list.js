

const loadData = async () => {
    await fetch('http://localhost:5000/api/getAllBloodDonors')
        .then(res => res.json())
        .then(res => renderList(res))
        .catch(err => console.log(err));
    }

const renderList = (data) => {
    const table = document.getElementById('table');
    data.data.forEach((donor) => { 
        const tableRow = document.createElement('tr');
        const rd1 = document.createElement('td');
        const rd3 = document.createElement('td');
        const rd4 = document.createElement('td');
        const rd5 = document.createElement('td');
        
        const moreLink = document.createElement('a')
        moreLink.href = `/d/${donor._id}` 
        moreLink.innerHTML = donor.name

        rd1.appendChild(moreLink)
        rd3.innerHTML = donor.bloodtype;
        rd4.innerHTML = donor.status ? 'Blood Taken':'No Blood Taken Yet' ; 

        const btn = document.createElement('button');
        btn.innerHTML = 'Update Status';
        rd5.appendChild(btn);
        const btn2 = document.createElement('button');
        btn2.innerHTML = 'Delete';
        rd5.appendChild(btn2);

        tableRow.appendChild(rd1);
        tableRow.appendChild(rd3);
        tableRow.appendChild(rd4);
        tableRow.appendChild(rd5);

        table.appendChild(tableRow);

        let status = donor.status;
        btn.addEventListener("click", function () {
            status = !status; 
            rd4.innerHTML = status ? 'Blood Taken':'Blood Not Taken Yet' ;
            fetch(`http://localhost:5000/api/${donor._id}`, {  
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({status: status}) 
            })
        })

        btn2.addEventListener("click", function () {
            tableRow.remove();
            fetch(`http://localhost:5000/api/${donor._id}`, {
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

