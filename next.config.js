/** @type {import('next').NextConfig} */

const path = require('path');
const loaderUtils = require('loader-utils');
const MangleCssClassPlugin = require('mangle-css-class-webpack-plugin');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  webpack(config, { dev, isServer, nextRuntime }) {
    const rules = config.module.rules.find(rule => typeof rule.oneOf === 'object').oneOf.filter(rule => Array.isArray(rule.use));

    console.log('webpack ran, next runtime', nextRuntime, 'is server: ', isServer);

    if (!dev)
      rules.forEach(rule => {
        rule.use.forEach(moduleLoader => {
          if (moduleLoader.loader?.includes('css-loader') && !moduleLoader.loader?.includes('postcss-loader')) moduleLoader.options.modules.getLocalIdent = (context, _, exportName) => loaderUtils.getHashDigest(Buffer.from(`filePath:${path.relative(context.rootContext, context.resourcePath).replace(/\\+/g, '/')}#className:${exportName}`), 'md4', 'base64', 6).replace(/^(-?\d|--)/, '_$1');
        });
      });

    if (!dev) {
      console.log('css run');
      config.plugins.push(
        new MangleCssClassPlugin({
          classNameRegExp: '((hover|focus|xs|md|sm|lg|xl)[\\\\]*:)*(tw)-[a-zA-Z0-9-[#-_-]*',
          ignorePrefixRegExp: '',
          log: false,
          classGenerator: (original, opts, context) => {
            return btoa(original)
              .replace(/=/g, '')
              .replace(/^(-?\d|--)/, '_$1');
          }
        })
      );
    }

    return config;
  }
};
