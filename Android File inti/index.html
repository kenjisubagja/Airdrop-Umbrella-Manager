<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Airdrop Umbrella Manager</title>
  <style>
    :root { --bg:#0b0f14; --card:#121820; --muted:#1a2230; --text:#e8eef8; --sub:#a9b6c8; --accent:#7c5cff; --ok:#19c37d; --warn:#ffb020; --danger:#ff5d5d; }
    *{box-sizing:border-box}
    body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Helvetica,Arial,sans-serif;background:linear-gradient(180deg,#0b0f14,#0e141c 30%,#0b0f14);color:var(--text)}
    .container{max-width:1150px;margin:24px auto;padding:0 16px}
    h1{font-size:26px;margin:0 0 6px;display:flex;align-items:center;gap:10px}
    .logo-icon{width:32px;height:32px;border-radius:50%;vertical-align:middle}
    .card{background:var(--card);border:1px solid #1f2735;border-radius:16px;padding:16px;box-shadow:0 10px 30px rgba(0,0,0,.25)}
    .tabs{display:flex;gap:8px;margin:12px 0 16px;flex-wrap:wrap}
    .tab{padding:10px 14px;border-radius:12px;border:1px solid #2a3850;background:#1b2433;color:var(--text);cursor:pointer}
    .tab.active{background:linear-gradient(180deg,#8f78ff,#6a4bff);border-color:#6a4bff}
    label{font-size:12px;color:var(--sub)}
    input, select{width:100%;padding:10px 12px;border-radius:10px;border:1px solid #233044;background:var(--muted);color:var(--text);outline:none}
    input:focus, select:focus{border-color:var(--accent);box-shadow:0 0 0 3px #7c5cff33}
    .toolbar{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0}
    .btn{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:12px;border:1px solid #2a3850;background:#1b2433;color:var(--text);cursor:pointer;user-select:none}
    .btn:hover{filter:brightness(1.1)}
    .btn-primary{background:linear-gradient(180deg,#8f78ff,#6a4bff);border-color:#6a4bff}
    .btn-danger{background:linear-gradient(180deg,#ff7b7b,#ff4c4c);border-color:#ff4c4c}
    table{width:100%;border-collapse:separate;border-spacing:0 10px}
    thead th{font-size:12px;color:#9db0c9;text-align:left;padding:0 10px;border-right:1px solid #223049}
    thead th:last-child{border-right:none}
    tbody tr{background:var(--card);border:1px solid #1f2a3a}
    tbody td{padding:12px 10px;border-top:1px solid #223049;border-bottom:1px solid #223049;border-right:1px solid #223049;vertical-align:middle}
    tbody tr:first-child td{border-top-left-radius:12px;border-top-right-radius:12px}
    tbody tr:last-child td{border-bottom-left-radius:12px;border-bottom-right-radius:12px}
    tbody td:last-child{border-right:none}
    .row-btn{padding:8px 10px;border-radius:10px;border:1px solid #2a3850;background:#162031;color:var(--text);cursor:pointer}
    .row-btn:disabled{opacity:.5;cursor:not-allowed;filter:none}
    .pill{padding:6px 10px;border-radius:999px;font-size:12px;display:inline-block}
    .pill-ok{background:#10271f;color:#7ce2b6;border:1px solid #245a42}
    .pill-warn{background:#2a230c;color:#ffd37a;border:1px solid #5c4a16}
    .pill-muted{background:#1e2634;color:#b4c2d6;border:1px solid #2a3850}
    .pill-danger{background:#2a0c0c;color:#ff7b7b;border:1px solid #5c1616}
    .empty{color:#8fa3bd;text-align:center;padding:18px}
    a.link { color:#7c5cff; text-decoration:none; font-weight:bold; }
    .pager{display:flex;justify-content:flex-end;align-items:center;gap:8px;margin-top:8px}
    .pager .btn{padding:6px 10px;border-radius:8px;border:1px solid #2a3850;background:#1b2433;color:var(--text);cursor:pointer}
    .pager .btn:disabled{opacity:.5;cursor:not-allowed}
    .pager .info{font-size:12px;color:#8fa3bd;margin:0 6px}
    .pager select.rows{width:72px !important;min-width:72px;padding:2px 6px;height:24px;font-size:11px;background:#1b2433;border:1px solid #2a3850;color:var(--text);border-radius:8px;}
    .pager .mini{ font-size:11px; color:var(--sub); margin-right:6px; }

    /* kolom cari lebar, dropdown status kecil */
    .toolbar .search{flex:1; min-width:180px}
    .toolbar .select-sm{width:96px; min-width:96px; padding:6px 8px; height:32px; font-size:12px; border-radius:8px}
    @media (max-width:480px){ .toolbar .select-sm{ width:88px; min-width:88px } }

    /* FAB (Tambah) */
    .fab{position:fixed;right:16px;bottom:82px;z-index:9998;border:none;border-radius:999px;padding:14px 18px;background:linear-gradient(180deg,#8f78ff,#6a4bff);color:#fff;font-weight:700;box-shadow:0 10px 30px rgba(0,0,0,.35);cursor:pointer}
    .fab:active{transform:translateY(1px)}

    /* Modal full-screen add/edit */
    .backdrop{position:fixed;inset:0;background:#0008;display:none;align-items:flex-end;justify-content:center;z-index:9999}
    .sheet{width:100%;max-width:760px;background:#0f1622;border-top-left-radius:18px;border-top-right-radius:18px;border:1px solid #22324a;padding:16px 14px 18px}
    .sheet h3{margin:0 0 10px}
    .sheet .grid{display:grid;grid-template-columns:1fr;gap:12px}
    .sheet .actions{display:flex;gap:8px;justify-content:flex-end;margin-top:10px}
    @media(min-width:720px){ .sheet{margin-bottom:20px} .sheet .grid{grid-template-columns:2fr 1fr 2fr 1fr 1fr 1fr} }

    /* toast */
    .toast{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);background:#122534;color:#e8eef8;border:1px solid #245a42;padding:8px 12px;border-radius:10px;font-size:12px;z-index:10000;opacity:0;transition:opacity .2s}
    .toast.show{opacity:1}

    /* credit */
    .credit-br{
      position: fixed; right: 16px; bottom: 14px; z-index: 9997;
      font-size: 11px; color: var(--sub);
      background: rgba(16, 23, 34, .85); border: 1px solid #22324a; border-radius: 10px;
      padding: 6px 10px; backdrop-filter: blur(4px);
    }
    .credit-br a{ color: var(--accent); text-decoration: none; font-weight: 600; }
    .credit-br a:hover{ text-decoration: underline; }

    .footer-note{max-width:1150px;margin:10px auto 16px;padding:6px 8px;font-size:11px;color:var(--sub);background:#101722;border:1px solid #22324a;border-radius:8px;opacity:.9;}
    .footer-note b{ color:var(--text); }
  </style>
</head>
<body>
  <div class="container">
    <h1>
      <img src="icon.ico" alt="logo" class="logo-icon">
      Airdrop Umbrella Manager
    </h1>
    <div class="sub">
      &nbsp;• Join Group Telegram
      <a href="https://t.me/airdropumbrella" class="link" target="_blank">Airdrop Umbrella</a>
    </div>

    <div class="tabs">
      <button class="tab active" data-tab="tasks">Garapan</button>
      <button class="tab" data-tab="bridge">Info Bridge</button>
      <button class="tab" data-tab="faucet">Info Faucet</button>
    </div>

    <!-- TASKS -->
    <section class="card" data-panel="tasks">
      <div class="toolbar">
        <input id="t_search" class="search" placeholder="Cari nama/tugas..." />
        <select id="t_filter" class="select-sm" aria-label="Filter status">
          <option value="all">Status</option>
          <option value="ongoing">Ongoing</option>
          <option value="end">End</option>
          <option value="done">Selesai</option>
        </select>
        <button class="btn btn-danger" id="t_clear">Hapus Semua</button>
      </div>
      <div style="overflow:auto">
        <table>
          <thead>
            <tr>
              <th>Nama Garapan</th>
              <th>Tugas Garapan</th>
              <th>Link</th>
              <th>Banyak Akun</th>
              <th>Join Date</th>
              <th>Keterangan</th>
              <th>Hari Ini</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody id="t_tbody"></tbody>
        </table>
      </div>
      <div id="t_pager" class="pager"></div>
      <div id="t_empty" class="empty" style="display:none">Belum ada data Tasks.</div>
    </section>

    <!-- BRIDGE -->
    <section class="card" data-panel="bridge" style="display:none">
      <form id="formBridge" autocomplete="off">
        <div style="display:grid;gap:12px;grid-template-columns:2fr 2fr 1fr">
          <div><label>Bridge To?</label><input required id="b_ke" placeholder="contoh: ARB to Sepolia"/></div>
          <div><label>Link</label><input required id="b_link" placeholder="https://..."/></div>
          <div style="display:flex;align-items:flex-end;gap:8px"><button class="btn btn-primary" type="submit">Tambah</button><button class="btn" type="button" id="b_reset">Reset</button></div>
        </div>
      </form>
      <div class="toolbar">
        <input id="b_search" placeholder="Cari Bridge (mis. ARB to Sepolia)" style="flex:1"/>
        <button class="btn btn-danger" id="b_clear">Hapus Semua</button>
      </div>
      <div style="overflow:auto">
        <table>
          <thead><tr><th>Bridge ke mana</th><th>Link</th><th>Aksi</th></tr></thead>
          <tbody id="b_tbody"></tbody>
        </table>
      </div>
      <div id="b_empty" class="empty" style="display:none">Belum ada data Bridge.</div>
    </section>

    <!-- FAUCET -->
    <section class="card" data-panel="faucet" style="display:none">
      <form id="formFaucet" autocomplete="off">
        <div style="display:grid;gap:12px;grid-template-columns:2fr 2fr 1fr">
          <div><label>Faucet ke mana</label><input required id="f_ke" placeholder="contoh: Sepolia ETH faucet"/></div>
          <div><label>Link</label><input required id="f_link" placeholder="https://..."/></div>
          <div style="display:flex;align-items:flex-end;gap:8px"><button class="btn btn-primary" type="submit">Tambah</button><button class="btn" type="button" id="f_reset">Reset</button></div>
        </div>
      </form>
      <div class="toolbar">
        <input id="f_search" placeholder="Cari Faucet (mis. Sepolia ETH)" style="flex:1"/>
        <button class="btn btn-danger" id="f_clear">Hapus Semua</button>
      </div>
      <div style="overflow:auto">
        <table>
          <thead><tr><th>Faucet ke mana</th><th>Link</th><th>Aksi</th></tr></thead>
          <tbody id="f_tbody"></tbody>
        </table>
      </div>
      <div id="f_empty" class="empty" style="display:none">Belum ada data Faucet.</div>
    </section>
  </div>

  <!-- FAB Tambah -->
  <button id="fabAdd" class="fab" title="Tambah Garapan">＋</button>

  <!-- Modal Add Task -->
  <div id="addBackdrop" class="backdrop" aria-hidden="true">
    <div class="sheet">
      <h3>Tambah Garapan</h3>
      <form id="formTasks" autocomplete="off">
        <div class="grid">
          <div><label>Nama Garapan</label><input required id="t_nama" placeholder="contoh: Zora"/></div>
          <div><label>Tugas Garapan</label><input required id="t_tugas" placeholder="claim → swap → add LP"/></div>
          <div><label>Link</label><input required id="t_link" placeholder="https://..."/></div>
          <div><label>Banyak Akun</label><input required id="t_akun" type="number" min="1" value="1"/></div>
          <div><label>Join Date</label><input id="t_join" type="date"/></div>
          <div>
            <label>Keterangan</label>
            <select id="t_ket">
              <option value="ongoing">Ongoing</option>
              <option value="end">End</option>
            </select>
          </div>
        </div>
        <div class="actions">
          <button class="btn" type="button" id="t_cancel">Batal</button>
          <button class="btn btn-primary" type="submit">Simpan</button>
        </div>
      </form>
    </div>
  </div>

  <!-- credit -->
  <div class="credit-br">
    Created By :
    <a href="https://x.com/kenjisubagja" class="link" target="_blank">Kenjisubagja</a>
  </div>

  <div id="toast" class="toast"></div>

<script>
(function(){
  const $ = (q)=>document.querySelector(q);
  const $$ = (q)=>document.querySelectorAll(q);
  const uid = ()=> (crypto.randomUUID?crypto.randomUUID(): (Date.now()+Math.random()).toString(36));
  const today = ()=> new Date().toISOString().slice(0,10);
  const fmtDate = (iso)=>{ if(!iso) return '-'; const d=new Date(iso); return isNaN(d)?'-':d.toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'}); };

  const Cap = window.Capacitor;
  const BROWSERS = [
    { id:'default', label:'Default' },
    { id:'chrome',  label:'Chrome',  pkg:'com.android.chrome' },
    { id:'firefox', label:'Firefox', pkg:'org.mozilla.firefox' },
    { id:'brave',   label:'Brave',   pkg:'com.brave.browser' },
    { id:'edge',    label:'Edge',    pkg:'com.microsoft.emmx' },
  ];
  function buildIntentUrl(href, pkg){
    const u = new URL(href); const scheme = u.protocol.replace(':','');
    const host = u.host; const path = u.pathname + (u.search||'') + (u.hash||'');
    return `intent://${host}${path}#Intent;scheme=${scheme};package=${pkg};end`;
  }
  async function openWithDefault(url){
    const Browser = Cap?.Plugins?.Browser;
    if (Browser?.open) { await Browser.open({ url }); } else { window.open(url, '_blank'); }
  }
  function showToast(msg){ const t=$('#toast'); if(!t) return; t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),1500); }
  function pickBrowser(url){
    const back = document.createElement('div'); back.className='backdrop'; back.style.display='flex';
    const box = document.createElement('div'); box.className='sheet'; box.innerHTML=`
      <h3>Pilih Browser</h3>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px"></div>
      <div class="actions"><button class="btn" data-act="cancel">Batal</button><button class="btn" data-act="copy">Copy Link</button></div>`;
    back.appendChild(box); document.body.appendChild(back);
    const row = box.children[1];
    BROWSERS.forEach(b=>{
      const el = document.createElement('button'); el.className='btn'; el.textContent=b.label; el.style.flex='1 1 120px';
      el.onclick=async ()=>{ try{
        if(b.id==='default'){ await openWithDefault(url); }
        else{
          const isAndroid = Cap?.getPlatform?.() === 'android';
          if(isAndroid && b.pkg){ window.location.href = buildIntentUrl(url,b.pkg); setTimeout(()=>openWithDefault(url), 400); }
          else{ await openWithDefault(url); }
        }
      }finally{ back.remove(); } };
      row.appendChild(el);
    });
    back.querySelector('[data-act="cancel"]').onclick=()=> back.remove();
    back.querySelector('[data-act="copy"]').onclick=async ()=>{ try{ await navigator.clipboard.writeText(url); showToast('Link disalin'); }catch{} back.remove(); };
    back.addEventListener('click',(e)=>{ if(e.target===back) back.remove(); });
  }

  // Storage
  const LS = { tasks:'aum_tasks_v2', bridge:'aum_bridge_v1', faucet:'aum_faucet_v1' };
  const load = (k)=>{ try{ return JSON.parse(localStorage.getItem(k))||[] } catch{ return [] } };
  const save = (k,v)=> localStorage.setItem(k, JSON.stringify(v));

  // Perf
  const afterPaint = (fn)=> requestAnimationFrame(()=> setTimeout(fn,0));
  let _saveTimer=null; function saveTasksSoon(){ clearTimeout(_saveTimer); _saveTimer=setTimeout(()=>save(LS.tasks,t_state.items),80); }
  let _renderScheduled=false; function renderTasksSoon(){ if(_renderScheduled) return; _renderScheduled=true; requestAnimationFrame(()=>{_renderScheduled=false;t_render();}); }

  // Tabs
  $$('.tab').forEach(btn=>{
    btn.addEventListener('click',()=>{
      $$('.tab').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.dataset.tab;
      $$('section.card').forEach(p=> p.style.display = (p.dataset.panel===tab?'block':'none'));
      $('#fabAdd').style.display = (tab==='tasks') ? 'inline-flex' : 'none';
    });
  });

  // UI helpers
  function pill(label,type){ const s=document.createElement('span'); s.className='pill '+(type==='ok'?'pill-ok':type==='warn'?'pill-warn':type==='danger'?'pill-danger':'pill-muted'); s.textContent=label; return s; }
  function inputText(v,p=''){ const i=document.createElement('input'); i.type='text'; i.value=v??''; i.placeholder=p; i.style.width='100%'; i.className='inline-input'; i.onkeydown=e=>{ if(e.key==='Enter'){ e.preventDefault(); e.currentTarget.blur(); } }; return i; }
  function inputNumber(v){ const i=document.createElement('input'); i.type='number'; i.min='1'; i.value=String(Math.max(1, parseInt(v,10)||1)); i.style.width='100%'; i.className='inline-input'; i.onkeydown=e=>{ if(e.key==='Enter'){ e.preventDefault(); e.currentTarget.blur(); } }; return i; }
  function selectKet(v){ const s=document.createElement('select'); s.innerHTML='<option value="ongoing">Ongoing</option><option value="end">End</option>'; s.value=(v==='end')?'end':'ongoing'; s.className='inline-input'; return s; }
  function inputDate(value){ const i=document.createElement('input'); i.type='date'; const val=(value&&/^\d{4}-\d{2}-\d{2}$/.test(value))?value:today(); i.value=val; i.style.width='100%'; i.className='inline-input'; i.onkeydown=e=>{ if(e.key==='Enter'){ e.preventDefault(); e.currentTarget.blur(); } }; return i; }

  // TASKS
  const t_state = { items: load(LS.tasks), q:'', f:'all', page:1, per:5 };
  const t_body = $('#t_tbody'); const t_empty = $('#t_empty');

  function t_row(it){
    const editing = !!it._edit;
    const tr=document.createElement('tr');

    const tdNama=document.createElement('td');
    tdNama.appendChild(editing ? inputText(it.nama,'Nama Garapan') : document.createTextNode(it.nama));

    const tdTugas=document.createElement('td');
    tdTugas.appendChild(editing ? inputText(it.tugas,'Tugas Garapan') : document.createTextNode(it.tugas));

    const tdLink=document.createElement('td');
    if (editing) tdLink.appendChild(inputText(it.link,'https://...'));
    else { const b=document.createElement('button'); b.type='button'; b.className='row-btn'; b.textContent='Open'; b.title=it.link; b.onclick=()=> pickBrowser(it.link); tdLink.appendChild(b); }

    const tdAkun=document.createElement('td');
    tdAkun.appendChild(editing ? inputNumber(it.akun) : document.createTextNode(String(it.akun)));

    const tdJoin=document.createElement('td');
    tdJoin.appendChild(editing ? inputDate(it.joinDate) : document.createTextNode(fmtDate(it.joinDate)));

    const tdKet=document.createElement('td');
    if (editing) tdKet.appendChild(selectKet(it.ket));
    else{
      if (it.done && it.ket==='end') tdKet.appendChild(pill('END','danger'));
      else if (it.ket==='end')       tdKet.appendChild(pill('End','muted'));
      else                           tdKet.appendChild(pill('Ongoing','warn'));
    }

    const tdDaily=document.createElement('td');
    const isToday = it.lastDoneDate === today();
    tdDaily.appendChild(isToday ? pill('✅ Hari Ini','ok') : pill('❌ Belum','warn'));

    const tdAksi=document.createElement('td');
    if (editing) {
      const bSave=document.createElement('button'); bSave.type='button'; bSave.className='row-btn'; bSave.textContent='💾 Save';
      bSave.onclick=()=>{
        const vNama = tdNama.querySelector('input')?.value.trim();
        const vTugas = tdTugas.querySelector('input')?.value.trim();
        const vLink  = tdLink.querySelector('input')?.value.trim();
        const vAkun  = tdAkun.querySelector('input')?.value.trim();
        const vJoin  = tdJoin.querySelector('input')?.value.trim();
        const vKet   = tdKet.querySelector('select')?.value;
        if(!/^https?:\/\//i.test(vLink||'')) return alert('Masukkan link http(s)://');
        it.nama=vNama||'Tanpa Nama';
        it.tugas=vTugas||'-';
        it.link=vLink;
        it.akun=Math.max(1,parseInt(vAkun,10)||1);
        it.joinDate=(/^\d{4}-\d{2}-\d{2}$/.test(vJoin)?vJoin:today());
        it.ket=(vKet==='end')?'end':'ongoing';
        if (it.ket!=='end') it.done=false;
        it._edit=false; saveTasksSoon(); renderTasksSoon();
      };
      const bCancel=document.createElement('button'); bCancel.type='button'; bCancel.className='row-btn'; bCancel.textContent='✖ Cancel';
      bCancel.onclick=()=>{ it._edit=false; t_render(); };
      tdAksi.append(bSave,bCancel);
    } else {
      const bDaily=document.createElement('button'); bDaily.type='button'; bDaily.className='row-btn';
      bDaily.textContent = isToday ? '↺ Clear Hari Ini' : '✓ Hari Ini';
      bDaily.onclick=()=>{ it.lastDoneDate = (it.lastDoneDate===today())?'':today(); saveTasksSoon(); renderTasksSoon(); };

      const bEnd=document.createElement('button'); bEnd.type='button'; bEnd.className='row-btn'; bEnd.textContent='END';
      bEnd.disabled = (it.done && it.ket==='end');
      bEnd.onclick=()=>{ if(bEnd.disabled) return; it.done=true; it.ket='end'; saveTasksSoon(); renderTasksSoon(); };

      const bEdit=document.createElement('button'); bEdit.type='button'; bEdit.className='row-btn'; bEdit.textContent='Edit';
      bEdit.onclick=()=>{ it._edit=true; t_render(); };

      const bDel=document.createElement('button'); bDel.type='button'; bDel.className='row-btn'; bDel.textContent='Hapus';
      bDel.onclick=()=>{ if(confirm('Hapus item ini?')){ t_state.items=t_state.items.filter(x=>x.id!==it.id); saveTasksSoon(); renderTasksSoon(); } };

      tdAksi.append(bDaily,bEnd,bEdit,bDel);
    }

    [tdNama,tdTugas,tdLink,tdAkun,tdJoin,tdKet,tdDaily,tdAksi].forEach(td=>tr.appendChild(td));
    return tr;
  }

  function t_renderPager(total){
    const el = document.getElementById('t_pager'); if(!el) return;
    const totalPages = Math.max(1, Math.ceil(total / t_state.per));
    if (t_state.page > totalPages) t_state.page = totalPages;
    if (t_state.page < 1) t_state.page = 1;
    el.innerHTML = ''; el.style.display = total ? 'flex' : 'none';
    const mkBtn=(label,dis,cb)=>{ const b=document.createElement('button'); b.className='btn'; b.textContent=label; b.disabled=!!dis; b.onclick=cb; return b; };

    const label = document.createElement('span'); label.className='mini'; label.textContent='Tampilkan:';
    const perSel = document.createElement('select'); perSel.className='rows';
    ['5','10','25'].forEach(n=>{ const o=document.createElement('option'); o.value=n; o.textContent=n; perSel.appendChild(o); });
    perSel.value = String(t_state.per);
    perSel.onchange = ()=>{ t_state.per=parseInt(perSel.value,10)||5; t_state.page=1; t_render(); };

    const start = (t_state.page-1)*t_state.per + (total?1:0);
    const end   = Math.min(t_state.page*t_state.per, total);
    const infoCount = document.createElement('span'); infoCount.className='info'; infoCount.textContent = `Menampilkan ${start}-${end} dari ${total}`;
    const infoPage  = document.createElement('span'); infoPage.className='info';  infoPage.textContent  = `Page ${t_state.page}/${Math.max(1,Math.ceil(total/t_state.per))}`;

    const prev = mkBtn('Prev', t_state.page<=1, ()=>{ t_state.page--; t_render(); });
    const next = mkBtn('Next', t_state.page>=Math.ceil(total/t_state.per), ()=>{ t_state.page++; t_render(); });

    el.append(label, perSel, prev, infoCount, infoPage, next);
  }

  function t_render(){
    t_body.innerHTML='';
    const all = t_state.items.filter(x=>{
      const q=t_state.q; const qok = !q || x.nama.toLowerCase().includes(q) || x.tugas.toLowerCase().includes(q);
      const fok = t_state.f==='all'? true : t_state.f==='done'? x.done : x.ket===t_state.f;
      return qok && fok;
    });
    const total = all.length;
    const start = (t_state.page-1)*t_state.per;
    const pageRows = all.slice(start, start+t_state.per);
    const frag=document.createDocumentFragment();
    for(const x of pageRows) frag.appendChild(t_row(x));
    t_body.appendChild(frag);
    t_empty.style.display = total?'none':'block';
    t_renderPager(total);
  }

  // Modal Add Task
  const backdrop = $('#addBackdrop');
  function openAdd(){ $('#t_join').value=today(); $('#t_akun').value=1; $('#t_ket').value='ongoing'; backdrop.style.display='flex'; $('#t_nama').focus(); }
  function closeAdd(){ backdrop.style.display='none'; $('#formTasks').reset(); }

  $('#fabAdd').onclick = openAdd;
  $('#t_cancel').onclick = closeAdd;

  // Submit add task
  $('#formTasks').addEventListener('submit',(e)=>{
    e.preventDefault();
    try{
      const data={
        id:uid(),
        nama:$('#t_nama').value.trim(),
        tugas:$('#t_tugas').value.trim(),
        link:$('#t_link').value.trim(),
        akun:Math.max(1,parseInt($('#t_akun').value,10)||1),
        joinDate: $('#t_join').value || today(),
        ket:$('#t_ket').value,
        done:false,
        lastDoneDate:''
      };
      if(!data.nama) return alert('Nama garapan masih kosong.');
      if(!data.tugas) return alert('Tugas garapan masih kosong.');
      if(!/^https?:\/\//i.test(data.link)) return alert('Masukkan link http(s)://');

      t_state.items.unshift(data);
      t_state.page=1; saveTasksSoon(); renderTasksSoon();
      closeAdd();
      showToast('Garapan ditambahkan');
    }catch(err){ console.error(err); alert('Gagal menambahkan task.'); }
  });

  // Toolbar events
  $('#t_clear').onclick=()=>{ if(confirm('Hapus semua Tasks?')){ t_state.items=[]; t_state.page=1; saveTasksSoon(); renderTasksSoon(); } };
  $('#t_search').addEventListener('input',()=>{ t_state.q=$('#t_search').value.trim().toLowerCase(); t_state.page=1; t_render(); });
  $('#t_filter').addEventListener('change',()=>{ t_state.f=$('#t_filter').value; t_state.page=1; t_render(); });

  // BRIDGE
  const b_state = { items: load(LS.bridge), q:'' };
  const b_body = $('#b_tbody'); const b_empty = $('#b_empty');
  function b_row(it){
    const editing = !!it._edit; const tr=document.createElement('tr');
    const tdKe=document.createElement('td'); tdKe.appendChild(editing?inputText(it.ke,'Bridge ke mana'):document.createTextNode(it.ke));
    const tdLink=document.createElement('td');
    if (editing) tdLink.appendChild(inputText(it.link,'https://...'));
    else { const b=document.createElement('button'); b.type='button'; b.className='row-btn'; b.textContent='Open'; b.title=it.link; b.onclick=()=>pickBrowser(it.link); tdLink.appendChild(b); }
    const tdAksi=document.createElement('td');
    if (editing){ const s=document.createElement('button'); s.type='button'; s.className='row-btn'; s.textContent='💾 Save'; s.onclick=()=>{ const vKe=tdKe.querySelector('input')?.value.trim(); const vLink=tdLink.querySelector('input')?.value.trim(); if(!/^https?:\/\//i.test(vLink||'')) return alert('Masukkan link http(s)://'); it.ke=vKe||'-'; it.link=vLink; it._edit=false; save(LS.bridge,b_state.items); b_render(); }; const c=document.createElement('button'); c.type='button'; c.className='row-btn'; c.textContent='✖ Cancel'; c.onclick=()=>{ it._edit=false; b_render(); }; tdAksi.append(s,c); }
    else { const e=document.createElement('button'); e.type='button'; e.className='row-btn'; e.textContent='Edit'; e.onclick=()=>{ it._edit=true; b_render(); }; const d=document.createElement('button'); d.type='button'; d.className='row-btn'; d.textContent='Hapus'; d.onclick=()=>{ if(confirm('Hapus item ini?')){ b_state.items=b_state.items.filter(x=>x.id!==it.id); save(LS.bridge,b_state.items); b_render(); } }; tdAksi.append(e,d); }
    [tdKe,tdLink,tdAksi].forEach(td=>tr.appendChild(td)); return tr;
  }
  function b_render(){ b_body.innerHTML=''; const rows=b_state.items.filter(x=>!b_state.q||x.ke.toLowerCase().includes(b_state.q)); const frag=document.createDocumentFragment(); rows.forEach(x=>frag.appendChild(b_row(x))); b_body.appendChild(frag); b_empty.style.display = rows.length?'none':'block'; }
  $('#formBridge').addEventListener('submit',(e)=>{ e.preventDefault(); const data={id:uid(),ke:$('#b_ke').value.trim(),link:$('#b_link').value.trim()}; if(!/^https?:\/\//i.test(data.link)) return alert('Masukkan link http(s)://'); b_state.items.unshift(data); save(LS.bridge,b_state.items); b_render(); e.target.reset(); $('#b_ke').focus(); });
  $('#b_reset').onclick=()=> $('#formBridge').reset();
  $('#b_clear').onclick=()=>{ if(confirm('Hapus semua Bridge?')){ b_state.items=[]; save(LS.bridge,b_state.items); b_render(); } };
  $('#b_search').addEventListener('input',()=>{ b_state.q=$('#b_search').value.trim().toLowerCase(); b_render(); });

  // FAUCET
  const f_state = { items: load(LS.faucet), q:'' };
  const f_body = $('#f_tbody'); const f_empty = $('#f_empty');
  function f_row(it){
    const editing = !!it._edit; const tr=document.createElement('tr');
    const tdKe=document.createElement('td'); tdKe.appendChild(editing?inputText(it.ke,'Faucet ke mana'):document.createTextNode(it.ke));
    const tdLink=document.createElement('td');
    if (editing) tdLink.appendChild(inputText(it.link,'https://...'));
    else { const b=document.createElement('button'); b.type='button'; b.className='row-btn'; b.textContent='Open'; b.title=it.link; b.onclick=()=>pickBrowser(it.link); tdLink.appendChild(b); }
    const tdAksi=document.createElement('td');
    if (editing){ const s=document.createElement('button'); s.type='button'; s.className='row-btn'; s.textContent='💾 Save'; s.onclick=()=>{ const vKe=tdKe.querySelector('input')?.value.trim(); const vLink=tdLink.querySelector('input')?.value.trim(); if(!/^https?:\/\//i.test(vLink||'')) return alert('Masukkan link http(s)://'); it.ke=vKe||'-'; it.link=vLink; it._edit=false; save(LS.faucet,f_state.items); f_render(); }; const c=document.createElement('button'); c.type='button'; c.className='row-btn'; c.textContent='✖ Cancel'; c.onclick=()=>{ it._edit=false; f_render(); }; tdAksi.append(s,c); }
    else { const e=document.createElement('button'); e.type='button'; e.className='row-btn'; e.textContent='Edit'; e.onclick=()=>{ it._edit=true; f_render(); }; const d=document.createElement('button'); d.type='button'; d.className='row-btn'; d.textContent='Hapus'; d.onclick=()=>{ if(confirm('Hapus item ini?')){ f_state.items=f_state.items.filter(x=>x.id!==it.id); save(LS.faucet,f_state.items); f_render(); } }; tdAksi.append(e,d); }
    [tdKe,tdLink,tdAksi].forEach(td=>tr.appendChild(td)); return tr;
  }
  function f_render(){ f_body.innerHTML=''; const rows=f_state.items.filter(x=>!f_state.q||x.ke.toLowerCase().includes(f_state.q)); const frag=document.createDocumentFragment(); rows.forEach(x=>frag.appendChild(f_row(x))); f_body.appendChild(frag); f_empty.style.display = rows.length?'none':'block'; }
  $('#formFaucet').addEventListener('submit',(e)=>{ e.preventDefault(); const data={id:uid(),ke:$('#f_ke').value.trim(),link:$('#f_link').value.trim()}; if(!/^https?:\/\//i.test(data.link)) return alert('Masukkan link http(s)://'); f_state.items.unshift(data); save(LS.faucet,f_state.items); f_render(); e.target.reset(); $('#f_ke').focus(); });
  $('#f_reset').onclick=()=> $('#formFaucet').reset();
  $('#f_clear').onclick=()=>{ if(confirm('Hapus semua Faucet?')){ f_state.items=[]; save(LS.faucet,f_state.items); f_render(); } };

  // Seed
  if(load(LS.tasks).length===0){
    save(LS.tasks,[{id:uid(), nama:'0G - Bridge', tugas:'Bridge testnet → claim faucet', link:'https://faucet.0g.ai', akun:5, joinDate:today(), ket:'ongoing', done:false, lastDoneDate:''}]);
  }
  if(load(LS.bridge).length===0){ save(LS.bridge,[{id:uid(), ke:'ARB to Sepolia', link:'https://bridge.arbitrum.io'}]); }
  if(load(LS.faucet).length===0){ save(LS.faucet,[{id:uid(), ke:'Sepolia ETH faucet', link:'https://sepoliafaucet.com'}]); }

  // Migrasi
  (function migrate(){
    let changed=false;
    t_state.items.forEach(it=>{
      if(typeof it.lastDoneDate!=='string'){ it.lastDoneDate=''; changed=true; }
      if(typeof it.done!=='boolean'){ it.done=false; changed=true; }
      if(!('ket' in it)){ it.ket='ongoing'; changed=true; }
      if(!('joinDate' in it)){ it.joinDate=''; changed=true; }
    });
    if(changed) save(LS.tasks,t_state.items);
  })();

  t_render(); b_render(); f_render();
  $('#fabAdd').style.display = 'inline-flex';
})();
</script>

<div class="footer-note">
  💡 <b>Catatan Button “Hari Ini”:</b>
  menandai task untuk <i>tanggal hari ini</i> (kolom jadi ✅),
  otomatis reset saat tanggal berganti, tidak mengubah <b>Keterangan</b>.
  Tombol <b>END</b> bersifat permanen—aktif lagi dengan
  <b>Edit → Keterangan = Ongoing</b>.
</div>
</body>
</html>

