/* indent size: 1 */

module.exports = app => {
	const DataTypes = app.Sequelize;

	const Model = app.model.define('platform', {
		id: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			unique: true
		},
		cover_url: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		avator_url: {
			type: DataTypes.STRING(256),
			allowNull: true,
			defaultValue: ''
		}
	}, {
		tableName: 'platform'
	});

	Model.associate = function() {

	}

	return Model;
};
