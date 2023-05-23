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
    html2canvas(document.querySelector(".banner"), {proxy: true, useCORS: true, onrendered: function(canvas) { canvas.toDataURL();} }).then(canvas => {
        let location = document.querySelector(".main");
        location.appendChild(canvas)
    });
}

let button = document.querySelector("#dlbutton");
button.addEventListener('click', tocanvas);
