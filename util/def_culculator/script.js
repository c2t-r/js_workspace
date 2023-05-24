console.log(document.querySelector("#input3").value);
function cul() {
    const plv = document.querySelector("#input1").value;
    const elv = document.querySelector("#input2").value;
    const debuff = document.querySelector("#input3").value;
    
    edef = ( 200 + ( elv * 10 )) * ((100 - debuff) / 100);
    defmul = 1 - ( edef / ( edef + 200 + ( 10 * plv)));
    edef0 = ( 200 + ( elv * 10 ));
    defmul0 = 1 - ( edef0 / ( edef0 + 200 + ( 10 * plv)));
    diff = defmul / defmul0 * 100 - 100;
    
    if (debuff != 0) {
        document.querySelector(".tooltip_area2").setAttribute("style", "visibility: visible;");
        document.querySelector("span#diff > a").textContent = diff;
    } else {
        document.querySelector("#tooltip2").checked = false;
        document.querySelector(".tooltip_area2").setAttribute("style", "visibility: hidden;");
    }

    reduce = (0.5 / defmul0 * 100 - 100 + 50);
    document.querySelector(".tooltip_area").setAttribute("style", "visibility: visible;");
    document.querySelector("span#reduce > a").textContent = reduce;
    
    document.querySelector("#result > p#edef").setAttribute("style", "visibility: visible;");
    document.querySelector("#result > p#edef > a").textContent = edef;
    document.querySelector("#result > p#defmul").setAttribute("style", "visibility: visible;");
    document.querySelector("#result > p#defmul > a").textContent = defmul;
}
    
