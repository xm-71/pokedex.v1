<!doctype html>
<html class="no-js" lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokemon</title>
    <link rel="stylesheet" href="css/foundation.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/app.css">
    <link href="http://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css" rel="stylesheet">

</head>

<div class="top-bar">
    <div class="top-bar-left">
        <ul class="dropdown menu" data-dropdown-menu>
            <li class="menu-text">The Lists of All Lists</li>
            <li>
                <a href="index.html">Mutants</a>
                <ul class="menu vertical">
                    <li><a href="#">Pokemon</a></li>
                    <li><a href="#">Class Roster</a></li>
                </ul>
                <li><a href="pokemon.php">Pokemon</a></li>
                <li><a href="classroster.html">Class Roster</a></li>
                <li><a href="rivalries.html">Rivalries</a></li>
            </li>

        </ul>
    </div>

</div>
<br />

<input type="number" id="number" value="1" />
    <img id="sprite" src="" class="inline-list">
<pre id="output" class="inline-list"></pre>
<button id="generate" class="small expanded button">Load</button>
<br />
<audio controls class="inline-list">
  <source src="horse.ogg" type="audio/ogg">
  <source src="pokemon.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-rc1/jquery.min.js"></script>
<script src="js/pokemonList.js"></script>
<script src="js/load-pokemon.js"></script>
<script src="js/app.js"></script>
<script src="js/vendor/jquery.js"></script>
<script src="js/vendor/what-input.js"></script>
<script src="js/vendor/foundation.js"></script>
</body>

</html>
