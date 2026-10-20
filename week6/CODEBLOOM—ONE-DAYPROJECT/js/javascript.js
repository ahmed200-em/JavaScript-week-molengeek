let dropdownBtn = document.querySelector(".dropdown-btn");
let dropdownMenu = document.querySelector(".dropdown-menu");
let dropdownLinks = document.querySelectorAll(".dropdown-menu__link");
let courseSelect = document.getElementById("course");
let experienceSelect = document.getElementById("experience");
let scheduleSelect = document.getElementById("schedule");
let formatSelect = document.getElementById("format");
let confirmCheckbox = document.querySelector(".form__checkbox");
let formError = document.querySelector(".form-error");
let fullName = document.getElementById("fullname");
let email = document.getElementById("email");
let form = document.querySelector(".form");
let registrationSection = document.getElementById("registration");

let formTitle = document.querySelector(".form-card__title");
let formSubtitle = document.querySelector(".form-card__subtitle");

dropdownMenu.style.display = "none";
dropdownBtn.addEventListener("click", function () {
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      let selectedCourseText = link.textContent.trim().toLowerCase();

      Array.from(courseSelect.options).forEach((option) => {
        if (option.text.trim().toLowerCase() === selectedCourseText) {
          courseSelect.value = option.value;
        }
      });

      if (registrationSection) {
        registrationSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

function inputValidation() {
  const nameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    nameValue.length < 2 ||
    nameValue.length > 70 ||
    !/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[' -][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(nameValue)
  ) {
    formError.textContent = "! Please enter a valid full name.";
    return false;
  }

  if (emailValue === "" || !emailRegex.test(emailValue)) {
    formError.textContent = "! Please enter a valid email address.";
    return false;
  }

  if (!courseSelect.value) {
    formError.textContent = "! Please select a course.";
    return false;
  }

  if (!experienceSelect.value) {
    formError.textContent = "! Please select your experience level.";
    return false;
  }

  if (!scheduleSelect.value) {
    formError.textContent = "! Please select a preferred schedule.";
    return false;
  }

  if (!formatSelect.value) {
    formError.textContent = "! Please select a learning format.";
    return false;
  }

  if (!confirmCheckbox.checked) {
    formError.textContent =
      "! You must confirm that your information is correct.";
    return false;
  }

  formError.textContent = "";
  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (inputValidation()) {
    registrationSection.classList.add("form-card--success");
    registrationSection.innerHTML = `
                <div class="form-card__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
      <h2 class="form-card__title">Your plan is ready!</h2>

      <p class="form-card__subtitle">
        Nice to meet you,
        <span id="summary-user-name">${fullName.value}</span>.
        Here is your learning plan.
      </p>

      <div class="plan-card">
        <span class="plan-card__badge" id="summary-experience">
          ${experienceSelect.options[experienceSelect.selectedIndex].text}
        </span>

        <h3 class="plan-card__title" id="summary-course">
          ${courseSelect.options[courseSelect.selectedIndex].text}
        </h3>

        <p class="plan-card__project">
          Your project:
          <span id="summary-project">
            build an interactive expense tracker.
          </span>
        </p>

        <div class="plan-card__details">

          <div class="plan-card__row">
            <span class="plan-card__label">Student</span>
            <span class="plan-card__value" id="summary-student">
              ${fullName.value}
            </span>
          </div>

          <div class="plan-card__row">
            <span class="plan-card__label">Email</span>
            <span class="plan-card__value" id="summary-email">
              ${email.value}
            </span>
          </div>

          <div class="plan-card__row">
            <span class="plan-card__label">Schedule</span>
            <span class="plan-card__value" id="summary-schedule">
              ${scheduleSelect.options[scheduleSelect.selectedIndex].text}
            </span>
          </div>

          <div class="plan-card__row">
            <span class="plan-card__label">Format</span>
            <span class="plan-card__value" id="summary-format">
              ${formatSelect.options[formatSelect.selectedIndex].text}
            </span>
          </div>

          <div class="plan-card__row">
            <span class="plan-card__label">Duration</span>
            <span class="plan-card__value" id="summary-duration">
              6 weeks
            </span>
          </div>

        </div>
      </div>

      <p class="plan-card__next-step">
        Your next step: prepare a computer, headphones and an internet connection.
      </p>

      <button
        type="button"
        class="btn-primary btn-primary--full"
        id="edit-info-btn"
      >
        Edit my information
      </button>
    `;
  }
});
