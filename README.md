# Landing Page MTs Al-Mukhtariah

Landing page sekolah menggunakan Next.js App Router, React, dan Lucide Icons.

## Menjalankan di komputer lokal

Pastikan Node.js sudah terpasang, lalu buka terminal di folder proyek:

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Build untuk production

```bash
npm run build
npm run start
```

## Bagian yang perlu disesuaikan sebelum dipublikasikan

Buka `app/page.js`, lalu ganti:
- Nomor WhatsApp pada tautan `https://wa.me/62XXXXXXXXXX` (gunakan format kode negara tanpa tanda `+`, spasi, atau angka 0 di depan).
- Alamat sekolah.
- Nomor telepon/WhatsApp dan email.
- Informasi PPDB, program, fasilitas, prestasi, dan berita sesuai data resmi madrasah.

Logo yang diberikan sudah disimpan sebagai `public/logo.jpg`.

## Warna dan desain

Tema hijau tua, emas, dan krem dipilih agar selaras dengan warna logo. Tata letak sudah responsif untuk desktop, tablet, dan ponsel.
