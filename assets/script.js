var musics = [
    "https://cdn.discordapp.com/attachments/941425758155468910/958449846065430578/whitetee_1.mp3",
    "https://cdn.discordapp.com/attachments/941425758155468910/958449868421070898/heatwaves_2.mp3",
    "https://cdn.discordapp.com/attachments/941425758155468910/958449891347148800/wefellinloveinoctober_3.mp3",
    "https://cdn.discordapp.com/attachments/941425758155468910/958449922389200926/starshopping_4.mp3",
    "https://cdn.discordapp.com/attachments/941425758155468910/958449959575883786/blindinglights_5.mp3",
    "https://cdn.discordapp.com/attachments/941425758155468910/958449975250006016/itsnotsobad_6.mp3"
];

var body = document.querySelector("body");
var mNum=0;
if (body !== null) {
    var music = document.getElementById("music");

    body.addEventListener("click", (ev) => {
        var tar = ev.target;
        var ck = tar.classList.contains("noAction");
        if (ck == false) {
            if(mNum==(musics.length-1)){
                mNum=0;
            }else{
                mNum++;
            }
            music.src = musics[mNum];
            music.play();
        }
    })
}


/*___title changer___*/
var title=document.querySelector("title");
var title_vl=title.innerText.trim().split("");

setInterval(cng_title,350);
var i=0;
var j=0;
var arr=[];
var ind=["《","》"];
function cng_title(){
    if(i==(ind.length-1)){
        i=0;
        arr.push(title_vl[j]);
        if(j==(title_vl.length)){
            arr=[];
            j=0;
        }else{
            j++;
        }
    }else{
        i++;
    }
    title.innerText=arr.join("")+ind[i];
}

/*_____ prevent context menu _____*/

document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}