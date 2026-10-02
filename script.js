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

// ==== Render Warta dari Admin Panel (localStorage) ====
(function(){
  const wartaExtra = document.getElementById('wartaExtra');
  if (!wartaExtra) return;
  const data = JSON.parse(localStorage.getItem('cikuya_warta') || '[]');
  const gradients = ['g1','g2','g3','g4'];
  data.forEach((item, i) => {
    const g = gradients[i % gradients.length];
    const icon = item.kategori === 'Prestasi' ? 'fa-trophy' : (item.kategori === 'Pengumuman' ? 'fa-bullhorn' : 'fa-seedling');
    wartaExtra.insertAdjacentHTML('beforeend', `
      <article class="card news"><div class="thumb ${g}"><i class="fa-solid ${icon}"></i></div>
        <div><span class="badge gold">${item.kategori}</span><h3>${item.judul}</h3><small><i class="fa-regular fa-calendar"></i> ${item.tanggal}</small></div></article>
    `);
  });
})();
