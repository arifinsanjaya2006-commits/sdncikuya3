const $ = (id) => document.getElementById(id);
const drawer = $('drawer'), overlay = $('overlay'), modal =$('modal');

function toggleMenu(open) {
  drawer.classList.toggle('open', open);
  overlay.classList.toggle('show', open);
  drawer.setAttribute('aria-hidden', String(!open));
}
$('openMenu').addEventListener('click', () => toggleMenu(true));$('closeMenu').addEventListener('click', () => toggleMenu(false));
overlay.addEventListener('click', () => toggleMenu(false));
drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggleMenu(false)));

const content = {
  // DATA MODUL SISWA
  siswa: ['Data Siswa SDN Cikuya 3', `<p><small>Total: 445 Siswa (244 L / 201 P)</small></p>
    <div style="margin-top: 12px; max-height: 320px; overflow-y: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13px;">
        <thead>
          <tr style="border-bottom: 2px solid var(--line); color: var(--maroon, #800000);">
            <th style="padding: 6px;">No</th>
            <th style="padding: 6px;">NISN</th>
            <th style="padding: 6px;">Nama Siswa</th>
            <th style="padding: 6px;">Kelas</th>
            <th style="padding: 6px;">L/P</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 6px;">1</td>
            <td style="padding: 6px;">0123456781</td>
            <td style="padding: 6px;">Ahmad Fauzi</td>
            <td style="padding: 6px;">1A</td>
            <td style="padding: 6px;">L</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 6px;">2</td>
            <td style="padding: 6px;">0123456782</td>
            <td style="padding: 6px;">Siti Nurhaliza</td>
            <td style="padding: 6px;">1A</td>
            <td style="padding: 6px;">P</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 6px;">3</td>
            <td style="padding: 6px;">0123456783</td>
            <td style="padding: 6px;">Budi Santoso</td>
            <td style="padding: 6px;">2B</td>
            <td style="padding: 6px;">L</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 6px;">4</td>
            <td style="padding: 6px;">0123456784</td>
            <td style="padding: 6px;">Dewi Lestari</td>
            <td style="padding: 6px;">3A</td>
            <td style="padding: 6px;">P</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 6px;">5</td>
            <td style="padding: 6px;">0123456785</td>
            <td style="padding: 6px;">Eko Prasetyo</td>
            <td style="padding: 6px;">4B</td>
            <td style="padding: 6px;">L</td>
          </tr>
        </tbody>
      </table>
    </div>`],

  // DATA MODUL GURU
  guru: ['Daftar Guru & Tenaga Kependidikan', `<p><small>Total: 14 Pendidik & Tendik</small></p>
    <div style="margin-top: 12px; max-height: 320px; overflow-y: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13px;">
        <thead>
          <tr style="border-bottom: 2px solid var(--line); color: var(--maroon, #800000);">
            <th style="padding: 6px;">No</th>
            <th style="padding: 6px;">Nama Guru</th>
            <th style="padding: 6px;">Jabatan / Tugas</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 6px;">1</td>
            <td style="padding: 6px;">Kepala Sekolah, S.Pd.</td>
            <td style="padding: 6px;">Kepala Sekolah</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 6px;">2</td>
            <td style="padding: 6px;">Guru Kelas 1, S.Pd.</td>
            <td style="padding: 6px;">Guru Wali Kelas 1</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 6px;">3</td>
            <td style="padding: 6px;">Guru Kelas 2, S.Pd.</td>
            <td style="padding: 6px;">Guru Wali Kelas 2</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 6px;">4</td>
            <td style="padding: 6px;">Guru PAI, S.Pd.I.</td>
            <td style="padding: 6px;">Guru Agama Islam</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 6px;">5</td>
            <td style="padding: 6px;">Guru PJOK, S.Pd.</td>
            <td style="padding: 6px;">Guru Olahraga</td>
          </tr>
        </tbody>
      </table>
    </div>`],

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

  visi: ['Visi & Misi', `<p><b>Visi:</b> Terwujudnya peserta didik yang beriman, berakhlak mulia, cerdas, terampil, dan berkarakter Pancasila.</p>
    <ul><li>Menerapkan pembelajaran Kurikulum Merdeka yang menyenangkan.</li><li>Membiasakan ibadah, sopan santun, dan disiplin.</li><li>Mengembangkan bakat melalui ekstrakurikuler.</li><li>Menjaga lingkungan sekolah yang bersih dan ramah anak.</li></ul>`],
  sejarah: ['Sejarah Sekolah', `<p>SD Negeri Cikuya III berdiri pada 1 Januari 1983 di Desa Cikuya, Kecamatan Solear, Kabupaten Tangerang.</p>
    <p>Sejak berdiri, sekolah melayani anak-anak di kawasan sekitar dan kini terakreditasi B dengan 13 rombongan belajar.</p>`],
  pendidik: ['Pendidik & Tenaga Kependidikan', `<p>SDN Cikuya III memiliki 14 pendidik dan tenaga kependidikan. Sebanyak 92,8% berpendidikan S1/S2 dan 57,14% berstatus PNS/PPPK.</p>`],
  ekskul: ['Ekstrakurikuler', `<ul><li>Pramuka (wajib kelas 3-6)</li><li>Seni Marawis</li><li>Seni Tari</li><li>Futsal</li><li>Olahraga lainnya</li></ul>`],
  prestasi: ['Prestasi Siswa', `<ul><li>Juara 1 Lomba Cerdas Cermat tingkat Kecamatan Solear</li><li>Harapan 1 Pentas Seni Tari FLS2N SD</li><li>Juara Pramuka tingkat Kecamatan</li></ul>`],
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

// ---- Data siswa & guru ----
(function () {
  const siswa = loadData('cikuya_siswa', null);
  const guru = loadData('cikuya_guru', null);
  const pct = (v, t) => (t ? (v / t * 100).toFixed(2).replace(/\.?0+$/, '') : '0');

  if (siswa) {
    const total = siswa.laki + siswa.perempuan;
    const card = document.querySelector('a[href="#/siswa"]');
    if (card) {
      card.querySelector('b').innerHTML = `${total} <em>Anak</em>`;
      card.querySelector('.foot').textContent = `${siswa.laki} L  •  ${siswa.perempuan} P`;
    }
    content.siswa[1] = content.siswa[1].replace(
      /Total: [^<]*/, `Total: ${total} Siswa (${siswa.laki} L / ${siswa.perempuan} P)`);
  }

  if (guru) {
    const card = document.querySelector('a[href="#/guru"]');
    if (card) {
      card.querySelector('b').innerHTML = `${guru.total} <em>Pendidik</em>`;
      card.querySelector('.foot').textContent = `${pct(guru.sarjana, guru.total)}% Sarjana S1/S2`;
    }
    const menu = document.querySelector('[data-modal="pendidik"] small');
    if (menu) menu.textContent = `${guru.total} Tenaga Ahli`;
    content.guru[1] = content.guru[1].replace(
      /Total: [^<]*/, `Total: ${guru.total} Pendidik & Tendik`);
    content.pendidik[1] = `<p>SDN Cikuya III memiliki ${guru.total} pendidik dan tenaga kependidikan. Sebanyak ${pct(guru.sarjana, guru.total)}% berpendidikan S1/S2 dan ${pct(guru.pns, guru.total)}% berstatus PNS/PPPK.</p>`;
  }

  if (siswa && guru && guru.total) {
    const note = document.querySelector('#legalitas .note');
    if (note) note.innerHTML = `<i class="fa-solid fa-book-open"></i> Rasio Siswa / Guru: ${Math.round((siswa.laki + siswa.perempuan) / guru.total)}<br>Proporsi Guru PNS/PPPK: ${pct(guru.pns, guru.total)}%`;
  }
})();

// ---- Profil sekolah ----
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
    const kontakModal = content.kontak[1];
    content.kontak[1] = kontakModal
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
// Edit teks di bawah ini kapan saja (jadwal, deskripsi) tanpa menyentuh bagian lain.
const ESKUL_INFO = {
  'Pramuka Inti': {
    jadwal: 'Sabtu, 14.00 - 16.00 WIB',
    desc: 'Pramuka melatih kemandirian, disiplin, dan kerja sama lewat baris-berbaris, tali-temali, sandi, serta kegiatan perkemahan. Diikuti seluruh siswa kelas 3 sampai 6 sebagai bagian dari penguatan karakter Profil Pelajar Pancasila.'
  },
  'Seni Marawis': {
    jadwal: 'Jumat, 13.30 - 15.00 WIB',
    desc: 'Seni musik bernuansa Islami dengan alat perkusi marawis dan lantunan sholawat. Siswa belajar irama, kekompakan, dan rasa percaya diri, lalu tampil di pentas religi dan peringatan hari besar Islam.'
  },
  'Futsal': {
    jadwal: 'Rabu, 15.00 - 16.30 WIB',
    desc: 'Latihan teknik dasar seperti mengumpan, menggiring, dan menendang bola, ditambah permainan tim. Tujuannya menjaga kebugaran sekaligus menumbuhkan sportivitas dan semangat kebersamaan.'
  },
  'Seni Tari': {
    jadwal: 'Kamis, 14.00 - 15.30 WIB',
    desc: 'Siswa mempelajari tari tradisional untuk melatih kelenturan, ekspresi, dan kepercayaan diri. Latihan juga disiapkan untuk pentas sekolah dan ajang seni seperti FLS2N SD.'
  }
};
const GALERI_INFO = {
  'Upacara Bendera': 'Upacara bendera dilaksanakan rutin untuk menumbuhkan cinta tanah air, disiplin, dan rasa hormat kepada simbol negara. Petugas upacara dari kalangan siswa bertugas secara bergiliran.',
  'Literasi Pagi': 'Kegiatan membaca bersama sebelum pelajaran dimulai untuk menumbuhkan kebiasaan gemar membaca. Siswa memilih buku yang mereka sukai dan membacanya dengan tenang di sudut baca.'
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
  const gh = $('galeriHome'), gg = document.querySelector('#galeri .gal-grid');
  if (gh && gg) {
    gh.innerHTML = '';
    [...gg.children].slice(0, 2).forEach((c) => gh.appendChild(c.cloneNode(true)));
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
(function () {
  const s = loadData('cikuya_siswa', null), g = loadData('cikuya_guru', null);
  if (s && $('siswaTotalText'))
    $('siswaTotalText').textContent = `Total Siswa: ${s.laki + s.perempuan} Anak (${s.laki} Laki-laki / ${s.perempuan} Perempuan)`;
  if (g && $('guruTotalText'))
    $('guruTotalText').textContent = `Total: ${g.total} Pendidik & Tendik`;
})();
