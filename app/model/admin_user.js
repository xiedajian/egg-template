/* indent size: 1 */

module.exports = app => {
	const DataTypes = app.Sequelize;

	const Model = app.model.define('admin_user', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING(190),
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING(60),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		avatar: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		remember_token: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		created_at: {
			type: DataTypes.TIME,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.TIME,
			allowNull: true
		}
	}, {
		tableName: 'admin_user'
	});

	Model.associate = function() {

	}

	return Model;
};
