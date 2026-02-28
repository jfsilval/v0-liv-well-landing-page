import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

async function removeWhiteBackground() {
  const inputPath = path.join(publicDir, 'logo.png');
  const outputPath = path.join(publicDir, 'logo-transparent.png');

  // Read image and get raw pixel data
  const image = sharp(inputPath);
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Image: ${width}x${height}, channels: ${channels}`);

  // Process pixels: make white/near-white pixels transparent
  const threshold = 240; // pixels with R,G,B all above this become transparent
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    if (r >= threshold && g >= threshold && b >= threshold) {
      data[i + 3] = 0; // Set alpha to 0 (transparent)
    }
  }

  // Save as PNG with transparency
  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(outputPath);

  console.log(`Saved transparent logo to: ${outputPath}`);

  // Also create a white version for the footer (white logo on transparent bg)
  const whiteOutputPath = path.join(publicDir, 'logo-white.png');
  
  // Re-read and process: make non-transparent pixels white
  const { data: data2, info: info2 } = await sharp(outputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data2.length; i += info2.channels) {
    const a = data2[i + 3];
    if (a > 0) {
      // Make pixel white but keep alpha
      data2[i] = 255;     // R
      data2[i + 1] = 255; // G
      data2[i + 2] = 255; // B
    }
  }

  await sharp(data2, { raw: { width: info2.width, height: info2.height, channels: info2.channels } })
    .png()
    .toFile(whiteOutputPath);

  console.log(`Saved white logo to: ${whiteOutputPath}`);
}

removeWhiteBackground().catch(console.error);
