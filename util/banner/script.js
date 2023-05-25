import mapping from './mapping.json' assert {type: 'json'};

const list = ["心海", "放浪者", "トーマ", "煙緋", "ファルザン"];

window.onload = function() {
    for (let n = 1; n < 6; n++) {
        const ch = document.querySelector(`.c${n}`);

        ch.style.backgroundImage = `url(https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_${mapping[list[n-1]][0]}.png)`;
        ch.style.backgroundPosition = `${mapping[list[n-1]][1]} ${mapping[list[n-1]][2]}`;
    }
    for (let n = 0; n < 6; n++) {
        let select = document.querySelectorAll(`.search_box`)[n];
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
    let ch = document.querySelector(`.c${this.name + 1}`);
    let c_name = document.querySelectorAll(`.search_box`)[this.name].value;
    ch.style.backgroundImage = `url(https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_${mapping[c_name][0]}.png)`;
    ch.style.backgroundPosition = `${mapping[c_name][1]} ${mapping[c_name][2]}`;
}

function changeNamecard(param) {
    let ch = document.querySelector(`.bg`);
    let c_name = document.querySelectorAll(`.search_box`)[5].value;
    ch.style.backgroundImage = `url(https://api.ambr.top/assets/UI/namecard/UI_NameCardPic_${mapping[c_name][0]}_P.png)`;
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
document.querySelectorAll(".search_box")[5].addEventListener('change', changeNamecard);
document.querySelector("#Generator").addEventListener('click', tocanvas);
document.querySelector("#dlbutton").addEventListener('click', download_canvas);
