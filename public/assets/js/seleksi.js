var styleElement = document.createElement('style');
var cssStyles = `
.chat-message {
    clear: both; 
    overflow: auto; 
}

.user-message {
    text-align: right;
}

.user-message p {
    background-color: #808080; 
    color: white ;
    display: inline-block;
    border-radius: 10px; 
    padding: 10px 15px;
    margin: 5px;
}

.admin-message {
    text-align: left;
}

.admin-message p {
    background-color: #f0f0f0; 
    color: #333; 
    display: inline-block;
    border-radius: 10px; 
    padding: 10px 15px;
    margin: 5px;
}

`;

styleElement.innerHTML = cssStyles;
document.head.appendChild(styleElement);


// Rules untuk kategori "Seleksi"
var seleksiRules = [
    {
        question: "Jalur seleksi apa saja yang tersedia di Institut Teknologi Del?",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur yaitu sebagai berikut: \
        1. PMDK (Penelusuran Minat Bakat dan Kemampuan) \
        2. USM 1 (Ujian Saring Masuk) \
        3. USM 2 (Ujian Saring Masuk) \
        4. USM 3 (Ujian Saring Masuk) \
        5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK) \
        6. JPS (Jalur Prestasi Siswa) \
        \
        Untuk detail jadwal masing-masing jalur dapat dilihat melalui link berikut: \
        https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "Persyaratan apa saja yang harus dipenuhi untuk mengikuti jalur seleksi SPMB IT Del?",
        answer: "Berikut merupakan persyaratan yang harus dipenuhi oleh calon pendaftar SPMB IT Del. Terdapat dua persyaratan yaitu persyaratan umum dan persyaratan khusus program studi: \
        a) Persyaratan umum \
        1. Memiliki minat yang tinggi untuk melanjutkan studi di IT Del dan akan mendaftarkan diri sebagai mahasiswa IT Del apabila dinyatakan lulus seleksi untuk program USM; \
        2. Siswa berasal dari jurusan yang tidak termasuk dalam kelompok Ilmu Sosial, Budaya atau Bahasa; \
        3. Lulusan SMA atau SMK Teknik pada semua jurusan dengan tahun ijazah 2021, 2022, 2023; \
        4. Usia maksimum 21 tahun per 31 Agustus 2024; \
        5. Mengikuti tes akademik daring berupa Matematika, Bahasa Inggris, dan Tes Potensi Akademik; \
        6. Dapat memilih maksimal 3 pilihan program studi, dari 9 program studi yang ada di IT Del yakni: \
        • Fakultas Vokasi [FV], Program Studi: \
        1. Teknologi Informasi (D3) \
        2. Teknologi Komputer (D3) \
        3. Teknologi Rekayasa Perangkat Lunak (D4) \
        • Fakultas Informatika & Teknik Elektro [FITE], Program Studi: \
        1. Informatika (S1) \
        2. Teknik Elektro (S1) \
        3. Sistem Informasi (S1) \
        • Fakultas Teknologi Industri [FTI], Program Studi: \
        1. Manajemen Rekayasa (S1) \
        2. Teknik Metalurgi (S1) \
        • Fakultas Bioteknologi [FB], Program Studi: \
        1. Teknik Bioproses (S1) \
        b) Persyaratan khusus program studi \
        a) Program Studi S1 Teknik Elektro: \
        • *Tidak Buta Warna, dibuktikan dengan melampirkan Surat Keterangan Tidak Buta Warna dari Dokter Spesialis Mata \
        • SMA jurusan IPA/MIA atau SMK Teknik (Elektro, Elektronika, Listrik) \
        b) Program Studi S1 Teknik Bioproses: \
        • *Tidak Buta Warna, dibuktikan dengan melampirkan Surat Keterangan Tidak Buta Warna dari Dokter Spesialis Mata \
        • SMA jurusan IPA/MIA. \
        c) Program Studi Manajemen Rekayasa: \
        • Mata \
        • SMA jurusan IPA/MIA. \
        d) Program Studi S1 Informatika, S1 Sistem Informasi, D4 Teknologi Rekayasa Perangkat Lunak, D3 Teknologi Informasi dan D3 Teknologi Komputer: \
        • SMA jurusan IPA/MIA atau SMK Teknik (Informatika, Komputer). \
        Ket *: disampaikan pada saat daftar ulang daring"
    },
    {
        question: "Bagaimana cara melihat hasil seleksi dan kapan pengumuman hasil seleksi SPMB IT Del?",
        answer: "Hasil Seleksi SPMB dapat di lihat pada website resmi https://spmb.del.ac.id/ yang terdapat pada halaman home bagian pengumuman atau dapat dilihat pada link berikut: http://spmb.del.ac.id/index.php?r=pmb-pengumuman%2Findex"
    }
];

