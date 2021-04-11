import * as dayjs from "dayjs";
import { IWonDeals } from "./interfaces";

type IterateDeals = {
  [date: string]: IWonDeals;
};
export class Utils {
  static agrupateDealsByDate(deals) {
    const wonDeals: IterateDeals = {};

    deals.forEach(async (deal) => {
      const date = dayjs(deal.won_time).format("DD/MM/YYYY");
      const total_value = deal.value;
      wonDeals[date] = {
        date: date,
        total_value: (wonDeals[date]?.total_value || 0) + total_value,
      };
    });

    return Object.values(wonDeals);
  }
}
