import mapping from './mapping.json' assert {type: 'json'};

const list = ["心海", "放浪者", "トーマ", "煙緋", "ファルザン"];

window.onload = function() {
    for (let n = 1; n < 6; n++) {
        const ch = document.querySelector(`.c${n}`);

        ch.style.backgroundImage = `url(https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_${mapping[list[n-1]][0]}.png)`;
        ch.style.backgroundPosition = `${mapping[list[n-1]][1]} ${mapping[list[n-1]][2]}`;
    }
    for (let n = 1; n < 6; n++) {
        let select = document.querySelector(`.s${n}`);
        for (const entry of Object.entries(mapping)) {
            const option = document.createElement("option");
            const text = document.createTextNode(entry[0]);
            option.value = entry[0];
            option.appendChild(text);
            select.appendChild(option);
        }
    }
}

function changeCharacter(param) {
    let ch = document.querySelector(`.c${this.name}`);
    let c_name = document.querySelector(`.s${this.name}`).value;
    if (mapping[c_name][1] == null) {
        return;
    }
    ch.style.backgroundImage = `url(https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_${mapping[c_name][0]}.png)`;
    ch.style.backgroundPosition = `${mapping[c_name][1]} ${mapping[c_name][2]}`;
}

function tocanvas() {
    let canvas = document.querySelector("canvas");
    if (canvas !== null) {
        canvas.remove();
    }
    html2canvas(document.querySelector(".banner_wrap"), {proxy: true, useCORS: true, onrendered: function(canvas) { canvas.toDataURL();} }).then(canvas => {
        let location = document.querySelector(".main");
        location.appendChild(canvas);
        var ctx = canvas.getContext('2d');
        ctx.font = '24px serif';
        ctx.fillText('c2t-r.github.io/js_workspace', 545, 590);
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

let change1 = "1";
let change2 = "2";
let change3 = "3";
let change4 = "4";
let change5 = "5";
document.querySelector(".s1").addEventListener('change', {name: change1, handleEvent: changeCharacter});
document.querySelector(".s2").addEventListener('change', {name: change2, handleEvent: changeCharacter});
document.querySelector(".s3").addEventListener('change', {name: change3, handleEvent: changeCharacter});
document.querySelector(".s4").addEventListener('change', {name: change4, handleEvent: changeCharacter});
document.querySelector(".s5").addEventListener('change', {name: change5, handleEvent: changeCharacter});
document.querySelector("#Generator").addEventListener('click', tocanvas);
document.querySelector("#dlbutton").addEventListener('click', download_canvas);
