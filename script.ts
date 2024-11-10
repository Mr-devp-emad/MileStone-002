


function addSkill(): void {
    const skillInput = prompt("Enter a new skill:");
    if (skillInput) {
        const skillList = document.getElementById("skills-list") as HTMLUListElement;
        if (skillList) {
            const newSkill = document.createElement("li");
            newSkill.innerText = skillInput;
            skillList.appendChild(newSkill);
        }
    }
}

// Add event listener to the form
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Type assertion and fixing ID names
    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    const firstNameElement = document.getElementById("firstName") as HTMLInputElement;
    const lastNameElement = document.getElementById("lastName") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addressElement = document.getElementById("address") as HTMLInputElement;
    const educationElement = document.querySelector("#education p") as HTMLElement; // Changed to select the editable paragraph
    const experienceElement = document.querySelector("#work-experience p") as HTMLElement; // Changed to select the editable paragraph

    if (profilePictureInput && firstNameElement && lastNameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement) {
        const firstName = firstNameElement.value;
        const lastName = lastNameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const education = educationElement.innerText; // Get the innerText from the editable paragraph
        const experience = experienceElement.innerText; // Get the innerText from the editable paragraph

        // Profile picture
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        // Creating Resume Output
        const resumeOutput = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <ul id="skills-list"></ul>
        `;
        
    
        // Populate skills list
const skillItems = document.querySelectorAll("#skills-list li");
const skillsArray: string[] = [];
skillItems.forEach((item) => {
    // Assert that item is an HTMLLIElement
    const liElement = item as HTMLLIElement;
    skillsArray.push(liElement.innerText);
});

        // Append skills to resume output
        const skillsOutput = skillsArray.map(skill => `<li>${skill}</li>`).join('');
        const finalResumeOutput = resumeOutput.replace('<ul id="skills-list"></ul>', `<ul>${skillsOutput}</ul>`);

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = finalResumeOutput;
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more input elements are missing');
    }
});