// Rules tambahan untuk kategori "Pendaftaran"
var pendaftaranRules = [
    {
        question: "Bagaimana proses pendaftaran mahasiswa baru di Institut Teknologi Del?",
        answer: "Berikut merupakan panduan pendaftaran Seleksi Penerimaan Mahasiswa Baru (SPMB) IT Del. Pendaftaran dapat dilakukan dengan dua cara yaitu daring dan luring. \
        a) Luring \
        1. Pendaftaran setiap Kamis-Jumat Pukul 13.00-17.00 WIB. \
        2. Mengisi formulir pendaftaran \
        3. Membawa foto 3X4 2 lembar. \
        b) Daring \
        Buka website https://spmb.del.ac.id/ \
        1. Melakukan registrasi dan aktivasi akun di Email \
        2. Login dengan akun yang telah didaftarkan \
        3. Pilih 3 program studi yang diminati \
        4. Mengisi data diri \
        • Data jumlah Mata Pelajaran Semester V \
        • Data Total Nilai Rapor \
        • Foto 3X4 [size max 1 MB] \
        5. Menentukan besaran uang pembangunan \
        6. Verifikasi data oleh panitia SPMB IT Del \
        Mendapatkan notifikasi bahwa anda telah terdaftar"
    },
    {
        question: "Apakah bisa untuk pindah jurusan saat pendaftaran ulang dilakukan?",
        answer: "Maaf untuk pertanyaan yang kamu ajukan tidak bisa dijawab oleh chatbot ini. Untuk pertanyaan lebih lanjut bisa ditanyakan melakukan kontak panitia SPMB yang dapat dilihat pada link berikut: \
        spmb.del.ac.id/index.php?r=site%2Fkontak"
    },
    {
        question: "Apa aja berkas yang harus dipersiapkan untuk melakukan pendaftaran ke IT Del?",
        answer: "Berikut merupakan berkas yang harus dipersiapkan untuk melakukan pendaftaran SPMB IT Del: \
        1. Data yang harus dilengkapi pada formulir pendafataran baik daring maupun luring: \
        • Memilih maksimal 3 pilihan program studi \
        • Mengisi Data Pribadi, seperti \
        - NIK \
        - NISN \
        - Nama Lengkap \
        - Jenis Kelamin \
        - Tempat/Tanggal Lahir \
        - Agama \
        - Alamat \
        - Kode Pos \
        - No Hp \
        - Email \
        • Mengisi Data Orang Tua, seperti \
        - Nama Ayah dan Ibu kandung \
        - Pekerjaan Ayah dan Ibu Kandung \
        - Penghasilan Ayah dan Ibu Kandung \
        - Alamat orang tua \
        - Kode Pos \
        • Mengisi Data Akademis, seperti \
        - Sekolah \
        - Jurusan \
        - Jumlah Pelajaran Semester 5 \
        - Jumlah Nilai Semester 5 \
        • Mengisi Data Kemampuan Bahasa Asing \
        • Mengisi Data Pendidikan Ekstrakurikuler \
        • Mengisi Pengalaman Organisasi \
        • Mengisi tentang mendapatkan/mendengar informasi mengenai program penerimaan mahasiswa IT Del melalui apa? \
        • Mengisi Jumlah minimum N untuk uang pembangunan sekali bayar \
        Mengunggah foto 3x4 untuk daring atau Menempelkan foto 3x4 untuk luring"
    },
    {
        question: "Apakah lulusan SMK bisa melakukan pendaftaran ke IT Del?",
        answer: "Ya, lulusan SMK Teknik dengan jurusan tertentu bisa melakukan pendaftaran SPMB IT Del."
    },
    {
        question: "Kapan pendaftaran ulang SPMB IT Del dilaksanakan?",
        answer: "Pendaftaran ulang SPMB IT Del berbeda-beda tergantung jalur seleksi yang diikuti. Untuk lebih detailnya bisa dilihat pada website https://spmb.del.ac.id/ sdi bagian menu 'INFO & PENDAFTARAN' dan pilih jalur seleksi yang kamu ikuti."
    }
];

var jadwalRules = [
    {
        question:"Kapan jadwal SPMB Institut Teknologi Del dilaksanakan?",
        answer:"Jadwal pelaksanaan SPMB IT Del dapat dilihat pada website resmi https://spmb.del.ac.id/  yang terdapat pada halaman home atau dapat dilihat melalui link berikut:  https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question:"Kapan jadwal psikotes dilaksanakan?",
        answer:"Jadwal psikotes SPMB IT Del berbeda-beda tergantung jalur seleksi yang diikuti. Untuk lebih detailnya bisa dilihat pada website https://spmb.del.ac.id/ sdi bagian menu `INFO & PENDAFTARAN` dan pilih jalur seleksi yang kamu ikuti."
    }
];

var biayaRules = [
    {
        question:"Berapa biaya pendaftaran SPMB IT Del?",
        answer:"Berikut merupakan biaya pendaftaran tiap jalur seleksi SPMB IT Del.\
        1.	PMDK = Rp. 0\
        2.	USM 1 = Rp.0\
        3.	USM 2 = Rp.0\
        4.	USM 3 = Rp. 150,000\
        5.	UTBK = Rp. 150,000\
        JPS = Rp. 100,000"
    },
    {
        question:"Bagaimana cara membayar biaya pendaftaran SPMB IT Del?",
        answer:"Pembayaran biaya pendaftaran SPMB dapat dilakukan baik secara manual maupun online Jika melalui online, pihak pantia SPMB IT Del akan memberikan Nomor Virtual Account (VA) untuk melakukan pembayaran ke nomor yang diberikan."
    },
    {
        question:"Berapa biaya kuliah di Institut Teknologi Del?",
        answer:"Untuk rincian biaya yang diperlukan dapat dilihat melalui link berikut: http://spmb.del.ac.id/files/Biaya_Pendidikan_Final.pdf"
    },
    {
        question:"Dalam pembayaran biaya pembangunan apakah harus dibayar langsung secara lunas atau bisa dicicil?",
        answer:"Maaf untuk pertanyaan yang kamu ajukan tidak bisa dijawab oleh chatbot ini. Untuk pertanyaan lebih lanjut bisa ditanyakan melakukan kontak panitia SPMB yang dapat dilihat pada link berikut: \
        spmb.del.ac.id/index.php?r=site%2Fkontak"
    },
];

var beasiswaRules = [
    {
        question:"Apakah ada beasiswa yang disediakan oleh pihak IT Del dan jenis beasiswa apa saja yang tersedia?",
        answer:"Ada beberapa beasiswa yang disediakan oleh pihak IT Del. Beasiswa tersebut diperuntukkan bagi mahasiswa dengan berbagai latar belakang, baik dari segi prestasi akademik, ekonomi. \
        Berikut merupakan beasiswa yang disediakan di Kampus Institut Teknologi Del antara lain:\
        1.	Beasiswa Tanoto\
        2.	Beasiswa Bidikmisi\
        3.	Beasiswa Rajawali\
        4.	Beasiswa Berpestasi,\
        Dan terdapat beberapa beasiswa lainnya yang tersedia di Institut Teknologi Del dapat diakses melalui website berikut http://www.del.ac.id pada menu `Program Pendidikan` atau bisa melalui link berikut: https://www.del.ac.id/?page_id=14564"
    },
    {
        question:"Bagaimana cara mendapatkan beasiswa di Institut Teknologi Del?",
        answer:"Cara mendapatkan beasiswa di Institut Teknolofgi Del berbeda-beda tergantung jenis beasiswanya. Untuk lebih detail bagaimana cara mendapatkan beasiswa dapat dilihat melalui link berikut: https://www.del.ac.id/?page_id=14564 "
    }
];

var fasilitasRules = [
    {
        question:"Apa saja fasilitas yang disediakan oleh pihak IT Del?",
        answer:"Fasilitas yang disediakan di Kampus Institut Teknologi Del antara lain:\
        1)	Laboratorium dan Kelas\
        2)	Akomodasi\
        3)	Kantin\
        4)	Perpustakaan\
        5)	Hiburan dan Olahraga\
        6)	Ruang Terbuka\
        7)	Klinik"
    },
    {
        question:"Apakah ada ketentuan dalam menggunakan fasilitas yang disediakan oleh IT Del?",
        answer:"Beberapa fasilitas yang disediakan oleh pihak Kampus Institut Teknologi Del memiliki ketentuan masing-masing. Untuk informasi ketentuan dari fasilitas dapat diakses melalui website berikut http://www.del.ac.id pada menu fasilitas dan pilih jenis fasilitas."
    }
];

