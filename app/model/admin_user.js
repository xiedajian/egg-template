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
	
	const AdminUser = app.model.define('admin_user', {
		id: { type: INTEGER, primaryKey: true, autoIncrement: true },
		username: STRING(30),
		password:{type:STRING(64)},
		nickname:{type:STRING(30)},
		avator:STRING(255),
		created_at: DATE,
		updated_at: DATE,
	},{
		tableName:'admin_user',
		underscored: true,
		freezeTableName: true,
		paranoid: true,
	});
	
	return AdminUser;
};