import App from './components/App';
import React from 'react';
import { Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import stats from '../build/react-loadable.json';
import { ServerStyleSheet } from 'styled-components';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    const modules = [];

    // Create the server side style sheet
    const sheet = new ServerStyleSheet();
    // When the app is rendered collect the styles that are used inside it
    const markup = renderToString(sheet.collectStyles(
      <Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Capture>
    ));

    // Generate all the style tags so they can be rendered into the page
    const styleTags = sheet.getStyleTags();

    if (context.url) {
      res.redirect(context.url);
    } else {
      const bundles = getBundles(stats, modules);
      const chunks = bundles.filter(bundle => bundle.file.endsWith('.js'));
      const styles = bundles.filter(bundle => bundle.file.endsWith('.css'));

      res.status(200).send(
  `<!doctype html>
    <html lang="fr">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <meta name="description" content="Créations de bijoux fabriqués à la main avec de véritables pierres naturelles." />
        <title>Anae</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="../public/favicon.ico" type="image/x-icon">
        <link rel="shortcut icon" href="../public/favicon.ico" type="image/x-icon">
        <link rel="apple-touch-icon" sizes="57x57" href="../public/favicon/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="../public/favicon/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="../public/favicon/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="../public/favicon/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="../public/favicon/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="../public/favicon/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="../public/favicon/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="../public/favicon/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="../public/favicon/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="../public/favicon/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="../public/favicon/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon/favicon-16x16.png">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="../public/favicon/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
        <!--        <link rel="manifest" href="../public/manifest.json">-->
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
        ${styles
          .map(style => {
            return `<link href="${style.file}" rel="stylesheet"/>`;
          })
          .join('\n')}
        <!-- Render the style tags gathered from the components into the DOM -->
        ${styleTags}
      </head>
      <body>
        <div id="root">${markup}</div>
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}"></script>`
            : `<script src="${assets.client.js}" crossorigin></script>`
        }
        ${chunks
          .map(
            chunk =>
              process.env.NODE_ENV === 'production'
                ? `<script src="/${chunk.file}"></script>`
                : `<script src="http://${process.env.HOST}:${parseInt(process.env.PORT, 10) + 1}/${chunk.file}"></script>`
          )
          .join('\n')}
        <script>window.main();</script>
      </body>
    </html>`
      );
    }
  });

export default server;
