import mapping from './mapping.json' assert {type: 'json'};

const list = ["心海", "放浪者", "トーマ", "煙緋", "ファルザン"];

const bgimage = "https://api.ambr.top/assets/UI/namecard/UI_NameCardPic_Kokomi_P.png";


window.onload = function() {
    for (let n = 1; n < 6; n++) {
        const ch = document.querySelector(`.c${n}`);

        ch.style.backgroundImage = `url(https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_${mapping[list[n-1]][0]}.png)`;
        ch.style.backgroundPosition = `${mapping[list[n-1]][1]} ${mapping[list[n-1]][2]}`;
    }
    bg = document.querySelector(`.bg`);
    bg.style.backgroundImage = `url(${bgimage})`;
}
