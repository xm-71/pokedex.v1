$(document).foundation();

var list = [];

            function getText() {
                var str = document.getElementById("txt");


                list.push(str.value);
                str.value = "";
                str.focus();
                var area = document.getElementById("txtArea");
                area.value = "";
                for (var i = 0; i < list.length; i++) {
                    area.value += list[i] + "\n";
                }
            }
