/* indent size: 1 */

module.exports = app => {
	const DataTypes = app.Sequelize;

	const Model = app.model.define('banner', {
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
		url: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		wapurl: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		titlepic: {
			type: DataTypes.STRING(255),
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
		tableName: 'banner'
	});

	Model.associate = function() {

	}

	return Model;
};
