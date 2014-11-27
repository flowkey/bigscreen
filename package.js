Package.describe({
  name: 'flowkey:bigscreen',
  summary: 'A simple library for using the JavaScript Fullscreen API',
  version: '1.0.0',
  git: 'https://github.com/flowkey/bigscreen.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('bigscreen.js');
});