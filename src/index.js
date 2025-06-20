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

class AlertManager {
  constructor(containerId, position = "bottom", direction = "rtl") {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      throw new Error(`Alert container with ID "${containerId}" not found.`);
    }
    // container should have the following styles:
    this.container.classList.add("overflow-x-hidden", "overflow-y-auto");
    // Validate position and direction
    if (position !== "bottom" && position !== "top") {
      throw new Error(`Invalid position "${position}". Use "top" or "bottom".`);
    }
    if (direction !== "rtl" && direction !== "ltr") {
      throw new Error(`Invalid direction "${direction}". Use "rtl" or "ltr".`);
    }
    // Set the position and direction
    this.position = position;
    this.direction = direction;
    this.translateClass =
      this.direction === "rtl" ? "translate-x-full" : "-translate-x-full";

    this.variants = {
      danger: [
        "text-red-800",
        "border-red-300",
        "bg-red-50",
        "dark:text-red-400",
        "dark:bg-gray-800",
        "dark:border-red-800",
      ],
      info: [
        "text-blue-800",
        "border-blue-300",
        "bg-blue-50",
        "dark:text-blue-400",
        "dark:bg-gray-800",
        "dark:border-blue-800",
      ],
      success: [
        "text-green-800",
        "border-green-300",
        "bg-green-50",
        "dark:text-green-400",
        "dark:bg-gray-800",
        "dark:border-green-800",
      ],
      default: [
        "border-gray-300",
        "bg-gray-50",
        "dark:bg-gray-800",
        "dark:border-gray-600",
      ],
    };
  }

  show(message, timeout = 3000, variant = "default") {
    const { alertElement, closeButton } = this._createAlertElement(
      message,
      this.variants[variant]?.join(" ") || this.variants.default.join(" ")
    );
    if (this.position === "top") {
      this.container.append(alertElement);
    } else {
      this.container.prepend(alertElement);
    }
    setTimeout(() => {
      alertElement.classList.remove(`${this.translateClass}`);
    }, 50);

    closeButton.addEventListener("click", () => {
      this._dismissAlert(alertElement);
    });

    setTimeout(() => {
      this._dismissAlert(alertElement);
    }, timeout);
  }

  _dismissAlert(alertElement) {
    alertElement.classList.add(`${this.translateClass}`);
    setTimeout(() => {
      alertElement.remove();
    }, 300);
  }

  _createAlertElement(alertText, variantClass) {
    const container = document.createElement("div");

    container.className =
      this.translateClass +
      " duration-300 ease-in-out border border-t-4 items-center p-4 mb-3 flex " +
      variantClass;
    container.setAttribute("role", "alert");

    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("class", "shrink-0 w-4 h-4");
    icon.setAttribute("aria-hidden", "true");
    icon.setAttribute("fill", "currentColor");
    icon.setAttribute("viewBox", "0 0 20 20");

    const iconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    iconPath.setAttribute(
      "d",
      "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
    );
    icon.appendChild(iconPath);

    const textDiv = document.createElement("div");
    textDiv.className = "ms-3 text-sm font-medium";
    textDiv.textContent = alertText;

    const closeButton = document.createElement("button");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("aria-label", "Close");
    closeButton.className =
      "ms-auto -mx-1.5 -my-1.5 bg-slate-50 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-slate-800 dark:hover:bg-slate-700";

    const srOnly = document.createElement("span");
    srOnly.className = "sr-only";
    srOnly.textContent = "Dismiss";

    const closeIcon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    closeIcon.setAttribute("class", "w-3 h-3");
    closeIcon.setAttribute("aria-hidden", "true");
    closeIcon.setAttribute("fill", "none");
    closeIcon.setAttribute("viewBox", "0 0 14 14");

    const closePath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    closePath.setAttribute("stroke", "currentColor");
    closePath.setAttribute("stroke-linecap", "round");
    closePath.setAttribute("stroke-linejoin", "round");
    closePath.setAttribute("stroke-width", "2");
    closePath.setAttribute("d", "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6");

    closeIcon.appendChild(closePath);
    closeButton.appendChild(srOnly);
    closeButton.appendChild(closeIcon);

    container.appendChild(icon);
    container.appendChild(textDiv);
    container.appendChild(closeButton);

    return {
      alertElement: container,
      closeButton: closeButton,
    };
  }
}

const alertManager = new AlertManager("alerts-container", "top");

function test() {
  const arr = [
    "This is a test message",
    "This is a success message",
    "This is an info message",
    "This is a danger message",
    "This is a test message",
    "This is a success message",
    "This is an info message",
    "This is a danger message",
  ];
  const variants = [
    "default",
    "success",
    "info",
    "danger",
    "default",
    "success",
    "info",
    "danger",
  ];
  arr.forEach((message, index) => {
    setTimeout(() => {
      alertManager.show(index + " " + message, 8000, variants[index]);
    }, index * 1000);
  });
}
