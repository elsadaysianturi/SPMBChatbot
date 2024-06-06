-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 04, 2024 at 03:20 PM
-- Server version: 5.7.33
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chatbot`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama_kategori` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id`, `nama_kategori`, `created_at`, `updated_at`) VALUES
(1, 'Seleksi', '2024-06-04 03:50:09', '2024-06-04 03:50:09'),
(2, 'Pendaftaran', '2024-06-04 03:50:09', '2024-06-04 03:50:09'),
(3, 'Jadwal', '2024-06-04 03:51:24', '2024-06-04 03:51:24'),
(4, 'Biaya', '2024-06-04 03:51:24', '2024-06-04 03:51:24'),
(5, 'Beasiswa', '2024-06-04 03:51:24', '2024-06-04 03:51:24'),
(6, 'Fasilitas', '2024-06-04 03:51:24', '2024-06-04 03:51:24'),
(7, 'Program Studi', '2024-06-04 03:51:24', '2024-06-04 03:51:24'),
(8, 'Kontak', '2024-06-04 03:51:24', '2024-06-04 03:51:24'),
(9, 'Lainnya', '2024-06-04 03:53:31', '2024-06-04 03:53:31');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(11, '2014_10_12_000000_create_users_table', 1),
(12, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(13, '2019_08_19_000000_create_failed_jobs_table', 1),
(14, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(15, '2024_06_01_191941_add_timestamps_to_kategori_table', 1),
(16, '2024_06_04_030638_create_program_studi_table', 2),
(17, '2024_06_04_030700_create_pertanyaanjawaban_programstudi_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pertanyaanjawaban_programstudi`
--

