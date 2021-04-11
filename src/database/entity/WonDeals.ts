import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity } from "typeorm";
import { IWonDeals } from "../../utils/interfaces";

@Entity()
export class WonDeals extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  wonDeals: IWonDeals[];
}
