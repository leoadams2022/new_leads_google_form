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
  var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

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

function getData() {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSgC-A-6CB6Ve5afPacuSLF1I55Uqr2EIhW6zpUzhZL9al6QRbVj8VZnzJKgiMPcBNEx1vWEDiGlABB/pub?gid=221979708&single=true&output=csv";
  fetch(url)
    .then((response) => response.text())
    .then((d) => {
      // Process CSV data
      const rows = d.split("\n").map((row) => row.split(","));
      console.log(rows);
      populateTable(rows);
      slider(rows);
    });
}
getData();

function slider(data) {
  // / Extract headers and rows
  const [headers, ...rows] = data;

  const slider = document.getElementById("slider");
  rows.forEach((row) => {
    const temp = (
      Timestamp,
      LastName,
      Phone,
      fileName,
      LeadSource,
      ClickedAdd,
      Company,
      LeadStatus,
      Disposition,
      Notes
    ) => {
      const d = document.createElement("div");
      d.classList.add(
        ..."flex-none w-[33%] rounded-2xl shadow-lg p-4 snap-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700".split(
          " "
        )
      );
      const t = `
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">${LastName}</h5>
        <span href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            ${formatDateToCustomString(parseDateString(Timestamp))}
        </span>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">

            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                           ${Phone}
                        </p>
                    </div>
                    
                </div>
            </li>
            
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="shrink-0">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" /></svg>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                           ${fileName}
                        </p>
                    </div>
                    
                </div>
            </li>

            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                           ${LeadSource}
                        </p>
                    </div>
                    
                </div>
            </li>

            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" /></svg>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                           ${ClickedAdd}
                        </p>
                    </div>
                    
                </div>
            </li>

            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                           ${Company}
                        </p>
                    </div>
                    
                </div>
            </li>

            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z" /></svg>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                           ${LeadStatus}
                        </p>
                    </div>
                    
                </div>
            </li>
            
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" /></svg>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                           ${Disposition}
                        </p>
                    </div>
                    
                </div>
            </li>
            
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                           ${Notes}
                        </p>
                    </div>
                    
                </div>
            </li>

        </ul>
   </div>
`;
      d.innerHTML = t;
      return d;
    };
    slider.appendChild(temp(...row));

    const card = document.createElement("div");
    card.className =
      "flex-none w-64 bg-white rounded-2xl shadow-lg p-4 snap-center";
    // Build card content
    const title = document.createElement("h2");
    title.className = "text-lg font-semibold mb-2";
    title.textContent = row[1] === "" ? "No Name" : row[1];
    card.appendChild(title);
    headers.forEach((field, idx) => {
      if (idx === 1) return; // skip last name (used as title)
      const p = document.createElement("p");
      p.className = "text-sm text-gray-600 mb-1";
      p.innerHTML = `<span class='font-medium'>${field}:</span> ${
        row[idx] || "-"
      }`;
      card.appendChild(p);
    });
    // slider.appendChild(card);
  });

  // Slider controls
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const cardWidth = 16 * 4 + 16; // width 64 (w-64 = 16rem = 256px), margin-right 1rem (4)

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -300, behavior: "smooth" });
  });
  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: 300, behavior: "smooth" });
  });
}
function populateTable(data) {
  const tableHeaderRow = document.getElementById("table-header-row");
  const tableBody = document.getElementById("table-body");
  const headerArr = data[0];
  console.log("Header Array:", headerArr);
  // Clear existing rows
  tableHeaderRow.innerHTML = "";
  tableBody.innerHTML = "";
  headerArr.forEach((header) => {
    tableHeaderRow.appendChild(th(header, () => {}));
  });
  data.slice(1).forEach((row) => {
    const trEl = tr();
    row.forEach((col, index) => {
      let txt = col;
      // Check if the column is a timestamp
      if (headerArr[index].toLowerCase().includes("timestamp")) {
        const date = parseDateString(col); //.toLocaleString();
        txt = formatDateToCustomString(date);
      }
      trEl.appendChild(td(txt, headerArr[index]));
    });
    tableBody.appendChild(trEl);
  });
}

// HELPER FUNCTIONS
function parseDateString(dateString) {
  // Remove whitespace and tabs
  const trimmed = dateString.trim();

  // Convert to Date object
  const date = new Date(trimmed);

  // Check for invalid date
  if (isNaN(date)) {
    throw new Error("Invalid date format");
  }

  return date;
}
function formatDateToCustomString(date) {
  const options = { month: "short" }; // e.g., "Aug"
  const month = date.toLocaleString("en-US", options);
  const day = date.getDate();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const isPM = hours >= 12;

  hours = hours % 12 || 12; // convert 24h to 12h format

  const ampm = isPM ? "PM" : "AM";

  return `${month}, ${day} - ${hours}:${minutes} ${ampm}`;
}
const th = (txt, sortFnName = null) => {
  const th = document.createElement("th");
  th.className = "px-6 py-3";
  th.scope = "col";
  th.innerHTML = ` <div class="flex items-center">
    ${txt}
    ${
      sortFnName
        ? `<a href="#"
      ><svg
        class="w-3 h-3 ms-1.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        onclick='${sortFnName}()'
      >
        <path
          d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"
        /></svg
    ></a>`
        : ""
    }
  </div>`;
  return th;
};
const tr = (className = "", id = "") => {
  const trEl = document.createElement("tr");
  trEl.className =
    "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 " +
    className;
  if (id) {
    trEl.id = id;
  }
  return trEl;
};
const td = (txt, className) => {
  const tdEl = document.createElement("td");
  tdEl.className = "px-6 py-4 " + className;
  tdEl.innerHTML = txt;
  return tdEl;
};
