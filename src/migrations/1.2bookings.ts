import * as Sequelize from 'sequelize';
const tableName = 'Bookings';
export async function up(i: any) {
  const queryInterface = i.getQueryInterface() as Sequelize.QueryInterface;
  queryInterface.createTable(tableName, {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
    },
    Location: {
      type: Sequelize.CHAR(200),
      allowNull: false,
    },
    Movie: {
      type: Sequelize.CHAR(50),
      allowNull: false,
    },
    Theatre: {
      type: Sequelize.CHAR(250),
      allowNull: false,
    },
    Showtime: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    Seat: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    Details: {
      type: Sequelize.TEXT,
      allowNull: true,
    }
  });
};
export async function down(i: any) {
  const queryInterface = i.getQueryInterface() as Sequelize.QueryInterface;
  queryInterface.dropTable(tableName);
}