//Searchbox function

function search() {

    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    
    if( searchInput === "opvoedingsproject"){
        window.open("/GloryMenga/Opvoedings.html");    
      }

    if( searchInput === "schoolvisie"){
      window.open("/NelleFavoreel/schoolvisie.html");    
    }
  }