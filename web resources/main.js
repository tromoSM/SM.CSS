   
   const rooot = document.documentElement;
let nahh;
function $light(){
let bro = localStorage.getItem("id");

    if(bro=="who"){
    rooot.style.setProperty('--dawgAhh','black');
    rooot.style.setProperty('--mainAhh','white');
    rooot.style.setProperty('--lit','rgb(56, 56, 56)');
    rooot.style.setProperty('--dude','#222222');
    nahh = "https://github.com/andrewtavis/sf-symbols-online/blob/master/glyphs_white/sun.max.fill.png?raw=true"
    document.querySelector('[tromoSM=noSkeR]').setAttribute('src',nahh)
        localStorage.setItem("id","me")

    
    }
    else{
    rooot.style.setProperty('--mainAhh','black');
    rooot.style.setProperty('--dawgAhh','white');
    rooot.style.setProperty('--dude','#c7c7c7');
    rooot.style.setProperty('--lit','#cfcfcf');
    nahh = "https://github.com/andrewtavis/sf-symbols-online/blob/master/glyphs/sun.max.fill.png?raw=true"
    document.querySelector('[tromoSM=noSkeR]').setAttribute('src',nahh)
        localStorage.setItem("id","who")

    }
}

function gittrigger(){
    window.open("https://github.com/tromoSM/SM.CSS",'_blank');
    
}
function learnahh(){
window.open("https://github.com/tromoSM/SM.CSS?tab=readme-ov-file#what-each-attributes-and-propeties-mean")}