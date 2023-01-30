const form = document.getElementById("search-form");
const input = document.getElementById("search-input");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const query = input.value;
  window.location.href = `/GloryMenga/Opvoedings.html${encodeURIComponent(query)}`;
});