// Rules tambahan untuk kategori "Seleksi"
var additionalRules = [
    {
        question: "jalur seleksi",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur, yaitu sebagai berikut:\
        1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\
        2. USM 1 (Ujian Saring Masuk)\
        3. USM 2 (Ujian Saring Masuk)\
        4. USM 3 (Ujian Saring Masuk)\
        5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\
        6. JPS (Jalur Prestasi Siswa)\
        Untuk detail jadwal masing-masing jalur, Anda dapat melihatnya melalui link berikut: \
        https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "jalur",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur, yaitu sebagai berikut:\
        1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\
        2. USM 1 (Ujian Saring Masuk)\
        3. USM 2 (Ujian Saring Masuk)\
        4. USM 3 (Ujian Saring Masuk)\
        5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\
        6. JPS (Jalur Prestasi Siswa)\
        Untuk detail jadwal masing-masing jalur, Anda dapat melihatnya melalui link berikut: \
        https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "jalur penerimaan",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur, yaitu sebagai berikut:\
        1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\
        2. USM 1 (Ujian Saring Masuk)\
        3. USM 2 (Ujian Saring Masuk)\
        4. USM 3 (Ujian Saring Masuk)\
        5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\
        6. JPS (Jalur Prestasi Siswa)\
        Untuk detail jadwal masing-masing jalur, Anda dapat melihatnya melalui link berikut: \
        https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "penerimaan",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur, yaitu sebagai berikut:\
        1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\
        2. USM 1 (Ujian Saring Masuk)\
        3. USM 2 (Ujian Saring Masuk)\
        4. USM 3 (Ujian Saring Masuk)\
        5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\
        6. JPS (Jalur Prestasi Siswa)\
        Untuk detail jadwal masing-masing jalur, Anda dapat melihatnya melalui link berikut: \
        https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "proses seleksi",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur, yaitu sebagai berikut:\
        1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\
        2. USM 1 (Ujian Saring Masuk)\
        3. USM 2 (Ujian Saring Masuk)\
        4. USM 3 (Ujian Saring Masuk)\
        5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\
        6. JPS (Jalur Prestasi Siswa)\
        Untuk detail jadwal masing-masing jalur, Anda dapat melihatnya melalui link berikut: \
        https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "sistem seleksi",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur, yaitu sebagai berikut:\
        1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\
        2. USM 1 (Ujian Saring Masuk)\
        3. USM 2 (Ujian Saring Masuk)\
        4. USM 3 (Ujian Saring Masuk)\
        5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\
        6. JPS (Jalur Prestasi Siswa)\
        Untuk detail jadwal masing-masing jalur, Anda dapat melihatnya melalui link berikut: \
        https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "ujian seleksi",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur, yaitu sebagai berikut:\
        1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\
        2. USM 1 (Ujian Saring Masuk)\
        3. USM 2 (Ujian Saring Masuk)\
        4. USM 3 (Ujian Saring Masuk)\
        5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\
        6. JPS (Jalur Prestasi Siswa)\
        Untuk detail jadwal masing-masing jalur, Anda dapat melihatnya melalui link berikut: \
        https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "ujian",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur, yaitu sebagai berikut:\
        1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\
        2. USM 1 (Ujian Saring Masuk)\
        3. USM 2 (Ujian Saring Masuk)\
        4. USM 3 (Ujian Saring Masuk)\
        5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\
        6. JPS (Jalur Prestasi Siswa)\
        Untuk detail jadwal masing-masing jalur, Anda dapat melihatnya melalui link berikut: \
        https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "penilaian seleksi",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur, yaitu sebagai berikut:\
        1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\
        2. USM 1 (Ujian Saring Masuk)\
        3. USM 2 (Ujian Saring Masuk)\
        4. USM 3 (Ujian Saring Masuk)\
        5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\
        6. JPS (Jalur Prestasi Siswa)\
        Untuk detail jadwal masing-masing jalur, Anda dapat melihatnya melalui link berikut: \
        https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "penilaian",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur, yaitu sebagai berikut:\
        1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\
        2. USM 1 (Ujian Saring Masuk)\
        3. USM 2 (Ujian Saring Masuk)\
        4. USM 3 (Ujian Saring Masuk)\
        5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\
        6. JPS (Jalur Prestasi Siswa)\
        Untuk detail jadwal masing-masing jalur, Anda dapat melihatnya melalui link berikut: \
        https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "jadwal seleksi",
        answer: "Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur, yaitu sebagai berikut:\
        1. PMDK (Penelusuran Minat Bakat dan Kemampuan)\
        2. USM 1 (Ujian Saring Masuk)\
        3. USM 2 (Ujian Saring Masuk)\
        4. USM 3 (Ujian Saring Masuk)\
        5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK)\
        6. JPS (Jalur Prestasi Siswa)\
        Untuk detail jadwal masing-masing jalur, Anda dapat melihatnya melalui link berikut: \
        https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "persyaratan seleksi",
        answer: "Berikut merupakan persyaratan yang harus dipenuhi oleh calon pendaftar SPMB IT Del. Terdapat dua persyaratan yaitu persyaratan umum dan persyaratan khusus program studi:\
        a)	Persyaratan umum\
        1.	Memiliki minat yang tinggi untuk melanjutkan studi di IT Del dan akan mendaftarkan diri sebagai mahasiswa IT Del apabila dinyatakan lulus seleksi untuk program USM;\
        2.	Siswa berasal dari jurusan yang tidak termasuk dalam kelompok Ilmu Sosial, Budaya atau Bahasa;\
        3.	Lulusan SMA atau SMK Teknik pada semua jurusan dengan tahun ijazah 2021, 2022, 2023;\
        4.	Usia maksimum 21 tahun per 31 Agustus 2024;\
        5.	Mengikuti tes akademik daring berupa Matematika, Bahasa Inggris, dan Tes Potensi Akademik;\
        6.	Dapat memilih maksimal 3 pilihan program studi, dari 9 program studi yang ada di IT Del yakni:\
        •	Fakultas Vokasi [FV], Program Studi:\
        1.	Teknologi Informasi (D3)\
        2.	Teknologi Komputer (D3)\
        3.	Teknologi Rekayasa Perangkat Lunak (D4)\
        •	Fakultas Informatika & Teknik Elektro [FITE], Program Studi:\
        1.	Informatika (S1)\
        2.	Teknik Elektro (S1)\
        3.	Sistem Informasi (S1)\
        •	Fakultas Teknologi Industri [FTI], Program Studi:\
        1.	Manajemen Rekayasa (S1)\
        2.	Teknik Metalurgi (S1)\
        •	Fakultas Bioteknologi [FB], Program Studi:\
        1.	Teknik Bioproses (S1)\
        b)	Persyaratan khusus program studi\
        a)	Program Studi S1 Teknik Elektro:\
        •	*Tidak Buta Warna, dibuktikan dengan melampirkan Surat Keterangan Tidak Buta Warna dari Dokter Spesialis Mata\
        •	SMA jurusan IPA/MIA atau SMK Teknik (Elektro, Elektronika, Listrik)\
        b)	Program Studi S1 Teknik Bioproses: \
        •	*Tidak Buta Warna, dibuktikan dengan melampirkan Surat Keterangan Tidak Buta Warna dari Dokter Spesialis Mata \
        •	SMA jurusan IPA/MIA.\
        c)	Program Studi Manajemen Rekayasa: \
        •	Mata \
        •	SMA jurusan IPA/MIA.\
        d)	Program Studi S1 Informatika, S1 Sistem Informasi, D4 Teknologi Rekayasa Perangkat Lunak, D3 Teknologi Informasi dan D3 Teknologi Komputer: \
        •	SMA jurusan IPA/MIA atau SMK Teknik (Informatika, Komputer).\
        Ket *: disampaikan pada saat daftar ulang daring"
    },
    {
        question: "syarat seleksi",
        answer: "Berikut merupakan persyaratan yang harus dipenuhi oleh calon pendaftar SPMB IT Del. Terdapat dua persyaratan yaitu persyaratan umum dan persyaratan khusus program studi:\
        a)	Persyaratan umum\
        1.	Memiliki minat yang tinggi untuk melanjutkan studi di IT Del dan akan mendaftarkan diri sebagai mahasiswa IT Del apabila dinyatakan lulus seleksi untuk program USM;\
        2.	Siswa berasal dari jurusan yang tidak termasuk dalam kelompok Ilmu Sosial, Budaya atau Bahasa;\
        3.	Lulusan SMA atau SMK Teknik pada semua jurusan dengan tahun ijazah 2021, 2022, 2023;\
        4.	Usia maksimum 21 tahun per 31 Agustus 2024;\
        5.	Mengikuti tes akademik daring berupa Matematika, Bahasa Inggris, dan Tes Potensi Akademik;\
        6.	Dapat memilih maksimal 3 pilihan program studi, dari 9 program studi yang ada di IT Del yakni:\
        •	Fakultas Vokasi [FV], Program Studi:\
        1.	Teknologi Informasi (D3)\
        2.	Teknologi Komputer (D3)\
        3.	Teknologi Rekayasa Perangkat Lunak (D4)\
        •	Fakultas Informatika & Teknik Elektro [FITE], Program Studi:\
        1.	Informatika (S1)\
        2.	Teknik Elektro (S1)\
        3.	Sistem Informasi (S1)\
        •	Fakultas Teknologi Industri [FTI], Program Studi:\
        1.	Manajemen Rekayasa (S1)\
        2.	Teknik Metalurgi (S1)\
        •	Fakultas Bioteknologi [FB], Program Studi:\
        1.	Teknik Bioproses (S1)\
        b)	Persyaratan khusus program studi\
        a)	Program Studi S1 Teknik Elektro:\
        •	*Tidak Buta Warna, dibuktikan dengan melampirkan Surat Keterangan Tidak Buta Warna dari Dokter Spesialis Mata\
        •	SMA jurusan IPA/MIA atau SMK Teknik (Elektro, Elektronika, Listrik)\
        b)	Program Studi S1 Teknik Bioproses: \
        •	*Tidak Buta Warna, dibuktikan dengan melampirkan Surat Keterangan Tidak Buta Warna dari Dokter Spesialis Mata \
        •	SMA jurusan IPA/MIA.\
        c)	Program Studi Manajemen Rekayasa: \
        •	Mata \
        •	SMA jurusan IPA/MIA.\
        d)	Program Studi S1 Informatika, S1 Sistem Informasi, D4 Teknologi Rekayasa Perangkat Lunak, D3 Teknologi Informasi dan D3 Teknologi Komputer: \
        •	SMA jurusan IPA/MIA atau SMK Teknik (Informatika, Komputer).\
        Ket *: disampaikan pada saat daftar ulang daring"
    },
    {
        question: "syarat",
        answer: "Berikut merupakan persyaratan yang harus dipenuhi oleh calon pendaftar SPMB IT Del. Terdapat dua persyaratan yaitu persyaratan umum dan persyaratan khusus program studi:\
        a)	Persyaratan umum\
        1.	Memiliki minat yang tinggi untuk melanjutkan studi di IT Del dan akan mendaftarkan diri sebagai mahasiswa IT Del apabila dinyatakan lulus seleksi untuk program USM;\
        2.	Siswa berasal dari jurusan yang tidak termasuk dalam kelompok Ilmu Sosial, Budaya atau Bahasa;\
        3.	Lulusan SMA atau SMK Teknik pada semua jurusan dengan tahun ijazah 2021, 2022, 2023;\
        4.	Usia maksimum 21 tahun per 31 Agustus 2024;\
        5.	Mengikuti tes akademik daring berupa Matematika, Bahasa Inggris, dan Tes Potensi Akademik;\
        6.	Dapat memilih maksimal 3 pilihan program studi, dari 9 program studi yang ada di IT Del yakni:\
        •	Fakultas Vokasi [FV], Program Studi:\
        1.	Teknologi Informasi (D3)\
        2.	Teknologi Komputer (D3)\
        3.	Teknologi Rekayasa Perangkat Lunak (D4)\
        •	Fakultas Informatika & Teknik Elektro [FITE], Program Studi:\
        1.	Informatika (S1)\
        2.	Teknik Elektro (S1)\
        3.	Sistem Informasi (S1)\
        •	Fakultas Teknologi Industri [FTI], Program Studi:\
        1.	Manajemen Rekayasa (S1)\
        2.	Teknik Metalurgi (S1)\
        •	Fakultas Bioteknologi [FB], Program Studi:\
        1.	Teknik Bioproses (S1)\
        b)	Persyaratan khusus program studi\
        a)	Program Studi S1 Teknik Elektro:\
        •	*Tidak Buta Warna, dibuktikan dengan melampirkan Surat Keterangan Tidak Buta Warna dari Dokter Spesialis Mata\
        •	SMA jurusan IPA/MIA atau SMK Teknik (Elektro, Elektronika, Listrik)\
        b)	Program Studi S1 Teknik Bioproses: \
        •	*Tidak Buta Warna, dibuktikan dengan melampirkan Surat Keterangan Tidak Buta Warna dari Dokter Spesialis Mata \
        •	SMA jurusan IPA/MIA.\
        c)	Program Studi Manajemen Rekayasa: \
        •	Mata \
        •	SMA jurusan IPA/MIA.\
        d)	Program Studi S1 Informatika, S1 Sistem Informasi, D4 Teknologi Rekayasa Perangkat Lunak, D3 Teknologi Informasi dan D3 Teknologi Komputer: \
        •	SMA jurusan IPA/MIA atau SMK Teknik (Informatika, Komputer).\
        Ket *: disampaikan pada saat daftar ulang daring"
    },
    {
        question: "hasil seleksi",
        answer: "Hasil Seleksi SPMB dapat di lihat pada website resmi https://spmb.del.ac.id/ yang terdapat pada halaman home bagian pengumuman atau dapat dilihat pada link berikut: http://spmb.del.ac.id/index.php?r=pmb-pengumuman%2Findex"
    },
    {
        question: "pengumuman hasil seleksi",
        answer: "Hasil Seleksi SPMB dapat di lihat pada website resmi https://spmb.del.ac.id/ yang terdapat pada halaman home bagian pengumuman atau dapat dilihat pada link berikut: http://spmb.del.ac.id/index.php?r=pmb-pengumuman%2Findex"
    },
    {
        question: "pengumuman seleksi",
        answer: "Hasil Seleksi SPMB dapat di lihat pada website resmi https://spmb.del.ac.id/ yang terdapat pada halaman home bagian pengumuman atau dapat dilihat pada link berikut: http://spmb.del.ac.id/index.php?r=pmb-pengumuman%2Findex"
    },
    {
        question: "hasil akhir",
        answer: "Hasil Seleksi SPMB dapat di lihat pada website resmi https://spmb.del.ac.id/ yang terdapat pada halaman home bagian pengumuman atau dapat dilihat pada link berikut: http://spmb.del.ac.id/index.php?r=pmb-pengumuman%2Findex"
    },
    {
        question: "pengumuman",
        answer: "Hasil Seleksi SPMB dapat di lihat pada website resmi https://spmb.del.ac.id/ yang terdapat pada halaman home bagian pengumuman atau dapat dilihat pada link berikut: http://spmb.del.ac.id/index.php?r=pmb-pengumuman%2Findex"
    },
    {
        question: "proses pendaftaran",
        answer: "Berikut merupakan panduan pendaftaran Seleksi Penerimaan Mahasiswa Baru (SPMB) IT Del.\
        Pendaftaran dapat dilakukan dengan dua cara yaitu daring dan luring. \
        a)	Luring\
        1.	Pendaftaran setiap Kamis-Jumat Pukul 13.00-17.00 WIB. \
        2.	Mengisi formulir pendaftaran \
        3.	Membawa foto 3X4 2 lembar.\
        b)	Daring\
        Buka website https://spmb.del.ac.id/ \
        1.	Melakukan registrasi dan aktivasi akun di Email\
        2.	Login dengan akun yang telah didaftarkan\
        3.	Pilih 3 program studi yang diminati \
        4.	Mengisi data diri\
        •	Data jumlah Mata Pelajaran Semester V\
        •	Data Total Nilai Rapor\
        •	Foto 3X4 [size max 1 MB]\
        5.	Menentukan besaran uang pembangunan\
        6.	Verifikasi data oleh panitia SPMB IT Del\
        Mendapatkan notifikasi bahwa anda telah terdaftar"
    },
    {
        question: "daftar",
        answer: "Berikut merupakan panduan pendaftaran Seleksi Penerimaan Mahasiswa Baru (SPMB) IT Del.\
        Pendaftaran dapat dilakukan dengan dua cara yaitu daring dan luring. \
        a)	Luring\
        1.	Pendaftaran setiap Kamis-Jumat Pukul 13.00-17.00 WIB. \
        2.	Mengisi formulir pendaftaran \
        3.	Membawa foto 3X4 2 lembar.\
        b)	Daring\
        Buka website https://spmb.del.ac.id/ \
        1.	Melakukan registrasi dan aktivasi akun di Email\
        2.	Login dengan akun yang telah didaftarkan\
        3.	Pilih 3 program studi yang diminati \
        4.	Mengisi data diri\
        •	Data jumlah Mata Pelajaran Semester V\
        •	Data Total Nilai Rapor\
        •	Foto 3X4 [size max 1 MB]\
        5.	Menentukan besaran uang pembangunan\
        6.	Verifikasi data oleh panitia SPMB IT Del\
        Mendapatkan notifikasi bahwa anda telah terdaftar"
    },
    {
        question: "cara daftar",
        answer: "Berikut merupakan panduan pendaftaran Seleksi Penerimaan Mahasiswa Baru (SPMB) IT Del.\
        Pendaftaran dapat dilakukan dengan dua cara yaitu daring dan luring. \
        a)	Luring\
        1.	Pendaftaran setiap Kamis-Jumat Pukul 13.00-17.00 WIB. \
        2.	Mengisi formulir pendaftaran \
        3.	Membawa foto 3X4 2 lembar.\
        b)	Daring\
        Buka website https://spmb.del.ac.id/ \
        1.	Melakukan registrasi dan aktivasi akun di Email\
        2.	Login dengan akun yang telah didaftarkan\
        3.	Pilih 3 program studi yang diminati \
        4.	Mengisi data diri\
        •	Data jumlah Mata Pelajaran Semester V\
        •	Data Total Nilai Rapor\
        •	Foto 3X4 [size max 1 MB]\
        5.	Menentukan besaran uang pembangunan\
        6.	Verifikasi data oleh panitia SPMB IT Del\
        Mendapatkan notifikasi bahwa anda telah terdaftar"
    },
    {
        question: "panduan daftar",
        answer: "Berikut merupakan panduan pendaftaran Seleksi Penerimaan Mahasiswa Baru (SPMB) IT Del.\
        Pendaftaran dapat dilakukan dengan dua cara yaitu daring dan luring. \
        a)	Luring\
        1.	Pendaftaran setiap Kamis-Jumat Pukul 13.00-17.00 WIB. \
        2.	Mengisi formulir pendaftaran \
        3.	Membawa foto 3X4 2 lembar.\
        b)	Daring\
        Buka website https://spmb.del.ac.id/ \
        1.	Melakukan registrasi dan aktivasi akun di Email\
        2.	Login dengan akun yang telah didaftarkan\
        3.	Pilih 3 program studi yang diminati \
        4.	Mengisi data diri\
        •	Data jumlah Mata Pelajaran Semester V\
        •	Data Total Nilai Rapor\
        •	Foto 3X4 [size max 1 MB]\
        5.	Menentukan besaran uang pembangunan\
        6.	Verifikasi data oleh panitia SPMB IT Del\
        Mendapatkan notifikasi bahwa anda telah terdaftar"
    },
    {
        question: "pindah jurusan",
        answer: "Maaf untuk pertanyaan yang kamu ajukan tidak bisa dijawab oleh chatbot ini. Untuk pertanyaan lebih lanjut bisa ditanyakan melakukan kontak panitia SPMB yang dapat dilihat pada link berikut: \
        spmb.del.ac.id/index.php?r=site%2Fkontak"
    },
    {
        question: "pindah",
        answer: "Maaf untuk pertanyaan yang kamu ajukan tidak bisa dijawab oleh chatbot ini. Untuk pertanyaan lebih lanjut bisa ditanyakan melakukan kontak panitia SPMB yang dapat dilihat pada link berikut: \
        spmb.del.ac.id/index.php?r=site%2Fkontak"
    },
    {
        question: "lintas jurusan",
        answer: "Maaf untuk pertanyaan yang kamu ajukan tidak bisa dijawab oleh chatbot ini. Untuk pertanyaan lebih lanjut bisa ditanyakan melakukan kontak panitia SPMB yang dapat dilihat pada link berikut: \
        spmb.del.ac.id/index.php?r=site%2Fkontak"
    },
    {
        question: "ganti jurusan",
        answer: "Maaf untuk pertanyaan yang kamu ajukan tidak bisa dijawab oleh chatbot ini. Untuk pertanyaan lebih lanjut bisa ditanyakan melakukan kontak panitia SPMB yang dapat dilihat pada link berikut: \
        spmb.del.ac.id/index.php?r=site%2Fkontak"
    },
    {
        question: "berkas",
        answer: "Berikut merupakan berkas yang harus dipersiapkan untuk melakukan pendaftaran SPMB IT Del:\
        1. Data yang harus dilengkapi pada formulir pendafataran baik daring maupun luring:\
        •	Memilih maksimal 3 pilihan program studi\
        •	Mengisi Data Pribadi, seperti\
        -	NIK\
        -	NISN\
        -	Nama Lengkap\
        -	Jenis Kelamin\
        -	Tempat/Tanggal Lahir\
        -	Agama\
        -	Alamat\
        -	Kode Pos\
        -	No Hp\
        -	Email\
        •	Mengisi Data Orang Tua, seperti\
        -	Nama Ayah dan Ibu kandung\
        -	Pekerjaan Ayah dan Ibu Kandung\
        -	Penghasilan Ayah dan Ibu Kandung\
        -	Alamat orang tua\
        -	Kode Pos\
        •	Mengisi Data Akademis, seperti\
        -	Sekolah\
        -	Jurusan\
        -	Jumlah Pelajaran Semester 5\
        -	Jumlah Nilai Semester 5\
        •	Mengisi Data Kemampuan Bahasa Asing\
        •	Mengisi Data Pendidikan Ekstrakurikuler\
        •	Mengisi Pengalaman Organisasi\
        •	Mengisi tentang mendapatkan/mendengar informasi mengenai program penerimaan mahasiswa IT Del melalui apa?\
        •	Mengisi Jumlah minimum N untuk uang pembangunan sekali bayar\
        Mengunggah foto 3x4 untuk daring atau Menempelkan foto 3x4 untuk luring"
    },
    {
        question: "kelengkapan berkas",
        answer: "Berikut merupakan berkas yang harus dipersiapkan untuk melakukan pendaftaran SPMB IT Del:\
        1. Data yang harus dilengkapi pada formulir pendafataran baik daring maupun luring:\
        •	Memilih maksimal 3 pilihan program studi\
        •	Mengisi Data Pribadi, seperti\
        -	NIK\
        -	NISN\
        -	Nama Lengkap\
        -	Jenis Kelamin\
        -	Tempat/Tanggal Lahir\
        -	Agama\
        -	Alamat\
        -	Kode Pos\
        -	No Hp\
        -	Email\
        •	Mengisi Data Orang Tua, seperti\
        -	Nama Ayah dan Ibu kandung\
        -	Pekerjaan Ayah dan Ibu Kandung\
        -	Penghasilan Ayah dan Ibu Kandung\
        -	Alamat orang tua\
        -	Kode Pos\
        •	Mengisi Data Akademis, seperti\
        -	Sekolah\
        -	Jurusan\
        -	Jumlah Pelajaran Semester 5\
        -	Jumlah Nilai Semester 5\
        •	Mengisi Data Kemampuan Bahasa Asing\
        •	Mengisi Data Pendidikan Ekstrakurikuler\
        •	Mengisi Pengalaman Organisasi\
        •	Mengisi tentang mendapatkan/mendengar informasi mengenai program penerimaan mahasiswa IT Del melalui apa?\
        •	Mengisi Jumlah minimum N untuk uang pembangunan sekali bayar\
        Mengunggah foto 3x4 untuk daring atau Menempelkan foto 3x4 untuk luring"
    },
    {
        question: "file",
        answer: "Berikut merupakan berkas yang harus dipersiapkan untuk melakukan pendaftaran SPMB IT Del:\
        1. Data yang harus dilengkapi pada formulir pendafataran baik daring maupun luring:\
        •	Memilih maksimal 3 pilihan program studi\
        •	Mengisi Data Pribadi, seperti\
        -	NIK\
        -	NISN\
        -	Nama Lengkap\
        -	Jenis Kelamin\
        -	Tempat/Tanggal Lahir\
        -	Agama\
        -	Alamat\
        -	Kode Pos\
        -	No Hp\
        -	Email\
        •	Mengisi Data Orang Tua, seperti\
        -	Nama Ayah dan Ibu kandung\
        -	Pekerjaan Ayah dan Ibu Kandung\
        -	Penghasilan Ayah dan Ibu Kandung\
        -	Alamat orang tua\
        -	Kode Pos\
        •	Mengisi Data Akademis, seperti\
        -	Sekolah\
        -	Jurusan\
        -	Jumlah Pelajaran Semester 5\
        -	Jumlah Nilai Semester 5\
        •	Mengisi Data Kemampuan Bahasa Asing\
        •	Mengisi Data Pendidikan Ekstrakurikuler\
        •	Mengisi Pengalaman Organisasi\
        •	Mengisi tentang mendapatkan/mendengar informasi mengenai program penerimaan mahasiswa IT Del melalui apa?\
        •	Mengisi Jumlah minimum N untuk uang pembangunan sekali bayar\
        Mengunggah foto 3x4 untuk daring atau Menempelkan foto 3x4 untuk luring"
    },
    {
        question: "folder",
        answer: "Berikut merupakan berkas yang harus dipersiapkan untuk melakukan pendaftaran SPMB IT Del:\
        1. Data yang harus dilengkapi pada formulir pendafataran baik daring maupun luring:\
        •	Memilih maksimal 3 pilihan program studi\
        •	Mengisi Data Pribadi, seperti\
        -	NIK\
        -	NISN\
        -	Nama Lengkap\
        -	Jenis Kelamin\
        -	Tempat/Tanggal Lahir\
        -	Agama\
        -	Alamat\
        -	Kode Pos\
        -	No Hp\
        -	Email\
        •	Mengisi Data Orang Tua, seperti\
        -	Nama Ayah dan Ibu kandung\
        -	Pekerjaan Ayah dan Ibu Kandung\
        -	Penghasilan Ayah dan Ibu Kandung\
        -	Alamat orang tua\
        -	Kode Pos\
        •	Mengisi Data Akademis, seperti\
        -	Sekolah\
        -	Jurusan\
        -	Jumlah Pelajaran Semester 5\
        -	Jumlah Nilai Semester 5\
        •	Mengisi Data Kemampuan Bahasa Asing\
        •	Mengisi Data Pendidikan Ekstrakurikuler\
        •	Mengisi Pengalaman Organisasi\
        •	Mengisi tentang mendapatkan/mendengar informasi mengenai program penerimaan mahasiswa IT Del melalui apa?\
        •	Mengisi Jumlah minimum N untuk uang pembangunan sekali bayar\
        Mengunggah foto 3x4 untuk daring atau Menempelkan foto 3x4 untuk luring"
    },
    {
        question: "smk",
        answer: "Ya, lulusan SMK Teknik dengan jurusan tertentu bisa melakukan pendaftaran SPMB IT Del."
    },
    {
        question: "lulusan smk",
        answer: "Ya, lulusan SMK Teknik dengan jurusan tertentu bisa melakukan pendaftaran SPMB IT Del."
    },
    {
        question: "sekolah menengah kejurusan",
        answer: "Ya, lulusan SMK Teknik dengan jurusan tertentu bisa melakukan pendaftaran SPMB IT Del."
    },
    {
        question: "smk (lulusan menengah kejurusan)",
        answer: "Ya, lulusan SMK Teknik dengan jurusan tertentu bisa melakukan pendaftaran SPMB IT Del."
    },
    {
        question: "jadwal spmb",
        answer: "Jadwal pelaksanaan SPMB IT Del dapat dilihat pada website resmi https://spmb.del.ac.id/  yang terdapat pada halaman home atau dapat dilihat melalui link berikut:  https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "waktu pelaksanaan ",
        answer: "Jadwal pelaksanaan SPMB IT Del dapat dilihat pada website resmi https://spmb.del.ac.id/  yang terdapat pada halaman home atau dapat dilihat melalui link berikut:  https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "spmb",
        answer: "Jadwal pelaksanaan SPMB IT Del dapat dilihat pada website resmi https://spmb.del.ac.id/  yang terdapat pada halaman home atau dapat dilihat melalui link berikut:  https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "waktu pelaksanaan spmb",
        answer: "Jadwal pelaksanaan SPMB IT Del dapat dilihat pada website resmi https://spmb.del.ac.id/  yang terdapat pada halaman home atau dapat dilihat melalui link berikut:  https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex"
    },
    {
        question: "jadwal psikotes",
        answer: "Jadwal psikotes SPMB IT Del berbeda-beda tergantung jalur seleksi yang diikuti. Untuk lebih detailnya bisa dilihat pada website https://spmb.del.ac.id/ sdi bagian menu `INFO & PENDAFTARAN` dan pilih jalur seleksi yang kamu ikuti"
    },
    {
        question: "psikotes",
        answer: "Jadwal psikotes SPMB IT Del berbeda-beda tergantung jalur seleksi yang diikuti. Untuk lebih detailnya bisa dilihat pada website https://spmb.del.ac.id/ sdi bagian menu `INFO & PENDAFTARAN` dan pilih jalur seleksi yang kamu ikuti"
    },
    {
        question: "waktu psikotes",
        answer: "Jadwal psikotes SPMB IT Del berbeda-beda tergantung jalur seleksi yang diikuti. Untuk lebih detailnya bisa dilihat pada website https://spmb.del.ac.id/ sdi bagian menu `INFO & PENDAFTARAN` dan pilih jalur seleksi yang kamu ikuti"
    },
    {
        question: "pelaksanaan psikotes",
        answer: "Jadwal psikotes SPMB IT Del berbeda-beda tergantung jalur seleksi yang diikuti. Untuk lebih detailnya bisa dilihat pada website https://spmb.del.ac.id/ sdi bagian menu `INFO & PENDAFTARAN` dan pilih jalur seleksi yang kamu ikuti"
    },
];

