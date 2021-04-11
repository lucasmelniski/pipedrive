import { ObjectId } from "mongodb";
import { getConnection } from "typeorm";
import { IWonDeals } from "../../utils/interfaces";
import { WonDeals } from "../entity/WonDeals";

export default class WonDealsResolvers {
  constructor() {}

  public async get(): Promise<WonDeals> {
    const dealsWon = await getConnection().manager.findOne(WonDeals);
    return dealsWon;
  }

  public async getOneByDate(date: string): Promise<IWonDeals> {
    const dealsWon = await this.get();
    if (!dealsWon) throw new Error("No data in database found");
    const result = dealsWon.wonDeals.find((dealWon) => dealWon.date === date);
    if (!result) throw new Error("There is no won Deals in this date");
    return result;
  }

  public async update(updatedDeals: WonDeals): Promise<boolean> {
    const _id = new ObjectId(updatedDeals._id);
    const result = await getConnection().manager.update(
      WonDeals,
      { _id },
      updatedDeals
    );
    return !!result;
  }

  public async addOne(wonDeals: IWonDeals[]): Promise<boolean> {
    const newDeal = new WonDeals();
    newDeal.wonDeals = wonDeals;
    const result = await getConnection().manager.save(newDeal);
    return !!result;
  }

  public async saveOrCreate(wonDeals: IWonDeals[]): Promise<boolean> {
    const dealsWon = await this.get();
    if (dealsWon) {
      dealsWon.wonDeals = wonDeals;
      await this.update(dealsWon);
    } else {
      await this.addOne(wonDeals);
    }
    return true;
  }
}
