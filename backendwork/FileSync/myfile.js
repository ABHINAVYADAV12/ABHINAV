const fs = require("fs");
function write() {
  try {
    console.log("Before Writing");
    fs.writeFileSync("data.txt", "data is written by nodejs");
    console.log("After Writing");
    console.log("Data Written Successfully");
  } catch (err) {
    console.log("written successfully" + err);
  }
}

function read() {
  try {
    console.log("Before Reading");
    const rd = fs.readFileSync("data.txt");
    // ,{encoding:"utf-8"}
    console.log(rd.toString());

    console.log("After Reading");
  } catch (err) {
    console.log("read successfully" + err);
  }
}
function append() {
  try {
    console.log("Before Appending");
    fs.appendFileSync("data.txt", " Appended data by fs module");
    console.log("After Appending");
  } catch (err) {
    console.log("append successfully" + err);
  }
}
const obj = {
  write: write,
  read: read,
  append: append,
};
module.exports = obj;
// fs.unlinkSync("./data.txt")
// console.log("File Deleted")