// Fungsi untuk menampilkan kategori seleksi
function selectCategory(category) {
    document.getElementById('categories').style.display = 'none'; 
    document.getElementById('chat-input').style.display = 'inline-flex'; 

    var message;
    switch (category) {
        case 'Seleksi':
            message = "Anda memilih 'Seleksi'. Pilih pertanyaan di bawah ini:";
            displayMessage(message, 'admin');
            displayQuestionButtons(seleksiRules); // Panggil fungsi untuk menampilkan pertanyaan kategori Seleksi dengan aturan yang didefinisikan di seleksiRules
            break;
        case 'Pendaftaran':
            message = "Anda memilih 'Pendaftaran'. Pilih pertanyaan di bawah ini:";
            displayMessage(message, 'admin');
            displayQuestionButtons(pendaftaranRules); // Panggil fungsi untuk menampilkan pertanyaan kategori Pendaftaran dengan aturan yang didefinisikan di pendaftaranRules
            break;
        case 'Jadwal':
            message = "Anda memilih 'Jadwal'. Pilih pertanyaan di bawah ini:";
            displayMessage(message, 'admin');
            displayQuestionButtons(jadwalRules); // Panggil fungsi untuk menampilkan pertanyaan kategori Seleksi dengan aturan yang didefinisikan di seleksiRules
            break;
        case 'Biaya':
            message = "Anda memilih 'Biaya'. Pilih pertanyaan di bawah ini:";
            displayMessage(message, 'admin');
            displayQuestionButtons(biayaRules); // Panggil fungsi untuk menampilkan pertanyaan kategori Seleksi dengan aturan yang didefinisikan di seleksiRules
            break;
        case 'Beasiswa':
            message = "Anda memilih 'Beasiswa'. Pilih pertanyaan di bawah ini:";
            displayMessage(message, 'admin');
            displayQuestionButtons(beasiswaRules); // Panggil fungsi untuk menampilkan pertanyaan kategori Seleksi dengan aturan yang didefinisikan di seleksiRules
            break;
        case 'Fasilitas':
            message = "Anda memilih 'Fasilitas'. Pilih pertanyaan di bawah ini:";
            displayMessage(message, 'admin');
            displayQuestionButtons(fasilitasRules); // Panggil fungsi untuk menampilkan pertanyaan kategori Seleksi dengan aturan yang didefinisikan di seleksiRules
            break;
        // Tambahkan case untuk kategori lain jika diperlukan
        default:
            message = "Bagaimana saya bisa membantu Anda?";
            displayMessage(message, 'admin');
            break;
    }
    document.getElementById('chatbot-container').classList.add('open');
}

