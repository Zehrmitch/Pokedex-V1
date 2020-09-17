let pokemonArray = new Array(25); 
var searchedPokemon = new Array;

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

function typeSearch() {
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById('pokeNameSearchBox');
    filter = input.value.toUpperCase();
    ul = document.getElementById("pokeList");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      span = li[i].getElementsByTagName("span")[0];
      txtValue = span.textContent || span.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}


function searchNum() {

}

