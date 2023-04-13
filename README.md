# Demo Docmosis Cloud

[Docmosis Cloud](https://www.docmosis.com/products/cloud) is a cloud document generation API.

This demo is to get hands on with Docmosis Cloud.

## Requirements

- Node 18.15.0
- Docmosis Cloud Account & API Key
- [Understanding of Docmosis templates](https://resources.docmosis.com/search?issearch=1&theme=FilterList&isc=1&ordering=zelevance&category_id=2&searchword=Cloud)

### Getting Started

- Clone this repo to your machine
- `cd` into repo directory
- Rename .example.env to .env
- Log into your Docmosis Cloud account and get your API Key and update the .env file
- Upload the template located in ./templates to your Docmosis Cloud account temlate directory
- Run: `npm i`

#### Generating Documents

- Run: `node ./src/renderDocument.js`
- Open the file generated in the `output` directory

#### Other

- [Docmosis Security Statement](https://www.docmosis.com/products/cloud/#security-statement)
- [Example Templates](https://resources.docmosis.com/search?issearch=1&theme=FilterList&isc=1&ordering=zelevance&category_id=3)
- [Cloud (DWS3) - Web Services Guide](https://resources.docmosis.com/content/documentation/cloud-dws3-web-services-guide)
