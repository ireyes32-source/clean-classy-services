document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".quote-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      const name = form.querySelector('input[name="name"]')?.value.trim();
      const email = form.querySelector('input[name="email"]')?.value.trim();
      const service = form.querySelector('select[name="service"]')?.value.trim();

      if (!name || !email || !service) {
        event.preventDefault();
        alert("Please complete your name, email, and service before submitting.");
      }
    });
  }
});
































