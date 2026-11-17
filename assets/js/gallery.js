function getTemplateTags(template) {
  if (Array.isArray(template.tags)) return template.tags;
  if (template.tags && typeof template.tags === 'object') return Object.values(template.tags).flat().filter(Boolean);
  return [];
}
let ALL = [];
let filtered = [];
let view = 'grid';
async function loadData(){
  try { const r = await fetch('data/templates.json'); ALL = await r.json(); }
  catch(e){ if (typeof TEMPLATES_DATA !== 'undefined') ALL = TEMPLATES_DATA; else ALL = []; }
  if (!Array.isArray(ALL) || ALL.length===0) ALL = (typeof TEMPLATES_DATA !== 'undefined') ? TEMPLATES_DATA : [];
  filtered = [...ALL];
  render();
}
function applyFilters(){
  const q = (document.getElementById('search')?.value||'').toLowerCase();
  const ind = document.getElementById('filterIndustry')?.value||'全部';
  const bg = document.getElementById('filterBg')?.value||'全部';
  const layout = document.getElementById('filterLayout')?.value||'全部';
  filtered = ALL.filter(t=>{
    const tags = getTemplateTags(t);
    if (q && !(t.name.toLowerCase().includes(q) || tags.join(' ').includes(q))) return false;
    if (ind!=='全部' && t.industryCategory!==ind) return false;
    if (bg!=='全部' && (bg==='深色底'?t.backgroundMode!=='dark':t.backgroundMode!=='light')) return false;
    if (layout!=='全部' && t.layoutType!==layout) return false;
    return true;
  });
  render();
}
function render(){
  const grid = document.getElementById('templatesGrid');
  if(!grid) return;
  grid.className = view==='grid' ? 'templates-grid' : 'templates-list';
  grid.innerHTML = filtered.map(t=>{
    const tags = getTemplateTags(t).slice(0,4);
    return `<div class="template-card">
      <img src="${t.previewImage}" alt="${t.name}" onerror="this.src='https://picsum.photos/seed/${t.id}/600/400'">
      <div class="card-body">
        <h3>${t.name} <span style="color:#9aa4b2;font-size:.8rem">#${t.id}</span></h3>
        <div>${tags.map(x=>`<span class="badge">${x}</span>`).join('')}</div>
        <p style="color:#9aa4b2;font-size:.85rem;margin:8px 0">${t.industryCategory} · ${t.backgroundMode==='dark'?'深色底':'淺色底'} · ${t.layoutType}</p>
        <p style="font-size:.85rem">12 Pages · Prompt · 圖片豐富 · ZIP 待打包</p>
        <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
          <a href="${t.demoUrl}" target="_blank"><button style="background:#22c55e;border:0;color:#fff;padding:6px 12px;border-radius:8px">預覽網站</button></a>
          <a href="template-detail.html?id=${t.id}"><button style="border:0;color:#fff;padding:6px 12px;border-radius:8px;background:#374151">查看詳情</button></a>
          <a href="${t.promptUrl}" target="_blank"><button style="border:0;color:#fff;padding:6px 12px;border-radius:8px;background:#374151">查看 Prompt</button></a>
          <button disabled style="padding:6px 12px;border-radius:8px">ZIP 待打包</button>
        </div>
      </div>
    </div>`;
  }).join('');
  const stat = document.getElementById('statCount');
  if(stat) stat.textContent = filtered.length;
}
function setView(v){view=v;render();}
document.addEventListener('DOMContentLoaded',()=>{
  loadData();
  document.getElementById('search')?.addEventListener('input',applyFilters);
  document.getElementById('filterIndustry')?.addEventListener('change',applyFilters);
  document.getElementById('filterBg')?.addEventListener('change',applyFilters);
  document.getElementById('filterLayout')?.addEventListener('change',applyFilters);
});