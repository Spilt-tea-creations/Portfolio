const url = "./assets/portfolio.json";
const result = document.querySelector(".js-result");

function getProjectsMarkup(project) {
    return `
    <li class="col-md-4 project-box project-box-container">
        <div class="project-box-item">
            <img class="project-img" src="assets/${projects.img}" />
        </div>
        <div class="project-box-item project-box-text">
            <div class="project-box-header">
                <h2>${project.name}</h2>
                <h4>${project.studio}</h4>
                <h4>${project.employer}</h4>
                <h4>${project.date}</h4>
            </div>
        </div>
    </li>
    `;
}

function displayProjectsJson(projects) {
    let selectedStudio = elementId;
    let html = '';
    if (selectedStudio === elementId) {
        for (let project of projects.projects) {
            html += getProjectsMarkup(projects);
        }
    } 
    else {
        errorHandling();
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
    .then(function (res) {
        return res.json()
    }).then(displayProjectsJson)
    .catch(errorHandling);  
}  

  // Create event listener
  document.addEventListener('click', (btn) =>
  {
    // Retrieve id from clicked element
    let elementId = btn.target.id;
    // If element has id
    if (elementId !== '') {
        console.log(elementId);
        displayProjectsData();
    }
    // If element has no id
    else { 
        console.log("An element without an id was clicked.");
    }
  }
  );