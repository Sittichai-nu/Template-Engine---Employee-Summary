const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter your ID"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email"
        },
        {
            type: "list",
            name: "title",
            message: "Enter your job title",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ]);
};
function manager() {
    return inquirer.prompt([{
        type: "input",
        message: "Enter office number",
        name: "office number"
    }]);
}
function engineer() {
    return inquirer.prompt([{
        type: "input",
        message: "Enter office number",
        name: "office number"
    }]);
}
function intern() {
    return inquirer.prompt([{
        type: "input",
        message: "Enter office number",
        name: "office number"
    }]);
};


function generateHTML(answers) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">

  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="team">My Team</div>
  </div>
  <div class="container">
    <div class="card>
    <h1 class="name">${answers.name}</h1>
    <h2 class="lead">${answers.title}.</h2>
    </div>
    <ul class="list-group">
      <li class="list-group-item">ID${answers.id}</li>
      <li class="list-group-item">Email: ${answers.email}</li>
      <li class="list-group-item">Office number: ${answers.officeNumber}</li>
    </ul>
    <div class="card>
    <h1 class="name">${answers.name}</h1>
    <h2 class="lead">${answers.title}.</h2>
    </div>
    <ul class="list-group">
      <li class="list-group-item">ID${answers.id}</li>
      <li class="list-group-item">Email:${answers.email}</li>
      <li class="list-group-item">Git Hub:${answers.github}</li>
    </ul>
    <div class="card>
    <h1 class="name">${answers.name}</h1>
    <h2 class="lead">${answers.title}.</h2>
    </div>
    <ul class="list-group">
      <li class="list-group-item">ID${answers.id}</li>
      <li class="list-group-item">Email: ${answers.email}</li>
      <li class="list-group-item">School: ${answers.school}</li>
    </ul>
  </div>

</body>
</html>`;
};

promptUser()
    .then(function (answers) {
        const html = generateHTML(answers);

        return writeFileAsync("index.html", html);
    })
    .then(function () {
        console.log("Successfully wrote to index.html");
    })
    .catch(function (err) {
        console.log(err);
    });
