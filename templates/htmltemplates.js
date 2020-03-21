const generateHTML = function (teamstr) {

        console.log("Inside gen html");
        return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>TEAM</title>
   <link href="https://fonts.googleapis.com/css?family=Bungee+Inline|Bungee+Shade&display=swap" rel="stylesheet">
   <style>
   body {
    background-color: white;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: 0%;
    height: 100vh;
}
.header {
    background-color:rgb(252, 48, 65);
    border: solid black;
    text-align: center;
    font-size: 30px;
    color: white;
}
.container-body {
    display: flex;
    justify-content: space-evenly;
}
.card {
    background-color:rgb(255, 255, 255);
    margin-top: 4%;
    margin-left:2%;
    margin-right: 2%;
    border:double;
    font-size: x-large;
    
}
.card-header{
   
    background-color: rgb(12, 113, 228);
    color: white;
}

   </style>
   
</head>
    
    <body>
   <div class=header>
       <h1>My Team</h1>
   </div>
   <div class="container-body">
         ${teamstr} 
         </div>
    </body>
    
    </html>`

    }

    //arr is the employee object and looking for the properties in that class
    const generateCard = function (arr) {
        //if else statement
        let roleInfo;

        if (arr.title === "Manager") {
            roleInfo = `Office Number: ${arr.officeNumber}`
        } else if (arr.title === "Engineer") {
            roleInfo = `Github Username: ${arr.github}`
        } else if (arr.title === "Intern") {
            roleInfo = `School: ${arr.school}`
        }

        return `<div class="card">
<div class="card-header">
    <h2>${arr.name}</h2>  
    <h2><i class="far fa-user"></i> ${arr.title}</h2>
    <hr>
</div>
<div class="card-body">
    <ul>
        <li>ID: ${arr.id}</li>
        <li>Email: ${arr.email}</li>
        <li>${roleInfo} </li>
    </ul>
</div>
</div>`
    }

    exports.generateHTML = generateHTML
    exports.generateCard = generateCard;