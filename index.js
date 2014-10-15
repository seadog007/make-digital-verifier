cheerio = require("cheerio");
var http = require("http");
var sublist = ["DFHqWaGMAk2rT",
"B1dhnLg86ythT",
"DkXV6zHTiry7b",
"CjVkl1fjIpb0T",
"eokYy3p9Mw1h",
"tko6SM7nlXtE",
"UY98xFbKN8JO",
"CTy1doB5LFvd",
"a2NRjm7ISYxy",
"tc2Vr8hMwWG8",
"BQGRGZ8vPwpU7",
"VPpJNaDh5sKz",
"KakKPmcZs3JO",
"D3zrIWOYY8JHU",
"zpKW2uNY4Eln",
"PcFcghCfghvF",
"eokYy3p9Mw1h",
"B72qtM9UxXa3o",
"BxQidiXyRQm8K",
"MMhR8F6Eqfvu",
"CIRgvY1Jv4wL5",
"9hVpVrNoG5gU",
"DLj52jck2l4b5",
"VPpJNaDh5sKz",
"EE1j6Jc1k6a2a",
"BhBMNXKfqdWXQ",
"WKhbQw2qrT19",
"BSP4nuBBfg6lY",
"DonC5USTuhj5F"];



//================================================================================



for (var b = sublist.length - 1; b >= 0; b--) {
  for (var i = 1; i <= 50; i++) {
  var vol = i;
  var subid = sublist[b];
  //console.log(gfu(vol, subid));
  download(gfu(vol, subid), function(data, subid, vol) {
    if (data) {
          var $ = cheerio.load(data);
          $('#button_link_download').each(function(i, e) {
          console.log(subid + ": " + vol);
        });
    }
  },
    subid,
    vol);
  };
};



//================================================================================



function download(url, callback, subid, vol) {
  http.get(url, function(res) {
    var data = "";
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on("end", function() {
      callback(data, subid, vol);
    });
  }).on("error", function() {
    callback(null);
  });
}


function gfu(vol,subid) {
  if(vol>=39){
    var url = "http://www.make-digital.com/make/volume_" + vol + "/?sub_id=" + subid;
  }else{
    if(vol<10){
      var url = "http://www.make-digital.com/make/vol0" + vol + "/?sub_id=" + subid;
    }else{
      var url = "http://www.make-digital.com/make/vol" + vol + "/?sub_id=" + subid;
    }
  }
  return(url);
}
