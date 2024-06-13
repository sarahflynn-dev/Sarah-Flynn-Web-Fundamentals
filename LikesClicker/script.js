var likeNiel = 0
var likeNic = 0
var likeJim = 0

var niel = document.querySelector("#niel");
// console.log(niel);

var nicole = document.querySelector("#nichole");

var jim = document.querySelector("#jim");

function counterNiel() {
    likeNiel += 1
    // console.log(niel)
    // console.log(likeNiel)
    niel.innerText = likeNiel + " Like(s)"
}


function counterNic() {
    likeNic += 1
    nichole.innerText = likeNic + " Like(s)"
}

function counterJim() {
    likeJim +=1
    jim.innerText = likeJim + " Like(s)"
}

function hover(element) {
    element.className = "onpress"
}

function revert(element) {
    if (element.className == "onpress") {
        element.className = "";
    }
    else {
        element.className = "onpress"
    }
}

// i discovered doing it this way uses way less variables to do the same thing so i just want to leave this one here as a reference...

// in html, you just call onclick="counterJim(id of selected element)"

// function counterJim(e) {
    // likeJim +=1
    // e.innerText = likeJim + " Like(s)"
// }