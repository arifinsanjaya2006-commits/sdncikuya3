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
