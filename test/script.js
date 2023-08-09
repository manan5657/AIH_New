const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", performSearch);

function performSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  // Clear previous results
  searchResults.innerHTML = "";

  if (searchTerm.includes("eye specialist")) {
    // Simulate fetching and displaying search results
    displaySearchResults([
      { name: "Dr. John Smith", specialization: "Ophthalmologist" },
      { name: "Dr. Jane Doe", specialization: "Optometrist" },
      // Add more search results here
    ]);
    return;
  }
}

function displaySearchResults(results) {
  const resultContainer = document.createElement("div");

  results.forEach((result) => {
    const resultItem = document.createElement("div");
    resultItem.textContent = `${result.name} - ${result.specialization}`;
    resultContainer.appendChild(resultItem);
  });

  searchResults.appendChild(resultContainer);
}
