function getText(){
    var item = (document.getElementById("form").item.value);
    var name = (document.getElementById("form").name.value);
    var number = (document.getElementById("form").number.value);
    var price = (document.getElementById("form").price.value);
    var quantity = (document.getElementById("form").quantity.value);
    let div = document.createElement("div");
    div.className = "titles";
    let textarea = document.createElement("textarea");
    div.appendChild(textarea);
    let content = document.createTextNode(item);
    textarea.appendChild(content);
    let textarea2 = document.createElement("textarea");
    div.appendChild(textarea2);
    let content2 = document.createTextNode(name);
    textarea2.appendChild(content2);
    let textarea3 = document.createElement("textarea");
    div.appendChild(textarea3);
    let content3 = document.createTextNode(number);
    textarea3.appendChild(content3);
    let textarea4 = document.createElement("textarea");
    div.appendChild(textarea4);
    let content4 = document.createTextNode(price);
    textarea4.appendChild(content4);
    let textarea5 = document.createElement("textarea");
    div.appendChild(textarea5);
    let content5 = document.createTextNode(quantity);
    textarea5.appendChild(content5);
    document.body.appendChild(div);



};
function printPage(){window.print();};