CREATE TABLE `pertanyaanjawaban_programstudi` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `programstudi_id` bigint(20) UNSIGNED NOT NULL,
  `pertanyaan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jawaban` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pertanyaanjawaban_programstudi`
--

INSERT INTO `pertanyaanjawaban_programstudi` (`id`, `programstudi_id`, `pertanyaan`, `jawaban`, `created_at`, `updated_at`) VALUES
(1, 1, 'Penjelasan tentang program studi Informatika IT Del?', 'Informatika merupakan salah satu core technology dalam sistem teknologi yang dikenal sebagai Teknologi Informasi dan Komunikasi (Information and Communication Technology), karena melalui pemfungsian Informatika-lah diperoleh produk-produk perangkat lunak (software products) yang memungkinkan terwujudnya sifat intelligent dari Teknologi Informasi dan Komunikasi. Teknologi Informasi dan Komunikasi merupakan strategic enabling technology dalam menopang upaya pencerdasan kehidupan bangsa, dalam aktivitas berbisnis, berindustri, berorganisasi, berfungsinya pemerintahan, pertahanan Negara, dan dalam memfasilitasi kemudahan-kemudahan masyarakat luas dalam tata kehidupan sehari-harinya.\r\n\r\nProgram Studi S1 Informatika (PSIF) di Institut Teknologi Del (IT Del) memiliki cakupan bidang ilmu (body of knowledge) meliputi area ilmu komputer (Computer Science), rekayasa perangkat lunak (Software Engineering), keamanan siber (Cybersecurity), dan ilmu data (Data Science). Lulusan dari PSIF dipersiapkan untuk dapat memiliki kemampuan analisis persoalan yang terkait bidang computer science dan pengembangan perangkat lunak mulai dari yang sederhana yang sampai yang kompleks ataupun berskala besar. Selain itu, lulusan PSIF juga dipersiapkan memiliki kemampuan untuk merancang dan mengimplementasikan keamanan yang diperlukan pada suatu perangkat lunak. Dan, terakhir, seorang lulusan PSSTI diproyeksikan untuk memiliki kemampuan mengembangkan perangkat lunak yang pintar menggunakan sejumlah teknik kecerdasan buatan dan secara khusus memiliki kemampuan untuk menjadi artificial intelligence engineer.\r\n', '2024-06-04 04:29:16', '2024-06-04 04:29:16'),
(2, 1, 'Apa saja mata kuliah yang dipelajari di program studi Informatika IT Del?', 'Mata kuliah yang dipelajari program studi Informatika di Institut Teknologi Del dapat diakses melalui link berikut: https://www.del.ac.id/?page_id=10517', '2024-06-04 04:29:16', '2024-06-04 04:29:16'),
(3, 1, 'Bagaimana struktur kurikulum program studi Informatika IT Del?', 'Struktur kurikulum program studi Informatika di Institut Teknologi Del dapat diakses melalui link website berikut https://www.del.ac.id/?page_id=10517', '2024-06-04 04:30:32', '2024-06-04 04:30:32'),
(4, 1, 'Bagaimana prospek kerja lulusan program studi Informatika IT Del?', 'Terdapat 10 profil lulusan program studi Informatika yang dapat dikelompokkan ke dalam tiga kelompok. \r\n1. Kelompok pertama adalah Software Engineer mencakup profil lulusan: Mobile Application Developer, Web Developer (front-end, back-end, service), Full-Stack Developer, User Interface Designer, User Experience Designer, Software Analyst, Database Engineer, Software Quality Assurance dan Software Tester. \r\n2. Kelompok kedua adalah Cybersecurity Practitioner \r\n3. Kelompok ketiga adalah AI (Artificial Intelligent) Engineer.', '2024-06-04 04:30:32', '2024-06-04 04:30:32'),
(5, 2, 'Penjelasan tentang program studi Sistem Informasi IT Del?', 'Jurusan Sistem Informasi Institut Teknologi Del mulai melakukan penerimaan mahasiswa baru pada T.A 2014/2015. Jumlah mahasiswa yang diterima pada Tahun Ajaran tersebut adalah 56 mahasiswa. Dengan dukungan dosen yang ahli dalam sistem informasi, program studi ini dirancang untuk memenuhi kebutuhan terhadap tenaga-tenaga muda yang terampil dan profesional, terutama terkait dengan pengembangan, pemanfaatan, dan pengelolaan Sistem Informasi/Teknologi Informasi dalam suatu organisasi. Kurikulum Program Studi Sistem Informasi IT Del mengacu kepada beberapa kurikulum Sarjana Sistem Informasi di Indonesia maupun Internasional, seperti: Program Studi Sarjana Teknologi dan Sistem Informasi ITB, Program Studi Sarjana Sistem Informasi Universitas Indonesia serta mengacu kepada kurikulum ACM (Association for Computing Machinary) for Information System.', '2024-06-04 04:32:11', '2024-06-04 04:32:11'),
(6, 2, 'Apa saja mata kuliah yang dipelajari di program studi Sistem Informasi IT Del?', 'Mata kuliah yang dipelajari program studi Sistem Informasi di Institut Teknologi Del dapat diakses melalui link berikut: http://s1is.del.ac.id/?page_id=28 \r\n\r\n', '2024-06-04 04:32:11', '2024-06-04 04:32:11'),
(7, 2, 'Bagaimana struktur kurikulum program studi Sistem Informasi IT Del?', 'Struktur kurikulum program studi Sistem Informasi di Institut Teknologi Del dapat diakses melalui link website berikut: http://s1is.del.ac.id/?page_id=28 ', '2024-06-04 04:32:11', '2024-06-04 04:32:11'),
(8, 2, 'Bagaimana prospek kerja lulusan program studi Sistem Informasi IT Del?', 'Prospek kerja lulusan program studi Sistem Informasi di Institut Teknologi Del antara lain:\r\n1. Business Intelligence Solution\r\n2. Business/Systems Analyst\r\n3. Information System Development Project Manager\r\n4. Database Administrator\r\n5. System Design\r\n6. IT Manager\r\n7. Programmer/Software Engineer\r\n8. IT Auditor\r\n9. Konsultan IT/IS\r\n10. Web Developer/Web Designer\r\n11. Wirausaha di bidang IT\r\n12. Pengajar dan Peneliti', '2024-06-04 04:32:11', '2024-06-04 04:32:11'),
(9, 3, 'Penjelasan tentang program studi Teknik Elektro IT Del?', 'Program Studi Teknik Elektro berupaya untuk meningkatkan layanan yang baik kepada mahasiswa serta mampu menjawab keperluan industri melalui lulusan tenaga terdidik dan juga terampil di bidangnya. PSTE berdasarkan analisis SWOT dan diskusi dengan berbagai stakeholder menetapkan visi, misi, tujuan dan sasaran yang akan dilakukan dalam pelaksanaan kurikulum 2019. Visi, misi, tujuan, dan sasaran ini juga dirumuskan sejalan dengan visi, misi, tujuan, dan sasaran Fakultas Informatika dan Teknik Elektro.', '2024-06-04 07:35:06', '2024-06-04 07:35:06'),
(10, 3, 'Apa saja mata kuliah yang dipelajari di program studi Teknik Elektro IT Del?', 'Mata kuliah yang dipelajari program studi Teknik Elektro di Institut Teknologi Del dapat diakses melalui link berikut: http://s1is.del.ac.id/?page_id=28 \r\n\r\n', '2024-06-04 07:35:06', '2024-06-04 07:35:06'),
(11, 3, 'Bagaimana struktur kurikulum program studi Teknik Elektro IT Del?', 'Struktur kurikulum program studi Teknik Elektro di Institut Teknologi Del dapat diakses melalui link website berikut: http://s1is.del.ac.id/?page_id=28 \r\n\r\n', '2024-06-04 07:36:14', '2024-06-04 07:36:14'),
(12, 3, 'Bagaimana prospek kerja lulusan program studi Teknik Elektro IT Del?', 'Prospek kerja lulusan program studi Teknik Elektro di Institut Teknologi Del adalah sebagai berikut:\r\n1. Tenaga Profesional Teknik Kendali dan Instrumentasi\r\n2. Tenaga Profesional Sistem Jaringan dan Komunikasi Nirkabel\r\n3. Asisten Peneliti bidang Teknik Elektro\r\n4. Wirausaha mandiri Teknik Elektro\r\n5. Akademisi', '2024-06-04 07:36:14', '2024-06-04 07:36:14'),
(13, 4, 'Penjelasan tentang program studi Teknologi Rekayasa Perangkat Lunak (TRPL) IT Del?', 'Sarjana Terapan (Diploma 4) Teknologi Rekayasa Perangkat Lunak (Sarjana Terapan TRPL) merupakan program studi pada pendidikan vokasi. Diploma 4 (D4) adalah nama lain dari Sarjana Terapan. Program studi Sarjana Terapan TRPL berdiri pada tahun 2012 sesuai dengan SK Menteri Pendidikan dan Kebudayaan Republik Indonesia No. 238/E/O/2012 pada tanggal 6 Juli 2012 dengan nama Sarjana Terapan (DIV) Teknik Informatika. Perubahan nama dari program studi DIV Teknik Informatika menjadi DIV Teknologi Rekayasa Perangkat Lunak adalah mengikuti nomenklatur Program Studi sesuai Keputusan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 57/M/KPT/2019.\r\n	Sarjana Terapan merupakan jenjang pendidikan diploma yang setara dengan jenjang sarjana. Sarjana terapan adalah pendidikan vokasi sedangkan sarjana (S1) adalah pendidikan akademik. Bobot keilmuan D4 sama dengan S1 sehingga disebut setara. Perbedaan keduanya adalah pada komposisi mata kuliah.\r\n	Kuliah di jenjang D4 mengedepankan kemampuan praktik yang dibutuhkan di dunia kerja, sekaligus pengetahuan ilmu yang lebih lengkap dibanding jenjang diploma dibawah D4. Mata kuliah D4 mengutamakan 60% praktik dan 40% teori, berbeda dengan S1 bertitik berat pada teori dibandingkan praktik. Jika lebih senang terjun ke lapangan untuk memecahkan masalah, jenjang D4 menjadi pilihan yang sangat tepat.\r\n	Karena bobot perkuliahan yang sama dengan S1, maka mahasiswa jenjang D4 bisa langsung melanjutkan studi ke jenjang S2. Bobot perkuliahan D4 dan S1 adalah minimum 144 SKS. Jadi, lulusan D4 tidak perlu melanjutkan pendidikan ekstensi terlebih dahulu. D4 (Sarjana Terapan) dan S1 (Sarjana) memiliki peluang kerja yang sama dengan keunggulan masing-masing. Bahkan untuk seleksi CPNS dan pegawai BUMN juga sudah menerima mahasiswa lulusan D4. Program D4 bersinergi erat dengan industri, maka kurikulum pendidikannya dirancang bersama industri, sehingga lulusan D4 menjadi ahli yang siap terjun dan bekerja di industri.\r\nProgram studi Sarjana Terapan TRPL sudah terakreditasi “B” sesuai dengan Surat Keputusan yang dikeluarkan oleh Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) dengan Nomor 3513/SK/BAN-PT/Akred/ST/IX/2019.\r\n', '2024-06-04 07:39:02', '2024-06-04 07:39:02'),
(14, 4, 'Apa saja mata kuliah yang dipelajari di program studi Teknologi Rekayasa Perangkat Lunak (TRPL) IT Del?', 'Mata kuliah yang dipelajari program studi Teknologi Rekayasa Perangkat Lunak di Institut Teknologi Del dapat diakses melalui link website berikut https://www.del.ac.id/?page_id=2464', '2024-06-04 07:39:02', '2024-06-04 07:39:02'),
(15, 4, 'Bagaimana struktur kurikulum program studi Teknologi Rekayasa Perangkat Lunak (TRPL) IT Del?', 'Struktur kurikulum program studi Teknologi Rekayasa Perangkat Lunak di Institut Teknologi Del dapat diakses melalui link website berikut https://www.del.ac.id/?page_id=2464 \r\n\r\n', '2024-06-04 07:40:07', '2024-06-04 07:40:07'),
(16, 4, 'Bagaimana prospek kerja lulusan program studi Teknologi Rekayasa Perangkat Lunak (TRPL) IT Del?', 'Prospek kerja lulusan program studi Teknologi Rekayasa Perangkat Lunak di Institut Teknologi Del antara lain:\r\n1. Software Developer\r\n2. Software Quality Assurance\r\n3. IT Researcher\r\n4. IT preneur', '2024-06-04 07:40:07', '2024-06-04 07:40:07'),
(17, 5, 'Penjelasan tentang program studi Teknologi Informasi IT Del?', 'Program Studi Teknologi Informasi Diploma Tiga adalah salah satu dari 3 (tiga) program studi yang dikelola oleh Institut Teknologi Del (IT Del) yang berdiri pada tahun 2001 sesuai SK No. 222/D/O/2001 tertanggal 28 September 2001 dengan nama Program Studi Teknologi Informasi. \r\nProgram Studi Teknologi Informasi Diploma Tiga mempunyai sasaran untuk menyelenggarakan proses pembelajaran yang dapat menumbuhkan-kembangkan daya nalar, daya cipta, daya kreasi dan keterampilan yang tinggi, yang dapat dikomunikasikan dan diaplikasikan pada bidang kehidupan. Program Studi Teknologi Informasi Diploma Tiga membekali mahasiswa dengan keterampilan dan pengetahuan pada subject core di bidang Teknik Informasi seperti Software Engineering, Object-Oriented Analysis and Design, Software Testing, Manajemen Proyek dan pembangunan perangkat lunak, dan bahasa pemograman Java serta meningkatkan keterampilan dan keahlian mahasiswa di dalam penggunaan teknologi dan aplikasi yang relevan dan berguna dalam penerapan Teknik Informatika di dunia kerja.\r\n', '2024-06-04 07:41:44', '2024-06-04 07:41:44'),
(18, 5, 'Apa saja mata kuliah yang dipelajari di program studi Teknologi Informasi IT Del?', 'Mata kuliah yang dipelajari program studi Teknologi Informasi di Institut Teknologi Del dapat diakses melalui link website berikut:  https://www.del.ac.id/?page_id=10506 ', '2024-06-04 07:41:44', '2024-06-04 07:41:44'),
(19, 5, 'Bagaimana struktur kurikulum program studi Teknologi Informasi IT Del?', 'Struktur kurikulum program studi Teknologi Informasi di Institut Teknologi Del dapat diakses melalui link website berikut: https://www.del.ac.id/?page_id=10506 \r\n\r\n', '2024-06-04 07:43:03', '2024-06-04 07:43:03'),
(20, 5, 'Bagaimana prospek kerja lulusan program studi Teknologi Informasi IT Del?', 'Prospek kerja lulusan program studi Teknologi Informasi di Institut Teknologi Del antara lain:\r\n1. Programmer (Web programmer, Mobile Programmer, Desktop programmer, Database programmer, System programmer)\r\n2. Pengelola Data (Database Administrator, Data Analyst, Data Architect, Data Entry Supervisor)\r\n3. Software Quality Assurance (Software Qualitry Assurance Tester, Data Security Administrator, Information Security Administrator, Safety dan Security Program Supervisor, Information Security Supervisor, IT Security Management Supervisor)', '2024-06-04 07:43:03', '2024-06-04 07:43:03'),
(21, 6, 'Penjelasan tentang program studi Teknologi Komputer IT Del?', 'Program Studi Teknik Komputer adalah salah satu program studi yang diselenggarakan Institut Teknologi Del yang terletak di daerah pedesaan Tobasa, yang membuka peluang bagi siswa berprestasi untuk mengenyam pendidikan dengan mutu yang tidak kalah dengan pendidikan bermutu bagus yang diselenggarakan di kota besar.\r\nKompetensi lulusan yang diharapkan adalah Ahli Madya Teknik Komputer yang mampu kerja dalam standar pekerjaan di sektor industri teknologi informatika dengan kualifikasi:\r\n1. Memiliki kemampuan dan keahlian untuk merancang, membangun dan memelihara Jaringan Komputer dengan mengikuti fase pembangunan jaringan komputer yang benar melalui penerapan metodologi pembangunan sistem dan tools pendukung serta memiliki keinginan untuk selalu mengembangkan diri dengan meningkatkan keterampilan dan pengetahuan di bidang Jaringan Komputer.\r\n2. Memiliki inisiatif serta kreativitas dalam mengkaji ataupun menyelesaikan setiap kasus serta mengemasnya menjadi informasi yang komunikatif.\r\nMemiliki etika dan etos kerja tim serta kewirausahaan sesuai tuntutan serta kebutuhan potensial pasar global.', '2024-06-04 07:44:47', '2024-06-04 07:44:47'),
(22, 6, 'Apa saja mata kuliah yang dipelajari di program studi Teknologi Komputer IT Del?', 'Mata kuliah yang dipelajari program studi Teknologi Komputer di Institut Teknologi Del dapat diakses melalui link website berikut https://www.del.ac.id/?page_id=862', '2024-06-04 07:44:47', '2024-06-04 07:44:47'),
(23, 6, 'Bagaimana struktur kurikulum program studi Teknologi Komputer IT Del?', 'Struktur kurikulum program studi Teknologi Komputer di Institut Teknologi Del dapat diakses melalui link website berikut https://www.del.ac.id/?page_id=862', '2024-06-04 07:45:49', '2024-06-04 07:45:49'),
(24, 6, 'Bagaimana prospek kerja lulusan program studi Teknologi Komputer IT Del?', 'Prospek kerja lulusan program studi Teknologi Komputer di Institut Teknologi Del antara lain:\r\n1. Pengelola Sistem Komputer (Network administrator, Network Security Administrator, IoT Engineer)\r\n2. Tenaga Profesional Jaringan Komputer (Network Administrator, Network Security Administrator)\r\n3. Computer Technical Support Specialist (Personal Computer Specialist, Technical Support/Help Desk)\r\n4. Pengelola Sistem Komputasi Awan (Cloud Service Administrator/Infrastructure, Data Center Facility Administrator)', '2024-06-04 07:45:49', '2024-06-04 07:45:49'),
(25, 7, 'Penjelasan tentang program studi Teknik Bioproses IT Del?', 'TARGET LULUSAN:\r\n• Memiliki kompetensi mampu merancang, menganalisis, mengoperasikan, mengendalikan proses-proses di industry, dan mengevaluasi profitabilitas pendirian sistem produksi, khususnya industri yang menerapkan bioproses.\r\n• Mampu menerapkan pengetahuannya di bidang-bidang lain yang penanganannya betumpu pada bioproses seperti: masalah limbah dan polusi lingkungan, operasi-operasi pendukung di bidang kedokteran, maupun sebagai tenaga peneliti.\r\nMampu berkomunikasi yang efektif.', '2024-06-04 07:50:30', '2024-06-04 07:50:30'),
(26, 7, 'Apa saja mata kuliah yang dipelajari di program studi Teknik Bioproses IT Del?', 'Mata kuliah yang dipelajari program studi Teknik Bioproses di Institut Teknologi Del dapat diakses melalui link website berikut:  http://s1be.del.ac.id/?page_id=35 ', '2024-06-04 07:50:30', '2024-06-04 07:50:30'),
(27, 7, 'Bagaimana struktur kurikulum program studi Teknik Bioproses IT Del?', 'Struktur kurikulum program studi Teknik Bioproses di Institut Teknologi Del dapat diakses melalui link website berikut: http://s1be.del.ac.id/?page_id=35 ', '2024-06-04 07:52:20', '2024-06-04 07:52:20'),
(28, 7, 'Bagaimana prospek kerja lulusan program studi Teknik Bioproses IT Del?', 'Prospek kerja lulusan program studi Teknik Bioproses di Institut Teknologi Del antara lain:\r\n1. Perekayasa Proses/ Process Engineer\r\nPerekayasa proses yang bertanggungjawab dalam mengembangkan (memodifikasi, mengintegrasi, dan mengoptimasi) proses-proses yang sudah ada, maupun dalam perekayasaan proses baru yang lebih inovatif, ekonomis, aman, dan ramah lingkungan.\r\n2. Peneliti Muda\r\nPeneliti muda dalam penelitian dasar maupun terapan di bidang bioproses, kimia, teknologi proses, dan teknologi produk.\r\n3. Health and Safety Engineer (HSE)\r\nPerekayasa yang berperan dan bertanggungjawab terhadap pelaksanaan kesehatan dan keselamatan kerja di lingkungan industri.\r\n4. Production Planning & Inventory Control (PPIC) officer.\r\n5. Perekayasa yang berperan dalam merencanakan dan mengendalikan rangkaian proses produksi, serta mengendalikan jumlah inventori agar sesuai dengan kebutuhan.', '2024-06-04 07:52:20', '2024-06-04 07:52:20'),
(29, 8, 'Penjelasan tentang program studi Manajemen Rekayasa IT Del?', 'Manajemen Rekayasa (Engineering Management) adalah penggabungan dari keilmuan teknik/rekayasa (engineering) dengan ilmu manajemen yang diaplikasikan untuk menyelesaikan persoalan-persoalan dalam suatu sistem kompleks.  Aspek keilmuan teknik (engineering) dari Manajemen Rekayasa terlihat melalui penerapan matematika dan ilmu pengetahuan alam yang diperoleh melalui pembelajaran, pengalaman, dan praktek empiris untuk menemukan cara-cara yang optimal dalam memanfaatkan material dan sumber daya lain dalam mengembangkan teknologi. Aspek keilmuan manajemen dari Manajemen Rekayasa muncul dalam penerapan ilmu-ilmu pendukung keputusan yang dapat diaplikasikan dalam aktivitas-aktivitas pengembangan organisasi dalam mencapai tujuannya, yang diperoleh melalui pembelajaran dan praktek empiris dalam ilmu perilaku organisasi, analisa finansial, manajemen sumber daya manusia, dan analisa keputusan.\r\nSalah satu penerapan dari Manajemen Rekayasa dalam sistem kompleks adalah dalam sistem industri. Dalam sistem ini kita mengenal industri hulu sampai hilir. Di bagian hulu terdapat industri yang kerjanya meliputi proses inivasi, inisiasi, dan perancangan. Di tengah ada proses operasional di mana ide-ide perancangan tadi diimplementasikan dan dioptimisasi, seperti aktivitas produksi, perawatan, logistik, dll. Di hilir ada aktivitas dimana produk tersebut diluncurkan, dipasarkan, dan dikonsumsi oleh masyarakat.  Pada prinsipnya tubuh pengetahuan Manajemen Rekayasa dapat diarahkan untuk menyelesaikan persoalan-persoalan mulai dari perancangan, instalasi, operasi, hingga pengembangan suatu sistem industri.', '2024-06-04 07:54:50', '2024-06-04 07:54:50'),
(30, 8, 'Apa saja mata kuliah yang dipelajari di program studi Manajemen Rekayasa IT Del?', 'Mata kuliah yang dipelajari program studi Manajemen Rekayasa di Institut Teknologi Del dapat diakses melalui link website berikut:  https://www.del.ac.id/?page_id=10495', '2024-06-04 07:54:50', '2024-06-04 07:54:50'),
(31, 8, 'Bagaimana struktur kurikulum program studi Manajemen Rekayasa IT Del?', 'Struktur kurikulum program studi Manajemen Rekayasa di Institut Teknologi Del dapat diakses melalui link website berikut: https://www.del.ac.id/?page_id=10495 ', '2024-06-04 07:56:14', '2024-06-04 07:56:14'),
(32, 8, 'Bagaimana prospek kerja lulusan program studi Manajemen Rekayasa IT Del?', 'Prospek kerja lulusan program studi Manajemen Rekayasa di Institut Teknologi Del antara lain:\r\n1. Business Development Engineer (Business Analyst, Business Developer, R&D Engineer)\r\n2. Supply Chain Engineer (Procurement Engineer, Logistics Engineer, Warehouse Supervisor, Inventory Controller)\r\n3. Project Supervisor (Project Coordinator, Program Coordinator, Project Controller)\r\n4. Market Engineer (Market Researcher, Sales Engineer, R&D Engineer, Client’s Engineer)\r\n5. Technical Function Engineer (Production Engineer, QA/QC Engineer, PPC Engineer)', '2024-06-04 07:56:14', '2024-06-04 07:56:14'),
(33, 9, 'Penjelasan tentang program studi Teknik Metalurgi IT Del?', 'Teknik Metalurgi merupakan seseorang ahli yang dapat dipercaya yang mampu mengolah mineral dan batubara, mengekstraksi logam dari bijih, memurnikan dan menyiapkan logam untuk dapat digunakan melalui pemaduan, pembentukan logam dan perlakuan panas, mengontrol degradasi logam dan mendaur ulang logam melalui proses yang efektif, efisien, berkelanjutan, dan ramah lingkungan. ', '2024-06-04 07:57:34', '2024-06-04 07:57:34'),
(34, 9, 'Apa saja mata kuliah yang dipelajari di program studi Teknik Metalurgi IT Del?', 'Belum ada informasi mata kuliah yang berkaitan dengan program studi Teknik Metalurgi', '2024-06-04 07:57:34', '2024-06-04 07:57:34'),
(35, 9, 'Bagaimana struktur kurikulum program studi Teknik Metalurgi IT Del?', 'Belum ada informasi kurikulum yang berkaitan dengan program studi Teknik Metalurgi ', '2024-06-04 07:58:35', '2024-06-04 07:58:35'),
(36, 9, 'Bagaimana prospek kerja lulusan program studi Teknik Metalurgi IT Del?', 'Belum ada informasi prospek kerja yang berkaitan dengan program studi Teknik Metalurgi\r\n\r\n', '2024-06-04 07:58:35', '2024-06-04 07:58:35');

-- --------------------------------------------------------

--
-- Table structure for table `pertanyaan_jawaban`
--

CREATE TABLE `pertanyaan_jawaban` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kategori_id` bigint(20) UNSIGNED NOT NULL,
  `pertanyaan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jawaban` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pertanyaan_jawaban`
--

INSERT INTO `pertanyaan_jawaban` (`id`, `kategori_id`, `pertanyaan`, `jawaban`, `created_at`, `updated_at`) VALUES
(1, 1, 'Jalur seleksi apa saja yang tersedia di Institut Teknologi Del?', 'Jalur seleksi yang disediakan oleh SPMB IT Del adalah sebanyak 6 jalur yaitu sebagai berikut: \r\n1. PMDK (Penelusuran Minat Bakat dan Kemampuan) \r\n2. USM 1 (Ujian Saring Masuk) \r\n3. USM 2 (Ujian Saring Masuk) \r\n4. USM 3 (Ujian Saring Masuk) \r\n5. UTBK (Ujian Tulis Berbasis Komputer/Sertifikat UTBK) \r\n6. JPS (Jalur Prestasi Siswa) \r\nUntuk detail jadwal masing-masing jalur dapat dilihat melalui link berikut: \r\nhttps://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex ', '2024-06-04 03:58:47', '2024-06-04 03:58:47'),
(2, 1, 'Persyaratan apa saja yang harus dipenuhi untuk mengikuti jalur seleksi SPMB IT Del?', 'Berikut merupakan persyaratan yang harus dipenuhi oleh calon pendaftar SPMB IT Del. Terdapat dua persyaratan yaitu persyaratan umum dan persyaratan khusus program studi:\r\na) Persyaratan umum\r\n1. Memiliki minat yang tinggi untuk melanjutkan studi di IT Del dan akan mendaftarkan diri sebagai mahasiswa IT Del apabila dinyatakan lulus seleksi untuk program USM;\r\n2. Siswa berasal dari jurusan yang tidak termasuk dalam kelompok Ilmu Sosial, Budaya atau Bahasa;\r\n3. Lulusan SMA atau SMK Teknik pada semua jurusan dengan tahun ijazah 2021, 2022, 2023;\r\n4. Usia maksimum 21 tahun per 31 Agustus 2024;\r\n5. Mengikuti tes akademik daring berupa Matematika, Bahasa Inggris, dan Tes Potensi Akademik;\r\n6. Dapat memilih maksimal 3 pilihan program studi, dari 9 program studi yang ada di IT Del yakni:\r\n• Fakultas Vokasi [FV], Program Studi:\r\n1. Teknologi Informasi (D3)\r\n2. Teknologi Komputer (D3)\r\n3. Teknologi Rekayasa Perangkat Lunak (D4)\r\n• Fakultas Informatika & Teknik Elektro [FITE], Program Studi:\r\n1. Informatika (S1)\r\n2. Teknik Elektro (S1)\r\n3. Sistem Informasi (S1)\r\n• Fakultas Teknologi Industri [FTI], Program Studi:\r\n1. Manajemen Rekayasa (S1)\r\n2. Teknik Metalurgi (S1)\r\n• Fakultas Bioteknologi [FB], Program Studi:\r\n1. Teknik Bioproses (S1)\r\nb) Persyaratan khusus program studi\r\na) Program Studi S1 Teknik Elektro: \r\n• *Tidak Buta Warna, dibuktikan dengan melampirkan Surat Keterangan Tidak Buta Warna dari Dokter Spesialis Mata \r\n• SMA jurusan IPA/MIA atau SMK Teknik (Elektro, Elektronika, Listrik)\r\nb) Program Studi S1 Teknik Bioproses: \r\n• *Tidak Buta Warna, dibuktikan dengan melampirkan Surat Keterangan Tidak Buta Warna dari Dokter Spesialis Mata \r\n• SMA jurusan IPA/MIA.\r\nc) Program Studi Manajemen Rekayasa: \r\n• Mata \r\n• SMA jurusan IPA/MIA.\r\nd) Program Studi S1 Informatika, S1 Sistem Informasi, D4 Teknologi Rekayasa Perangkat Lunak, D3 Teknologi Informasi dan D3 Teknologi Komputer: \r\n• SMA jurusan IPA/MIA atau SMK Teknik (Informatika, Komputer).\r\nKet *: disampaikan pada saat daftar ulang daring', '2024-06-04 03:58:47', '2024-06-04 03:58:47'),
(3, 1, 'Bagaimana cara melihat hasil seleksi dan kapan pengumuman hasil seleksi SPMB IT Del?', 'Hasil Seleksi SPMB dapat di lihat pada website resmi https://spmb.del.ac.id/ yang terdapat pada halaman home bagian pengumuman atau dapat dilihat pada link berikut: http://spmb.del.ac.id/index.php?r=pmb-pengumuman%2Findex ', '2024-06-04 03:58:47', '2024-06-04 03:58:47'),
(4, 2, 'Bagaimana proses pendaftaran mahasiswa baru di Institut Teknologi Del?', 'Berikut merupakan panduan pendaftaran Seleksi Penerimaan Mahasiswa Baru (SPMB) IT Del.\r\nPendaftaran dapat dilakukan dengan dua cara yaitu daring dan luring. \r\na) Luring\r\n1. Pendaftaran setiap Kamis-Jumat Pukul 13.00-17.00 WIB. \r\n2. Mengisi formulir pendaftaran \r\n3. Membawa foto 3X4 2 lembar.\r\nb) Daring\r\nBuka website https://spmb.del.ac.id/ \r\n1. Melakukan registrasi dan aktivasi akun di Email\r\n2. Login dengan akun yang telah didaftarkan\r\n3. Pilih 3 program studi yang diminati \r\n4. Mengisi data diri\r\n• Data jumlah Mata Pelajaran Semester V\r\n• Data Total Nilai Rapor\r\n• Foto 3X4 [size max 1 MB]\r\n5. Menentukan besaran uang pembangunan\r\n6. Verifikasi data oleh panitia SPMB IT Del\r\nMendapatkan notifikasi bahwa anda telah terdaftar', '2024-06-04 04:03:23', '2024-06-04 04:03:23'),
(5, 2, 'Apakah bisa untuk pindah jurusan saat pendaftaran ulang dilakukan?', 'Maaf untuk pertanyaan yang kamu ajukan tidak bisa dijawab oleh chatbot ini. Untuk pertanyaan lebih lanjut bisa ditanyakan melakukan kontak panitia SPMB yang dapat dilihat pada link berikut: \r\nspmb.del.ac.id/index.php?r=site%2Fkontak\r\n\r\n', '2024-06-04 04:03:23', '2024-06-04 04:03:23'),
(6, 2, 'Apa aja berkas yang harus dipersiapkan untuk melakukan pendaftaran ke IT Del?', 'Berikut merupakan berkas yang harus dipersiapkan untuk melakukan pendaftaran SPMB IT Del:\r\n1. Data yang harus dilengkapi pada formulir pendafataran baik daring maupun luring:\r\n• Memilih maksimal 3 pilihan program studi\r\n• Mengisi Data Pribadi, seperti\r\n- NIK\r\n- NISN\r\n- Nama Lengkap\r\n- Jenis Kelamin\r\n- Tempat/Tanggal Lahir\r\n- Agama\r\n- Alamat\r\n- Kode Pos\r\n- No Hp\r\n- Email\r\n• Mengisi Data Orang Tua, seperti\r\n- Nama Ayah dan Ibu kandung\r\n- Pekerjaan Ayah dan Ibu Kandung\r\n- Penghasilan Ayah dan Ibu Kandung\r\n- Alamat orang tua\r\n- Kode Pos\r\n• Mengisi Data Akademis, seperti\r\n- Sekolah\r\n- Jurusan\r\n- Jumlah Pelajaran Semester 5\r\n- Jumlah Nilai Semester 5\r\n• Mengisi Data Kemampuan Bahasa Asing\r\n• Mengisi Data Pendidikan Ekstrakurikuler\r\n• Mengisi Pengalaman Organisasi\r\n• Mengisi tentang mendapatkan/mendengar informasi mengenai program penerimaan mahasiswa IT Del melalui apa?\r\n• Mengisi Jumlah minimum N untuk uang pembangunan sekali bayar\r\nMengunggah foto 3x4 untuk daring atau Menempelkan foto 3x4 untuk luring', '2024-06-04 04:03:23', '2024-06-04 04:03:23'),
(7, 2, 'Apakah lulusan SMK bisa melakukan pendaftaran ke IT Del?', 'Ya, lulusan SMK Teknik dengan jurusan tertentu bisa melakukan pendaftaran SPMB IT Del.', '2024-06-04 04:03:23', '2024-06-04 04:03:23'),
(8, 2, 'Kapan pendaftaran ulang SPMB IT Del dilaksanakan?', 'Pendaftaran ulang SPMB IT Del berbeda-beda tergantung jalur seleksi yang diikuti. Untuk lebih detailnya bisa dilihat pada website https://spmb.del.ac.id/ sdi bagian menu `INFO & PENDAFTARAN` dan pilih jalur seleksi yang kamu ikuti.', '2024-06-04 04:03:23', '2024-06-04 04:03:23'),
(9, 3, 'Kapan jadwal SPMB Institut Teknologi Del dilaksanakan?', 'Jadwal pelaksanaan SPMB IT Del dapat dilihat pada website resmi https://spmb.del.ac.id/  yang terdapat pada halaman home atau dapat dilihat melalui link berikut:  https://spmb.del.ac.id/index.php?r=pmb-pendaftaran%2Findex', '2024-06-04 04:07:50', '2024-06-04 04:07:50'),
(10, 3, 'Kapan jadwal psikotes dilaksanakan?', 'Jadwal psikotes SPMB IT Del berbeda-beda tergantung jalur seleksi yang diikuti. Untuk lebih detailnya bisa dilihat pada website https://spmb.del.ac.id/ sdi bagian menu `INFO & PENDAFTARAN` dan pilih jalur seleksi yang kamu ikuti.', '2024-06-04 04:07:50', '2024-06-04 04:07:50'),
(11, 4, 'Berapa biaya pendaftaran SPMB IT Del?', 'Berikut merupakan biaya pendaftaran tiap jalur seleksi SPMB IT Del.\r\n1. PMDK = Rp. 0\r\n2. USM 1 = Rp.0\r\n3. USM 2 = Rp.0\r\n4. USM 3 = Rp. 150,000\r\n5. UTBK = Rp. 150,000\r\nJPS = Rp. 100,000\r\n', '2024-06-04 04:09:16', '2024-06-04 04:09:16'),
(12, 4, 'Bagaimana cara membayar biaya pendaftaran SPMB IT Del?', 'Pembayaran biaya pendaftaran SPMB dapat dilakukan baik secara manual maupun online Jika melalui online, pihak pantia SPMB IT Del akan memberikan Nomor Virtual Account (VA) untuk melakukan pembayaran ke nomor yang diberikan.', '2024-06-04 04:09:16', '2024-06-04 04:09:16'),
(13, 4, 'Berapa biaya kuliah di Institut Teknologi Del?', 'Untuk rincian biaya yang diperlukan dapat dilihat melalui link berikut: http://spmb.del.ac.id/files/Biaya_Pendidikan_Final.pdf', '2024-06-04 04:09:16', '2024-06-04 04:09:16'),
(14, 4, 'Dalam pembayaran biaya pembangunan apakah harus dibayar langsung secara lunas atau bisa dicicil?', 'Maaf untuk pertanyaan yang kamu ajukan tidak bisa dijawab oleh chatbot ini. Untuk pertanyaan lebih lanjut bisa ditanyakan melakukan kontak panitia SPMB yang dapat dilihat pada link berikut: \r\nspmb.del.ac.id/index.php?r=site%2Fkontak\r\n', '2024-06-04 04:09:16', '2024-06-04 04:09:16'),
(15, 5, 'Apakah ada beasiswa yang disediakan oleh pihak IT Del dan jenis beasiswa apa saja yang tersedia?', 'Ada beberapa beasiswa yang disediakan oleh pihak IT Del. Beasiswa tersebut diperuntukkan bagi mahasiswa dengan berbagai latar belakang, baik dari segi prestasi akademik, ekonomi. \r\nBerikut merupakan beasiswa yang disediakan di Kampus Institut Teknologi Del antara lain:\r\n1. Beasiswa Tanoto\r\n2. Beasiswa Bidikmisi\r\n3. Beasiswa Rajawali\r\n4. Beasiswa Berpestasi,\r\nDan terdapat beberapa beasiswa lainnya yang tersedia di Institut Teknologi Del dapat diakses melalui website berikut http://www.del.ac.id pada menu `Program Pendidikan` atau bisa melalui link berikut: https://www.del.ac.id/?page_id=14564\r\n\r\n', '2024-06-04 04:12:45', '2024-06-04 04:12:45'),
(16, 5, 'Bagaimana cara mendapatkan beasiswa di Institut Teknologi Del?', 'Cara mendapatkan beasiswa di Institut Teknolofgi Del berbeda-beda tergantung jenis beasiswanya. Untuk lebih detail bagaimana cara mendapatkan beasiswa dapat dilihat melalui link berikut: https://www.del.ac.id/?page_id=14564 ', '2024-06-04 04:12:45', '2024-06-04 04:12:45'),
(17, 6, 'Apa saja fasilitas yang disediakan oleh pihak IT Del?', 'Fasilitas yang disediakan di Kampus Institut Teknologi Del antara lain:\r\n1)	Laboratorium dan Kelas\r\n2)	Akomodasi\r\n3)	Kantin\r\n4)	Perpustakaan\r\n5)	Hiburan dan Olahraga\r\n6)	Ruang Terbuka\r\n7)	Klinik\r\n', '2024-06-04 04:14:11', '2024-06-04 04:14:11'),
(18, 6, 'Apakah ada ketentuan dalam menggunakan fasilitas yang disediakan oleh IT Del?', 'Beberapa fasilitas yang disediakan oleh pihak Kampus Institut Teknologi Del memiliki ketentuan masing-masing. Untuk informasi ketentuan dari fasilitas dapat diakses melalui website berikut http://www.del.ac.id pada menu fasilitas dan pilih jenis fasilitas.', '2024-06-04 04:14:11', '2024-06-04 04:14:11'),
(19, 8, 'Berapa nomor kontak panitia SPMB IT Del?', 'Berikut merupakan kontak Institut Teknologi Del yang bisa kamu hubungi:\r\na. ALAMAT = Institut Teknologi Del Jl. Sisingamangaraja, Sitoluama Laguboti, Toba Samosir Sumatera Utara, Indonesia Kode Pos: 22381\r\nb. TELEPON = +62 632 331234\r\nc. FAX = +62 632 331116\r\nd. FACEBOOK = Institut Teknologi Del\r\ne. INSTAGRAM = @it.del\r\nf. TWITTER = @institut_del\r\nNomor panitia SPMB = 081360758968 (Bisa WhatsApp) ', '2024-06-04 04:16:48', '2024-06-04 04:16:48'),
(20, 9, 'Fakultas apa saja yang tersedia di IT Del?', 'Fakultas yang tersedia di Institut Teknologi Del adalah sebagai berikut:\r\n• Fakultas Vokasi [FV], Program Studi:\r\n1. Teknologi Informasi (D3)\r\n2. Teknologi Komputer (D3)\r\n3. Teknologi Rekayasa Perangkat Lunak (D4)\r\n• Fakultas Informatika & Teknik Elektro [FITE], Program Studi:\r\n1. Informatika (S1)\r\n2. Teknik Elektro (S1)\r\n3. Sistem Informasi (S1)\r\n• Fakultas Teknologi Industri [FTI], Program Studi:\r\n1. Manajemen Rekayasa (S1)\r\n2. Teknik Metalurgi (S1)\r\n• Fakultas Bioteknologi [FB], Program Studi:\r\n1. Teknik Bioproses (S1)', '2024-06-04 04:18:08', '2024-06-04 04:18:08'),
(21, 9, 'Program studi apa saja yang tersedia di Institut Teknologi Del?', 'Program Studi yang tersedia di Kampus Institut Teknologi Del antara lain:\r\n1. Sarjana Informatika\r\n2. Sarjana Sistem Informasi\r\n3. Sarjana Teknik Elektro\r\n4. Sarjana Terapan Teknologi Rekayasa Perangkat Lunak\r\n5. Diploma Teknologi Informasi\r\n6. Diploma Teknologi Komputer\r\n7. Sarjana Teknik Bioproses\r\n8. Sarjana Manajemen Rekayasa\r\n9. Sarjana Teknik Metalurgi', '2024-06-04 04:18:08', '2024-06-04 04:18:08'),
(22, 9, 'Kapan Institut Teknologi Del didirikan?', 'Peletakan batu pertama pembangunan gedung PI Del dilaksanakan pada tanggal 15 Maret 2001. PI Del didirikan oleh Jenderal TNI (Purn.) Luhut B. Pandjaitan, yang pada saat itu masih menjabat sebagai Menteri Perindustrian dan Perdagangan. Di samping turut berperan sebagai inisiator penggerak pembangunan di Tapanuli, PI Del juga diharapkan dapat menginkubasi lahirnya para wiratekno (technopreneur) baru di bidang teknologi informasi dan komputer.\r\nAlasan mengapa PI Del didirikan di desa pelosok Sitoluama, menurut Luhut Pandjaitan yakni: adanya keinginan untuk memberikan kesempatan kepada masyarakat pedesaan, pelosok untuk sama-sama dapat menikmati pendidikan yang berkualitas. Banyak remaja desa yang mampu secara akademik namun tidak dapat masuk ke perguruan tinggi yang bereputasi di Jawa, sehingga perlu sekolah yang berkualitas di pelosok untuk memberikan kesempatan yang sama dalam mempersiapkan masa depan Indonesia yang lebih baik. Sementara teknologi informatika dan komputer memiliki peranan penting dalam perkembangan ilmu pengetahuan dan pembangunan, pendidikan bidang informatika dan komputer masih sedikit hadir di pelosok Indonesia. Alasan lainnya adalah adanya panggilan yang didasari atas mimpi atau visi bahwa suatu ketika akan ada alumni atau dosen PI Del yang menorehkan penghargaan tingkat dunia seharum Penghargaan Nobel.\r\n', '2024-06-04 04:19:43', '2024-06-04 04:19:43'),
(23, 9, 'Apakah semua mahasiswa diwajibkan untuk masuk asrama?', 'Ya, seluruh mahasiswa Institut Teknologi Del diwajibkan untuk tinggal di dalam asrama yang teah disediakan oleh pihak IT Del', '2024-06-04 04:19:43', '2024-06-04 04:19:43'),
(24, 9, 'Siapa pemilik Institut Teknologi Del?', 'Pemilik Yayasan Institut Teknologi Del adalah bapak Jenderal TNI (Purn.) Luhut B. Pandjaitan', '2024-06-04 04:21:15', '2024-06-04 04:21:15');

-- --------------------------------------------------------

--
-- Table structure for table `program_studi`
--

CREATE TABLE `program_studi` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama_programstudi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `program_studi`
--

INSERT INTO `program_studi` (`id`, `nama_programstudi`, `created_at`, `updated_at`) VALUES
(1, 'Program Studi Informatika', '2024-06-04 04:22:42', '2024-06-04 04:22:42'),
(2, 'Program Studi Sistem Informasi', '2024-06-04 04:22:42', '2024-06-04 04:22:42'),
(3, 'Program Studi Teknik Elektro', '2024-06-04 04:23:33', '2024-06-04 04:23:33'),
(4, 'Program Studi Teknologi Rekayasa Perangkat Lunak (TRPL)', '2024-06-04 04:23:33', '2024-06-04 04:23:33'),
(5, 'Program Studi Teknologi Informasi', '2024-06-04 04:23:33', '2024-06-04 04:23:33'),
(6, 'Program Studi Teknologi Komputer', '2024-06-04 04:24:54', '2024-06-04 04:24:54'),
(7, 'Program Studi Teknik Bioproses', '2024-06-04 04:24:54', '2024-06-04 04:24:54'),
(8, 'Program Studi Manajemen Rekayasa', '2024-06-04 04:26:25', '2024-06-04 04:26:25'),
(9, 'Program Studi Teknik Metalurgi', '2024-06-04 04:26:25', '2024-06-25 04:26:25');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `pertanyaanjawaban_programstudi`
--
ALTER TABLE `pertanyaanjawaban_programstudi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pertanyaanjawaban_programstudi_programstudi_id_foreign` (`programstudi_id`);

--
-- Indexes for table `pertanyaan_jawaban`
--
ALTER TABLE `pertanyaan_jawaban`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `program_studi`
--
ALTER TABLE `program_studi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pertanyaanjawaban_programstudi`
--
ALTER TABLE `pertanyaanjawaban_programstudi`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `pertanyaan_jawaban`
--
ALTER TABLE `pertanyaan_jawaban`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `program_studi`
--
ALTER TABLE `program_studi`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pertanyaanjawaban_programstudi`
--
ALTER TABLE `pertanyaanjawaban_programstudi`
  ADD CONSTRAINT `pertanyaanjawaban_programstudi_programstudi_id_foreign` FOREIGN KEY (`programstudi_id`) REFERENCES `program_studi` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
