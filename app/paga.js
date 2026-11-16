import Image from "next/image";
import {
  ArrowRight, BookOpen, GraduationCap, HeartHandshake, Menu,
  Microscope, MoonStar, MoveUpRight, ShieldCheck, Sparkles,
  Users, WalletCards, CalendarDays, MapPin, Phone, Mail
} from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Pembelajaran Berkualitas",
    text: "Pembelajaran terarah yang mendorong rasa ingin tahu, pemahaman, dan prestasi peserta didik."
  },
  {
    icon: MoonStar,
    title: "Penguatan Keislaman",
    text: "Membiasakan nilai-nilai keislaman dalam kegiatan belajar dan kehidupan sehari-hari."
  },
  {
    icon: Users,
    title: "Pengembangan Diri",
    text: "Ruang bagi siswa untuk mengenali potensi, melatih kepemimpinan, dan berkolaborasi."
  },
  {
    icon: Microscope,
    title: "Kreativitas & Literasi",
    text: "Membangun kebiasaan berpikir kritis, kreatif, komunikatif, dan gemar belajar."
  }
];

const values = [
  ["01", "Berilmu", "Mencintai ilmu pengetahuan dan terus bertumbuh."],
  ["02", "Berakhlak", "Menjunjung adab, kepedulian, dan sikap saling menghormati."],
  ["03", "Mandiri", "Percaya diri, bertanggung jawab, dan siap menghadapi tantangan."]
];

