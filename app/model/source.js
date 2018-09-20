/* indent size: 1 */

module.exports = app => {
	const DataTypes = app.Sequelize;

	const Model = app.model.define('source', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		genre: {
			type: DataTypes.ENUM('author','bgm','video'),
			allowNull: true
		}
	}, {
		tableName: 'source'
	});

	Model.associate = function() {

	}

	return Model;
};
