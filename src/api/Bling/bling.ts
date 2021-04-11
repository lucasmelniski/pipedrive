import * as axios from "axios";
// import * as dotenv from "dotenv";
// dotenv.config();

export class Bling {
  public request: axios.AxiosInstance;
  constructor() {
    this.request = axios.default.create({
      params: {
        apikey: process.env.API_KEY_BLING,
      },
      baseURL: "https://bling.com.br/Api/v2/",
      timeout: 8000, // 8 segundos
    });
  }
}
