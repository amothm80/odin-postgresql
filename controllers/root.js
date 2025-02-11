import { getAllUsernames, searchUsernames } from "../db/queries.js";

export async function getUserNames(req, res) {
  let usernames =[];
  if (req.query.search && req.query.search != "") {
    usernames = await searchUsernames(req.query.search);
  } else {
    usernames = await getAllUsernames();
  }
  //   const users = usernames.map((user) => user.username);
  res
    .status(200)
    // .send("Usernames: " +usernames.map((user) => user.username).join(", "));
    .render("root", { usernames: usernames });
}
