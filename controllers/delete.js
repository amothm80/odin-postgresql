import { deleteUsername } from "../db/queries.js";

export async function deleteUsernamePost(req, res) {
  const { userid } = req.body;
  console.log(Number(userid));
  await deleteUsername(Number(userid));
  res.redirect("/");
}
