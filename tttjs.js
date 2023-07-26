document.addEventListener("DOMContentLoaded", function() {
    const resumeForm = document.getElementById("resumeForm");
    const resumeOutput = document.getElementById("resumeOutput");
  
    resumeForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const summary = document.getElementById("summary").value;
  
      const resumeContent = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Summary</h3>
        <p>${summary}</p>
      `;
  
      resumeOutput.innerHTML = resumeContent;
    });
  });