export default function Home() {
  return (
    <main>
      <div className="topline">
        <div className="container topline-inner">
          <span>Madrasah Tsanawiyah Al-Mukhtariah</span>
          <span className="topline-right"><span>✦</span> Membangun Generasi Berilmu dan Berakhlak</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#beranda" aria-label="MTs Al-Mukhtariah, beranda">
            <Image src="/logo.jpg" alt="Logo MTs Al-Mukhtariah" width={58} height={58} priority />
            <span><strong>MTs Al-Mukhtariah</strong><small>Madrasah Tsanawiyah</small></span>
          </a>
          <nav className="nav-links">
            <a href="#beranda" className="active">Beranda</a>
            <a href="#profil">Profil</a>
            <a href="#program">Program</a>
            <a href="#keunggulan">Keunggulan</a>
            <a href="#kontak">Kontak</a>
          </nav>
          <a className="nav-cta" href="#kontak">Hubungi Kami <ArrowRight size={16} /></a>
          <a className="mobile-menu" href="#kontak" aria-label="Menu"><Menu size={24}/></a>
        </div>
      </header>

      <section className="hero" id="beranda">
        <div className="hero-pattern" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> SELAMAT DATANG DI MTs AL-MUKHTARIAH</div>
            <h1>Tempat Tumbuhnya<br/><em>Ilmu, Iman,</em> dan<br/>Masa Depan.</h1>
            <p className="hero-desc">Membangun generasi yang berilmu, berakhlak mulia, mandiri, dan siap memberikan manfaat bagi lingkungan serta masa depan.</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="#profil">Jelajahi Madrasah <ArrowRight size={17}/></a>
              <a className="text-link" href="#program">Kenali program kami <MoveUpRight size={16}/></a>
            </div>
            <div className="hero-note"><ShieldCheck size={18}/> Pendidikan dengan nilai dan karakter sebagai fondasi.</div>
          </div>
          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="hero-emblem">
              <div className="emblem-ring"><Image src="/logo.jpg" alt="Lambang MTs Al-Mukhtariah" width={230} height={230} priority /></div>
              <span className="emblem-caption">ILMU • IMAN • AMAL</span>
            </div>
            <div className="floating-card card-top"><span className="mini-icon"><Sparkles size={17}/></span><span><b>Generasi Unggul</b><small>Berkarakter & berdaya saing</small></span></div>
            <div className="floating-card card-bottom"><span className="mini-icon"><HeartHandshake size={18}/></span><span><b>Lingkungan Islami</b><small>Belajar dengan nilai kebaikan</small></span></div>
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          </div>
        </div>
        <div className="hero-bottom"><div className="container hero-bottom-inner"><span>MENUMBUHKAN POTENSI</span><span className="bottom-divider"/><span>MENANAMKAN KARAKTER</span><span className="bottom-divider"/><span>MENYIAPKAN GENERASI</span></div></div>
      </section>

      <section className="intro section-pad" id="profil">
        <div className="container intro-grid">
          <div className="section-kicker">TENTANG MADRASAH <span /></div>
          <div className="intro-content">
            <p className="overline">Pendidikan adalah bekal untuk kehidupan</p>
            <h2>Lebih dari sekadar belajar.<br/><em>Tempat karakter dibentuk.</em></h2>
            <p className="body-copy">MTs Al-Mukhtariah hadir sebagai tempat bagi peserta didik untuk mengembangkan pengetahuan, memperkuat nilai keislaman, serta membangun karakter positif. Kami percaya setiap anak memiliki potensi yang layak didampingi untuk tumbuh dan berkembang.</p>
            <a className="underlined-link" href="#keunggulan">Kenali nilai-nilai kami <ArrowRight size={17}/></a>
          </div>
          <div className="intro-seal">
            <div className="seal-backdrop" />
            <Image src="/logo.jpg" alt="Logo resmi MTs Al-Mukhtariah" width={190} height={190} />
            <span>BERILMU • BERAKHLAK • BERPRESTASI</span>
          </div>
        </div>
      </section>

      <section className="program-section section-pad" id="program">
        <div className="container">
          <div className="section-heading">
            <div><div className="section-kicker light">RUANG UNTUK BERTUMBUH <span /></div><h2>Belajar dengan tujuan,<br/><em>bertumbuh dengan makna.</em></h2></div>
            <p>Pengalaman pendidikan yang mendukung perkembangan akademik, spiritual, dan potensi diri siswa.</p>
          </div>
          <div className="program-grid">
            {programs.map((item, i) => {
              const Icon = item.icon;
              return <article className="program-card" key={item.title}>
                <div className="program-number">0{i + 1}</div>
                <div className="program-icon"><Icon size={24}/></div>
                <h3>{item.title}</h3><p>{item.text}</p>
                <a href="#kontak" aria-label={`Tanyakan tentang ${item.title}`}><ArrowRight size={18}/></a>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="values-section section-pad" id="keunggulan">
        <div className="container values-grid">
          <div className="values-copy">
            <div className="section-kicker">LANDASAN PENDIDIKAN <span /></div>
            <h2>Menyiapkan generasi<br/>dengan <em>bekal yang kuat.</em></h2>
            <p className="body-copy">Kami ingin setiap peserta didik tidak hanya berkembang dalam pengetahuan, tetapi juga memiliki karakter yang menjadi bekal dalam kehidupan.</p>
            <a className="btn btn-dark" href="#kontak">Bergabung dengan Kami <ArrowRight size={17}/></a>
          </div>
          <div className="values-list">
            {values.map(([num, title, desc]) => <div className="value-item" key={num}>
              <span className="value-num">{num}</span><div><h3>{title}</h3><p>{desc}</p></div><ArrowRight className="value-arrow" size={19}/>
            </div>)}
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="container quote-inner">
          <div className="quote-mark">“</div>
          <div><p>Pendidikan yang baik bukan hanya mengajarkan apa yang harus diketahui, tetapi juga menumbuhkan siapa kita akan menjadi.</p><span>MTs AL-MUKHTARIAH</span></div>
          <div className="quote-star">✳</div>
        </div>
      </section>

      <section className="contact-section section-pad" id="kontak">
        <div className="container contact-box">
          <div className="contact-copy">
            <div className="section-kicker light">MARI TERHUBUNG <span /></div>
            <h2>Langkah besar dimulai<br/>dari <em>tempat yang tepat.</em></h2>
            <p>Ingin mengetahui lebih lanjut tentang MTs Al-Mukhtariah? Hubungi kami untuk mendapatkan informasi sekolah dan penerimaan peserta didik.</p>
            <a className="btn btn-gold" href="https://wa.me/62XXXXXXXXXX" target="_blank" rel="noreferrer">Hubungi melalui WhatsApp <ArrowRight size={17}/></a>
          </div>
          <div className="contact-details">
            <div className="contact-detail"><span><MapPin size={19}/></span><div><small>ALAMAT SEKOLAH</small><p>Tambahkan alamat lengkap sekolah</p></div></div>
            <div className="contact-detail"><span><Phone size={19}/></span><div><small>TELEPON / WHATSAPP</small><p>Tambahkan nomor kontak sekolah</p></div></div>
            <div className="contact-detail"><span><Mail size={19}/></span><div><small>EMAIL</small><p>Tambahkan email resmi sekolah</p></div></div>
            <div className="contact-detail"><span><CalendarDays size={19}/></span><div><small>INFORMASI PPDB</small><p>Hubungi pihak madrasah untuk jadwal pendaftaran</p></div></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#beranda"><Image src="/logo.jpg" alt="Logo MTs Al-Mukhtariah" width={52} height={52}/><span><strong>MTs Al-Mukhtariah</strong><small>Madrasah Tsanawiyah</small></span></a>
          <p>Membentuk generasi berilmu,<br/>berakhlak, dan bermanfaat.</p>
          <a href="#beranda" className="back-top">Kembali ke atas ↑</a>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} MTs Al-Mukhtariah. Seluruh hak cipta dilindungi.</span><span>Dibangun untuk pendidikan yang lebih baik.</span></div>
      </footer>
    </main>
  );
}
