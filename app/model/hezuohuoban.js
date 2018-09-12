/* indent size: 1 */

module.exports = app => {
	const DataTypes = app.Sequelize;

	const Model = app.model.define('hezuohuoban', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		titlepic: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		link: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
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
		tableName: 'hezuohuoban'
	});

	Model.associate = function() {

	}

	return Model;
};
