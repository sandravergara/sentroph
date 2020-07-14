// // HEADLESS

// const chromedriver = require('chromedriver');
// const config = require('./common/config');

// module.exports = {
//   page_objects_path: 'page-objects',

//   webdriver: {
//     start_process: true,
//     server_path: chromedriver.path,
//     port: 4444,
//     cli_args: ['--port=4444']
//   },

//   "test_settings" : {
//     "default" : {
//       launch_url: config.url,
//       screenshots: {
//       enabled: true,
//       path: 'reports/screenshots'
//       },
//       "desiredCapabilities": {
//         "browserName": "chrome",
//         "javascriptEnabled": true,
//         "acceptSslCerts": true,
//         "chromeOptions": {
//           "args": [
//             "--headless"
//           ]
//         }
//       }
//     }
//   }
// }




const chromedriver = require('chromedriver');
const config = require('./common/config');

module.exports = {
  page_objects_path: 'page-objects',
  test_settings: {
    default: {
        launch_url: config.url,
        screenshots: {
        enabled: true,
        path: 'reports/screenshots'
      },
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
        cli_args: ['--port=4444']
      },
        desiredCapabilities: {
        browserName: 'chrome'
    },
  },
  headless: {
      screenshots: {
        enabled: true,
        path: 'reports/screenshots'
      },
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
        cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
        args: ['--headless', 'incognito']
        }
      }
    }
  }
};

