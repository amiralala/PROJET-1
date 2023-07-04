

window.addEventListener("load", (event) => {
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const project = data[data.length - 1];
            console.log(project);

            let element1 = document.getElementById("project-title");
            element1.innerHTML = project.name;
            let element2 = document.getElementById("project-subtitle");
            element2.innerHTML = project.description;
           let element3 = document.getElementById("project-content");
            element3.innerHTML = project.content;
            let element4 = document.getElementById("date");
            element4.innerHTML = project.completed_on;

        })
        .catch((err) => console.log(err));


});


