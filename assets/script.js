
// scroll reveal
const io = new IntersectionObserver((entries)=>{
  for(const e of entries){
    if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
  }
}, {threshold: 0.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// toast
window.showToast = (msg)=>{
  const t = document.createElement('div');
  t.textContent = msg;
  t.setAttribute('role','status');
  t.style.position='fixed';
  t.style.left='50%';
  t.style.bottom='24px';
  t.style.transform='translateX(-50%)';
  t.style.padding='12px 16px';
  t.style.borderRadius='12px';
  t.style.background='rgba(0,0,0,.8)';
  t.style.color='white';
  t.style.boxShadow='0 8px 30px rgba(0,0,0,.5)';
  t.style.zIndex='9999';
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 2500);
};
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
