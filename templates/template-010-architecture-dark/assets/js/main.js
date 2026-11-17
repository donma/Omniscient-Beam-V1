function toggleMenu(){const d=document.getElementById('mobileDrawer');const o=d.classList.toggle('open');document.body.style.overflow=o?'hidden':'';}
document.querySelectorAll('.faq-q').forEach(q=>{q.addEventListener('click',()=>{q.parentElement.classList.toggle('open');});});
document.querySelectorAll('form').forEach(f=>{f.addEventListener('submit',e=>{e.preventDefault();alert('表單已送出（示意）');});});