var ImgList = [
    "https://www.poetafrancescoterrone.it/wp-content/uploads/2019/01/Ing.foto_.png", 
    "https://www.vesuviolive.it/wp-content/uploads/2018/03/matteo-salvini-prima-il-nord-600x392.jpeg"
];

var it1 = document.getElementById("item1");
var it2 = document.getElementById("item2");
var it3 = document.getElementById("item3");

var Audio1 = document.getElementById("Si");
var Audio2 = document.getElementById("No");
var Audio3 = document.getElementById("LEGA");

function changeImg() {
    if (it1.src == "https://fsd.multiurok.ru/html/2019/08/10/s_5d4e88cc78a58/1190477_3.png") {

        it1.src = ImgList[Math.floor(Math.random() * ImgList.length)];
        it2.src = ImgList[Math.floor(Math.random() * ImgList.length)];
        it3.src = ImgList[Math.floor(Math.random() * ImgList.length)];

        if (it1.src != ImgList[1] && it1.src == it2.src && it2.src == it3.src) {

            Audio1.play();

            document.getElementById("messageGG").className = "";

        } 
        else if (it1.src != ImgList[0] && it1.src == it2.src && it2.src == it3.src) {

            Audio3.play();

            document.getElementById("messageLEGA").className="";

        } else {

            Audio2.play();

            document.getElementById("messageNO").className = "";

        }
    } else {

        it1.src = "https://fsd.multiurok.ru/html/2019/08/10/s_5d4e88cc78a58/1190477_3.png";
        it2.src = "https://fsd.multiurok.ru/html/2019/08/10/s_5d4e88cc78a58/1190477_3.png";
        it3.src = "https://fsd.multiurok.ru/html/2019/08/10/s_5d4e88cc78a58/1190477_3.png";

        Audio1.pause();
        Audio2.pause();
        Audio3.pause();

        document.getElementById("messageGG").className = "hide";
        document.getElementById("messageNO").className = "hide";
        document.getElementById("messageLEGA").className = "hide";
    }
}