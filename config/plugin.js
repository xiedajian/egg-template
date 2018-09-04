'use strict';

// had enabled by egg
// exports.static = true;


// Validate 参数校验插件
exports.validate = {
	enable: true,
	package: 'egg-validate',
};

// egg-view 模板引擎
exports.view = {
	enable: true,
	package: 'egg-view',
};