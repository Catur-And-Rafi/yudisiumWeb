var konten = {
  biodata:
    '<h2>Biodata</h2>' +
    '<table>' +
    '<tr><td>NIM</td><td>: 2025081044</td></tr>' +
    '<tr><td>Nama</td><td>: Muhamad Rafi Hanif Hakim Darpi</td></tr>' +
    '<tr><td>Agama</td><td>: Islam</td></tr>' +
    '<tr><td>Tempat Lahir</td><td>: Tangerang Selatan</td></tr>' +
    '<tr><td>Tanggal Lahir</td><td>: 15 Juli 2007</td></tr>' +
    '</table>',

  pendidikan:
    '<h2>Pendidikan</h2>' +
    '<ul>' +
    '<li><strong>2025 - sekarang:</strong> S1 Sistem Informasi, Universitas Pembangunan Jaya</li>' +
    '<li><strong>2022 - 2025:</strong> SMK Al Amanah</li>' +
    '<li><strong>2019 - 2022:</strong> SMP Al Amanah</li>' +
    '<li><strong>2013 - 2019:</strong> SD Al Amanah</li>' +
    '</ul>',

  pengalaman:
    '<h2>Pengalaman</h2>' +
    '<ul>' +
    '<li>Panitia peringatan 17 Agustus di SMK Al Amanah</li>' +
    '<li>Panitia peringatan 17 Agustus di lingkungan rumah, Pamulang</li>' +
    '<li>PKL di BSI selama 3 bulan (divisi operasional, marketing, dan akuntansi)</li>' +
    '</ul>',

  keahlian:
    '<h2>Keahlian</h2>' +
    '<ul>' +
    '<li>JavaScript</li>' +
    '<li>HTML</li>' +
    '<li>CSS</li>' +
    '<li>Python</li>' +
    '<li>Microsoft Word</li>' +
    '<li>Microsoft Excel</li>' +
    '<li>Microsoft PowerPoint</li>' +
    '<li>Editing</li>' +
    '<li>Akuntansi dan pajak</li>' +
    '</ul>',

  publikasi:
    '<h2>Publikasi</h2>' +
    '<ul>' +
    '<li>Belum ada publikasi</li>' +
    '</ul>'
};

var area = document.getElementById('konten');
var menu = document.querySelectorAll('nav a');

function tampil(id) {
  area.innerHTML = konten[id];
  for (var i = 0; i < menu.length; i++) {
    menu[i].classList.toggle('active', menu[i].getAttribute('data-target') === id);
  }
}

for (var i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', function (e) {
    e.preventDefault();
    tampil(this.getAttribute('data-target'));
  });
}
tampil('biodata');
