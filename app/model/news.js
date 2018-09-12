/* indent size: 1 */

module.exports = app => {
	const DataTypes = app.Sequelize;

	const Model = app.model.define('news', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		fenlei_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		bianji: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		key: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		miaoshu: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		titlepic: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		dianji: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		neicong: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		tuijian: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		created_at: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		updated_at: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		deleted_at: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'news'
	});

	Model.associate = function() {

	}

	return Model;
};
