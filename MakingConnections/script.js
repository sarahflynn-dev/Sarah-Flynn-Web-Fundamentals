console.log("page loaded...");
var connect = document.querySelector('.card-list-item')
var badge = document.querySelectorAll('.badge')
var data = 500;
var incoming = 2;
var names = document.querySelector('.card-body h1')

function connection(element){
    if (connect == document.querySelector('.card-list-item')){
        console.log(connect);
        connect.remove();
        incoming -= 1;
        connect = document.querySelector('.card-list-item')
    }
}

function addConn(){
    data += 1;
    badge = document.querySelectorAll('.badge')[0]
    badge.innerText = incoming;
    badge = document.querySelectorAll('.badge')[1]
    badge.innerText = data;
}

function subConn(){
    data -= 1;
    badge = document.querySelectorAll('.badge')[0]
    badge.innerText = incoming;
    badge = document.querySelectorAll('.badge')[1]
    badge.innerText = data;
}

function doe(){
    if (names.innerText == "Jane Doe"){
        names.innerText = "Jamie Deer"
    }
    else {
        names.innerText = "Jane Doe"
    }
}