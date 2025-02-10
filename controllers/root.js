import { getAllUsernames } from "../db/queries.js";

export async function getUserNames(req, res) {
  const usernames = await getAllUsernames();
  console.log("usernames", usernames.map((user) => user.username));
//   const users = usernames.map((user) => user.username);
  res
    .status(200)
    // .send("Usernames: " +usernames.map((user) => user.username).join(", "));
    .render('root',{usernames:usernames})
}
