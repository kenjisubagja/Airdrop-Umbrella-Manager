const { contextBridge, shell } = require('electron');
const { spawn } = require('child_process');
const fs = require('fs');

function resolveChromePath() {
  const candidates = [
    process.env['PROGRAMFILES'] + '\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',
    process.env['PROGRAMFILES(X86)'] + '\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',
    process.env['LOCALAPPDATA'] + '\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',
    process.env['CHROME_PATH'] // opsional: set manual jika lokasi custom
  ].filter(Boolean);

  for (const c of candidates) {
    try { if (fs.existsSync(c)) return c; } catch {}
  }
  return null;
}

function openInChrome(url) {
  try {
    // validasi URL
    new URL(url);
  } catch {
    console.error('[preload] URL invalid:', url);
    return;
  }

  const chrome = resolveChromePath();
  if (chrome) {
    try {
      spawn(chrome, [url], { detached: true, stdio: 'ignore' }).unref();
      return;
    } catch (e) {
      console.error('[preload] spawn chrome error:', e);
    }
  }
  // fallback ke browser default
  shell.openExternal(url);
}

console.log('[preload] loaded');

contextBridge.exposeInMainWorld('ext', {
  openInChrome
});
