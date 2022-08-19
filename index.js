const GoLogin = require('gologin')

const SCREEN_WIDTH = process.env.SCREEN_WIDTH;
const SCREEN_HEIGHT = process.env.SCREEN_HEIGHT;

const gologinParams = {
  token: process.env.TOKEN,
  profile_id: process.env.PROFILE_ID,
  remote_debugging_port: 3500,
  executablePath: '/usr/bin/orbita-browser/chrome',
  extra_params: ['--start-maximized',  '--disable-dev-shm-usage', '--no-sandbox', '--no-zygote', '--window-position=0,0', `--window-size=${SCREEN_WIDTH},${SCREEN_HEIGHT}`],
};

const GL = new GoLogin(gologinParams);
console.log(gologinParams)

function checkBrowser(){
  console.log('working port', 3000, 'profile', process.env.PROFILE_ID)  
}

async function startBrowser(){
  const wsUrl = await GL.start({
      uploadCookiesToServer: true,
      autoUpdateBrowser: false,
  });
  setInterval(checkBrowser, 1000);
}

startBrowser();