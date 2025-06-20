document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const url =
      "https://docs.google.com/forms/u/1/d/e/1FAIpQLScP64Y7mrK3-lPMSwYrqFe6gEMFxM3zA4A-2U1-ins_iIKznA/formResponse";

    // Create URL-encoded string for the POST body
    const urlEncodedData = new URLSearchParams(formData).toString();

    // Submit the form using fetch API
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlEncodedData,
      mode: "no-cors", // Important for Google Forms
    })
      .then(() => {
        // Show success message
        alert("Form submitted successfully!");
        form.reset(); // Reset the form
      })
      .catch((error) => {
        // Show error message
        alert("There was an error submitting the form. Please try again.");
        console.error("Error:", error);
      });
  });
});
