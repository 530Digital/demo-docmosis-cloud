// This Node.js example calls the Docmosis web service to create a PDF document
// from an invoice example template (WelcomeTemplate.doc).
//
// Copyright Docmosis 2018
//
require("dotenv").config();

const http = require("https");
const querystring = require("querystring");
const fs = require("fs");

// The data to use for generating the document
const invoiceData = require("./test-data/data");

// RESTful service host
const hostname = process.env.HOSTNAME;

// Your account key
const accessKey = process.env.DOCMOSIS_KEY;

// The template to use
// NOTE that it has to be defined in your account with the same name specified here
const template = "/MultiPageInvoiceTemplate.docx";

// The output file name
const output = "Invoice.pdf";

// The data to use for generating the document
const data = invoiceData;

const postData = querystring.stringify({
  accessKey: accessKey,
  templateName: template,
  outputName: output,
  data: JSON.stringify(data),
});

const options = {
  hostname: hostname,
  port: 443,
  path: "/api/render",
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": Buffer.byteLength(postData),
  },
};

const req = http.request(options, (res) => {
  switch (res.statusCode) {
    case 200:
      var file = fs.createWriteStream(output);

      // feed response into file
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(output, "created");
      });
      break;
    default:
      // 4XX errors - client errors - something needs to be corrected in the request
      // 5XX errors - server side errors - possibly worth a retry

      // show error response (details)
      console.log("Error response:", res.statusCode, res.statusMessage);
      var response = "";
      res.on("data", (data) => {
        response += data;
      });
      res.on("end", () => {
        console.log(response);
      });
  }
});

req.on("error", (e) => {
  console.error("Request error:", JSON.stringify(e, null, 4));
});

// write data to request body
req.write(postData);
req.end();
