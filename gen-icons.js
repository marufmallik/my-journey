// Generate simple SVG icons for the PWA manifest
const fs = require('fs');
const path = require('path');

const sizes = [192, 512];

sizes.forEach(size => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a3a6b"/>
      <stop offset="100%" style="stop-color:#0d7377"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.18}" fill="url(#bg)"/>
  <text x="${size/2}" y="${size * 0.62}" font-size="${size * 0.45}" text-anchor="middle" font-family="serif">🌙</text>
  <text x="${size/2}" y="${size * 0.88}" font-size="${size * 0.12}" text-anchor="middle" fill="#00c9c8" font-family="sans-serif" font-weight="bold" letter-spacing="1">JOURNEY</text>
</svg>`;
  fs.writeFileSync(path.join(__dirname, 'public', `icon-${size}.svg`), svg);
  console.log(`Created icon-${size}.svg`);
});
