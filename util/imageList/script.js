const url = new URL(window.location.href);
const params = url.searchParams;
const limit = params.get('limit');
const param = params.get('api');

const allow_exts = new Array('.jpg', '.jpeg', '.png');

const input = document.querySelector(".setLimit");

window.onload = async function() {
    if (document.querySelector(".imgs") !== null){
        document.querySelector(".imgs").remove()
    }

    const apiUrl = `https://api.github.com/repos/${param}`;
    console.log(apiUrl);
    const option = {
        method: "GET"
    };
    let json;
    const response = await fetch(apiUrl, option);
    if (response.ok) {
        json = await response.json();
    } else {
        console.error(`[ERROR] GET ${response.url} : ${response.status}`);
    }

    const imgs = document.createElement("div");
    imgs.classList.add("imgs");

    for (const entry of json) {
        if (entry["type"] == "dir"){
            createFolder(entry["url"], entry["name"], imgs);
            continue;
        }
        if (!checkExt(entry["name"])) {
            continue;
        }
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

function createFolder(url, name, parent) {
    const wrap = document.createElement("div");
    const a = document.createElement("a");
    const div = document.createElement("div");
    const folder = document.createElement("img");
    const parsedUrl = "https://c2t-r.github.io/js_workspace/util/imageList/?limit=6&api=" + url.split("repos/")[1];

    wrap.classList.add("textWrap");
    wrap.classList.add("img");
    
    a.href = `${parsedUrl}`;

    div.innerText = name;
    div.classList.add("folderName");

    folder.classList.add("folder");
    folder.src = "default.png";

    a.appendChild(folder);
    a.appendChild(div);
    wrap.appendChild(a);

    parent.insertBefore(wrap, parent.firstChild);
    console.log(wrap);
}

function checkExt(filename) {
    const ext = filename.slice(filename.lastIndexOf(".")).toLowerCase();
    if (allow_exts.indexOf(ext) === -1) {
        console.log(`${filename} : ${ext} is not allowed.`)
        return false;
    }
	return true;
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
