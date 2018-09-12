/* indent size: 1 */

module.exports = app => {
	const DataTypes = app.Sequelize;

	const Model = app.model.define('fenlei', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		parent_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		titlepic: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		key: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		miaoshu: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		leixing: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		display: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
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
		tableName: 'fenlei'
	});

	Model.associate = function() {

	}

	return Model;
};
