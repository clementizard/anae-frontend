import express from 'express';
import Loadable from 'react-loadable';
// import fs from 'fs';

// const key = fs.readFileSync(__dirname + '/../selfsigned.key');
// const cert = fs.readFileSync(__dirname + '/../selfsigned.crt');
// const options = {
//   key: key,
//   cert: cert
// };

let app = require('./server').default;

if (module.hot) {
  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    
    try {
      app = require('./server').default;
    } catch (error) {
      console.error(error);
    }
  });
  console.info('✅  Server-side HMR Enabled!');
}

const port = process.env.PORT || 3000;

export default Loadable.preloadAll().then(() =>
  express()
    .use((req, res) => app.handle(req, res))
    .listen(port, function(err) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`🚀 Started on port ${port}`);
    })
);
