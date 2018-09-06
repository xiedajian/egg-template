/* indent size: 1 */

module.exports = app => {
	const DataTypes = app.Sequelize;

	const Model = app.model.define('user', {
		id: {
			type: DataTypes.INTEGER(20).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING(512),
			allowNull: true,
			defaultValue: ''
		}
	}, {
		tableName: 'user'
	});

	Model.associate = function() {

	}

	return Model;
};
