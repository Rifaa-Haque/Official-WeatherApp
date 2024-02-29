function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input-id");
  let cityElement = document.querySelector("#city-input");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form-id");
searchFormElement.addEventListener("submit", handleSearchSubmit);
