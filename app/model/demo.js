/* indent size: 1 */

module.exports = app => {
	const { STRING, BIGINT, INTEGER, DATE } = app.Sequelize;
	const DataTypes = app.Sequelize;
	
	const Model = app.model.define('demo', {
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,           // 不允许为空
			primaryKey: true,           // 主键
			unique: true,
			autoIncrement: true         // 自增长
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		url: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		pic_url: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'demo',   //  定义表名
		timestamps: true,    // 自动维护时间戳 [ created_at、updated_at ]
		underscored: true,  // 不使用驼峰样式自动添加属性，而是下划线样式    [createdAt => created_at ]
		paranoid: true,     // 不从数据库中删除数据，而只是增加一个 deletedAt 标识当前时间
	});
	
	return Model;
};
