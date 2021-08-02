const fetchAPI = () => {
    document.querySelectorAll('.data').forEach(e => e.remove());
    console.log('FETCH API')
    fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => {
            console.log(`Success GET ${data.length} DATA`)
            console.log('START POPULATE')
            populate(data);
            console.log('FINISH POPULATE')
        });
}
const tbody = document.querySelector('tbody');
const ctd = (c, d) => {
    let a = document.createElement('td');
    a.classList.add(c);
    a.innerHTML = d
    return a
}
const template = (data) => {
    let a = document.createElement('tr');
    a.classList.add('data')
    a.appendChild(ctd('title',data.title));
    a.appendChild(ctd('director',data.director));
    a.appendChild(ctd('release',data.release_date));
    a.appendChild(ctd('duration',data.running_time));
    return a
}
const populate = (data) => {
    data.forEach(films => {
        let temp = template(films);
        tbody.appendChild(temp);
    });
}

const search = document.querySelector('#search');

search.addEventListener('input', () => {
    let data = document.querySelectorAll('.data');
    let value = search.value;
    console.log(value);
    data.forEach(e => {
        e.style.display = 'none';
        if(e.innerHTML.includes(value)){
            e.style.display = '';
        }
    });
})