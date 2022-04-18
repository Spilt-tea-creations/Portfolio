const url = "./assets/portfolio.json";
const result = document.querySelector(".js-result");
const form = document.querySelector(".js-form");
const studioSelection = document.querySelector(".studioSelector");

function getProjectMarkup(project) {
    return `
    <li class="col-md-4 project-box project-box-container">
        <div class="project-box-item img-container">
            <img class="project-img" src="assets/${project.img}" />
        </div>
        <div class="project-box-item project-box-text">
            <div class="project-box-header">
                <h3>${project.name}</h3>
                <h5>${project.employer}</h5>
                <h5>${project.date}</h5>
                <h5>${project.studio}</h5>
            </div>
        </div>
    </li>
    `;
}


function displayProjectsJson(projects) {
    let selectedStudio = studioSelection.value;
    let html = '';
    if (selectedStudio === 'All') {
        for (let project of projects.projects) {
            html += getProjectMarkup(project);
        }
    }
    else {
        if (selectedStudio === 'All') {
            for (let project of projects.projects) {
                html += getProjectMarkup(project);
            }
       
        }
    }
    result.innerHTML = html;
}

function errorHandling() {
    let error = document.querySelector(".js-error");
    error.innerHTML = `
        <h1>Error!</h1>
        <p>Please wait a few minutes before refreshing the page and trying again</p>
    `;

}

function displayProjectsData() {
    fetch(url)
    .then(function (response) {
        return response.json();
      })
    .then(displayProjectsJson)
    .catch(errorHandling);  
}  
function handleSubmit(event) {
    event.preventDefault();
    displayProjectsData();
}

form.addEventListener('submit', handleSubmit);