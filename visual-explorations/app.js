const body=document.body;
const concepts={
 cosmic:{kicker:"AN OPEN FIELD OF POSSIBILITY",title:"Ideas<br><em>in orbit.</em>",description:"一个持续生长的数字空间。观察变化，让想法发生。",index:"01",space:"A FIELD TO EXPLORE",note:"A living practice<br>without fixed boundaries.",summary:"从现实需求出发，在创作与技术之间持续探索。"},
 installation:{kicker:"FORM / MATTER / INTERACTION",title:"Make<br><em>space.</em>",description:"让创意成为可感知、可探索、可互动的数字装置。",index:"02",space:"OBJECTS IN MOTION",note:"A collection of<br>independent expressions.",summary:"让每一种实践拥有自己的形态、尺度与观看方式。"},
 fluid:{kicker:"IMAGE / TIME / TRANSITION",title:"Beyond<br><em>the frame.</em>",description:"让影像、声音与想法在连续变化中建立新的关系。",index:"03",space:"A CONTINUOUS NARRATIVE",note:"Stories unfold<br>through movement.",summary:"从影像出发，在时间与叙事之间连接不同的创作。"}
};
const sectionContent={
 studio:{kicker:"NORVA / STUDIO",title:"持续生长的<br><em>数字创意实践。</em>",body:"NORVA 关注技术、艺术、文化与人的表达方式。我们从真实问题出发，让创意通过实践成为具体成果。",meta:"OBSERVE / GUIDE / PRACTICE"},
 services:{kicker:"NORVA / SERVICES",title:"把想法<br><em>认真完成。</em>",body:"视频与音频后期、字幕与 AI 配音、文档解析与 Markdown 知识整理。以实用、可靠的制作能力回应真实需求。",meta:"MOVING IMAGE / WORDS & SOUND / KNOWLEDGE"},
 works:{kicker:"NORVA / WORKS",title:"记录、表达，<br><em>持续创造。</em>",body:"摄影、纪录片、原创短视频与合作项目。每件作品以适合它的方式呈现，不被统一的版式限制。",meta:"IMAGE / FILM / FIELD NOTES"},
 contact:{kicker:"NORVA / CONTACT",title:"让下一件事<br><em>开始发生。</em>",body:"如果你有具体需求、合作想法，或一个正在形成的创意，可以从一次交流开始。Email：tbmax.in@hotmail.com · 微信：HMC-NORVA",meta:"GET IN TOUCH"}
};
const modeButtons=[...document.querySelectorAll("[data-mode]")];
function setMode(mode){body.dataset.mode=mode;modeButtons.forEach(b=>b.classList.toggle("active",b.dataset.mode===mode));const c=concepts[mode];document.querySelector("#entry-kicker").textContent=c.kicker;document.querySelector("#entry-title").innerHTML=c.title;document.querySelector("#entry-description").textContent=c.description;document.querySelector("#stage-index").textContent=c.index;document.querySelector("#space-kicker").textContent=c.space;document.querySelector("#scene-note").innerHTML=c.note;document.querySelector("#workspace-summary").textContent=c.summary;document.querySelector("#section-number").textContent=c.index;}
modeButtons.forEach(b=>b.addEventListener("click",()=>setMode(b.dataset.mode)));
const workspace=document.querySelector(".workspace"),entry=document.querySelector(".entry"),panel=document.querySelector(".detail-panel");
document.querySelector("#enter-button").addEventListener("click",()=>{entry.style.display="none";workspace.classList.add("active");window.scrollTo({top:0,behavior:"smooth"});body.dataset.view="space";});
document.querySelector("#return-button").addEventListener("click",()=>{workspace.classList.remove("active");entry.style.display="block";panel.classList.remove("open");body.dataset.view="entry";window.scrollTo({top:0,behavior:"smooth"});});
function openDetail(key){const d=sectionContent[key];if(!d)return;document.querySelector("#detail-kicker").textContent=d.kicker;document.querySelector("#detail-title").innerHTML=d.title;document.querySelector("#detail-body").textContent=d.body;document.querySelector("#detail-meta").textContent=d.meta;panel.classList.add("open");}
document.querySelectorAll(".scene-object").forEach(el=>{el.addEventListener("click",()=>openDetail(el.dataset.section));el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openDetail(el.dataset.section);}})});
document.querySelector(".detail-close").addEventListener("click",()=>panel.classList.remove("open"));
const menu=document.querySelector(".global-menu"),menuButton=document.querySelector(".menu-trigger");
function toggleMenu(open){menu.classList.toggle("open",open);menu.setAttribute("aria-hidden",String(!open));menuButton.setAttribute("aria-expanded",String(open));menuButton.querySelector("b").textContent=open?"×":"＋";}
menuButton.addEventListener("click",()=>toggleMenu(!menu.classList.contains("open")));
menu.querySelectorAll("[data-section]").forEach(b=>b.addEventListener("click",()=>{if(body.dataset.view==="entry"){entry.style.display="none";workspace.classList.add("active");body.dataset.view="space";}toggleMenu(false);openDetail(b.dataset.section);}));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){panel.classList.remove("open");toggleMenu(false);}});
setMode("cosmic");


// V2 interaction layer: restrained parallax, deliberate transitions, keyboard access.
const stage=document.querySelector(".visual-stage");
let pointerFrame=0;
function moveSpace(event){
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const rect=stage.getBoundingClientRect();
  const nx=(event.clientX-rect.left)/rect.width-.5;
  const ny=(event.clientY-rect.top)/rect.height-.5;
  if(pointerFrame)cancelAnimationFrame(pointerFrame);
  pointerFrame=requestAnimationFrame(()=>{
    stage.style.setProperty("--pointer-x",(nx*13).toFixed(2)+"px");
    stage.style.setProperty("--pointer-y",(ny*10).toFixed(2)+"px");
    const copy=document.querySelector(".entry-copy");
    copy.style.setProperty("--copy-x",(-nx*5).toFixed(2)+"px");
    copy.style.setProperty("--copy-y",(-ny*4).toFixed(2)+"px");
    document.querySelectorAll(".art").forEach((art,i)=>{
      art.style.translate=(nx*(i+1)*3).toFixed(2)+"px "+(ny*(i+1)*2).toFixed(2)+"px";
    });
  });
}
if(window.matchMedia("(hover: hover) and (pointer: fine)").matches){
  document.querySelector(".entry").addEventListener("pointermove",moveSpace,{passive:true});
  document.querySelector(".entry").addEventListener("pointerleave",()=>{
    stage.style.removeProperty("--pointer-x");stage.style.removeProperty("--pointer-y");
    document.querySelector(".entry-copy").style.setProperty("--copy-x","0px");
    document.querySelector(".entry-copy").style.setProperty("--copy-y","0px");
    document.querySelectorAll(".art").forEach(art=>art.style.translate="0 0");
  });
}
const originalSetMode=setMode;
setMode=function(mode){
  const changed=body.dataset.mode!==mode;
  if(changed){
    stage.classList.add("is-changing");
    window.setTimeout(()=>stage.classList.remove("is-changing"),720);
  }
  originalSetMode(mode);
  modeButtons.forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.mode===mode)));
};
document.addEventListener("keydown",event=>{
  if(event.altKey||event.ctrlKey||event.metaKey)return;
  if(event.target.matches("input,textarea,select"))return;
  if(event.key==="1")setMode("cosmic");
  if(event.key==="2")setMode("installation");
  if(event.key==="3")setMode("fluid");
});
document.querySelector(".detail-panel").addEventListener("click",event=>{
  if(event.target===panel)panel.classList.remove("open");
});
