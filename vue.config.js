module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        productName: 'travis-electron-vue-demo',
        appId: 'com.example.travis-electron-vue-demo',
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true,
          installerIcon: 'icon/win32/icon.ico',
          createDesktopShortcut: true,
          createStartMenuShortcut: true
        },
        mac: {
          icon: 'icon/darwin/icon.icns',
          artifactName: '${name}-setup-${os}-${arch}-${version}.${ext}',
          target: 'pkg'
        },
        win: {
          icon: 'icon/win32/icon.ico',
          artifactName: '${name}-setup-${os}-${arch}-${version}.${ext}'
        },
        linux: {
          icon: 'icon/linux/icon.png',
          artifactName: '${name}-setup-${os}-${arch}-${version}.${ext}'
        },
        publish: [
          {
            provider: 'github',
            releaseType: 'release'
          }
        ]
      }
    }
  }
}
