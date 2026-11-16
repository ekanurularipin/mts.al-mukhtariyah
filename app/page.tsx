"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Award,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Menu,
  X,
  CheckCircle2,
  Sparkles,
  GraduationCap,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const keunggulan = [
    {
      title: "Kurikulum Terpadu",
      desc: "Memadukan kurikulum nasional (Kurikulum Merdeka) dengan pendidikan diniyah, tahfidz Al-Qur'an, dan kajian kitab kuning.",
      icon: BookOpen,
    },
    {
      title: "Program Tahfidz & Akhlak",
      desc: "Pembiasaan ibadah harian, hafalan Juz 30 & surat pilihan, serta pembentukan karakter berakhlakul karimah.",
      icon: Sparkles,
    },
    {
      title: "Tenaga Pendidik Kompeten",
      desc: "Dididik oleh guru-guru profesional, bersertifikasi, dan berdedikasi tinggi dalam membimbing potensi siswa.",
      icon: Users,
    },
    {
      title: "Fasilitas & Ekstrakurikuler",
      desc: "Lingkungan belajar kondusif didukung laboratorium komputer, perpustakaan, serta ekskul Pramuka, Paskibra, dan Hadroh.",
      icon: GraduationCap,
    },
  ];

  const prestasi = [
    {
      juara: "Juara 1 KSM Tingkat Kabupaten",
      bidang: "Matematika Terintegrasi",
      tahun: "2025",
    },
    {
      juara: "Juara Umum Aksioma",
      bidang: "Cabang Pidato Bahasa Arab & MTQ",
      tahun: "2025",
    },
    {
      juara: "Medali Emas Olimpiade Sains",
      bidang: "IPA Terpadu Tingkat Provinsi",
      tahun: "2024",
    },
  ];

  const kegiatan = [
    {
      title: "Pembiasaan Sholat Dhuha & Tadarus",
      category: "Karakter Religius",
      img: "/images/1.webp",
    },
    {
      title: "Praktikum Sains & Komputer",
      category: "Akademik & Teknologi",
      img: "/images/2.webp",
    },
    {
      title: "Latihan Kepemimpinan & Pramuka",
      category: "Ekstrakurikuler",
      img: "/images/3.webp",
    },
  ];

  const berita = [
    {
      tanggal: "10 November 2026",
      judul: "Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2027/2028 Resmi Dibuka",
      ringkasan:
        "Daftarkan putra-putri Anda sekarang melalui jalur prestasi maupun reguler. Kuota terbatas dengan beasiswa bebas SPP bagi penghafal Al-Qur'an.",
    },
    {
      tanggal: "28 Oktober 2026",
      judul: "Peringatan Hari Santri Nasional & Sumpah Pemuda di MTs Al Mukhtariyah",
      ringkasan:
        "Seluruh siswa dan guru mengikuti apel pagi dilanjutkan dengan lomba kreasi seni islami dan musabaqah antar kelas.",
    },
    {
      tanggal: "15 Oktober 2026",
      judul: "Wisuda Tahfidz Angkatan ke-12 Meluluskan 45 Santri Hafidz Juz 30",
      ringkasan:
        "Momen haru dan bangga menyelimuti acara wisuda tahfidz yang dihadiri langsung oleh orang tua wali murid dan tokoh masyarakat.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo & Nama Sekolah */}
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Logo MTs Al Mukhtariyah"
                className="w-12 h-12 object-contain rounded-full bg-sekolah-green p-0.5"
              />
              <div>
                <span className="block text-lg font-extrabold text-sekolah-green tracking-tight leading-none">
                  MTs AL MUKHTARIYAH
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Cerdas, Berkarakter & Berakhlakul Karimah
                </span>
              </div>
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
              <a href="#beranda" className="hover:text-sekolah-green transition">
                Beranda
              </a>
              <a href="#sambutan" className="hover:text-sekolah-green transition">
                Profil
              </a>
              <a href="#keunggulan" className="hover:text-sekolah-green transition">
                Keunggulan
              </a>
              <a href="#kegiatan" className="hover:text-sekolah-green transition">
                Kegiatan & Prestasi
              </a>
              <a href="#berita" className="hover:text-sekolah-green transition">
                Berita
              </a>
              <a
                href="https://ponpes-mukhtariyah.emergent.host/login"
                className="bg-sekolah-green hover:bg-sekolah-greenDark text-white px-5 py-2.5 rounded-full transition shadow-md shadow-sekolah-green/20"
              >
                Login
              </a>
              <a
                href="#ppdb"
                className="bg-sekolah-green hover:bg-sekolah-greenDark text-white px-5 py-2.5 rounded-full transition shadow-md shadow-sekolah-green/20"
              >
                Info PPDB
              </a>
            </nav>

            {/* Tombol Menu Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Dropdown Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 space-y-3 font-medium">
            <a href="#beranda" onClick={() => setMobileMenuOpen(false)} className="block py-2">
              Beranda
            </a>
            <a href="#sambutan" onClick={() => setMobileMenuOpen(false)} className="block py-2">
              Profil & Sambutan
            </a>
            <a href="#keunggulan" onClick={() => setMobileMenuOpen(false)} className="block py-2">
              Keunggulan
            </a>
            <a href="#kegiatan" onClick={() => setMobileMenuOpen(false)} className="block py-2">
              Kegiatan & Prestasi
            </a>
            <a href="#berita" onClick={() => setMobileMenuOpen(false)} className="block py-2">
              Berita
            </a>
            <a
              href="#ppdb"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-sekolah-green text-white py-2.5 rounded-lg font-semibold"
            >
              Daftar PPDB Sekarang
            </a>
          </div>
        )}
      </header>

      {/* ================= HERO SECTION ================= */}
      <section
        id="beranda"
        className="relative overflow-hidden bg-linear-to-br from-sekolah-green via-sekolah-greenDark to-[#042f10] text-white py-16 lg:py-24"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-sekolah-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* KOLOM KIRI: Teks & CTA */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-sekolah-gold/40 text-sekolah-goldLight text-xs sm:text-sm font-semibold">
                <Sparkles size={16} className="text-sekolah-gold" />
                <span>Penerimaan Peserta Didik Baru Telah Dibuka</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Mencetak Generasi{" "}
                <span className="text-sekolah-gold">Qur&apos;ani</span>, Unggul
                dalam Ilmu & Akhlak
              </h1>

              <p className="text-base sm:text-lg text-emerald-100 leading-relaxed max-w-xl">
                Selamat datang di <strong>MTs Al Mukhtariyah</strong>. Lembaga
                pendidikan menengah pertama berbasis nilai-nilai Islam Ahlussunnah
                wal Jama&apos;ah yang memadukan kecerdasan akademik, penguasaan
                teknologi, dan kedalaman spiritual.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#ppdb"
                  className="inline-flex items-center gap-2 bg-sekolah-gold hover:bg-amber-500 text-slate-950 font-bold px-7 py-3.5 rounded-full transition shadow-lg"
                >
                  Daftar Sekarang
                  <ChevronRight size={20} />
                </a>
                <a
                  href="#keunggulan"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full transition"
                >
                  Jelajahi Keunggulan
                </a>
              </div>

              {/* Statistik Singkat */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/15">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-sekolah-gold">
                    A
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-100">
                    Terakreditasi Unggul
                  </p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-sekolah-gold">
                    500+
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-100">
                    Siswa Aktif
                  </p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-sekolah-gold">
                    50+
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-100">
                    Prestasi Kejuaraan
                  </p>
                </div>
              </div>
            </div>

            {/* KOLOM KANAN: Foto Siswa */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="absolute -inset-3 bg-linear-to-tr from-sekolah-gold to-emerald-400 rounded-3xl opacity-30 blur-lg" />
                <div className="relative rounded-3xl overflow-hidden border-4 border-sekolah-gold/60 shadow-2xl bg-sekolah-greenDark">
                  <img
                    src="/images/hero.png"
                    alt="Siswa Berprestasi MTs Al Mukhtariyah"
                    className="w-full h-full sm:h-150 object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md text-slate-800 p-4 rounded-2xl shadow-lg flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sekolah-green text-sekolah-gold flex items-center justify-center shrink-0">
                      <Award size={26} />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-sekolah-green">
                        Lingkungan Belajar Nyaman & Islami
                      </p>
                      <p className="text-xs text-slate-600">
                        Membentuk karakter mandiri, disiplin, dan berprestasi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SAMBUTAN KEPALA SEKOLAH ================= */}
      <section id="sambutan" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Foto Kepala Sekolah */}
            <div className="lg:col-span-5">
              <div className="relative max-w-md mx-auto">
                <div className="absolute top-4 -left-4 w-full h-full rounded-3xl bg-sekolah-greenLight border-2 border-sekolah-green/20" />
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
                  <img
                    src="/images/pimpinan.png"
                    alt="Kepala Madrasah MTs Al Mukhtariyah"
                    className="w-full h-105 object-cover object-top"
                  />
                  <div className="bg-sekolah-green text-white p-5 text-center">
                    <h3 className="font-bold text-lg">
                      KH. Bubung Nizar, S.Pd.I.
                    </h3>
                    <p className="text-sekolah-goldLight text-sm">
                      Kepala Madrasah MTs Al Mukhtariyah
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pesan Sambutan */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-sekolah-green font-bold text-sm uppercase tracking-wider">
                Sambutan Kepala Madrasah
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Membangun Pondasi Ilmu dan Akhlak untuk Masa Depan Gemilang
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p className="italic font-medium text-sekolah-green">
                  Assalamu&apos;alaikum Warahmatullahi Wabarakatuh,
                </p>
                <p>
                  Puji syukur ke hadirat Allah SWT atas segala limpahan rahmat
                  dan karunia-Nya. Di era transformasi digital yang berkembang
                  pesat, tantangan pendidikan tidak hanya mencetak siswa yang
                  cerdas secara intelektual, tetapi juga tangguh secara moral
                  dan spiritual.
                </p>
                <p>
                  <strong>MTs Al Mukhtariyah</strong> hadir sebagai rumah kedua
                  bagi putra-putri Anda untuk tumbuh menjadi pribadi yang
                  berakhlakul karimah, mencintai Al-Qur&apos;an, namun tetap
                  adaptif terhadap perkembangan ilmu pengetahuan dan teknologi
                  modern.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Pendidikan Karakter Berbasis Pesantren",
                  "Pembelajaran Aktif & Digital",
                  "Bimbingan Olimpiade & Seni Islami",
                  "Komunikasi Intensif dengan Wali Murid",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2
                      size={20}
                      className="text-sekolah-green shrink-0"
                    />
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEUNGGULAN SEKOLAH ================= */}
      <section id="keunggulan" className="py-20 bg-sekolah-greenLight/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-sekolah-green font-bold text-sm uppercase tracking-wider">
              Mengapa Memilih Kami?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Keunggulan MTs Al Mukhtariyah
            </h2>
            <p className="text-slate-600">
              Kami merancang ekosistem pendidikan menyeluruh demi memastikan
              setiap siswa berkembang sesuai bakat dan fitrah terbaiknya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keunggulan.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl border border-emerald-100 transition duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-sekolah-greenLight text-sekolah-green group-hover:bg-sekolah-green group-hover:text-sekolah-gold flex items-center justify-center mb-6 transition">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= KEGIATAN SISWA & PRESTASI ================= */}
      <section id="kegiatan" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-sekolah-green font-bold text-sm uppercase tracking-wider">
                Galeri Aktivitas
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Kegiatan & Kehidupan Siswa
              </h2>
            </div>
            <p className="text-slate-600 max-w-md text-sm">
              Keseimbangan antara rutinitas ibadah, pendalaman materi kelas, dan
              pengembangan minat bakat di luar ruangan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {kegiatan.map((keg, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-md h-80"
              >
                <img
                  src={keg.img}
                  alt={keg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-sekolah-gold mb-1">
                    {keg.category}
                  </span>
                  <h3 className="text-lg font-bold">{keg.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Banner Prestasi */}
          <div className="bg-sekolah-green rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-sekolah-gold/20 text-sekolah-gold text-xs font-bold uppercase mb-2">
                    Jejak Juara
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold">
                    Prestasi Membanggakan Siswa Kami
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-sekolah-goldLight">
                  <Award size={40} className="text-sekolah-gold" />
                  <span className="text-sm max-w-xs">
                    Pembinaan intensif menuju Kompetisi Sains Madrasah (KSM) &
                    Ajang Seni Olahraga.
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {prestasi.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6"
                  >
                    <span className="text-xs font-bold text-sekolah-gold">
                      Tahun {item.tahun}
                    </span>
                    <h4 className="text-lg font-bold mt-1">{item.juara}</h4>
                    <p className="text-sm text-emerald-100 mt-1">
                      {item.bidang}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BERITA & PENGUMUMAN ================= */}
      <section id="berita" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sekolah-green font-bold text-sm uppercase tracking-wider">
              Kabar Madrasah
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              Berita & Informasi Terbaru
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {berita.map((item, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-sekolah-green mb-3">
                    <Calendar size={14} />
                    <span>{item.tanggal}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {item.judul}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.ringkasan}
                  </p>
                </div>
                <a
                  href="#ppdb"
                  className="inline-flex items-center gap-1 text-sm font-bold text-sekolah-green hover:text-sekolah-greenDark mt-6"
                >
                  Baca Selengkapnya <ChevronRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION (PPDB) ================= */}
      <section id="ppdb" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-sekolah-greenDark to-sekolah-green rounded-3xl p-8 sm:p-14 text-center text-white shadow-xl border-2 border-sekolah-gold/40">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Mari Bergabung Bersama Keluarga Besar MTs Al Mukhtariyah
            </h2>
            <p className="text-emerald-100 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
              Wujudkan harapan masa depan putra-putri Anda dengan pendidikan
              berkualitas yang menyeimbangkan kecerdasan dunia dan keselamatan
              akhirat.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="bg-sekolah-gold hover:bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-full transition shadow-lg"
              >
                Hubungi Panitia PPDB (WhatsApp)
              </a>
              <a
                href="#kontak"
                className="bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-full transition"
              >
                Kunjungi Lokasi Sekolah
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="kontak" className="bg-sekolah-greenDark text-emerald-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo.png"
                  alt="Logo MTs Al Mukhtariyah"
                  className="w-12 h-12 object-contain rounded-full bg-white p-0.5"
                />
                <span className="text-xl font-extrabold text-white">
                  MTs AL MUKHTARIYAH
                </span>
              </div>
              <p className="text-sm leading-relaxed text-emerald-200">
                Madrasah Tsanawiyah unggulan yang berkomitmen melahirkan generasi
                berilmu amaliah, beramal ilmiah, dan berakhlakul karimah.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Tautan Cepat</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#sambutan" className="hover:text-sekolah-gold transition">
                    Sambutan Kepala Madrasah
                  </a>
                </li>
                <li>
                  <a href="#keunggulan" className="hover:text-sekolah-gold transition">
                    Program Unggulan
                  </a>
                </li>
                <li>
                  <a href="#kegiatan" className="hover:text-sekolah-gold transition">
                    Ekstrakurikuler & Prestasi
                  </a>
                </li>
                <li>
                  <a href="#ppdb" className="hover:text-sekolah-gold transition">
                    Pendaftaran Siswa Baru (PPDB)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Kontak & Alamat</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-sekolah-gold shrink-0 mt-0.5" />
                  <span>
                    Jl. Raya Pendidikan No. 123, Kec. Cibeureum, Kab/Kota
                    (Sesuaikan Alamat Sekolah)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-sekolah-gold shrink-0" />
                  <span>(0265) 123-456 / 0812-3456-7890</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-sekolah-gold shrink-0" />
                  <span>info@mtsalmukhtariyah.sch.id</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 text-center text-xs text-emerald-300">
            &copy; {new Date().getFullYear()} MTs Al Mukhtariyah. Hak Cipta
            Dilindungi Undang-Undang.
          </div>
        </div>
      </footer>
    </div>
  );
}