// function for getting innerText
function getInnerText(id) {
    let getText = document.getElementById(id).innerText;
    return getText;
}
function getInnerHtml(id) {
    let getHtml = document.getElementById(id).innerHTML;
    return getHtml;
}
function getElement(id) {
    let getEle = document.getElementById(id);
    return getEle;
}
function getElementByClass(giveClassName) {
    let getEle = document.getElementsByClassName(giveClassName);
    return getEle;
}
function getByQu(id) {
    let getEle = document.querySelector(id);
    return getEle
}