import fs from 'fs';
require('dotenv').config();

const getManifest = () => {
  try {
    if (process.env.NODE_ENV !== 'development') {
      return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`, 'utf8'));
    }
  } catch (err) {
    console.log(err);
  }
};

export default getManifest;
