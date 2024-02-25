import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/", (req, res) => {
  res.send({ active: true });
});

router.head("/", (req, res) => {
  res.send(200);
});

export default router;
