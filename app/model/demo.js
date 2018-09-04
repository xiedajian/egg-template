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
	
	const Demo = app.model.define('user', {
		id: { type: INTEGER, primaryKey: true, autoIncrement: true },
		title: STRING(30),
		// created_at: DATE,
		// updated_at: DATE,
	},{
		tableName:'user'
	});
	
	return Demo;
};