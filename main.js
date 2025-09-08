
const $main = document.getElementsByTagName('html')[0];
const $light = document.getElementsByTagName('body')[0];
const $smartmanwithglasses = document.getElementsByTagName('head')[0];

const SM = "SM";


document.addEventListener("DOMContentLoaded", () => {

const usrr = document.querySelector('[setting="user"]');
const rightsrr = document.querySelector('[setting="rights-reserved"]').innerText;
const _$data_dih = new Date().getFullYear();
const licEle = document.querySelector('[license]');
const $license = licEle.getAttribute("license").toUpperCase();
let  $licenseR;
let  $licenseRR;
if(usrr && usrr.innerText.trim() === ""){
switch ($license){
    case "CC BY 4.0":
       $licenseRR= "Licensed under the Creative Commons Attribution 4.0 International License. You may share and adapt this work with credit to the author."
     break;
  
     case "CC BY-SA 4.0":
        $licenseRR="Licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. You may share and adapt this work with credit, but derivative works must be licensed under the same terms."
     break;
   
     case "CC BY-NC 4.0":
        $licenseRR="Licensed under the Creative Commons Attribution-NonCommercial 4.0 International License. You may share and adapt this work with credit, but not for commercial purposes."
     break;  
   
     case "CC BY-NC-ND 4.0":
        $licenseRR="Licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License. You may share this work with credit, but no modifications or commercial use are permitted."
     break;   
     
     case "MIT Licese":
        $licenseRR='Permission is granted free of charge to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies, provided this notice is included. The work is provided "as is", without warranty.'
     break;   
    default :$licenseRR=""
     
        
}
}
else{
$licenseR = $license;
}
licEle.innerText="© "+_$data_dih+" - "+usrr.innerText+". "+rightsrr+" rights reserved."+"(" +$licenseR+").";




    let $metaCharValue;
const SM$il = document.querySelector('[setting="meta-charset"]');
const allvalve = SM$il.getAttribute("setting");
if (allvalve == "meta-charset"){
    if(document.querySelector('[setting="meta-charset"]').innerHTML==""){
     $metaCharValue = "UTF-8";
    }
    else{
    $metaCharValue =   document.querySelector('[setting="meta-charset"]').innerHTML;
    }
}



const $metaR = document.createElement('meta');
$metaR.setAttribute('charset',$metaCharValue);


    document.querySelectorAll(`[${SM}="flex-responsive-center"]`).forEach(frcSM => {
    frcSM.style.display="flex";
    frcSM.style.justifyContent="center";
    frcSM.style.alignItems="center";
    frcSM.style.flexWrap="wrap";
    
}) 

document.querySelectorAll(`[${SM}="flex-responsive"]`).forEach(frSM => {
    frSM.style.display="flex";
    frSM.style.alignItems="center";
    frSM.style.flexWrap="wrap";
}) 

document.querySelectorAll(`[${SM}="flex-center"]`).forEach(fcSM => {
    fcSM.style.display="flex";
    fcSM.style.justifyContent="center";
    fcSM.style.alignItems="center";
}) 
document.querySelectorAll(`[${SM}="flex"]`).forEach(fSM => {
    fSM.style.display="flex";
})  

document.querySelectorAll(`[${SM}="header-main"]`).forEach(hdr => {
const $bckdrp = hdr.getAttribute('$backdropval');
    $main.style.width="100%";
    $main,$light.style.padding="0";
$main,$light.style.margin="0";
    hdr.style.background="#0000008c";
    hdr.style.width="100%";
    hdr.style.position="fixed";
    hdr.style.top="0";
    hdr.style.backdropFilter="blur("+$bckdrp+"px)";
    hdr.style.padding="2px 7px";
    hdr.style.zIndex="+9999999999999999999999999999999";


})
})

document.querySelectorAll('[\\$flex]').forEach(fzvm => {
const $xmas = fzvm.getAttribute('$flex')
switch($xmas){
    case "c":
     fzvm.style.flexDirection="column"
    break;
   case "r":
   fzvm.style.flexDirection="row"
    break;
      case "cr":
     fzvm.style.flexDirection="column-reverse"
    break;
   case "rr":
   fzvm.style.flexDirection="row-reverse"
    break;
    case "def":
        fzvm.style.flexDirection="initial" 
        break;
    case "ini" : 
     fzvm.style.flexDirection="inherit"
     break;
default :
      console.error(`validation error 1. value must be one from the following (c,r,cr,r,def,ini). "${$xmas}" is not a proper value. `)

    }

    })





/*

   string                                                              tromoSM=""

00.main attribute name                               Const=> "{{attr}}" 

01.responsive flex styling centered.                 flex-responsive-center
02.responsive flex styling                                 flex-responsive
03.flex styling centered                                    flex-center
04.flex styling                                                    flex

05.flex direction must come after all the (use $flex)
     element names                                                        -c  --column
                                                                          -r   --row
                                                                          -cr  --column reverse
                                                                          -rr   --row reverse

     ex: $flex="c"

06.Floating header                                           header-main

07.Backdrop filter blur value                                &backdropval
   
    value must me a number

08.Authors name                                             setting="user".innerText
   
   this will be used for the license attribute

09.License name                                               license
   
   ex: license="cc"

*/
