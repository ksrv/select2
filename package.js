Package.describe({
  name: 'ksrv:select2',
  version: '0.0.1',
  summary: 'Wrapper for jQuery plugin Select2',
  git: 'git@github.com:ksrv/select2.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.use('ecmascript');
  
  api.addFiles('select2/dist/css/select2.css', 'client');
  api.addFiles('select2/dist/js/select2.full.js', 'client', { bare: true });
});
