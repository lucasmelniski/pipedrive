import * as pipedrive from "pipedrive";

export default class Pipedrive {
  constructor() {
    pipedrive.Configuration.apiToken = process.env.API_TOKEN_PIPEDRIVE;
  }
}
