
function loadData() {
    const options = {
        method: 'GET', 
    }
    fetch('https://corona.lmao.ninja/v2/continents/asia?yesterday&strict', options) 
        .then(res => res.json()) 
        .then(res => addData(res))
}


function addData(res) {
    const quote = document.getElementById('covid');

    const cases = document.createElement('p')
    const todayCases = document.createElement('p')
    const deaths = document.createElement('p')
    const todayDeaths = document.createElement('p')
    const recovered = document.createElement('p')
    const active = document.createElement('p')

    cases.innerHTML = `Cases: ${res.cases}`
    todayCases.innerHTML = `Today's Cases: ${res.todayCases}`
    deaths.innerHTML = `Deaths: ${res.deaths}`
    todayDeaths.innerHTML = `Today's Deaths: ${res.todayDeaths}`
    recovered.innerHTML = `Recovered: ${res.recovered}`
    active.innerHTML = `Active Cases: ${res.active}`

    quote.appendChild(cases)
    quote.appendChild(todayCases)
    quote.appendChild(deaths)
    quote.appendChild(todayDeaths)
    quote.appendChild(recovered)
    quote.appendChild(active)
}

document.addEventListener('DOMContentLoaded', function () {
    loadData()
})

