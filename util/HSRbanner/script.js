import mapping from './mapping.json' assert {type: 'json'};

const list = ["リンクス", "Guinaifen", "リンクス", "Guinaifen", "リンクス"];

let creditText = 'c2t-r.github.io/js_workspace';

window.onload = function() {
    for (let n = 1; n < 6; n++) {
        const ch = document.querySelector(`.c${n}`);

        ch.style.backgroundImage = `url(https://raw.githubusercontent.com/c2t-r/HSR-Asset/main/Texture2D/Character/SplashImage/${mapping["character"][list[n-1]][0]}.png`;
        ch.style.backgroundPosition = `${mapping["character"][list[n-1]][1]} ${mapping["character"][list[n-1]][2]}`;
    }
    for (let n = 0; n < 5; n++) {
        let select = document.querySelectorAll(`.search_box`)[n];
        for (const entry of Object.entries(mapping["character"])) {
            const option = document.createElement("option");
            const text = document.createTextNode(entry[0]);
            option.value = entry[0];
            option.appendChild(text);
            select.appendChild(option);
        }
    }
}

function changeCharacter() {
    let ch = document.querySelector(`.c${this.name + 1}`);
    let c_name = document.querySelectorAll(`.search_box`)[this.name].value;
    ch.style.backgroundImage = `url(https://raw.githubusercontent.com/c2t-r/HSR-Asset/main/Texture2D/Character/SplashImage/${mapping["character"][c_name][0]}.png`;
    ch.style.backgroundPosition = `${mapping["character"][c_name][1]} ${mapping["character"][c_name][2]}`;
}

function changeBgColor() {
    let clr = document.querySelector("#bgcolor").value;
    document.querySelector("body").style.backgroundColor = clr;
    document.querySelectorAll(".table_wrap")[0].style.backgroundColor = clr;
    document.querySelectorAll(".table_wrap")[1].style.backgroundColor = clr;
}

function changeCreditText() {
    creditText = document.querySelector("#creditText").value;
}

function tocanvas() {
    let canvas = document.querySelector("canvas");
    if (canvas !== null) {
        canvas.remove();
    }
    html2canvas(document.querySelector(".table_wrap"), {proxy: false, useCORS: true, onrendered: function(canvas) { canvas.toDataURL();} }).then(canvas => {
        let location = document.querySelector(".main");
        location.appendChild(canvas);
        var ctx = canvas.getContext('2d');
        ctx.font = "24px serif";
        ctx.fillStyle = "#8dd5ff";
        ctx.fillText(creditText, 550, 595);
        document.querySelector("#dlbutton").setAttribute("style", "visibility: visible;");
    });
}

function download_canvas() {
    let canvas = document.querySelector("canvas");
    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "banner.png";
    link.click();
}

let change1 = 0;
let change2 = 1;
let change3 = 2;
let change4 = 3;
let change5 = 4;
document.querySelectorAll(".search_box")[0].addEventListener('change', {name: change1, handleEvent: changeCharacter});
document.querySelectorAll(".search_box")[1].addEventListener('change', {name: change2, handleEvent: changeCharacter});
document.querySelectorAll(".search_box")[2].addEventListener('change', {name: change3, handleEvent: changeCharacter});
document.querySelectorAll(".search_box")[3].addEventListener('change', {name: change4, handleEvent: changeCharacter});
document.querySelectorAll(".search_box")[4].addEventListener('change', {name: change5, handleEvent: changeCharacter});
document.querySelector("#bgcolor").addEventListener('input', changeBgColor);
document.querySelector("#creditText").addEventListener('input', changeCreditText);
document.querySelector("#Generator").addEventListener('click', tocanvas);
document.querySelector("#dlbutton").addEventListener('click', download_canvas);
