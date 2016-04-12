var rletters = "àÀáÁâÂãÃäÄåÅ¸¨æÆçÇèÈéÉêÊëËìÌíÍîÎïÏğĞñÑòÒóÓôÔõÕöÖ÷×øØùÙüÜûÛúÚıİşŞÿß";
var rcodes = [1072,1040,1073,1041,1074,1042,1075,1043,1076,1044,1077,1045,1105,1025, 1078,1046,1079,1047,1080,1048,1081,1049,1082,1050,1083,1051,1084,1052, 1085,1053,1086,1054,1087,1055,1088,1056,1089,1057,1090,1058,1091,1059, 1092,1060,1093,1061,1094,1062,1095,1063,1096,1064,1097,1065,1100,1068, 1099,1067,1098,1066,1101,1069,1102,1070,1103,1071];
var ecodes = [97,65,98,66,119,87,103,71,100,68,101,69,94,38,118,86,122,90,105,73, 106,74,107,75,108,76,109,77,110,78,111,79,112,80,114,82,115,83,116, 84,117,85,102,70,104,72,99,67,61,43,91,123,93,125,120,88,121,89,35, 36,92,124,96,126,113,81];
function convert(e){
if(navigator.appName == "Microsoft Internet Explorer"){
if(document.form.translit.value == 1){
var key = window.event.keyCode;
for(i=0;i<ecodes.length;i++){
if(key == ecodes[i]){
window.event.keyCode = rcodes[i]; } } } }
else{
if(document.form.translit.value == 1 && !e.ctrlKey){
var key = e.charCode;
var textIn = document.form.the_message.value;
for(i=0;i<ecodes.length;i++){
if(key == ecodes[i]){
document.form.the_message.value = textIn + rletters.charAt(i);
e.preventDefault(); } } } } 
}



IE = (document.all)
NS = (navigator.appName=="Netscape" && navigator.appVersion >= "4")

function moveOut() {
if (window.cancel) {clearTimeout(cancel);}
if (window.moving2) {clearTimeout(moving2);}
if ((IE && ssm2.style.pixelLeft<0)||(NS && document.ssm2.left<0)) {
if (IE) {ssm2.style.pixelLeft += 10;}
if (NS) {document.ssm2.left += 10;}
moving1 = setTimeout('moveOut()', slideSpeed)}
else {clearTimeout(moving1)}};
function moveBack() {
cancel = setTimeout('moveBack1()', waitTime)}
function moveBack1() {
if (window.moving1) {clearTimeout(moving1)}
if ((IE && ssm2.style.pixelLeft>(-menuWidth))||(NS && document.ssm2.left>(-menuWidth))) {
if (IE) {ssm2.style.pixelLeft -= 10;}
if (NS) {document.ssm2.left -= 10;}
moving2 = setTimeout('moveBack1()', slideSpeed)}
else {clearTimeout(moving2)}};

lastY = 0;
function makeStatic(mode) {
if (IE) {winY = document.body.scrollTop;var NM=ssm2.style}
if (NS) {winY = window.pageYOffset;var NM=document.ssm2}
if (mode=="smooth") {
if ((IE||NS) && winY!=lastY) {
smooth = .2 * (winY - lastY);
if(smooth > 0) smooth = Math.ceil(smooth);
else smooth = Math.floor(smooth);
if (IE) NM.pixelTop+=smooth;
if (NS) NM.top+=smooth;
lastY = lastY+smooth;}
setTimeout('makeStatic("smooth")', 1)}
else if (mode=="advanced") {
if ((IE||NS) && winY>YOffset-staticYOffset) {
if (IE) {NM.pixelTop=winY+staticYOffset}
if (NS) {NM.top=winY+staticYOffset}}
else {
if (IE) {NM.pixelTop=YOffset}
if (NS) {NM.top=YOffset-7}}
setTimeout('makeStatic("advanced")', 1)}}

function initSlide() {
if (IE) {
ssm2.style.pixelLeft = -menuWidth;
ssm2.style.visibility = "visible"}
else if (NS) {
document.ssm2.left = -menuWidth;
document.ssm2.visibility = "show"}
else {alert('Choose either the "smooth" or "advanced" static modes!')}}



function startMenu() {
if (IE) {document.write('<DIV ID="ssm2" style="visibility:hidden;Position : Absolute ;Left : 1px ;Top : '+YOffset+'px ;Z-Index : 20;width:1px" onmouseover="moveOut()" onmouseout="moveBack()">')}
if (NS) {document.write('<LAYER visibility="hide" top="'+YOffset+'" name="ssm2" bgcolor="'+menuBGColor+'" left="1" onmouseover="moveOut()" onmouseout="moveBack()">')}
tempBar=""
for (i=0;i<barText.length;i++) {
tempBar+=barText.substring(i, i+1)+"<br>"}
document.write('<table border="0" cellpadding="0" cellspacing="1" width="'+(menuWidth+barWidth+1)+'" bgcolor="'+menuBGColor+'"><tr><td bgcolor="'+hdrBGColor+'" WIDTH="'+(menuWidth-1)+'" HEIGHT="'+hdrHeight+'" ALIGN="'+hdrAlign+'" VALIGN="'+hdrVAlign+'"><span class=mail>'+menuHeader+'</p></td><td align="center" rowspan="100" width="'+barWidth+'" bgcolor="'+barBGColor+'" valign="'+barVAlign+'"><p class=title>'+tempBar+'</p></TD></tr>')}




function endMenu() {
document.write('</table>')
if (IE) {document.write('</DIV>')}
if (NS) {document.write('</LAYER>')}
if ((IE||NS) && (menuIsStatic=="yes"&&staticMode)) {makeStatic(staticMode);}
}








