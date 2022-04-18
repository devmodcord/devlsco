<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-12MKBQ41GY"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-12MKBQ41GY');
    </script>
    
    <meta charset="UTF-8">
    <title>LsCo Main - github.io</title>
    <link rel="icon" href="./img/icon.png" type="image/x-icon">
    <link rel="stylesheet" href="./style.css">
    <script src="./script.js" defer></script>
</head>

<body>
    <main>
        <div>
            <div class="title">
                <h1><a href=".">About me</a></h1>
            </div>
            <div>
                <h4>Lennox aka. (LsCo) 14 Jahre alt.<img class="bild" src="./img/feelsokayman.png"></h4>
                <h4>Mache Twitch Mod Stuff.<img class="bild" src="./img/pepelaugh.png"></h4>
                <h4>Dev Zeit ca. Aug. 21</h4>
            </div>
            <div class="title">
                <h1><a href=".">About Moderator</a></h1>
            </div>
            <div>
                <h3><a href="https://modlookup.3v.fi/u/LsCo">ModLookUp</a></h3>
            </div>
            <div class="border">
                <div class="text-border">
                    <h4>Follow total: <a class="underlined" id="text1">Loading...</a> - Views total: <a class="underlined" id="text2">Loading...</a></h4>
                    <h4>Channels: <a class="underlined" id="text3">Loading...</a> - Partners: <a class="underlined" id="text4">Loading...</a></h4>
                </div>
            </div>
            <div class="title">
                <h1><a href=".">Social Media</a></h1>
            </div>
            <div>
                <a href="https://github.com/DevLsCo/"><img src="./img/github.svg"></a>
                <a href="https://www.twitch.tv/LsCo/"><img src="./img/twitch.svg"></a>
                <a href="https://twitter.com/@InfoLsCo/"><img src="./img/twitter.svg"></a>
            </div>
            <div class="title">
                <h1><a href=".">Projects</a></h1>
            </div>
            <div>
                <h4><a href="./user/">Userinfo</a></h4>
            </div>
            <div class="title">
                <h1><a href="./pages/">Pages</a></h1>
            </div>
            <div>
                <h4>
                    <h4><a href="./chatty">Chatty</a></h4>
                    <h4><a href="./user/">Userinfo</a></h4>
                </h4>
            </div>
        </div>
    </main>
</body>
<script>
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
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #1d1e20;
}

::-webkit-scrollbar-thumb {
    background: #555555;
}

::-webkit-scrollbar-thumb:hover {
    background: #555555;
}

a:link, a:visited {
    color: #FFF;
}
body {
    color: #FFF;
    text-align: center;
    background-color: #1d1e20;
    font-family: 'Open Sans', sans-serif;
    user-select: none;
}
.border {
    border: solid;
    font-size: 15px;
    border-radius: 10px;
    border-color: #FFF;
    display: inline-block;
}
.text-border {
    padding: 10px;
}

.title {
    color: #FFF;
    text-decoration: underline;
}

.bild {
    height: 24px;
    width: 24px;
    padding-left: 5px;
}

.underlined {
    text-decoration: underline;
}
</style>
</html>
