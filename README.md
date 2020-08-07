# Mr. airspaces

Mr-Airspaces is a Telegram bot aiming to help paraglider pilots to fly.

## Global architecture

First of all, this is a week-end project, don't be too picky.

Mr-Airspaces is composed of three different sub-projects:

* mr-airspaces  : The code of the bot itself. It is working as a webhook, it means that Telegram servers are securely forwarding user requests to this code;
* [bot-histo] (https://github.com/Djang0/bot-histo) : This is serving historical data for the website, in order to provide statistical overview. It is also a proxy for delivering openAIR files without revealing mr-airspaces's real IP;
* [mr-airspaces.cloud] (https://github.com/Djang0/mr.airspaces.cloud) : This is the web site.

I tried to make it an almost 0 euro cost project so I use freebees as much as possible. You might want to act differently.

## Requirements

* [register a telegram bot](https://tutorials.botsfloor.com/how-to-build-telegram-powered-bots-78c092298df6)
* Hosting : First I hosted the bot on a raspberry pi then switched my mind and went for a vultr account. Anything with debian / ubuntu linux would do the trick.
* Heroku free account for bot-histo;
* SSL certificate : This is required by telegram to secure the exchange. I went for a free renewable certificate at let's encrypt. But it requires a bit more of server administration.
* Free static web hosting such as netlify for the web site;
* A domain name for the web site;

## Install procedure

```
sudo apt-get install curl software-properties-common
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt-get install nodejs
apt-get install tor
sudo rm /etc/systemd/system/golf-bot.service
sudo cp golf-bot.service /etc/systemd/system/golf-bot.service
sudo systemctl enable golf-bot.service
sudo apt-get install git

```

Adapt golf-bot.service to your need.

```
git clone https://github.com/Djang0/mr.airspaces.git

```
install [certbot](https://certbot.eff.org/) in the way you prefer.
Obtain certificate for you domain (the one that point to the bot not to the website), with certbot.
move certificate to ./sslcert/fullchain.pem and to ./sslcert/privkey.pem.

```
sudo service golf-bot start
```

## Cron jobs

To allow bot to gather data you should create cron jobs :

```
# m h  dom mon dow   command
*/10 * * * * /usr/bin/node /path/to/golf-status-bot/watchers/site_watcher.js >/dev/null 2>&1
*/10 * * * * /usr/bin/node /path/to/golf-status-bot/watchers/lfa_watcher.js >/dev/null 2>&1
*/10 * * * * /usr/bin/sh /path/too/golf-status-bot/watchers/wake_up_dynos.sh >/dev/null 2>&1
0 * * * * /usr/bin/node /path/to/golf-status-bot/watchers/oa_watcher.js
```

## Security

Since this code is public, you should change the url of the bot api. These are in index.js from line 1300 to line 1313. If you change it, then make a project wide search / replace.

you may also want to backup regularly chats.db in case of system crash.
