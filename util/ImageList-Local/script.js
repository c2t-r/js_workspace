const dir = document.querySelector(".dirPick");
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

dir.addEventListener('change', appendImg);
limit.addEventListener('change', setLimit);
