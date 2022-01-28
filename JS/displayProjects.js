import { projects } from "./projects.js";

const projectsContainer = document.querySelector(".prjoectsContainer");

displayProjects();

function displayProjects() {
  for (let i = 0; i < projects.length; i++) {
    projectsContainer.innerHTML += `<div class="project">
                                        <h2 class="projectTitle">${projects[i].title}</h2>
                                            <p class="projectDescription">${projects[i].description}</p>
                                            <a href="${projects[i].code}" target="_blank" rel="noopener noreferrer" class="projectBtns">&lt;Code/&gt;</a>
                                            <a href="${projects[i].website}" target="_blank" rel="noopener noreferrer" class="projectBtns">Website</a>
                                        </div>`;
  }
}
