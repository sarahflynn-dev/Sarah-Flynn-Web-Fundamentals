var celH = [24, 27, 21, 26]
var celC = [18, 19, 16, 21]
var farH = [75, 80, 69, 78]
var farC = [65, 66, 61, 70]
var list1 = document.querySelectorAll(".faren");
var list2 = document.querySelectorAll(".celc");
var ticker = 0;
var cookie = document.querySelector(".alert");

console.log(list1, list2)
temp();

function temp() {
    if (list1[0].innerText != "75°") {
        while (list1[3].innerText != "78°") {
            list1[ticker].innerText = farH[ticker]+"°";
            ticker += 1;
            console.log(ticker)
        }
        ticker = 0;
        while (list2[3].innerText != "70°") {
            list2[ticker].innerText = farC[ticker]+"°";
            ticker += 1;
            console.log(ticker)
        }
        ticker = 0;
        console.log(list1, list2)
    }
    //if (list1[0].innerText != "24°")
    else {
        while (list1[3].innerText != "26°"){
            list1[ticker].innerText = celH[ticker]+"°"
            ticker += 1;
            console.log(ticker)
        }
        ticker = 0;
        while (list2[3].innerText != "21°"){
            list2[ticker].innerText = celC[ticker]+"°"
            ticker += 1;
            console.log(ticker)
        }
        ticker = 0;
    }
}

function acceptCookie() {
    console.log(cookie);
    cookie.remove();
}