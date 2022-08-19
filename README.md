# Official Gologin Docker image

Orbita browser for running in docker with remote access

## Build docker image

`docker build . -t orbita-docker`

### Environment variables summary

- `SCREEN_WIDTH` profile screen width

- `SCREEN_HEIGHT` profile screen height

- `PROFILE_ID` gologin profile id

- `TOKEN` your gologin token

### Example

`sh build.sh` - build docker image

`sh start.sh` - start image local (replace environments with your parameters)

`npm i puppeteer-core` - install puppeteer-core

`node test.js` - run example