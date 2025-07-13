let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");
let darkToggleEl = document.getElementById("darkModeToggle");

//Apply dark mode from localStorage
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
  darkToggleEl.checked = true;
}

//Toggle dark mode and update localStorage
darkToggleEl.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", darkToggleEl.checked);
});

//Create and append search result card
function createAndAppendSearchResult(result) {
  let { link, title, description } = result;

  let resultItemEl = document.createElement("div");
  resultItemEl.classList.add("result-item");

  let titleEl = document.createElement("a");
  titleEl.href = link;
  titleEl.target = "_blank";
  titleEl.textContent = title;
  titleEl.classList.add("result-title");
  resultItemEl.appendChild(titleEl);

  resultItemEl.appendChild(document.createElement("br"));

  let urlEl = document.createElement("a");
  urlEl.classList.add("result-url");
  urlEl.href = link;
  urlEl.target = "_blank";
  urlEl.textContent = link;
  resultItemEl.appendChild(urlEl);

  resultItemEl.appendChild(document.createElement("br"));

  let descriptionEl = document.createElement("p");
  descriptionEl.classList.add("link-description");
  descriptionEl.textContent = description;
  resultItemEl.appendChild(descriptionEl);

  searchResultsEl.appendChild(resultItemEl);
}

//4. Show results
function displayResults(searchResults) {
  spinnerEl.classList.add("d-none");
  for (let result of searchResults) {
    createAndAppendSearchResult(result);
  }
}

//Fetch API results
function searchWikipedia(event) {
  if (event.key === "Enter") {
    spinnerEl.classList.remove("d-none");
    searchResultsEl.textContent = "";

    let searchInput = searchInputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let { search_results } = jsonData;
        displayResults(search_results);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
        spinnerEl.classList.add("d-none");
      });
  }
}

//Attach key event
searchInputEl.addEventListener("keydown", searchWikipedia);
