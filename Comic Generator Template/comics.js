var images_1 = [
    "comicPanels/panel_1/Panel_1.png",
    "comicPanels/panel_1/Panel_2.png",
    "comicPanels/panel_3/Panel_3.png"
];

var images_2 = [
    "comicPanels/panel_2/Panel_1.png",
    "comicPanels/panel_2/Panel_2.png",
    "comicPanels/panel_3/Panel_3.png"
];

var images_3 = [
	"comicPanels/panel_3/Panel_1.png",
    "comicPanels/panel_3/Panel_2.png",
    "comicPanels/panel_3/Panel_3.png"
];

function panel_1() {
    var rand = Math.floor(Math.random() * images_1.length);
    document.getElementById("Strip_1").src = images_1[rand];
}

function panel_2() {
    var rand = Math.floor(Math.random() * images_2.length);
    document.getElementById("Strip_2").src = images_2[rand];
}

function panel_3() {
    var rand = Math.floor(Math.random() * images_3.length);
    document.getElementById("Strip_3").src = images_3[rand];
}
