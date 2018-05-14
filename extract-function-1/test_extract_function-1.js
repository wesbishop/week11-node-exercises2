const savePage = require("./extract1.js")
const url = 'https://en.wikipedia.org/wiki/Continuation-passing_style';
const filename = 'output.html';

savePage.saveWebPage(url,filename,() => {
  console.log("it worked");
})