// Fungsi untuk menampilkan tombol pertanyaan kategori seleksi
function displayQuestionButtons(rules) {
    var questionList = document.createElement('ul');
    questionList.classList.add('question-list');

    rules.forEach(function(rule) {
        var listItem = document.createElement('li');
        listItem.textContent = rule.question;
        listItem.classList.add('question-button');
        listItem.onclick = function() {
            processUserInput(rule.question);
        };
        questionList.appendChild(listItem);
    });

    document.getElementById('chatbot-content').appendChild(questionList);
}

// Fungsi untuk mencocokkan input pengguna dengan aturan yang ada
function matchRule(input, seleksiRules, additionalRules, pendaftaranRules, jadwalRules, biayaRules, beasiswaRules, fasilitasRules) {
    input = input.toLowerCase(); // Ubah input menjadi huruf kecil untuk pencocokan yang tidak case-sensitive

    var allRules = seleksiRules.concat(additionalRules, pendaftaranRules, jadwalRules, biayaRules, beasiswaRules, fasilitasRules);

    // Periksa semua aturan
    for (var i = 0; i < allRules.length; i++) {
        var rule = allRules[i];
        var keywords = rule.question.toLowerCase().split(' ');
        var match = true;
        keywords.forEach(function(keyword) {
            if (input.indexOf(keyword) === -1) {
                match = false;
            }
        });
        if (match) {
            return rule.answer;
        }
    }

    // Jika tidak ada aturan yang cocok, kembalikan pesan default
    return "Maaf, saya tidak mengerti pertanyaan Anda.";
}

