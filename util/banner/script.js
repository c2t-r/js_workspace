const list = [1, 2, 3, 4, 5]; //Current banner

const map = {
    1: ["Nilou", "-920px", "-140px"],
    2: ["Nahida", "-900px", "-250px"],
    3: ["Layla", "-930px", "-140px"],
    4: ["Shinobu", "-990px", "-80px"],
    5: ["Dori", "-960px", "-80px"]
}

for (let n = 1; n < 6; n++) {
    const ch = document.querySelector(`.c${n}`);

    ch.style.right = `${n*3-3}px`;
    ch.style.backgroundImage = `url(https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_${map[list[n-1]][0]}.png)`;
    ch.style.backgroundPosition = `${map[list[n-1]][1]} ${map[list[n-1]][2]}`;
}
