# Airdrop Umbrella Manager

<p align="center">
  <a href="https://github.com/kenjisubagja/Airdrop-Umbrella-Manager/releases">
    <img src="https://img.shields.io/github/v/release/kenjisubagja/Airdrop-Umbrella-Manager?sort=semver&label=rilis" alt="rilis terbaru">
  </a>
  <a href="https://github.com/kenjisubagja/Airdrop-Umbrella-Manager/releases">
  </a>
  <img src="https://img.shields.io/badge/Platform-Windows-blue" alt="platform">
  <img src="https://img.shields.io/badge/Platform-Android-green?logo=android&logoColor=white" alt="platform-android">
  <img src="https://img.shields.io/badge/Node-%E2%89%A518-339933?logo=nodedotjs&logoColor=white" alt="node">
  <img src="https://img.shields.io/badge/Electron-31.x-47848F?logo=electron&logoColor=white" alt="electron">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/Lisensi-MIT-yellow" alt="license">
  </a>
  <a href="https://github.com/kenjisubagja/Airdrop-Umbrella-Manager/pulls">
  </a>
</p>

Aplikasi desktop dan android **offline**  untuk mengatur garapan airdrop.  
Kelola **Tasks**, **Bridge**, dan **Faucet** dengan cepat, simpel, dan **privat (local only)**.

---

## ✨ Fitur

- **Tasks**
  - Kolom: *Nama Garapan*, *Tugas*, *Link (Open)*, *Banyak Akun*, *Keterangan*.
  - **Checklist “Hari Ini”** — menandai progress harian, **reset otomatis** saat tanggal berganti.
  - **Tombol END** — ubah status menjadi merah **END** (terkunci).  
    Untuk aktif lagi: **Edit → Keterangan = Ongoing**.
  - **Edit inline** & **Hapus** per item.
  - **Cari & Filter** (Ongoing / End / Selesai).
  - **Pagination**: pilih **5 / 10 / 25** baris per halaman (default 5) + **Prev/Next**.
- **Bridge** & **Faucet**
  - Simpan “Bridge ke” + “Link”, **Open**, **Edit**, **Hapus**.
- **Buka link via Chrome** (fallback ke browser default jika Chrome tidak ada).
- - **Buka link bisa di pilih** (Buat adnroid bisa di pilih browser atau bisa copas link).
- **Offline & Privat** — data disimpan lokal di profil aplikasi (`localStorage`).

---

## 📦 Unduh aplikasi dan Preview aplikasi

Masuk ke halaman **[Releases](https://github.com/kenjisubagja/Airdrop-Umbrella-Manager/releases)** dan ambil:
- `Airdrop-Umbrella-Manager-Setup-1.0.0.exe` → **Installer** (disarankan)  
  Membuat **shortcut di Desktop & Start Menu** otomatis.
- `Airdrop-Umbrella-Manager-Portable-1.0.0.exe` → **Portable** (tanpa instal; **tidak** membuat shortcut otomatis).
- `Airdrop-Umbrella-Manager-Setup-1.0.0.apk` → ini buat user android note ya, pasti ada keterangan dari play protect, ijinkan aja, kalau pun di scan juga gpp kok
-  `NOTE`: Kalau udah hapus item dan mau tambahkan lagi tapi lag gk bisa di pencet, sabar dan tunggu nanti juga bisa ini local storage soal nya

> Windows SmartScreen bisa muncul karena aplikasi belum code-signed.  
> Klik **More info → Run anyway**.

---

## 🔧 Build dari Source (Developer)

**Syarat:** Windows 10/11 (x64), Node.js 18+

```bash
npm install
npm run start     # jalankan mode dev
npm run dist      # build installer + portable (hasil di folder dist/)
```
```bash
Cordova atau React Native (pake android studio)
```

Output build

```Airdrop-Garapan-Manager-Setup-x.y.z.exe``` — Installer (membuat shortcut).

```Airdrop-Garapan-Manager-Portable-x.y.z.exe```— Portable.

```win-unpacked/``` — Folder portable mentah.

Berkas utama (PC)
- ```main.js ```      → proses utama Electron (window, path)
- ```preload.js```    → jembatan aman untuk buka link via Chrome
- ```index.html```    → UI + logic (Tasks / Bridge / Faucet)
- Berkas utama (Android)
- ```index.html```    → UI + logic and Capacitor (WebView native)
## 🔐 Data & Privasi
- Disimpan lokal (per-user, per-device) di folder data aplikasi Electron.
- Tidak ada server, akun, atau telemetri.
- Uninstall akan menghapus data lokal aplikasi.

## Contact Me: 
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/kenjisubagja)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/kenjisubagja)
