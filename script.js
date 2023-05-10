const map_status = {
    "Attack":["16", "N/A", "image/icon/Icon_Stat_Attack.png"],
    "HP":["1010", "N/A", "image/icon/Icon_Stat_HP.png"],
    "Crit":["12", "N/A", "image/icon/Icon_Stat_Crit.png"]
};

const status_table = document.querySelector("table.status");

for (const entry of Object.entries(map_status) ) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const image = document.createElement("img");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    image.setAttribute('src', entry[1][2]);

    th.innerText = entry[0];
    td1.innerText = entry[1][0];
    td2.innerText = entry[1][1];

    th.classList.add("row");
    image.classList.add("status_icon");

    tr.appendChild(th);
    th.insertBefore(image, th.firstChild);
    tr.appendChild(td1);
    tr.appendChild(td2);
    status_table.appendChild(tr);
}
