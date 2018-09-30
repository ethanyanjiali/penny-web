# Penny Web [![CircleCI](https://circleci.com/gh/ethanyanjiali/penny-web.svg?style=svg)](https://circleci.com/gh/ethanyanjiali/penny-web)

Penny (http://mypenny.co) is a free tool to help people split complicated group expenses with their friends. The service is launched in 2016 and 
getting more and more popular nowadays because it's so easy to use. Not like other group expense tool, Penny doesn't
require sign up or login. You just need to share the URL to your friends, then everyone can start filling the expense they paid 
from their own device. In the meantime, the settlement will be calculated automatically to guide you how to pay out.

Just like the backend, I've open sourced this web UI of Penny in 2018. This single page application is written in React, Redux and Semantic-UI. 
The amazing styled-components, Webpack and Babel also help to make it happen. The static files are hosted on AWS S3. DNS is 
managed by AWS Route 53 and CDN is hosted by CloudFront. Remember, if possible, do not use Google Cloud. 


## Development

This project uses webpack-dev-server to spin up local server

1. Make sure node 8+ and npm 5+ are installed.
0. Install dependencies
    ```bash
    npm i
    ```
0. Start local web server
    ```bash
    npm run start
    ```

## Deployment

This project use Circle CI to deploy master changes to production. Webpack will generate prod bundle and 
it will be synced to AWS S3. In case you need to manually deploy:

1. Make sure `awscli` is installed and properly authorized
1. Create production build first
    ```
    npm run build
    ```
2. Copy files to www.mypenny.co GCS bucket
    ```
    aws s3 sync ./build s3://mypenny.co --delete
    ```

## TODOS
2. React Final Form
3. Redux Database
4. Redesign
9. Async Await
11. Refactor
12. PWA
15. Fix linting
