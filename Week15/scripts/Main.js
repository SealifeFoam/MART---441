var http = require('http');
var fs = require('fs');
var url = require('url');
const parse = require('node-html-parser').parse;
var Order = "";

// Create a server
http.createServer(function (request, response) {
   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;
  
   const queryObject = url.parse(request.url, true).query;

   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");

   // check to see if we are on the second page or not
   if(pathname == "/Secondindex.html")
   {
      readQueryString(queryObject);
   }
   // Read the requested file content from file system
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);

         response.writeHead(404, {
            'Content-Type': 'text/html'
         });
      } else {

         response.writeHead(200, {
            'Content-Type': 'text/html'
         });
         // Write the content of the file to response body
         response.write(data.toString());
      }

     
      response.end();
   });
}).listen(8081);
console.log("Listening on Port 8081");

// this function grabs all the data from the queryString
function readQueryString(queryObject) {
  
   // access to the queryString variables
   if (queryObject != null) {
      let fName = queryObject.Name;
      let cSize = queryObject.CoffeeSize;
      let Bname = queryObject.BeverageName
      if (fName != undefined && cSize != undefined && Bname != undefined) {
         Order = fName + " " + Bname;
         // 
         updateFile(Order);
      }
     
   }
}

// this function updates the html file
function updateFile(Order)
{
   fs.readFile('Secondindex.html', 'utf8', (err,html)=>{
      if(err){
         throw err;
      }
   
      // read through the DOM to change it
      let root = parse(html);
      // find the span tag in the file
      let mySpan = root.querySelector('span');
     
      // change the content of 
      mySpan.set_content(Order);
      
      // creates the stream
      var writerStream = fs.createWriteStream("Secondindex.html");
      // Writes the data to stream 
      writerStream.write(root.toString(), 'UTF8');
      
      writerStream.end();
      writerStream.on('finish', function () {
         console.log("Write completed.");
      });

      writerStream.on('error', function (err) {
         console.log(err.stack);
      });   
    });
 
}