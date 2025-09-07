/* 
© 2025 - tromoSM. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

*/
const $main = document.getElementsByTagName('html')[0];
const $light = document.getElementsByTagName('body')[0];
const $smartmanwithglasses = document.getElementsByTagName('head')[0];

const SM = "SM";
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

08.


*/
