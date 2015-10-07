Package.describe({
  name: 'flowkey:bigscreen',
  summary: 'A simple library for using the JavaScript Fullscreen API',
  version: '1.0.2',
  git: 'https://github.com/flowkey/bigscreen.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['reactive-var', 'flowkey:callback-list'], 'client');
  api.addFiles(['bigscreen.js', 'bigscreen-reactive.js'], "client");

  api.export('BigScreen');
});