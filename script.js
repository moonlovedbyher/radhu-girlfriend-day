const open=document.getElementById("open"), site=document.getElementById("site");
open.onclick=()=>{site.classList.remove("hidden");open.textContent="♡ enjoy, babudi ♡";open.disabled=true;site.scrollIntoView({behavior:"smooth"});};
const play=document.getElementById("play"),song=document.getElementById("song");
play.onclick=async()=>{try{if(song.paused){await song.play();play.textContent="❚❚ pause our song"}else{song.pause();play.textContent="▶ play our song"}}catch(e){play.textContent="add the song file first ♡"}};
