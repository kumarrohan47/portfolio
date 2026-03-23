/* ═══════════════════════════════════════
   assets/js/main.js
═══════════════════════════════════════ */

/* 1. Theme toggle */
(function(){
  const root=document.documentElement;
  const btn=document.getElementById('theme-btn');
  const saved=localStorage.getItem('rk-theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  root.dataset.theme=saved;
  btn.querySelector('.theme-icon').textContent=saved==='dark'?'☀':'☾';
  btn.addEventListener('click',()=>{
    const next=root.dataset.theme==='dark'?'light':'dark';
    root.dataset.theme=next;
    localStorage.setItem('rk-theme',next);
    btn.querySelector('.theme-icon').textContent=next==='dark'?'☀':'☾';
  });
})();

/* 2. Mobile burger */
(function(){
  const burger=document.getElementById('burger');
  const links=document.getElementById('nav-links');
  if(!burger||!links)return;
  burger.addEventListener('click',()=>{
    links.classList.toggle('open');
    burger.setAttribute('aria-expanded',links.classList.contains('open'));
  });
  links.querySelectorAll('.nav-a').forEach(a=>{
    a.addEventListener('click',()=>links.classList.remove('open'));
  });
})();

/* 3. Scroll-reveal */
(function(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});
  },{threshold:0.1});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
})();

/* 4. Skill bars */
(function(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.querySelectorAll('.sk-fill').forEach(f=>{f.style.width=f.dataset.w+'%';});
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.25});
  document.querySelectorAll('.sk-card').forEach(c=>obs.observe(c));
})();

/* 5. Active nav on scroll */
(function(){
  const sections=document.querySelectorAll('section[id]');
  const links=document.querySelectorAll('.nav-a');
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting)
        links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));
    });
  },{threshold:0.4});
  sections.forEach(s=>obs.observe(s));
})();

/* 6. Contact form */
(function(){
  const form=document.getElementById('contactForm');
  const status=document.getElementById('form-status');
  if(!form)return;
  function err(id,msg){document.getElementById(id).textContent=msg;}
  function clear(){['err-name','err-email','err-msg'].forEach(id=>document.getElementById(id).textContent='');}
  form.addEventListener('submit',e=>{
    e.preventDefault();clear();
    status.className='form-status';
    const name=form.querySelector('#c-name').value.trim();
    const email=form.querySelector('#c-email').value.trim();
    const msg=form.querySelector('#c-msg').value.trim();
    let ok=true;
    if(!name){err('err-name','Name is required');ok=false;}
    if(!email){err('err-email','Email is required');ok=false;}
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){err('err-email','Enter a valid email');ok=false;}
    if(msg.length<10){err('err-msg','Message too short (min 10 chars)');ok=false;}
    if(!ok)return;
    const btn=document.getElementById('submit-btn');
    btn.disabled=true;
    btn.querySelector('span').textContent='Sending…';
    /* Replace setTimeout with Formspree fetch() for real emails */
    setTimeout(()=>{
      status.textContent='✓ Message sent! Rohan will get back to you soon.';
      status.className='form-status ok';
      form.reset();
      btn.disabled=false;
      btn.querySelector('span').textContent='Send Message';
    },900);
  });
})();
