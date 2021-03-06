'use strict';

// had enabled by egg
// exports.static = true;


// Validate 参数校验插件启用
exports.validate = {
	enable: true,
	package: 'egg-validate',
};

// egg-view-nunjucks 模板引擎启用
exports.nunjucks = {
	enable: true,
	package: 'egg-view-nunjucks',
};

// ORM: sequelize 插件启用
exports.sequelize = {
	enable: true,
	package: 'egg-sequelize'
}

// redis启用
exports.redis = {
	enable: true,
	package: 'egg-redis',
};

// CORS跨域启用
exports.cors = {
	enable: true,
	package: 'egg-cors',
};