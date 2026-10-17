var konten = {
  biodata:
    '<h2>Biodata</h2>' +
    '<table>' +
    '<tr><td>NIM</td><td>: 20250810</td></tr>' +
    '<tr><td>Nama</td><td>: Nama Mahasiswa</td></tr>' +
    '<tr><td>Agama</td><td>: Agama</td></tr>' +
    '<tr><td>Tempat Lahir</td><td>: Lokasi Lahir</td></tr>' +
    '<tr><td>Tanggal Lahir</td><td>: Tanggal Lahir</td></tr>' +
    '</table>',

  pendidikan:
    '<h2>Pendidikan</h2>' +
    '<ul>' +
    '<li><strong>2023 - sekarang:</strong> S1 Sistem Informasi, Universitas Pembangunan Jaya</li>' +
    '<li><strong>2020 - 2023:</strong> SMA Mahasiswa</li>' +
    '<li><strong>2017 - 2020:</strong> SMP Mahasiswa</li>' +
    '<li><strong>2011 - 2017:</strong> SD Mahasiswa</li>' +
    '</ul>',

  pengalaman:
    '<h2>Pengalaman</h2>' +
    '<ul>' +
    '<li></li>' +
    '</ul>',

  keahlian:
    '<h2>Keahlian</h2>' +
    '<ul>' +
    '<li>HTML5 dan CSS</li>' +
    '<li>JavaScript</li>' +
    '</ul>',

  publikasi:
    '<h2>Publikasi</h2>' +
    '<ul>' +
    '<li></li>' +
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