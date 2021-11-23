const makeTeam = teamArray => {

    const makeManager = manager => {
        return `
        <!--Card for the Manager Information-->

<div class="card hovercard">
    <div class="cardheader">
        <div class="card-heading">
            ${manager.name}
        </div>

        <div class="role">
            <img src="../images/Manager.ico"></img>
            ${manager.role}
        </div>
    </div>
    <div class="card-body">
        <div class="desc">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.managerId}</li>
                <li class="list-group-item">Email: ${manager.managerEmail}</li>
                <li class="list-group-item">Office: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
</div>  
        `
    }

    const makeIntern = intern => {
        return `
        <!--Card for intern information-->

        <div class="card hovercard">
            <div class="cardheader">
                <div class="card-heading">
                    ${intern.name}
                </div>
        
                <div class="role">
                    <img src="../images/Intern.ico"></img>
                    ${intern.role}
                </div>
            </div>
            <div class="card-body">
                <div class="desc">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: ${intern.email}</li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                </div>
            </div>
        </div>
        
        `
    }

    const makeEngineer = engineer1 => {
        return `
        <!--Card for intern information-->

        <div class="card hovercard">
            <div class="cardheader">
                <div class="card-heading">
                    ${engineer1.name}
                </div>
        
                <div class="role">
                    <img src="../images/Intern.ico"></img>
                    ${engineer1.role}
                </div>
            </div>
            <div class="card-body">
                <div class="desc">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineer1.id}</li>
                        <li class="list-group-item">Email: ${engineer1.email}</li>
                        <li class="list-group-item">School: ${engineer1.school}</li>
                    </ul>
                </div>
            </div>
        </div>
        
        `
    };
    const mapping = [];

    mapping.push(teamArray
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => makeManager(manager)));
    mapping.push(teamArray
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => makeIntern(intern)));
        mapping.push(teamArray
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => makeEngineer(engineer)));
    
    return mapping.join('')

}








module.exports = teamArray => {
    return `
<!DOCTYPE html>
<html>

<head>
    <title>My Team</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet"
        id="bootstrap-css">
    <link href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet">

    <link href="../css/style.css" rel="stylesheet">
</head>

<body>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <!--Container contains cards that hold employee information-->
    <div class="container">

        ${makeTeam(teamArray)}

    </div>

    <footer>
    </footer>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
</body>

</html>


    `
}


