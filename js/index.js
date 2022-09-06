function setupAnimations() {
  const projectsBtn = document.getElementById('projectsBtn');
  const resumeBtn = document.getElementById('resumeBtn');
  const dropdown = document.getElementById('apps-dropdown-container');

  // Add listener to mouse enter for projects button and resume button
  projectsBtn.addEventListener('mouseenter', (e) => {
    animateIt('projectsArrow');
  });
  resumeBtn.addEventListener('mouseenter', function(e) {
    animateIt('resumeArrow');
  });
  
  // Add listener to mouse leave for projects button and resume button
  projectsBtn.addEventListener('mouseleave', (e) => {
    stopAnimating('projectsArrow');
  });
  resumeBtn.addEventListener('mouseleave', (e) => {
    stopAnimating('resumeArrow');
  });

  // Add listener to window for when apps dropdown isn't clicked
  window.addEventListener('click', (e) => {
    if(e.target.id !== 'apps-dropdown') {
      dropdown.style.display = 'none';
    }
  });

  const upButtonContainer = document.getElementById('upButtonContainer');
  // Add listener for user scrolling
  window.addEventListener('scroll', (e) => {
    const distance = window.innerHeight/2;
    if(document.body.scrollTop > distance || document.documentElement.scrollTop > distance) {
      upButtonContainer.style.animation = 'pop 0.25s forwards';
    } else {
      upButtonContainer.style.animation = 'unpop 0.25s forwards';
    }
  });
}

async function loadProjects() {
  // Get project list container
  const projectsContainer = document.getElementById('projectsContainer');

  let projects;
  try {
    const data = await fetch(`https://api.github.com/users/jcarr98/repos`);
    projects = JSON.parse(await data.text());
  } catch(e) {
    // Create load error
    const loadError = createLoadError();
    // Clear current loading text
    projectsContainer.innerHTML = '';
    // Append load error
    projectsContainer.appendChild(loadError);
    return;
  }

  // Clear loading text
  projectsContainer.innerHTML = "";

  // Create a project card for each project and add it to the container
  for(const project of projects) {
    const projectCard = createProjectCard(project.name, project.description, project.svn_url);
    projectsContainer.appendChild(projectCard);
  }
}

function createLoadError() {
  // Overal load error container
  const loadError = document.createElement('div');

  // Load error text
  const text = document.createElement('span');
  text.innerText = 'Failed to load projects from Github. Try reloading, or ';

  // Github anchor
  const gAnchor = document.createElement('a');
  gAnchor.href = 'https://www.github.com/jcarr98';
  gAnchor.target = '_blank';
  gAnchor.innerText = 'visit my Github directly';

  // Add text and anchor to container
  loadError.appendChild(text);
  loadError.appendChild(gAnchor);

  return loadError;
}

function createProjectCard(name, description, url) {
  // Overall project card item
  const projectCard = document.createElement('div');
  projectCard.classList.add('card');
  projectCard.classList.add('card-hov');

  // Create header
  const projectCardHeader = document.createElement('div');
  projectCardHeader.classList.add('card-header');
  const projectCardHeaderText = document.createElement('h1');
  projectCardHeaderText.innerHTML = name;
  projectCardHeader.appendChild(projectCardHeaderText);

  // Create body
  const projectCardBody = document.createElement('div');
  projectCardBody.classList.add('card-body');
  projectCardBody.innerHTML = description

  // Create footer
  const projectCardFooter = document.createElement('div');
  projectCardFooter.classList.add('card-footer');
  const projectCardButton = document.createElement('a');
  // Create button in footer
  projectCardButton.classList.add('btn');
  projectCardButton.classList.add('btn-plain');
  projectCardButton.href = url;
  projectCardButton.target = '_blank';
  projectCardButtonText = document.createElement('span');
  projectCardButtonText.innerHTML = 'To Github Repo\t';
  projectCardButtonText.style = 'padding-right: 5px';
  projectCardButtonIcon = document.createElement('i');
  projectCardButtonIcon.classList.add('fa-solid');
  projectCardButtonIcon.classList.add('fa-arrow-up-right-from-square');
  projectCardButton.appendChild(projectCardButtonText);
  projectCardButton.appendChild(projectCardButtonIcon);
  projectCardFooter.appendChild(projectCardButton);

  projectCard.appendChild(projectCardHeader);
  projectCard.appendChild(projectCardBody);
  projectCard.appendChild(projectCardFooter);

  return projectCard;
}

function animateIt(id) {
  const arrow = document.getElementById(id);
  arrow.style.animation = 'godown 1s linear infinite';
}

function stopAnimating(id) {
  const arrow = document.getElementById(id);

  arrow.style.animation = 'none';
}

function toggleDropdown() {
  let dropdown = document.getElementById('apps-dropdown-container');
  const children = dropdown.children;
  const display = dropdown.style.display;
  
  // Add or remove animation from children;
  for(let i = 0; i < children.length; i++) {
    let a = children[i];
    a.style.animationName = 'fadein';
    a.style.animationDuration = '1s';
    a.style.animationDelay = `${i/6}s`;
    a.style.animationFillMode = 'forwards';
  }

  // Change visibility
  dropdown.style.display = display === 'block' ? 'none' : 'block';
}