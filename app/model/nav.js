/**
 * sequelize ORM模型定义.
 * User: admin
 * Date: 2018/9/4
 * Time: 18:24
 */


'use strict';


// sequelize 定义模型
module.exports = app => {
	const { STRING, INTEGER, DATE } = app.Sequelize;
	
	const Nav = app.model.define('nav', {
		id: { type: INTEGER, primaryKey: true, autoIncrement: true },
		name: STRING(30),
		password:{type:STRING(64)},
		pid:{type: INTEGER},
		created_at: DATE,
		updated_at: DATE,
	},{
		tableName:'nav',
		underscored: true,
		freezeTableName: true,
		paranoid: true,
	});
	
	return Nav;
};