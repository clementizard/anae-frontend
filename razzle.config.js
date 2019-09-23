'use strict';

const razzleHeroku = require('razzle-heroku');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

module.exports = {
  modify(config, { target, dev }, webpack) {
    // Heroku
    config = razzleHeroku(config, {target, dev}, webpack);

    // React-loadable
    if (target === 'web') {
      return {
        ...config,
        plugins: [
          ...config.plugins,
          new ReactLoadablePlugin({
            filename: './build/react-loadable.json',
          }),
        ],
      };
    }
    return config;
  },
  plugins: [
    'bundle-analyzer',
    'compression',
  ],
};