// Fungsi untuk menampilkan jawaban
function displayAnswer(answer) {
    displayMessage(answer, 'admin');
}

// Fungsi untuk memproses input pengguna
function processUserInput(input) {
    displayMessage(input, 'user'); // Menampilkan pesan pengguna di chat
    if (input.trim() !== '') { // Periksa apakah input tidak kosong
        var answer = matchRule(input, seleksiRules, additionalRules, pendaftaranRules, jadwalRules, biayaRules, beasiswaRules, fasilitasRules);
        displayAnswer(answer);
    }
}

// Fungsi untuk menampilkan pesan di chat
function displayMessage(message, sender) {
    var chatContent = document.getElementById('chatbot-content');
    var chatMessage = document.createElement('div');
    chatMessage.className = 'chat-message';
    
    var messageClass = sender === 'user' ? 'user-message' : 'admin-message'; // Determine the class based on the sender
    
    chatMessage.innerHTML = "<p><strong>" + (sender === 'user' ? 'You' : 'Admin') + ": </strong>" + message + "</p>";
    chatMessage.classList.add(messageClass); // Add the appropriate class
    chatContent.appendChild(chatMessage);
    chatContent.scrollTop = chatContent.scrollHeight;
}


// Fungsi untuk mengirim pesan
function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    processUserInput(userInput); // Memproses input pengguna
    document.getElementById('user-input').value = ''; // Mengosongkan input setelah pengguna mengirim pesan
}

