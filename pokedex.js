let pokemonArray = []; 
let pokemonNumArray = [];
let searchedPokemon = [];

function searchName() {
    var l ,i;
    var nameValue = document.getElementById("pokeNameSearchBox").value;
    
    var ul = document.getElementById("pokeList");
    var li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        var span = li[i].getElementsByTagName("span")[0];
        pokemonArray[i] = (span.textContent.toUpperCase());
    }

    for (l = 0; l < pokemonArray.length; l++){
        if (pokemonArray[l].indexOf(nameValue.toUpperCase()) > -1){
            console.log(pokemonArray[l]);
            searchedPokemon.push(pokemonArray[l]);
        }
    }
    alert(searchedPokemon);
}

function nameTypeSearch() {
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById('pokeNameSearchBox');
    filter = input.value.toUpperCase();
    ul = document.getElementById("pokeList");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      var span = li[i].getElementsByTagName("span")[0];
      txtValue = span.textContent || span.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}


function searchNum() {
    var l ,i;
    var numValue = document.getElementById("pokeNumSearchBox").value;
    
    var ul = document.getElementById("pokeList");
    var li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        var hVal = li[i].getElementsByTagName("h6")[0];
        pokemonNumArray[i] = (hVal.textContent.toUpperCase());
    }

    for (l = 0; l < pokemonNumArray.length; l++){
        if (pokemonNumArray[l].indexOf(numValue.toUpperCase()) > -1){
            console.log(pokemonNumArray[l]);
            searchedPokemon.push(pokemonNumArray[l]);
        }
    }
    alert(searchedPokemon);
}

function numTypeSearch() {
    var input, filter, ul, li, i, hValue;
    input = document.getElementById('pokeNumSearchBox');
    filter = input.value;
    ul = document.getElementById("pokeList");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      var hVal = li[i].getElementsByTagName("h6")[0];
      hValue = hVal.textContent || hVal.innerText;
      if (hValue.indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}
