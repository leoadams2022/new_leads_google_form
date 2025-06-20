document.addEventListener("DOMContentLoaded", function () {
  function handleDarkMode() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    var themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );

    // Change the icons inside the button based on previous settings
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      themeToggleLightIcon.classList.remove("hidden");
    } else {
      themeToggleDarkIcon.classList.remove("hidden");
    }

    var themeToggleBtn = document.getElementById("theme-toggle");

    themeToggleBtn.addEventListener("click", function () {
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle("hidden");
      themeToggleLightIcon.classList.toggle("hidden");

      // if set via local storage previously
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }

        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }
    });
  }
  handleDarkMode();

  function handleShowMore() {
    const moreBtn = document.getElementById("moreBtn");
    const moreBtnText = moreBtn.querySelector("span"); // Get the text node inside the button
    const moreBtnIcon = moreBtn.querySelector("svg"); // Get the icon inside the button
    const extraInfo = document.getElementById("extraInfo");
    moreBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link behavior
      if (extraInfo.style.height === "0px" || extraInfo.style.height === "") {
        extraInfo.style.height = "auto"; // Expand the section
        extraInfo.style.overflow = "visible"; // Allow   overflow
        moreBtnText.textContent = "Show Less"; // Change button text to "less"
        moreBtnIcon.classList.add("-rotate-90"); // Rotate the icon
        setTimeout(() => {
          extraInfo.style.transform = "scaleY(1)"; // Expand the section
        }, 50);
      } else {
        moreBtnText.textContent = "Show More"; // Change button text to "more"
        moreBtnIcon.classList.remove("-rotate-90"); // Rotate the icon
        extraInfo.style.transform = "scaleY(0)"; // Expand the section
        setTimeout(() => {
          extraInfo.style.height = "0px"; // Collapse the section
          extraInfo.style.overflow = "hidden"; // Hide overflow
        }, 400);
      }
    });
  }
  handleShowMore();

  function populateSelectInputs() {
    const clickedAddSelect = document.getElementById("clickedAdd");
    const clickedAddSelectOptions = [
      {
        value: "سلامة الموقف الضريبي",
        text: "سلامة الموقف الضريبي",
        selected: false,
      },
      {
        value: "خدمة التسعير و الاستشارة المجانية",
        text: "خدمة التسعير و الاستشارة المجانية",
        selected: false,
      },
      { value: "unknown", text: "Unknown", selected: false },
    ];
    // Populate the clickedAdd select element
    clickedAddSelectOptions.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option.value;
      opt.textContent = option.text;
      opt.selected = option.selected;
      clickedAddSelect.appendChild(opt);
    });

    const leadStatusSelect = document.getElementById("leadStatus");
    const leadStatusSelectOptions = [
      {
        value: "Attempting to Contact",
        text: "Attempting to Contact",
        selected: false,
      },
      {
        value: "Cold",
        text: "Cold",
        selected: false,
      },
      {
        value: "Contact Failed",
        text: "Contact Failed",
        selected: false,
      },
      {
        value: "Future Interest",
        text: "Future Interest",
        selected: false,
      },
      {
        value: "Hot",
        text: "Hot",
        selected: false,
      },
      {
        value: "Interested",
        text: "Interested",
        selected: false,
      },
      {
        value: "Junk Lead",
        text: "Junk Lead",
        selected: false,
      },
      {
        value: "Meeting Scheduled",
        text: "Meeting Scheduled",
        selected: false,
      },
      {
        value: "Not Interested",
        text: "Not Interested",
        selected: false,
      },
      {
        value: "Not Qualified",
        text: "Not Qualified",
        selected: false,
      },
      {
        value: "Under Follow-Up",
        text: "Under Follow-Up",
        selected: false,
      },
    ];
    leadStatusSelectOptions.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option.value;
      opt.textContent = option.text;
      opt.selected = option.selected;
      leadStatusSelect.appendChild(opt);
    });

    const dispositionSelect = document.getElementById("disposition");
    const dispositionSelectOptions = [
      {
        value: "Busy",
        text: "Busy",
        selected: false,
      },
      {
        value: "Closed",
        text: "Closed",
        selected: false,
      },
      {
        value: "Contact me Later.",
        text: "Contact me Later.",
        selected: false,
      },
      {
        value: "Contact me via Email",
        text: "Contact me via Email",
        selected: false,
      },
      {
        value: "Contact me via WhatsApp",
        text: "Contact me via WhatsApp",
        selected: false,
      },
      {
        value: "Customer Refused Contact",
        text: "Customer Refused Contact",
        selected: false,
      },
      {
        value: "CX'll inform the management",
        text: "CX'll inform the management",
        selected: false,
      },
      {
        value: "Disconnected Number",
        text: "Disconnected Number",
        selected: false,
      },
      {
        value: "Do Not Call (DNC)",
        text: "Do Not Call (DNC)",
        selected: false,
      },
      {
        value: "Future Interest",
        text: "Future Interest",
        selected: false,
      },
      {
        value: "I Will Get Back To You",
        text: "I Will Get Back To You",
        selected: false,
      },
      {
        value: "Language Barrier",
        text: "Language Barrier",
        selected: false,
      },
      {
        value: "No Answer",
        text: "No Answer",
        selected: false,
      },
      {
        value: "Not a Business",
        text: "Not a Business",
        selected: false,
      },
      {
        value: "Not GCC number",
        text: "Not GCC number",
        selected: false,
      },
      {
        value: "Not Interested",
        text: "Not Interested",
        selected: false,
      },
      {
        value: "Not Qualified",
        text: "Not Qualified",
        selected: false,
      },
      {
        value: "Voicemail",
        text: "Voicemail",
        selected: false,
      },
      {
        value: "Will Visit You in the Office",
        text: "Will Visit You in the Office",
        selected: false,
      },
      {
        value: "Wrong Number",
        text: "Wrong Number",
        selected: false,
      },
    ];
    dispositionSelectOptions.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option.value;
      opt.textContent = option.text;
      opt.selected = option.selected;
      dispositionSelect.appendChild(opt);
    });
  }
  populateSelectInputs();
});
