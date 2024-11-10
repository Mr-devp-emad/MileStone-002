var _a;
function addSkill() {
    var skillInput = prompt("Enter a new skill:");
    if (skillInput) {
        var skillList = document.getElementById("skills-list");
        if (skillList) {
            var newSkill = document.createElement("li");
            newSkill.innerText = skillInput;
            skillList.appendChild(newSkill);
        }
    }
}
// Add event listener to the form
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Type assertion and fixing ID names
    var profilePictureInput = document.getElementById("profilePicture");
    var firstNameElement = document.getElementById("firstName");
    var lastNameElement = document.getElementById("lastName");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var educationElement = document.querySelector("#education p"); // Changed to select the editable paragraph
    var experienceElement = document.querySelector("#work-experience p"); // Changed to select the editable paragraph
    if (profilePictureInput && firstNameElement && lastNameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement) {
        var firstName = firstNameElement.value;
        var lastName = lastNameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.innerText; // Get the innerText from the editable paragraph
        var experience = experienceElement.innerText; // Get the innerText from the editable paragraph
        // Profile picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // Creating Resume Output
        var resumeOutput = "\n        <h2>Resume</h2>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n        <p><strong>First Name:</strong> ").concat(firstName, "</p>\n        <p><strong>Last Name:</strong> ").concat(lastName, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <ul id=\"skills-list\"></ul>\n        ");
        // Populate skills list
        var skillItems = document.querySelectorAll("#skills-list li");
        var skillsArray_1 = [];
        skillItems.forEach(function (item) {
            // Assert that item is an HTMLLIElement
            var liElement = item;
            skillsArray_1.push(liElement.innerText);
        });
        // Append skills to resume output
        var skillsOutput = skillsArray_1.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
        var finalResumeOutput = resumeOutput.replace('<ul id="skills-list"></ul>', "<ul>".concat(skillsOutput, "</ul>"));
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = finalResumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
