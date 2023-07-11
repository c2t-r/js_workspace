const dir = document.querySelector("#dirPick");
const limit = document.querySelector(".setLimit");

function appendImg() {
    if (document.querySelector(".imgs") !== null){
        document.querySelector(".imgs").remove()
    }
    const imgs = document.createElement("div");
    imgs.classList.add("imgs");
    for (const entry of dir.files) {
        console.log(entry);

        const img = document.createElement("img");
        img.classList.add("img");

        const reader = new FileReader();
        reader.onload = (function() {
            img.src = reader.result;
        });
        reader.readAsDataURL(entry);
        console.log(img);
        
        imgs.appendChild(img);
    }
    document.querySelector(".main").appendChild(imgs);
}

function setLimit() {
    let width = `${(100 / limit.value)}%`;
    const imgs = document.querySelectorAll(".img");
    for (let e of imgs){
        e.style.width = width;
    }
}

function tocanvas() {
    let canvas = document.querySelector("canvas");
    if (canvas !== null) {
        canvas.remove();
    }
    html2canvas(document.querySelector(".imgs"), {proxy: false, useCORS: true, onrendered: function(canvas) { canvas.toDataURL();} }).then(canvas => {
        let location = document.querySelector(".canvas");
        location.appendChild(canvas);
        document.querySelector("#dlbutton").setAttribute("style", "visibility: visible;");
        document.querySelector(".canvas").setAttribute("style", "visibility: visible;");
    });
}

function download_canvas() {
    let canvas = document.querySelector("canvas");
    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "list.png";
    link.click();
}

dir.addEventListener('change', appendImg);
limit.addEventListener('change', setLimit);
document.querySelector("#Generator").addEventListener('click', tocanvas);
document.querySelector("#dlbutton").addEventListener('click', download_canvas);
