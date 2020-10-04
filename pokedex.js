let searchedPokemon = [];

//Array of pokemon objects
pokemon = [
	{
		name: "Bulbasaur",
		id: "1",
		description: "Type: Grass/Poison, ATK: 118, DEF: 118",
	},
	{
		name: "Iveysaur",
		id: "2",
		description: "Type: Grass/Poison, ATK: 151, DEF: 151",
	},
	{
		name: "Venusaur",
		id: "3",
		description: "Type: Grass/Poison, ATK: 198, DEF: 198",
	},
	{ name: "Charmander", id: "4", description: "Type: Fire, ATK: 116, DEF: 96" },
	{
		name: "Charmeleon",
		id: "5",
		description: "Type: Fire, ATK: 158, DEF: 129",
	},
	{
		name: "Charizard",
		id: "6",
		description: "Type: Fire/Flying, ATK: 223, DEF: 176",
	},
	{ name: "Squirtle", id: "7", description: "Type: Water, ATK: 94, DEF: 122" },
	{
		name: "Wartortle",
		id: "8",
		description: "Type: Water, ATK: 126, DEF: 155",
	},
	{
		name: "Blastoise",
		id: "9",
		description: "Type: Water, ATK: 171, DEF: 210",
	},
	{ name: "Caterpie", id: "10", description: "Type: Bug, ATK: 55, DEF: 62" },
	{ name: "Metapod", id: "11", description: "Type: Bug, ATK: 45, DEF: 94" },
	{
		name: "Buterfree",
		id: "12",
		description: "Type: Bug/Flying, ATK: 167, DEF: 151",
	},
	{
		name: "Weedle",
		id: "13",
		description: "Type: Bug/Poision, ATK: 63, DEF: 55",
	},
	{
		name: "Kakuna",
		id: "14",
		description: "Type: Bug/Poision, ATK: 46, DEF: 86",
	},
	{
		name: "Beedrill",
		id: "15",
		description: "Type: Bug/Poision, ATK: 169, DEF: 150",
	},
	{
		name: "Pidgey",
		id: "16",
		description: "Type: Normal/Flying, ATK: 85, DEF: 76",
	},
	{
		name: "Pidgeotto",
		id: "17",
		description: "Type: Normal/Flying, ATK: 117, DEF: 108",
	},
	{
		name: "Pidgeot",
		id: "18",
		description: "Type: Normal/Flying, ATK: 166, DEF: 157",
	},
	{ name: "Rattata", id: "19", description: "Type: Normal, ATK: 103, DEF: 70" },
	{
		name: "Raticate",
		id: "20",
		description: "Type Normal, ATK: 161, DEF: 144",
	},
];

//Search function when the search button is clicked
function searchName() {
	var searchedPokemonName = document.getElementById("searchBarName").value;
	var description = "";
	var subFive = 0;

	//Check that input only contains letters
	if (!searchedPokemonName.match(/[a-z]/i)) {
		alert("Please input a letter");
	} else {
		for (l = 0; l < pokemon.length; l++) {
			//Check that only 5 pokemon are printed
			if (subFive >= 5) {
				break;
			}
			//See which pokemon match the search then add them to an array and append it to the alert discription
			if (
				pokemon[l].name
					.toUpperCase()
					.indexOf(searchedPokemonName.toUpperCase()) > -1
			) {
				searchedPokemon.push(pokemon[l]);
				description +=
					"Name: " +
					pokemon[l].name +
					" Number: #" +
					pokemon[l].id +
					" Description: " +
					pokemon[l].description +
					"\n";
				subFive++;
			}
		}
		//Alert with the matching pokemon
		alert(description);
	}
}

//Search function when the search button is clicked
function searchNum() {
	var searchedPokemonNum = document.getElementById("searchBarNum").value;

	//Check that the entered value is a number
	if (isNaN(searchedPokemonNum)) {
		alert("Please input a number");
	} else {
		var description = "";
		var subFive = 0;
		//Loops through the pokemon list to find matches
		for (l = 0; l < pokemon.length; l++) {
			//Check that only the first 5 are printed
			if (subFive >= 5) {
				break;
			}
			if (
				pokemon[l].id.toUpperCase().indexOf(searchedPokemonNum.toUpperCase()) >
				-1
			) {
				//Add the matches to an array then add the description the the discription
				searchedPokemon.push(pokemon[l]);
				description +=
					"Name: " +
					pokemon[l].name +
					" Number: #" +
					pokemon[l].id +
					" Description: " +
					pokemon[l].description +
					"\n";
				subFive++;
			}
		}
		//Creates the alert
		alert(description);
	}
}

function numSearch() {
	//Setting the varriables
	var input, filter, ul, li, i, hValue;
	input = document.getElementById("searchBarNum");
	filter = input.value;
	ul = document.getElementById("pokeList");
    li = ul.getElementsByTagName("li");
    liName = ul.getElementsByTagName("li");
    let pokeMatch = [];

    // // Delete all of the current elements when the user types
    const myNode = document.getElementById("searchList");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }

	for (i = 0; i < li.length; i++) {
        // Set varriables
        var hVal = li[i].getElementsByTagName("h6")[0];
        var span = liName[i].getElementsByTagName("span")[0];
        txtValue = span.textContent || span.innerText;

		//Check if the value matches what is in the h6 tag
        hValue = hVal.textContent || hVal.innerText;
        // Check if an item matches
		if (hValue.indexOf(filter) > -1) {
            // Check the item doesnt already exist
			if (!(document.getElementById(txtValue + "_clone"))){
                var itm = document.getElementById(txtValue);
                // Copy the <li> element and its child nodes
                var cln = itm.cloneNode(true);
                cln.id = txtValue + "_clone";
                // Append the cloned <li> element to <ul>
                document.getElementById("searchList").appendChild(cln);
            }
		}
    }
}

function listNameSearch() {
	//Set the varriables
	var input, filter, ul, li, i, txtValue;
	input = document.getElementById("searchBarName");
	filter = input.value.toUpperCase();
	ul = document.getElementById("pokeList");
    li = ul.getElementsByTagName("li");
    let pokeMatch = [];

    // Delete all of the current elements when the user types
    const myNode = document.getElementById("searchList");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }

	for (i = 0; i < li.length; i++) {
		var span = li[i].getElementsByTagName("span")[0];
		//Get the values in the span tag
		txtValue = span.textContent || span.innerText;
		//Hide everything that doesnt match
		if (txtValue.toUpperCase().indexOf(filter) > -1) {

            // Check that the item ID doesnt already exist
            if (!(document.getElementById(txtValue + "_clone"))){
                var itm = document.getElementById(txtValue);
                // Copy the <li> element and its child nodes
                var cln = itm.cloneNode(true);
                cln.id = txtValue + "_clone";
                // Append the cloned <li> element to <ul>
                document.getElementById("searchList").appendChild(cln);
            }
        }
	}
}