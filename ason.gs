var CHANNEL_ACCESS_TOKEN = 'zvlX+HZ/TaCPEw3sswQrMoTc+XvZvr/OrPJf6t8i+qWlfbgJ8Rotd+i14p/kvovwYpN9MlNKGy5ev3J772mcxUc99X7OK9SEjPbhSHpMTckntymk3TmQUm7zS1lJ/5kJpRzb7mz3KlUFdN4bhv4lJwdB04t89/1O/w1cDnyilFU=';
var line_endpoint = 'https://api.line.me/v2/bot/message/reply';

function doGet(request) {
  return ContentService.createTextOutput(JSON.stringify({
    post: "ok"
  })).setMimeType(ContentService.MimeType.JSON);
}
var ws = SpreadsheetApp.openById('1shMx6yVasG5qaq7xH1cZjbpMMksyHGivrnyHsOf38Sc') //แก้2
var sheet = ws.getSheetByName("ชีต1"); //แก้3
var data = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getDisplayValues();
//Logger.log(data)
//var result = {
// type: 'text',
// text: 'ไม่พบข้อมูล'
//}

function doPost(e) {
  var json = JSON.parse(e.postData.contents);
  var reply_token = json.events[0].replyToken;
  var message = json.events[0].message.text;
  var msg = message.split(' ')
  if(msg[0]=='-find'){
  var msg1=msg[1].toUpperCase()

  for (var i = 0; i < data.length; i++) { 
    if (data[i][0] == msg1) {
      i = i + 2;
      var data1 = sheet.getRange(i, 1).getDisplayValue(); //ASON Route
      var data2 = sheet.getRange(i, 2).getDisplayValue(); //Node-A
      var data3 = sheet.getRange(i, 3).getDisplayValue(); //Work NAT
      var data4 = sheet.getRange(i, 4).getDisplayValue(); //Route Name
      var data5 = sheet.getRange(i, 5).getDisplayValue(); //Card Name (In)
      var data6 = sheet.getRange(i, 6).getDisplayValue(); //ODF (In)
      var data7 = sheet.getRange(i, 7).getDisplayValue(); //Card Name (Out)
      var data8 = sheet.getRange(i, 8).getDisplayValue(); //ODF (Out)

      result = 
 //-------------------------------     
    {
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "ข้อมูลลิงค์ ASON",
        "weight": "bold",
        "color": "#1DB446",
        "size": "sm"
      },
      {
        "type": "text",
        "text": data2,
        "weight": "bold",
        "size": "sm",
        "margin": "md"
      },
      {
        "type": "separator",
        "margin": "xxl"
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "xxl",
        "spacing": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "ASON Route",
                "size": "xxs",
                "color": "#555555",
                "flex": 0
              },
              {
                "type": "text",
                "text": data1,
                "size": "xxs",
                "color": "#111111",
                "align": "end"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "Work NAT",
                "size": "xxs",
                "color": "#555555",
                "flex": 0
              },
              {
                "type": "text",
                "text": data3,
                "size": "xxs",
                "color": "#111111",
                "align": "end"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "Route Name",
                "size": "xxs",
                "color": "#555555",
                "flex": 0
              },
              {
                "type": "text",
                "text": data4,
                "size": "xxs",
                "color": "#111111",
                "align": "end"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "Card Name (In)",
                "size": "xxs",
                "color": "#555555"
              },
              {
                "type": "text",
                "text": data5,
                "size": "xxs",
                "color": "#111111",
                "align": "end"
              }
            ]
          },
                    {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "ODF (In)",
                "size": "xxs",
                "color": "#555555"
              },
              {
                "type": "text",
                "text": data6,
                "size": "xxs",
                "color": "#111111",
                "align": "end"
              }
            ]
          },
                    {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "Card Name (Out)",
                "size": "xxs",
                "color": "#555555"
              },
              {
                "type": "text",
                "text": data7,
                "size": "xxs",
                "color": "#111111",
                "align": "end"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "ODF (Out)",
                "size": "xxs",
                "color": "#555555"
              },
              {
                "type": "text",
                "text": data8,
                "size": "xxs",
                "color": "#111111",
                "align": "end"
              }
            ]
          }
        ]
      },
      {
        "type": "separator",
        "margin": "xxl"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "margin": "md",
        "contents": [
          {
            "type": "text",
            "text": "Create by",
            "size": "xxs",
            "color": "#aaaaaa",
            "flex": 0
          },
          {
            "type": "text",
            "text": "Core Network Operation",
            "color": "#aaaaaa",
            "size": "xxs",
            "align": "end"
          }
        ]
      }
    ]
  },
  "styles": {
    "footer": {
      "separator": true
    }
  }
}


//-------------------------------
      result = {
        'type': 'flex',
        'altText': 'This is Flex Message',
        'contents': result
      }
      break;
    }
    else{
      var result = {
      type: 'text',
      text: 'ไม่พบข้อมูล'
      }
    };//End if   
  };//End for
  }
  UrlFetchApp.fetch(line_endpoint, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': reply_token,
      'messages': [result],
    }),
  });

  var replyJSON = ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
  return replyJSON;
}