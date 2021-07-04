import { Table, Column, Model, DataType, CreatedAt, UpdatedAt} from 'sequelize-typescript';
import { TableOptions } from 'sequelize-typescript';
const tableOptions: TableOptions = { timestamp: true, tableName: 'Bookings' } as TableOptions;
@Table(tableOptions)
export class Bookings extends Model<Bookings> {
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  public id: number;
  @Column({
    type: DataType.CHAR(200),
    allowNull: true,
  })
  public Location: string;
  @Column({
    type: DataType.CHAR(200),
    allowNull: true,
  })
  public Movie: string;
  @Column({
    type: DataType.CHAR(200),
    allowNull: true,
  })
  public Theatre: string;  
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  public Showtime: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  public Seat: number;
  @CreatedAt
  public createdAt: Date;
  @UpdatedAt
  public updatedAt: Date;
}