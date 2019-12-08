/* Made by Penguin */

function getId(id) {
    return document.getElementById(id);
}

function getclass(cn) {
    return document.getElementsByClassName(cn);
}

let doc = document;
let docE = document.documentElement;
let body = document.body;

window.onload = function () {
    window.onscroll = function () {
        let i = document.documentElement.scrollTop;
        i > 150 ? getId("navbar").classList.add("onscroll") : getId("navbar").classList.contains("onscroll") ? getId("navbar").classList.remove("onscroll") : void (0);
    };
};