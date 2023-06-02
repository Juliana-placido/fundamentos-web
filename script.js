function startJourney() {
    const currentURL = window.location.href;
    const searchTerm = "harry_potter";
    const index = currentURL.indexOf(searchTerm);

    if (index !== -1) {
      alert("Esta página está relacionada ao Harry Potter!");
    } else {
      alert("Esta página não está relacionada ao Harry Potter.");
    }
  }


  const button = document.getElementById('startButton');


  button.addEventListener('click', startJourney);