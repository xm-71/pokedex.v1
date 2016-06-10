function generatePokemon(callback) {
  // "constants"
  var MAX_POKEMON_ID = 718,
      BASE_URL = "http://pokeapi.co";

  var fetches = [],
      pokemon = {};

var getNumber = document.getElementById("number").value;
//var Uno = 1;
var addOne = parseInt(getNumber) + 1;


  function fetchNumber(endpoint, callback) {
    var url = BASE_URL + "/api/v1/" + endpoint + "/" + getNumber;
    return $.ajax({
      type: "GET",
      url: url,
      dataType: "jsonp",
      success: callback
    });
  }

  function fetchNumber_Fix(endpoint, callback) {
    var url = BASE_URL + "/api/v1/" + endpoint + "/" + addOne;
    return $.ajax({
      type: "GET",
      url: url,
      dataType: "jsonp",
      success: callback
    });
  }

  // fetch a pokemon name
  fetches.push(fetchNumber('pokemon', function (data) {
    pokemon.name = data.name;
  }));

  // fetch pokemon types
  fetches.push(fetchNumber('pokemon', function (data) {
    pokemon.types = data.types.map(function (type) {
      return type.name;
    });
  }));

  // fetch pokemon abilities
  fetches.push(fetchNumber('pokemon', function (data) {
    pokemon.abilities = data.abilities.map(function (type) {
      return type.name;
    });
  }));

  // fetch pokemon sprite
  fetches.push(fetchNumber_Fix('sprite', function (data) {
    pokemon.image = BASE_URL + data.image;
  }));


  $.when.apply(null, fetches)
    .done(function () {
      callback(pokemon);
    })
    .fail(function () {
      callback(null);
    });
}



function displayPokemon() {
  generateButton.prop("disabled", true);

  generatePokemon(function (data) {
    generateButton.prop("disabled", false);

    if(!data) {
      alert("Oops");
      return;
    }


    var properties = [];
    properties.push("Name: " + data.name);
    properties.push("Types: " + data.types.join(", "));
    properties.push("Abilities: " + data.abilities.join(", "));
    $("#output").empty().text(properties.join("\n"));

    $("#sprite").attr("src", data.image);
  });
}

var generateButton = $("#generate");

generateButton.on("click", displayPokemon);


displayPokemon();
