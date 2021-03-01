const expr = require('Express');
const http = require ('http');
const port=8090
var app = expr();

app.get('/', (req,res)=>
{
  res.send("Visual Hello");
  console.log("Hello sent"+port);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

console.log("uno");
console.log("dos");
console.log("3");
console.log("cuatro");
console.log("cinco");
console.log("a ver si va a branch");
//joer