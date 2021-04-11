import * as express from "express";
import "reflect-metadata";
import WonDealsResolvers from "../database/resolvers/WonDealsResolvers";
import { BlingDemands } from "../api/Bling/Demands";
import PipedriveDeals from "../api/Pipedrive/Deals";
import { Utils } from "../utils/utils";
import * as dotenv from "dotenv";
dotenv.config();

const deals = express.Router();
const pipedrive = new PipedriveDeals();
const blingDeals = new BlingDemands();
const wonDealsResolvers = new WonDealsResolvers();

deals.get("/all", async (req, res) => {
  const result = await wonDealsResolvers.get();
  res.send(result);
});

deals.get("/one/:date", async (req, res) => {
  try {
    const date = req.params.date.replace(/-/g, "/");
    console.log(date)
    const result = await wonDealsResolvers.getOneByDate(date);
    res.send(result);
  } catch (err) {
    res.send({ statusCode: 400, body: err.message });
  }
});

deals.get("/integrate", async (req, res) => {
  try {
    const deals = await pipedrive.getAllDealsWon();
    if (!deals) {
      return res.send({
        statusCode: 400,
        body: "You don't have any won deals",
      });
    }
    blingDeals.addDemands(deals);
    const wonDeals = Utils.agrupateDealsByDate(deals);
    wonDealsResolvers.saveOrCreate(wonDeals);
    res.send({ statusCode: 200, body: deals });
  } catch (err) {
    res.send({ statusCode: 400, body: err.message });
  }
});

deals.post("/create/:manyTimes", async (req, res) => {
  const manyTimes = parseInt(req.params.manyTimes);
  if (isNaN(manyTimes)) {
    return res.send({ statusCode: 400, body: "Please, send a number" });
  } else {
    const deals = await pipedrive.addRandomDeals(manyTimes);
    return res.send({
      statusCode: 200,
      body: `Created ${deals.wonTimes + deals.lostTimes} deals:\n ${
        deals.wonTimes
      } wons: ${deals.wonValue} \n ${deals.lostTimes} losts: ${
        deals.lostValue
      }`,
    });
  }
});

export default deals;
