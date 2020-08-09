var db = require("./db");
const user = {};

user.createUser = async (data, callback) => {
  // insert document to 'users' collection using insertOne
  try {
      console.log(data)
    let res = await db.collection("users").insertOne(data);
    // console.log(res);
    callback(null, "success");
  } catch (err) {
    // console.log(err);
    callback(err, null);
  } finally {
    db.close();
  }
};

user.getUser = async (data, callback) => {
    // insert document to 'users' collection using insertOne
    try {
        console.log(data)
      let res = await db.collection("users").findOne(data);
      // console.log(res);
      callback(null, res);
    } catch (err) {
      // console.log(err);
      callback(err, null);
    } finally {
      db.close();
    }
  };

module.exports = user;
