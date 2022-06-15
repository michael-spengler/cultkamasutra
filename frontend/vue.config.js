module.exports = {
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      exclude: [/netlify.toml/]
    },
    manifestOptions: {
      display: 'fullscreen',
      // eslint-disable-next-line @typescript-eslint/camelcase
      start_url: '.',
      icons: [
        {
          src: 'pwa/splash/manifest-icon-512.jpg',
          size: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa/splash/manifest-icon-512.jpg',
          size: '384x384',
          type: 'image/png'
        }
      ]
    },
    name: 'SportKamasutra',
    themeColor: '#000',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    iconPaths: {
      favicon32: 'pwa/favicon-32.png',
      favicon16: 'pwa/favicon-16.png',
      appleTouchIcon: 'pwa/splash/apple-icon-152.jpg',
      maskIcon: 'pwa/maskIcon.svg',
      msTileImage: 'pwa/msTileImage-144.png'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData:
          "@import '@/scss/_variables.scss';\n@import '@/scss/_mixins.scss';"
      }
    }
  }
};
