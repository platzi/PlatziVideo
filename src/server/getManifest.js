import fs from 'fs';

const getManifest = () => {
  try {
    return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`, 'utf8'));
  } catch (err) {
    console.log(err);
  }
};

export default getManifest;
