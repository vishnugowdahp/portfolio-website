// Show project details in a modal popup
function showProjectDetails(projectElement) {
    const modal = document.getElementById("projectModal");
    const title = document.getElementById("projectTitle");
    const description = document.getElementById("projectDescription");

    // Get project title and description from data attributes
    const projectTitle = projectElement.getAttribute("data-title");
    const projectDescription = projectElement.getAttribute("data-description");

    // Update modal content
    title.textContent = projectTitle;
    description.textContent = projectDescription;

    modal.style.display = "block";
}

// Close the modal
function closeProjectDetails() {
    document.getElementById("projectModal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
