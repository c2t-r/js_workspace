import mapping from './mapping.json' assert {type: 'json'};

const list = ["心海", "放浪者", "トーマ", "煙緋", "ファルザン"];

window.onload = function() {
    for (let n = 1; n < 6; n++) {
        const ch = document.querySelector(`.c${n}`);

        ch.style.backgroundImage = `url(https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_${mapping[list[n-1]][0]}.png)`;
        ch.style.backgroundPosition = `${mapping[list[n-1]][1]} ${mapping[list[n-1]][2]}`;
    }
}

function tocanvas() {
    let canvas = document.querySelector("canvas");
    if (canvas !== null) {
        canvas.remove();
    }
    html2canvas(document.querySelector(".banner_wrap"), {proxy: true, useCORS: true, onrendered: function(canvas) { canvas.toDataURL();} }).then(canvas => {
        let location = document.querySelector(".main");
        location.appendChild(canvas);
        document.querySelector("#dlbutton").setAttribute("style", "visibility: visible;")
    });
}

function download_canvas() {
    let canvas = document.querySelector("canvas");
    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "banner.png";
    link.click();
}

document.querySelector("#Generator").addEventListener('click', tocanvas);
document.querySelector("#dlbutton").addEventListener('click', download_canvas);
