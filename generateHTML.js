function generateEngineer(answers) {
  return `
    <div class="card bg-dark mb-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title text-white text-center">${answers.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted text-center">${answers.title}</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${answers.id}</li>
        <li class="list-group-item">
          Email: <a href="#" class="card-link">${answers.email}</a>
        </li>
        <li class="list-group-item">
          Github: <a href="https://github.com/${answers.github}" class="card-link">${answers.github}</a>
        </li>
      </ul>
    </div>
  </div>
  
  `;
}

function generateIntern(answers) {
  return `
    <div class="card bg-dark mb-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title text-white text-center">${answers.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted text-center">${answers.title}</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${answers.id}</li>
        <li class="list-group-item">
          Email: <a href="#" class="card-link">${answers.email}</a>
        </li>
        <li class="list-group-item">
          School: ${answers.school} 
        </li>
      </ul>
    </div>
  </div>
  
  `;
}

function generateManager(answers) {
  return `
    <div class="card bg-dark mb-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title text-white text-center">${answers.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted text-center">${answers.title}</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${answers.id}</li>
        <li class="list-group-item">
          Email: <a href="#" class="card-link">${answers.email}</a>
        </li>
        <li class="list-group-item">
          Office Number: ${answers.officeNumber}
        </li>
      </ul>
    </div>
  </div>
  
  `;
}

const headerHtml = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Main</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <div class="jumbotron">
        <h1 class="display-2 text-center">Engineering Team</h1>
      </div>
  
      <div class="card-deck" style="width: 80rem; margin: auto;">`;

const footerHtml = `</div>
  
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
      </body>
      </html>`;

      module.exports = {
          footerHtml: footerHtml,
          headerHtml: headerHtml,
          generateEngineer: generateEngineer,
          generateIntern: generateIntern,
          generateManager: generateManager
      }