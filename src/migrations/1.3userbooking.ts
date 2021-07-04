import * as Sequelize from 'sequelize';
const tableName = 'Userbookings';
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
    UserId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Users',
            key: 'id',
          },        
    },
    BookingId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Bookings',
            key: 'id',
          },        
    },
    Seats: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
  });
};
export async function down(i: any) {
  const queryInterface = i.getQueryInterface() as Sequelize.QueryInterface;
  queryInterface.dropTable(tableName);
}