"use strict";
const plugin = {},
  meta = module.parent.require('./meta'),
  translator = require.main.require('./public/src/modules/translator');
plugin.init = (params, callback) => {
  const app = params.router,
    middleware = params.middleware,
    controllers = params.controllers;

  app.get('/admin/plugins/cplayer', middleware.admin.buildHeader, renderAdmin);
  app.get('/api/admin/plugins/cplayer', renderAdmin);

  callback();
};

plugin.addAdminNavigation = (header, callback) => {
  header.plugins.push({
    route: '/plugins/cplayer',
    icon: 'fa-tint',
    name: ''
  });

  callback(null, header);
};
