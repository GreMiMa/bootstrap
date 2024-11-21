

function varaus() {
    // hae lomakkeeseen syötetyt tiedot
    var nimi = document.getElementById("nimi").value;
    var puhnro = document.getElementById("puhnro").value;
    var sposti = document.getElementById("sposti").value;
    var palaute = document.getElementById("palaute").value;

    //haetaan radiobuttonin valinta
    var radios = document.getElementsByName("vieraillut");
    var vieraillut = "No selection";
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            vieraillut = radios[i].value;
            break;
        }
    }

    // haetaan checkbox-valinnat
    var checkboxes = document.getElementsByName("ruokarajoitteita");
    var rajoitteet = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            rajoitteet.push(checkboxes[i].value);
        }
    }


    //haetaan alasvetovalikon valinta
    var valittuIndeksi = document.getElementById("loytyiko").selectedIndex;
    var valittuVaihtoehto = document.getElementById("loytyiko").options[valittuIndeksi].text;

    // Tulostetaan tiedot yhteenvetona `vastaus`-diviin
    document.getElementById("vastaus").innerHTML = `
        <h3>Reservation Summary</h3>
        <p><strong>Name:</strong> ${nimi}</p>
        <p><strong>Phone number:</strong> ${puhnro}</p>
        <p><strong>Email:</strong> ${sposti}</p>
        <p><strong>Wishes:</strong> ${palaute}</p>
        <p><strong>Visited before:</strong> ${vieraillut}</p>
        <p><strong>Dietary restrictions:</strong> ${rajoitteet.join(", ") || "None"}</p>
        <p><strong>Website feedback:</strong> ${valittuVaihtoehto}</p>
    `;



}