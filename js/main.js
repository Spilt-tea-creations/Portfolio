const url = "./assets/project.json";
const result = document.querySelector(".js-result");
const studioSelection = document.querySelector(".studio-btn");



document.addEventListener('click', (submit) =>
{
  let studioSelection = submit.target.id;
  if (studioSelection !== '') {
      console.log(studioSelection);
      displayProjectsData();
  }
  else { 
      console.log("An element without an id was clicked.");
  }
}
);

function displayProjectsData() {
    fetch(url)
    .then(function (res) {
        return res.json()
    }).then(displayProjectsJson)
    .catch(errorHandling);   
}  

function errorHandling() {
    let error = document.querySelector(".js-error");
    error.innerHTML = `
        <h1>Error!</h1>
        <p>Please wait a few minutes before refreshing the page and trying again</p>
    `;
}

function displayProjectsJson(projects) {
    let html = '';
    if (studioSelection === '') {
        for (let project of projects) {
            html += getProjectsMarkup(project);
        }
    } 
    else {
        for (let project of projects) {
            if (studioSelection === project.studio) {
                html += getProjectsMarkup(project);
                break;
            }
        }
    }
    result.innerHTML = html;
}

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




