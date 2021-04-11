import prepareXML from "../../../utils/xml";
import { Bling } from "../bling";

export class BlingDemands extends Bling {
  public async getDemands() {
    return await this.request.get("pedidos/json/");
  }

  public async addDemands(deals) {
    deals.forEach(async (deal) => {
      const xml = prepareXML(deal.title, `${deal.value}`);
      await this.request.post("pedido/json/", "", { params: { xml } });
    });
  }
}
