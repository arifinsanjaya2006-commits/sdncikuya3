const $ = (id) => document.getElementById(id);
const drawer = $('drawer'), overlay = $('overlay'), modal = $('modal');

function toggleMenu(open) {
  drawer.classList.toggle('open', open);
  overlay.classList.toggle('show', open);
  drawer.setAttribute('aria-hidden', String(!open));
}
$('openMenu').addEventListener('click', () => toggleMenu(true));
$('closeMenu').addEventListener('click', () => toggleMenu(false));
overlay.addEventListener('click', () => toggleMenu(false));
drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggleMenu(false)));

const content = {
  // MODUL EXPLANATION STATUS MUTU
  mutu: ['Status Mutu Sekolah', `<div style="line-height: 1.6; font-size: 13px;">
    <p><strong>Status Akreditasi: Grade B</strong></p>
    <p>SD Negeri Cikuya 3 terakreditasi <strong>B (Baik)</strong> oleh Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M) Provinsi Banten.</p>
    <br>
    <p>Penilaian akreditasi ini mencakup 4 indikator utama:</p>
    <ul style="padding-left: 20px; margin-top: 6px;">
      <li>Mutu Lulusan Peserta Didik</li>
      <li>Proses Pembelajaran Efektif</li>
      <li>Mutu Guru & Pendidik</li>
      <li>Manajemen & Pengelolaan Sekolah</li>
    </ul>
  </div>`],

  kontak: ['Kontak & Informasi PPDB', `<p>Hubungi humas sekolah untuk informasi PPDB 2026/2027.</p>
    <p><b>Telepon/WhatsApp:</b> <a href="tel:+6281317178510">0813-1717-8510</a><br><b>Email:</b> <a href="mailto:sdncikuya30@gmail.com">sdncikuya30@gmail.com</a></p>
    <p><b>Alamat:</b> Kp. Pala, Desa Cikuya, Kec. Solear, Kab. Tangerang, Banten 15730.</p>`],
};

if (modal) {
  function openModal(key) {
    if (!content[key]) return;
    const [title, body] = content[key];
    $('modalTitle').textContent = title;
    $('modalBody').innerHTML = body;
    modal.classList.add('show');
  }
  function closeModal() { modal.classList.remove('show'); }

  document.querySelectorAll('[data-modal]').forEach((el) =>
    el.addEventListener('click', () => openModal(el.dataset.modal)));
  $('closeModal').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal(); toggleMenu(false); }
  });
}

// ==== Data dari Admin Panel (localStorage) ====
// Admin menyimpan: cikuya_warta, cikuya_galeri, cikuya_profil, cikuya_siswa, cikuya_guru
function loadData(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) { return fallback; }
}
function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ---- Warta ----
(function () {
  const wartaExtra = $('wartaExtra');
  if (!wartaExtra) return;
  const gradients = ['g1', 'g2', 'g3', 'g4'];
  const icons = { Prestasi: 'fa-trophy', Pengumuman: 'fa-bullhorn', Penting: 'fa-circle-exclamation' };
  loadData('cikuya_warta', []).forEach((item, i) => {
    wartaExtra.insertAdjacentHTML('beforeend', `
      <article class="card news"><div class="thumb ${gradients[i % gradients.length]}"><i class="fa-solid ${icons[item.kategori] || 'fa-seedling'}"></i></div>
        <div><span class="badge gold">${esc(item.kategori)}</span><h3>${esc(item.judul)}</h3><small><i class="fa-regular fa-calendar"></i> ${esc(item.tanggal)}</small></div></article>
    `);
  });
})();

// ---- Galeri ----
(function () {
  const grid = document.querySelector('#galeri .gal-grid');
  const data = loadData('cikuya_galeri', null);
  if (!grid || !Array.isArray(data) || !data.length) return;
  grid.innerHTML = data.map((g) => {
    if (g.jenis === 'video') {
      return `<figure class="card gal"><a href="${esc(g.src)}" target="_blank" rel="noopener">
        <div class="photo g2" style="height:110px"><i class="fa-solid fa-circle-play"></i></div>
        <b>${esc(g.judul)}</b><small>Tonton video</small></a></figure>`;
    }
    return `<figure class="card gal"><img class="photo" src="${esc(g.src)}" alt="${esc(g.judul)}" loading="lazy"><b>${esc(g.judul)}</b><small>Dokumentasi kegiatan</small></figure>`;
  }).join('');
})();

