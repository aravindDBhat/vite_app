const details = [{}];
function SaveData(data: object, res) {
  details.push(data);
  console.log(details);
  return res.json({ details });
}
module.exports = SaveData;
