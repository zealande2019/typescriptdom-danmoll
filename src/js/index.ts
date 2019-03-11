//Her skal du skrive din typescriptkode
var EnkeltID = document.getElementById("1");
console.log(EnkeltID);
var FlereClass = document.getElementsByClassName("usundt");
console.log(FlereClass);
var list = document.getElementsByTagName("UL")[0];
console.log(list);

var result = list.getElementsByTagName("LI");

for (let i = 0; i < result.length; i++) {
console.log("Varen:");
console.log(result.item(i).innerHTML);
console.log("Er sundhedsmæssigt:");
console.log(result.item(i).className);
console.log(" ");
}

var EnkeltIDChange = document.getElementById("1").setAttribute("class", "usundt");

console.log(document.getElementsByName("UL"));

let listeLi = document.getElementsByTagName('li');
for (let i = 0; i < listeLi.length; i++) {
    console.log('class : ' + listeLi[i].getAttribute('class'));
    if (listeLi[i].getAttribute('class') == 'usundt') {
        listeLi[i].setAttribute('class', 'sundt');
    }
    
}