// ---- Profil sekolah (opsional dari admin panel) ----
(function () {
  const p = loadData('cikuya_profil', null);
  if (!p) return;
  const q = (sel) => document.querySelector(sel);

  const cells = document.querySelectorAll('#legalitas .cell b');
  if (cells[0] && p.npsn) cells[0].textContent = p.npsn;
  if (cells[1] && p.kurikulum) cells[1].textContent = p.kurikulum;

  const grade = p.akreditasi && p.akreditasi.length === 1;
  const mutu = q('[data-modal="mutu"] b');
  if (mutu) mutu.textContent = grade ? `Grade ${p.akreditasi}` : (p.akreditasi || '-');
  const drawerBadge = q('.drawer-foot .badge');
  if (drawerBadge) drawerBadge.textContent = grade ? `TERAKREDITASI ${p.akreditasi}` : String(p.akreditasi).toUpperCase();
  const chip = q('.footer .chip.dark');
  if (chip) chip.textContent = grade ? `Akreditasi ${p.akreditasi}` : p.akreditasi;

  if (p.alamat) {
    const addr = q('#kontak .addr');
    if (addr) addr.lastChild.textContent = p.alamat;
    const foot = document.querySelectorAll('.footer p');
    if (foot[1]) foot[1].textContent = p.alamat;
  }

  if (p.telp) {
    const digits = p.telp.replace(/\D/g, '').replace(/^0/, '62');
    const wa = q('#kontak a[href^="https://wa.me/"]');
    if (wa) { wa.href = `https://wa.me/${digits}`; wa.querySelector('b').textContent = p.telp; }
    content.kontak[1] = content.kontak[1]
      .replace(/href="tel:[^"]*">[^<]*/, `href="tel:+${digits}">${esc(p.telp)}`);
  }
  if (p.email) {
    const mail = q('#kontak a[href*="mail.google.com"]');
    if (mail) {
      mail.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(p.email)}`;
      mail.querySelector('b').textContent = p.email;
    }
    content.kontak[1] = content.kontak[1]
      .replace(/href="mailto:[^"]*">[^<]*/, `href="mailto:${esc(p.email)}">${esc(p.email)}`);
  }
  if (p.telp || p.email) {
    const contactP = document.querySelectorAll('.footer p')[2];
    if (contactP) contactP.innerHTML =
      `<i class="fa-solid fa-phone"></i> ${esc(p.telp || '')}<br><i class="fa-regular fa-envelope"></i> ${esc(p.email || '')}`;
  }
})();

// ==== Detail Ekstrakurikuler & Galeri ====
// Edit teks di bawah ini kapan saja tanpa menyentuh bagian lain.
const ESKUL_INFO = {
  'Kepramukaan': {
    desc: 'Kegiatan kepramukaan melatih kemandirian, disiplin, dan kerja sama siswa SDN Cikuya III.'
  },
  'Olahraga': {
    desc: 'Kegiatan olahraga meliputi sepak bola, bola sundul, dan futsal untuk menjaga kebugaran serta menumbuhkan sportivitas dan kebersamaan.'
  },
  'Keputrian': {
    desc: 'Kegiatan ekstrakurikuler keputrian khusus bagi siswi SDN Cikuya III.'
  }
};
const GALERI_INFO = {
  'Upacara Bendera': 'Upacara bendera diselenggarakan secara khidmat dan memperingati hari-hari besar nasional untuk memupuk cinta tanah air.',
  'Literasi Pagi': 'Kegiatan baca buku bersama sebagai pembiasaan pagi untuk menumbuhkan kebiasaan gemar membaca.',
  'Duha Berjamaah': 'Kegiatan salat Duha berjamaah yang dilakukan bersama warga sekolah untuk menanamkan kebiasaan ibadah dan meningkatkan keimanan dan ketakwaan.',
  'Baca Ayat Pendek / Yasinan': 'Kegiatan membaca ayat pendek dan Yasinan bersama pada hari Jumat sebagai pembiasaan akhlak mulia dan literasi keagamaan.'
};

(function () {
  const detail = $('detail');
  if (!detail) return;
  const row = (icon, label, value) =>
    `<div><i class="fa-solid ${icon}"></i><span><small>${esc(label)}</small><b>${esc(value)}</b></span></div>`;

  function openDetail({ title, img, tag, desc, meta }) {
    const media = $('detailMedia');
    media.innerHTML = '';
    if (img) {
      const el = new Image();
      el.alt = title;
      el.onerror = () => { media.innerHTML = '<i class="fa-regular fa-image"></i>'; };
      el.src = img;
      media.appendChild(el);
    } else {
      media.innerHTML = '<i class="fa-regular fa-image"></i>';
    }
    $('detailTag').textContent = tag;
    $('detailTitle').textContent = title;
    $('detailDesc').textContent = desc;
    $('detailMeta').innerHTML = meta.join('');
    detail.classList.add('show');
    document.body.classList.add('no-scroll');
    $('closeDetail').focus();
  }
  function closeDetail() {
    detail.classList.remove('show');
    document.body.classList.remove('no-scroll');
  }

  function showEskul(card) {
    const title = card.querySelector('b').textContent.trim();
    const info = ESKUL_INFO[title] || {};
    const sub = card.querySelector('small').textContent.trim();
    openDetail({
      title, tag: 'Ekstrakurikuler',
      img: card.querySelector('img') && card.querySelector('img').getAttribute('src'),
      desc: info.desc || 'Kegiatan ekstrakurikuler SDN Cikuya 3 untuk mengembangkan minat dan bakat siswa.',
      meta: [row('fa-circle-info', 'Keterangan', sub)]
        .concat(info.jadwal ? [row('fa-clock', 'Jadwal latihan', info.jadwal)] : [])
    });
  }
  function showGaleri(card) {
    const title = card.querySelector('b').textContent.trim();
    const img = card.querySelector('img');
    openDetail({
      title, tag: 'Dokumentasi Kegiatan',
      img: img && img.getAttribute('src'),
      desc: GALERI_INFO[title] || 'Dokumentasi kegiatan siswa SDN Cikuya 3.',
      meta: [row('fa-camera', 'Keterangan', card.querySelector('small').textContent.trim())]
    });
  }

  function handle(e) {
    const eskul = e.target.closest('#ekskul .mini');
    if (eskul) return showEskul(eskul);
    const gal = e.target.closest('#galeri .gal, #galeriHome .gal');
    if (gal && !gal.querySelector('a')) showGaleri(gal);   // kartu video tetap membuka tautannya
  }
  document.addEventListener('click', handle);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDetail();
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('#ekskul .mini, #galeri .gal, #galeriHome .gal')) {
      e.preventDefault(); handle(e);
    }
  });
  $('closeDetail').addEventListener('click', closeDetail);
  detail.addEventListener('click', (e) => { if (e.target === detail) closeDetail(); });

  // Agar bisa dipilih dengan keyboard
  document.querySelectorAll('#ekskul .mini, #galeri .gal, #galeriHome .gal').forEach((el) => {
    if (el.querySelector('a')) return;
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
  });
})();

// ==== Navigasi antar halaman (satu file) ====
const PAGES = ['beranda', 'profil', 'galeri', 'berita', 'akreditasi', 'kontak', 'siswa', 'guru'];

function buildHome() {
  const wh = $('wartaHome');
  if (wh) {
    wh.innerHTML = '';
    const ann = document.querySelector('#warta .announce');
    const baru = [...document.querySelectorAll('#wartaExtra .news')];
    const lama = [...document.querySelectorAll('#warta > .news')];
    if (ann) wh.appendChild(ann.cloneNode(true));
    baru.concat(lama).slice(0, 2).forEach((n) => wh.appendChild(n.cloneNode(true)));
  }
  // Galeri di beranda: tampilkan SEMUA kegiatan, berjajar ke samping & bisa digeser
  const gh = $('galeriHome'), gg = document.querySelector('#galeri .gal-grid');
  if (gh && gg) {
    gh.innerHTML = '';
    [...gg.children].forEach((c) => gh.appendChild(c.cloneNode(true)));
  }
}

function showPage(name) {
  if (!PAGES.includes(name)) name = 'beranda';
  document.querySelectorAll('.view').forEach((p) =>
    p.classList.toggle('active', p.id === 'page-' + name));
  document.querySelectorAll('.desktop-nav a, .drawer nav a').forEach((a) =>
    a.classList.toggle('active', a.getAttribute('href') === '#/' + name));
  window.scrollTo({ top: 0, behavior: 'instant' });
}
function route() { showPage(location.hash.replace(/^#\/?/, '')); }

window.addEventListener('hashchange', route);
buildHome();
route();

// ==== Export Excel (halaman Data Siswa & Data Guru) ====
function exportToExcel(tableID, filename) {
  if (typeof XLSX === 'undefined') { alert('Pustaka Excel belum termuat. Cek koneksi internet.'); return; }
  const wb = XLSX.utils.table_to_book($(tableID), { sheet: 'Data' });
  XLSX.writeFile(wb, (filename || 'Data') + '.xlsx');
}
