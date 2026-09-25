const dialog=document.querySelector('#film-dialog'),expanded=document.querySelector('#expanded-film');
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
let motionPaused=reduced;
const allVideos=[...document.querySelectorAll('video')];
const hero=document.querySelector('#bg-video');
const toggle=document.querySelector('.motion-toggle');
function syncMotion(){toggle.textContent=motionPaused?'Play motion':'Pause motion';toggle.setAttribute('aria-pressed',String(motionPaused));if(motionPaused)allVideos.forEach(v=>v.pause());else{hero.play().catch(()=>{});document.querySelectorAll('.gallery-video').forEach(v=>{if(v.dataset.visible==='true'&&!v.closest('details:not([open])'))v.play().catch(()=>{})})}}
toggle.addEventListener('click',()=>{motionPaused=!motionPaused;syncMotion()});
if(reduced){hero.removeAttribute('autoplay');hero.pause()}else hero.play().catch(()=>{});
syncMotion();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{const v=entry.target;v.dataset.visible=String(entry.isIntersecting);if(entry.isIntersecting&&!dialog.open&&!motionPaused&&!v.closest('details:not([open])'))v.play().catch(()=>{});else v.pause()}),{threshold:.35});
document.querySelectorAll('.gallery-video').forEach(v=>observer.observe(v));
const heroObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&!dialog.open&&!motionPaused)hero.play().catch(()=>{});else hero.pause()}),{threshold:.05});heroObserver.observe(hero);
document.querySelectorAll('.expand').forEach(button=>button.addEventListener('click',()=>{const film=button.closest('figure'),video=film.querySelector('video');allVideos.forEach(v=>v.pause());document.querySelector('#film-dialog-title').textContent=film.querySelector('figcaption strong').textContent;expanded.src=video.currentSrc||video.src;expanded.poster=video.poster;const startTime=video.currentTime;expanded.addEventListener('loadedmetadata',()=>{expanded.currentTime=Math.min(startTime,expanded.duration||startTime)},{once:true});dialog.showModal();expanded.play().catch(()=>{})}));
document.querySelector('#close-film').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{expanded.pause();expanded.removeAttribute('src');expanded.load()});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
