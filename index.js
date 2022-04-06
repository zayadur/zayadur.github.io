
/* make nav link "active" on view */

/* tabbed view for projects section */
function openProjects(event, projectName) {
    var i, tabcontent, tablinks;

    // hide all but first tab by default
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // set all tabs to in-"active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // show and make clicked tab "active"
    document.getElementById(projectName).style.display = "block";
    event.currentTarget.className += " active";
}