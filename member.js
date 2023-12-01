function skillsMember() 
{
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var projects = document.getElementById("projects");
    var memberButton = document.getElementById("memberButton");
    var skillsButton = document.getElementById("skillsButton");
    var contactButton = document.getElementById("contactButton");
    var aboutButton = document.getElementById("aboutButton");
    var projectsButton = document.getElementById("projectsButton");
    member.style.display = "block";
    skills.style.display = "none";
    contact.style.display = "none";
    about.style.display = "none";
    projects.style.display = "none";
    memberButton.style.backgroundColor = "#333";
    skillsButton.style.backgroundColor = "#111";
    contactButton.style.backgroundColor = "#111";
    aboutButton.style.backgroundColor = "#111";
    projectsButton.style.backgroundColor = "#111";
}
