import { insertUsername } from "../db/queries.js";

export async function createUsernamePost(req, res) {
    const { username } = req.body;
    await insertUsername(username);
    res.redirect("/");
  }

export  async function createUsernameGet(req, res) {
    res.render('new')
  }