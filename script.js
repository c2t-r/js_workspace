window.onload = async function() {
    const apiUrl = `https://api.github.com/repos/c2t-r/js_workspace/contents/util`;
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

    const index = document.createElement("div");
    index.classList.add("index");
    const ul = document.createElement("ul");
    ul.classList.add("table");

    for (const entry of json) {
        const name = entry["name"];
        const path = entry["path"];
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = name;
        a.href = path;
        console.log(a);
        
        li.appendChild(a);
        index.appendChild(li);
    }
    document.querySelector(".main").appendChild(index);
}