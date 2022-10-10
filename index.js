const urls = require('./urls.json');
const { URL, URLSearchParams } = require('url');
const { get } = require('https');

function getContent(url) {
  return new Promise((resolve, reject) => {
    get(url, (res) => {
      if (res.statusCode !== 200) {
        res.resume();
        reject(`Request failed! Status Code: ${res.statusCode}`);
      }
      res.setEncoding('utf-8');
      let rawData = '';
      res.on('data', (chunk) => (rawData += chunk));
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          resolve(parsedData);
        } catch (e) {
          reject(`Error Occurred! ${e.message}`);
        }
      });
    }).on('error', (e) => {
      reject(`Error Occurred! ${e.message}`);
    });
  });
}

class DiscordActionsClient {
  constructor() {
    this.sfw = {};
    this.nsfw = {};

    Object.keys(urls.sfw).forEach(async (endpoint) => {
      this.sfw[endpoint] = async function (queryParams = '') {
        let url = new URL(urls.sfw[endpoint]);
        queryParams !== '' ? (url.search = new URLSearchParams(queryParams)) : '';
        return await getContent(url.toString());
      };
    });
    Object.keys(urls.nsfw).forEach(async (endpoint) => {
      this.nsfw[endpoint] = async function (queryParams = '') {
        let url = new URL(urls.nsfw[endpoint]);
        queryParams !== '' ? (url.search = new URLSearchParams(queryParams)) : '';
        return await getContent(url.toString());
      };
    });
  }
}

module.exports = DiscordActionsClient;
