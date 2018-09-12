/* indent size: 1 */

module.exports = app => {
	const DataTypes = app.Sequelize;

	const Model = app.model.define('anli', {
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
		loupan_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		shejishi_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		title: {
			type: DataTypes.STRING(255),
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
		mutator: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		mianji: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		fengge_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		kongjian_id: {
			type: DataTypes.INTEGER(255),
			allowNull: false
		},
		tuijian: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		neirong: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		dianji: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
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
		tableName: 'anli'
	});

	Model.associate = function() {

	}

	return Model;
};
