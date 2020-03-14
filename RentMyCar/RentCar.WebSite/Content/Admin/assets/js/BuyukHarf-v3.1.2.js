/** 
* Start BuyukHarf()
* Coded By Mustafa OZCAN
* Development Support :Orhan POLAT , Testing : Cengiz KOC
* For more information www.mustafaozcan.net
* Version 3.1.2 Release Date Time : 20.03.2009 00:16
* Sample Usage Keypress Event:  onkeypress="return BuyukHarf(event);"
* Sample Usage Blur Event: onblur="BuyukHarfBlur(event,true)" 
* Blur Event Second Parameter : Clear [Enter Keys] and [WhiteSpaces 2 and more] in Value
* For Input:  <input type="text" id="txtInput" onkeypress="return BuyukHarf(event);" onblur="BuyukHarfBlur(event,false)" />
* For TextArea : <textarea cols="50" rows="10" id="txtArea" onkeypress="return BuyukHarf(event);" onblur="BuyukHarfBlur(event,true)" ></textarea>
*/
function BuyukHarf(e) { var nesne = e.target ? e.target : e.srcElement; var basilantus = e.charCode == undefined ? e.keyCode : e.charCode; var str = String.fromCharCode(basilantus); if ((basilantus < 97 || basilantus > 122) && !isTRChar(basilantus)) return true; if (basilantus == 105) str = '\u0130'; if (nesne.createTextRange) { e.keyCode = str.toUpperCase().charCodeAt(0); return true; } else { var startpos = nesne.selectionStart; var endpos = nesne.selectionEnd; nesne.value = nesne.value.substr(0, startpos) + str.toUpperCase() + nesne.value.substr(endpos); nesne.setSelectionRange(startpos + 1, startpos + 1); return false; } }
function isTRChar(key) { var trchar = [231, 246, 252, 287, 305, 351]; for (var i = 0; i < trchar.length; i++) { if (trchar[i] == key) return true; } return false; }
function BuyukHarfBlur(e, clear) { var nesne = e.target ? e.target : e.srcElement; var val = nesne.value; val = val.replace(/i/g, "\u0130").replace(/^\s+|\s+$/g, ""); if (clear) val = val.replace(/\s{2,}/g, " "); nesne.value = val.toUpperCase(); } /** 
 * End BuyukHarf()
 */