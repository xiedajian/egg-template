/* indent size: 1 */

module.exports = app => {
	const DataTypes = app.Sequelize;

	const Model = app.model.define('webset', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		key: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		miaoshu: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		haoma: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		phone: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		banquan: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		tongji: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		guan: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		liyou: {
			type: DataTypes.TEXT,
			allowNull: true
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
		tableName: 'webset'
	});

	Model.associate = function() {

	}

	return Model;
};
