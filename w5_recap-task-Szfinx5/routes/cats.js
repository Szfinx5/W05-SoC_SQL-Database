import express from "express";
const router = express.Router();

import {
  getCats,
  getCatsByName,
  getCatsByHuman,
  getCatsByHobby,
  createCats,
  getCatsByID,
  deleteCatById,
  updateDatByID,
} from "../models/cats.js";

router.get("/", async function (req, res) {
  if (req.query.name !== undefined) {
    let param = req.query.name;
    const result = await getCatsByName(param);
    res.json({ success: true, playload: result });
    return;
  }

  if (req.query.human !== undefined) {
    let param = req.query.human;
    const result = await getCatsByHuman(param);
    res.json({ success: true, payload: result });
    return;
  }

  if (req.query.hobby !== undefined) {
    let param = req.query.hobby;
    const result = await getCatsByHobby(param);
    res.json({ success: true, payload: result });
    return;
  }

  const result = await getCats();
  res.json({ success: true, payload: result });
  return;
});

router.get("/:id", async function (req, res) {
  let param = Number(req.params.id);
  const result = await getCatsByID(param);
  res.json({ success: true, payload: result });
});

router.post("/", async function (req, res) {
  let param = req.body;
  const result = await createCats(param);
  res.json({ success: true, payload: result });
});

router.delete("/:id", async function (req, res) {
  let param = Number(req.params.id);
  const result = await deleteCatById(param);
  res.json({ Success: true, payload: result });
});

router.put("/:id", async function (req, res) {
  let param = req.body;
  let id = req.params.id;
  const result = await updateDatByID(param, id);
  res.json({ Success: true, payload: result });
});

export default router;
