var likes = 0
var likes2 = 0

function noBox(element) {
    element.className="noBox"
}

function pressed(element) {
    likes += 1
    element.value = (likes + " Likes")
    console.log(likes)
    alert('This word "ninja" has recieved a like!')
}

function pressed2(element) {
    likes2 += 1
    element.value = (likes2 + " Likes")
    console.log(likes2)
    alert('This word "ninja" has recieved a like!');
}

function revert(element) {
    element.className = "press"
}

function remove(element) {
    element.remove();
}

function log(element) {
    if (element.value == "Login") {
        element.value="Logout";
    }
    else {
        element.value="Login";
    }
}