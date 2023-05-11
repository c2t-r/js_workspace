function cul() {
    const plv = document.querySelector("#input1").value;
    const elv = document.querySelector("#input2").value;
    const debuff = document.querySelector("#input3").value;
    
    edef = ( 200 + ( elv * 10 )) * ((100 - debuff) / 100);
    defmul = 1 - ( edef / ( edef + 200 + ( 10 * plv)));
    
    if (debuff !== 0) {
        edef0 = ( 200 + ( elv * 10 ));
        defmul0 = 1 - ( edef0 / ( edef0 + 200 + ( 10 * plv)));
        diff = defmul / defmul0 * 100;
        document.querySelector("#result > p#diff").setAttribute("style", "visibility: visible;")
        document.querySelector("#result > p#diff > a").textContent = diff;
    }
    
    document.querySelector("#result > p#edef > a").textContent = edef;
    document.querySelector("#result > p#defmul > a").textContent = defmul;
}
    
