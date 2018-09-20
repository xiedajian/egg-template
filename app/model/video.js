/* indent size: 1 */

module.exports = app => {
	const DataTypes = app.Sequelize;

	const Model = app.model.define('video', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cover: {
			type: DataTypes.STRING(200),
			allowNull: true,
			defaultValue: ''
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		avatar: {
			type: DataTypes.STRING(200),
			allowNull: true,
			defaultValue: ''
		},
		author: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		like: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		comment: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		repost: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		source_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1',
			references: {
				model: 'source',
				key: 'id'
			}
		},
		path: {
			type: DataTypes.STRING(300),
			allowNull: false
		},
		duration: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		contrast_start: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		contrast_end: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		platform_id: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false
		},
		genre: {
			type: DataTypes.ENUM('video','bgm','all'),
			allowNull: true
		},
		url: {
			type: DataTypes.STRING(300),
			allowNull: true
		}
	}, {
		tableName: 'video',
		timestamps: false,
	});

	Model.associate = function() {

	}

	return Model;
};
