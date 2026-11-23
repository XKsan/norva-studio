document.addEventListener("DOMContentLoaded",()=>{
  const path=location.pathname.split("/").pop()||"index.html";
  const map={
    "index.html#studio":"studio.html",
    "index.html#services":"make.html",
    "index.html#works":"works.html",
    "index.html#contact":"studio.html#contact"
  };
  document.querySelectorAll("a[href]").forEach(a=>{
    const raw=a.getAttribute("href");
    if(map[raw])a.setAttribute("href",map[raw]);
    else if(raw==="index.html")a.setAttribute("href","studio.html");
    if(a.classList.contains("n-brand"))a.setAttribute("href","index.html");
  });
  document.querySelectorAll(".n-top").forEach(header=>{
    if(header.querySelector(".n-history-controls"))return;
    const brand=header.querySelector(".n-brand");
    if(!brand)return;
    const group=document.createElement("div");
    group.className="n-top-left";
    const controls=document.createElement("div");
    controls.className="n-history-controls";
    controls.setAttribute("aria-label","页面历史导航");
    controls.innerHTML='<button type="button" data-history="back" aria-label="后退" title="后退">←</button><button type="button" data-history="forward" aria-label="前进" title="前进">→</button><a href="index.html" aria-label="返回首页" title="返回首页">⌂</a>';
    brand.parentNode.insertBefore(group,brand);
    group.append(controls,brand);
    controls.querySelector('[data-history="back"]').addEventListener("click",()=>history.back());
    controls.querySelector('[data-history="forward"]').addEventListener("click",()=>history.forward());
  });
  const current=path.startsWith("service-")?"make.html":
    ["photography.html","documentary.html","antmonologue.html"].includes(path)?"works.html":path;
  document.querySelectorAll(".n-nav a").forEach(a=>{
    const href=(a.getAttribute("href")||"").split("#")[0];
    if(href===current){a.classList.add("active");a.setAttribute("aria-current","page");}
  });
  document.querySelectorAll("a[href]").forEach(a=>{
    const href=a.getAttribute("href")||"";
    if(href==="studio.html#services")a.setAttribute("href","make.html");
    if(href==="studio.html#works")a.setAttribute("href","works.html");
    if(a.textContent.includes("返回首页服务列表"))a.textContent="← 返回服务总览";
    if(a.textContent.includes("返回首页作品区"))a.textContent="← 返回作品总览";
  });
  document.querySelectorAll("span,p").forEach(node=>{
    const value=node.textContent.trim();
    if(value==="HMC-NORVA"||value==="微信：HMC-NORVA"){
      const button=document.createElement("button");
      button.type="button";button.className="n-copy";button.dataset.copy="HMC-NORVA";
      button.innerHTML='HMC-NORVA <i>复制</i>';
      if(value.startsWith("微信：")){
        node.textContent="微信：";
        node.appendChild(button);
      }else node.replaceWith(button);
    }
  });
  document.querySelectorAll('a[href$=".html"]').forEach(link=>{
    link.addEventListener("click",event=>{
      if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.button!==0)return;
      const url=new URL(link.href,location.href);
      if(url.origin!==location.origin||url.pathname===location.pathname)return;
      event.preventDefault();document.body.classList.add("n-leaving");
      window.setTimeout(()=>location.assign(url.href),110);
    });
  });
  document.querySelectorAll("[data-copy]").forEach(button=>{
    button.addEventListener("click",async()=>{
      const value=button.dataset.copy,original=button.innerHTML;
      try{
        if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(value);
        else{
          const field=document.createElement("textarea");field.value=value;
          field.style.position="fixed";field.style.opacity="0";document.body.appendChild(field);
          field.select();const ok=document.execCommand("copy");field.remove();
          if(!ok)throw new Error("copy unavailable");
        }
        button.innerHTML='HMC-NORVA <i>已复制</i>';
      }catch(error){button.innerHTML='HMC-NORVA <i>请手动复制</i>';}
      window.setTimeout(()=>button.innerHTML=original,1800);
    });
  });
});