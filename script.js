const header=document.getElementById('site-header');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>10),{passive:true});
const waFloat=document.querySelector('.wa-float');
if(waFloat){
  waFloat.classList.add('pre-scroll');
  addEventListener('scroll',()=>waFloat.classList.toggle('pre-scroll',scrollY<420),{passive:true});
}
const burger=document.getElementById('hamburger'), mnav=document.getElementById('mobile-nav');
burger.addEventListener('click',()=>{const open=mnav.classList.toggle('open');burger.setAttribute('aria-expanded',open);});
mnav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mnav.classList.remove('open');burger.setAttribute('aria-expanded','false');}));
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
} else { document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in')); }
