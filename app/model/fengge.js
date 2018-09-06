/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/9/6
 * Time: 17:54
 */



'use strict';


// sequelize 定义模型
module.exports = app => {
	const { STRING, BIGINT, INTEGER, DATE, Now } = app.Sequelize;
	
	const Fengge = app.model.define('fengge', {
		id: { type: INTEGER, primaryKey: true, autoIncrement: true },
		title: STRING(255),
		paixu:INTEGER,
		created_at: {
			type:BIGINT,
			defaultValue:Now
		},
		// updated_at: {
		// 	type:DATE,
		// 	defaultValue:Now
		// },
	},{
		tableName:'fengge',
		timestamps: true,
		underscored: true,
		paranoid: true,
		
	});
	
	return Fengge;
};