import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { TableOptions } from 'sequelize-typescript';
import { Users } from '../user/user.entity';
import { Bookings } from '../booking/booking.entity';
const tableOptions: TableOptions = { timestamp: true, tableName: 'Userbookings' } as TableOptions;
@Table(tableOptions)
export class Userbookings extends Model<Userbookings> {
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  public id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  public Seats: number;
  @ForeignKey(() => Users)
  public UserId: number;
  @BelongsTo(() => Users, {
      as: 'Users',
      foreignKey: 'UserId',
      targetKey: 'id',
  })
  @ForeignKey(() => Bookings)
  public BookingId: number;
  @BelongsTo(() => Bookings, {
      as: 'Bookings',
      foreignKey: 'BookingId',
      targetKey: 'id',
  })    
  @CreatedAt
  public createdAt: Date;
  @UpdatedAt
  public updatedAt: Date;
}