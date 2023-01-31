//Searchbox function

function search() {

    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    
    if( searchInput === "home"){
      window.open("/GloryMenga/home.html");    
    }

    if( searchInput === "opvoedingsproject"){
        window.open("/GloryMenga/Opvoedings.html");    
    }

    if( searchInput === "schoolvisie"){
      window.open("/NelleFavoreel/schoolvisie.html");    
    }

    if( searchInput === "historiek"){
      window.open("/NassimEjja/History.html");    
    }

    if( searchInput === "jan"){
      window.open("/NelleFavoreel/janBerchmans.html");    
    }

    if( searchInput === "motto"){
      window.open("/NelleFavoreel/motto.html");    
    }

    if( searchInput === "jaar"){
      window.open("/NelleFavoreel/jaarthema.html");    
    }

    if( searchInput === "inschrijvingen"){
      window.open("/BerkayUnutkan/wieiswie.html");    
    }

    if( searchInput === "studierichting"){
      window.open("/NordineElOuafrasi/Studierichtingen/studieaanbod.html");    
    }

    if( searchInput === "wieiswie"){
      window.open("/BerkayUnutkan/wieiswie.html");    
    }

    if( searchInput === "vacatures"){
      window.open("/BerkayUnutkan/vacaturesberkay.html");    
    }

    if( searchInput === "contact"){
      window.open("/NelleFavoreel/contact.html");    
    }

  }