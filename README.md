# Airdrop Umbrella Manager

<p align="center">
  <a href="https://github.com/kenjisubagja/Airdrop-Umbrella-Manager/releases">
    <img src="https://img.shields.io/github/v/release/kenjisubagja/Airdrop-Umbrella-Manager?sort=semver&label=rilis" alt="rilis terbaru">
  </a>
  <a href="https://github.com/kenjisubagja/Airdrop-Umbrella-Manager/releases">
  </a>
  <img src="https://img.shields.io/badge/Platform-Windows-blue" alt="platform">
  <img src="https://img.shields.io/badge/Node-%E2%89%A518-339933?logo=nodedotjs&logoColor=white" alt="node">
  <img src="https://img.shields.io/badge/Electron-31.x-47848F?logo=electron&logoColor=white" alt="electron">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/Lisensi-MIT-yellow" alt="license">
  </a>
  <a href="https://github.com/kenjisubagja/Airdrop-Umbrella-Manager/pulls">
    <img src="https://img.shields.io/badge/PRs-dipersilakan-brightgreen" alt="prs welcome">
  </a>
</p>

<p align="center">
  <!-- Letakkan GIF demo di docs/demo.gif -->
  <img src="docs/demo.gif" alt="Demo Airdrop Garapan Manager" width="820">
</p>

Aplikasi desktop **offline** (Electron) untuk mengatur garapan airdrop.  
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
  - Simpan “Ke mana” + “Link”, **Open**, **Edit**, **Hapus**.
- **Buka link via Chrome** (fallback ke browser default jika Chrome tidak ada).
- **Offline & Privat** — data disimpan lokal di profil aplikasi (`localStorage`).

---

## 📦 Unduh (Pengguna)

Masuk ke halaman **[Releases](https://github.com/kenjisubagja/Airdrop-Umbrella-Manager/releases)** dan ambil:
- `Airdrop-Garapan-Manager-Setup-x.y.z.exe` → **Installer** (disarankan)  
  Membuat **shortcut di Desktop & Start Menu** otomatis.
- `Airdrop-Garapan-Manager-Portable-x.y.z.exe` → **Portable** (tanpa instal; **tidak** membuat shortcut otomatis).

> Windows SmartScreen bisa muncul karena aplikasi belum code-signed.  
> Klik **More info → Run anyway**.

---

## 🔧 Build dari Source (Developer)

**Syarat:** Windows 10/11 (x64), Node.js 18+

```bash
npm install
npm run start     # jalankan mode dev
npm run dist      # build installer + portable (hasil di folder dist/)
