const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targets = [
  path.resolve(__dirname, 'src/public/images'),
  path.resolve(__dirname, 'src/public/images/heros')
];
const destination = path.resolve(__dirname, 'dist/');

const replaceImageUrl = (imageUrl) => imageUrl.replace(path.resolve(__dirname, 'src/public'), '');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

targets.forEach((target) => {
  fs.readdirSync(target)
    .forEach((filename) => {
      fs.stat((path.resolve(target, filename)), (_, stat) => {
        if (stat && (stat.isDirectory() === false)) {
          const splitFilename = filename.split('.');

          sharp(`${target}/${filename}`)
            .resize(800)
            .toFile(
              path.resolve(
                __dirname,
                `${destination}/${replaceImageUrl(target)}/${splitFilename[0]}-large.${splitFilename[1]}`
              )
            );

          sharp(`${target}/${filename}`)
            .resize(480)
            .toFile(
              path.resolve(
                __dirname,
                `${destination}/${replaceImageUrl(target)}/${splitFilename[0]}-small.${splitFilename[1]}`
              )
            );
        }
      });
    });
});