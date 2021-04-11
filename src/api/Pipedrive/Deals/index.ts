import * as pipedrive from "pipedrive";
import Pipedrive from "../pipedrive";
import { IRandomDeals } from "../../../utils/interfaces";

export default class PipedriveDeals extends Pipedrive {
    public async getAllDealsWon() {
        const input = [];
        input["status"] = "won";
        const deals = await pipedrive.DealsController.getAllDeals(input);
        return deals.data;
      }
    
      public async addRandomDeals(manyTimes: number) {
        const deals: IRandomDeals = {
          wonTimes: 0,
          wonValue: "0",
          lostTimes: 0,
          lostValue: "0",
        };
    
        for (let i: number = 0; i < manyTimes; i++) {
          const randomNumber = Math.random();
          const value: string = (Math.random() * 8000).toFixed(2);
          let status: string;
          if (randomNumber < 0.5) {
            status = "lost";
            deals.lostValue = `${parseInt(deals.lostValue) + parseInt(value)}`;
            deals.lostTimes++;
          } else {
            status = "won";
            deals.wonValue = `${parseInt(deals.wonValue) + parseInt(value)}`;
            deals.wonTimes++;
          }
          const input = [];
          input["body"] = {
            title: 'Nome do Cliente',
            status,
            value,
          };
          await pipedrive.DealsController.addADeal(input);
        }
        return deals;
      }

}