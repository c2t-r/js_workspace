const url = new URL(window.location.href);
const params = url.searchParams;
const limit = params.get('limit');
const user = params.get('user');
const repo = params.get('repo');
const dir = params.get('dir');
const input = document.querySelector(".setLimit");

window.onload = async function() {
    const apiUrl = `https://api.github.com/repos/${user}/${repo}/contents/${dir}`;
    const responce = await (await fetch(apiUrl)).json();

    if (document.querySelector(".imgs") !== null){
        document.querySelector(".imgs").remove()
    }

    const imgs = document.createElement("div");
    imgs.classList.add("imgs");

    for (const entry of responce) {
        const img = document.createElement("img");
        img.classList.add("img");

        img.src = entry["download_url"];
        console.log(img);
        
        imgs.appendChild(img);
    }
    document.querySelector(".main").appendChild(imgs);
    setLimit(limit);
    input.value = limit;
}

function setLimit(limit) {
    let width = `${(100 / limit)}%`;
    const imgs = document.querySelectorAll(".img");
    for (let e of imgs){
        e.style.width = width;
    }
}

input.addEventListener('change', ()=> {
    setLimit(input.value);
});
