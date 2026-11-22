document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll('a[href$=".html"]').forEach(link=>{
    link.addEventListener("click",event=>{
      if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
      event.preventDefault();const target=link.href;document.body.style.opacity=".65";setTimeout(()=>location.href=target,120);
    });
  });
  document.querySelectorAll("[data-copy]").forEach(button=>{
    button.addEventListener("click",async()=>{
      const value=button.getAttribute("data-copy");const original=button.textContent;
      try{await navigator.clipboard.writeText(value);button.textContent="COPIED";button.setAttribute("aria-label","Copied "+value);}
      catch(error){button.textContent=value;button.setAttribute("aria-label","Select and copy "+value);}
      window.setTimeout(()=>{button.textContent=original;button.setAttribute("aria-label","Copy WeChat ID "+value);},1800);
    });
  });
});
