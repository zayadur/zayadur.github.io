
/* make nav link "active" on view */

function highlightLinks(event, linkName) {
    var i, navlink;

    // reset all links to in-"active"
    link = document.getElementsByClassName("navlink");
    for(i = 0; i < linkName.length; i++) {
        link[i].className = link[i].className.replace(" active", "");
    }

    
}

/* tabbed view for projects section */
function openProjects(event, projectName) {
    var i, projectList, tab;

    // hide all tabs by default
    projectList = document.getElementsByClassName("projectList");
    for (i = 0; i < projectList.length; i++) {
        projectList[i].style.display = "none";
    }

    // set all tabs to in-"active"
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" active", "");
    }

    // show and make clicked tab "active"
    document.getElementById(projectName).style.display = "block";
    event.currentTarget.className += " active";
}