// function displayMessage(message, sender) {
//     var chatContent = document.getElementById("chatbot-content");
//     var chatMessage = document.createElement("div");
//     chatMessage.className = "chat-message";

//     var messageClass = sender === "user" ? "user-message" : "admin-message";

//     if (message.split(" ").length > 20) {
//         var shortenedMessage = message.split(" ").slice(0, 20).join(" ");
//         var remainingMessage = message.split(" ").slice(20).join(" ");
//         chatMessage.innerHTML =
//             "<p class='" +
//             messageClass +
//             "'><strong>" +
//             (sender === "user" ? "You" : "Admin") +
//             ": </strong>" +
//             shortenedMessage +
//             " <a href='#' class='read-more'>Read More</a></p>";
//         chatContent.appendChild(chatMessage);
//         chatContent.scrollTop = chatContent.scrollHeight;

//         // Store the remaining part for 'Read More' functionality
//         chatMessage.dataset.remainingMessage = remainingMessage;
//     } else {
//         chatMessage.innerHTML =
//             "<p class='" +
//             messageClass +
//             "'><strong>" +
//             (sender === "user" ? "You" : "Admin") +
//             ": </strong>" +
//             message +
//             "</p>";
//         chatContent.appendChild(chatMessage);
//         chatContent.scrollTop = chatContent.scrollHeight;
//     }

//     // Add event listener for Read More
//     chatMessage.querySelectorAll(".read-more").forEach(function (link) {
//         link.addEventListener("click", function (e) {
//             e.preventDefault();
//             var parent = this.parentElement.parentElement;
//             var remainingMessage = parent.dataset.remainingMessage;
//             parent.innerHTML += " " + remainingMessage;
//             this.remove(); // Remove the 'Read More' link
//         });
//     });
// }


