var konten = {
  biodata:
    '<h2>Biodata</h2>' +
    '<table>' +
    '<tr><td>NIM</td><td>: 2025081053</td></tr>' +
    '<tr><td>Nama</td><td>: Imanuel Catur Wicaksana</td></tr>' +
    '<tr><td>Agama</td><td>: Kristen</td></tr>' +
    '<tr><td>Tempat Lahir</td><td>: Tangerang</td></tr>' +
    '<tr><td>Tanggal Lahir</td><td>: 08 November 2007</td></tr>' +
    '</table>',

  pendidikan:
    '<h2>Pendidikan</h2>' +
    '<ul>' +
    '<li><strong>2025 - sekarang:</strong> S1 Sistem Informasi, Universitas Pembangunan Jaya</li>' +
    '<li><strong>2023 - 2025:</strong> SMAN 6 Tangerang Selatan</li>' +
    '<li><strong>2020 - 2023:</strong> SMPN 4 Tangerang Selatan</li>' +
    '<li><strong>2014 - 2020:</strong> SDK Mater Dei</li>' +
    '</ul>',

  pengalaman:
    '<h2>Pengalaman</h2>' +
    '<ul>' +
    '<li><strong>2025:</strong> Menjadi asisten instruktur di pelatihan Script HTML 5 dalam Pengabdian Masyarakat di SMK Fadillah </li>' +
    '</ul>',

  keahlian:
    '<h2>Keahlian</h2>' +
    '<ul>' +
    '<li>HTML5 dan CSS</li>' +
    '<li>JavaScript</li>' +
    '<li>Excel</li>' +
    '<li>PHP</li>' +
    '<li>Java</li>' +
    '</ul>',

  publikasi:
    '<h2>Publikasi</h2>' +
    '<ul>' +
    '<li><strong>2025:</strong> PENINGKATAN KETERAMPILAN DASAR PENGEMBANGAN WEB SISWA MELALUI PELATIHAN SKRIP HTML TERBIMBING DI SEKOLAH MENENGAH KEJURUAN</li>' +
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
