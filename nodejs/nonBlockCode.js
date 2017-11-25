var fs = require('fs');

var data = fs.readFile('input.txt', (err, data) => {
  if (err) throw err;
  console.log("data:"+data);
  console.log("data to string:"+data.toString());
});

console.log(
  "ended."
);
