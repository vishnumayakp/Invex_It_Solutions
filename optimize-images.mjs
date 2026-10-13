import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('src/assets/images');

const images = [
  { name: 'invex-logo3.png', out: 'invex-logo3.webp', width: 320, quality: 85 },
  { name: 'hero_img.png', out: 'hero_img.webp', width: 1200, quality: 82 },
  { name: 'problem.png', out: 'problem.webp', width: 1200, quality: 82 },
  { name: 'hr.png', out: 'hr.webp', width: 1200, quality: 82 },
  { name: 'queue.png', out: 'queue.webp', width: 1200, quality: 82 },
  { name: 'bussiness.png', out: 'bussiness.webp', width: 1200, quality: 82 },
  { name: 'service-des1.png', out: 'service-des1.webp', width: 1000, quality: 82 },
  { name: 'service-des2.png', out: 'service-des2.webp', width: 1000, quality: 82 },
  { name: 'service-des3.png', out: 'service-des3.webp', width: 1000, quality: 82 },
  { name: 'dashboard ERp.png', out: 'dashboard ERp.webp', width: 1200, quality: 82 },
  { name: 'dashboard salon.png', out: 'dashboard salon.webp', width: 1200, quality: 82 },
  { name: 'dashboard queue.png', out: 'dashboard queue.webp', width: 1200, quality: 82 },
  { name: 'company-logos/logo2.jpg', out: 'company-logos/logo2.webp', width: 400, quality: 80 },
  { name: 'company-logos/logo6.jpg', out: 'company-logos/logo6.webp', width: 400, quality: 80 },
  { name: 'company-logos/logo11.jpg', out: 'company-logos/logo11.webp', width: 400, quality: 80 },
  { name: 'company-logos/logo5.jpg', out: 'company-logos/logo5.webp', width: 400, quality: 80 },
];

async function convert() {
  for (const item of images) {
    const inputPath = path.join(imagesDir, item.name);
    const outputPath = path.join(imagesDir, item.out);
    if (!fs.existsSync(inputPath)) {
      console.log('Skipping missing:', item.name);
      continue;
    }
    const origSize = fs.statSync(inputPath).size;
    await sharp(inputPath)
      .resize({ width: item.width, withoutEnlargement: true })
      .webp({ quality: item.quality, effort: 4 })
      .toFile(outputPath);
    const newSize = fs.statSync(outputPath).size;
    console.log(`Converted ${item.name} (${(origSize/1024).toFixed(1)} KB) -> ${item.out} (${(newSize/1024).toFixed(1)} KB)`);
  }
}

convert().catch(err => {
  console.error(err);
  process.exit(1);
});
