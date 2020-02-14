var request = require('request');

txt="*I was upgraded version 1.4*"+'\n'+'\n'
txt+="In this version : "+'\n'
txt+=" - Everything changes! You only need one command (/glide) to get what you want. Have look at this video for more info : https://youtu.be/zfZ6gxmysuE ;"+'\n'
txt+=" - Mr. Aispaces has a brand new website, check it out : https://www.mr-airspaces.cloud/ ;"+'\n'
txt+=" - You can now combine A.I analyses with weather forecasts. Use /forecast command;"+'\n'
txt+=" - You can contact developer from the website's home page. Click the @ button;"+'\n'
txt+=" - Mr.Aispaces is ready to be translated and multilingual. Good wills are welcome for translations."+'\n' +'\n'
txt+=""+'\n'
txt+="Mr. Airspaces"+'\n'

url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=580703241&text=' + txt+ "&parse_mode=Markdown";
request(url, function(error, response, body) {
  if (!error && response.statusCode == 200) {

  }
});
