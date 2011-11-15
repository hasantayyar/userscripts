// ==UserScript==
// @name           izlesenePlainPlayer
// @description    watch  izlesene videos on a plain page 
// @copyright      2011, Hasan Tayyar BEŞİK (http://hasantayyar.com)
// @license        LGPL 
// @include        http://www.izlesene.com/*
// ==/UserScript==


var player = document.getElementById('izlesene_player_container').innerHTML;
document.body.innerHTML = '';
document.write('<body style="background-color:#121212;margin:0;padding:0;"><div style="background-color:#121212;width:645px;height:360px;margin:0 auto;">'+player+'</div></body>');

