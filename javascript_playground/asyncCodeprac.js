const fs = require('fs');
let mkInnerText;

fs.readFile('./mk.txt', (error, data) => {
  if (error) {
    console.error(error);
  };

  // console.log(data.toString());
  mkInnerText = data.toString();
  console.log(mkInnerText);
});

console.log(mkInnerText);

