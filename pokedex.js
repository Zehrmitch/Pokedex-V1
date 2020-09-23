let pokemonNumArray = [];
let searchedPokemon = [];

//Array of pokemon objects
pokemon = [
    {name: 'Bulbasaur', id: '1', description: 'Type: Grass/Poison, ATK: 118, DEF: 118'},
    {name: 'Iveysaur', id: '2', description: 'Type: Grass/Poison, ATK: 151, DEF: 151'},
    {name: 'Venusaur', id: '3', description: 'Type: Grass/Poison, ATK: 198, DEF: 198'},
    {name: 'Charmander', id: '4', description: 'Type: Fire, ATK: 116, DEF: 96'},
    {name: 'Charmeleon', id: '5', description: 'Type: Fire, ATK: 158, DEF: 129'},
    {name: 'Charizard', id: '6', description: 'Type: Fire/Flying, ATK: 223, DEF: 176'},
    {name: 'Squirtle', id: '7', description: 'Type: Water, ATK: 94, DEF: 122'},
    {name: 'Wartortle', id: '8', description:'Type: Water, ATK: 126, DEF: 155'},
    {name: 'Blastoise', id: '9', description:'Type: Water, ATK: 171, DEF: 210'},
    {name: 'Caterpie', id: '10', description: 'Type: Bug, ATK: 55, DEF: 62'},
    {name: 'Metapod', id: '11', description: 'Type: Bug, ATK: 45, DEF: 94'},
    {name: 'Buterfree', id: '12', description: 'Type: Bug/Flying, ATK: 167, DEF: 151'},
    {name: 'Weedle', id: '13', description: 'Type: Bug/Poision, ATK: 63, DEF: 55'},
    {name: 'Kakuna', id: '14' , description: 'Type: Bug/Poision, ATK: 46, DEF: 86'},
    {name: 'Beedrill', id: '15', description: 'Type: Bug/Poision, ATK: 169, DEF: 150'}, 
    {name: 'Pidgey', id: '16', description: 'Type: Normal/Flying, ATK: 85, DEF: 76'},
    {name: 'Pidgeotto', id: '17', description: 'Type: Normal/Flying, ATK: 117, DEF: 108'},
    {name: 'Pidgeot', id: '18', description: 'Type: Normal/Flying, ATK: 166, DEF: 157'},
    {name: 'Rattata', id: '19', description: 'Type: Normal, ATK: 103, DEF: 70'},
    {name: 'Raticate', id: '20', description: 'Type Normal, ATK: 161, DEF: 144'}]

function searchName() {
    var searchedPokemonName = document.getElementById("searchBarName").value;
    var description = "";
    var subFive = 0;
    
    if(!(searchedPokemonName.match(/[a-z]/i))){
          alert("Please input a letter");
    }
    else{
        for (l = 0; l < pokemon.length; l++){
            if (subFive >= 5){
                break;
            }
            if (pokemon[l].name.toUpperCase().indexOf(searchedPokemonName.toUpperCase()) > -1){
                searchedPokemon.push(pokemon[l]);
                description += "Name: " + pokemon[l].name + " Number: #" + pokemon[l].id + " Description: " + pokemon[l].description + "\n";
                subFive++;
            }
        }

        alert(description);
    }
}

function nameSearch() {
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById('searchBarName');
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
    var searchedPokemonNum = document.getElementById("searchBarNum").value;
    
    if(isNaN(searchedPokemonNum)){
        alert("Please input a number");
    }
    
    else {
        var description = "";
        var subFive = 0;
        for (l = 0; l < pokemon.length; l++){
            if (subFive >= 5){
                break;
            }
            if (pokemon[l].id.toUpperCase().indexOf(searchedPokemonNum.toUpperCase()) > -1){
                searchedPokemon.push(pokemon[l]);
                description += "Name: " + pokemon[l].name + " Number: #" + pokemon[l].id + " Description: " + pokemon[l].description + "\n";
                subFive++;
            }
        }
        alert(description);
    }
}

function numSearch() {
    var input, filter, ul, li, i, hValue;
    input = document.getElementById('searchBarNum');
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