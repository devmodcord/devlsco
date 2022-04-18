const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");

const alterEL = document.getElementById("alter");

function makeHttpObject() {
    if ("XMLHttpRequest" in window) return new XMLHttpRequest();
    else if ("ActiveXObject" in window) return new ActiveXObject("Msxml2.XMLHTTP");
}

let request = makeHttpObject();
request.open("GET", "https://modlookup.3v.fi/api/user-totals/lsco", true);
request.send(null);
request.onreadystatechange = function () {
    text1.innerText = request.responseText.split(`"follows":`)[1].split(`,`)[0]
    text2.innerText = request.responseText.split(`"views":`)[1].split(`,`)[0]
    text3.innerText = request.responseText.split(`"total":`)[1].split(`,`)[0]
    text4.innerText = request.responseText.split(`"partners":`)[1].split(`}`)[0]
};
