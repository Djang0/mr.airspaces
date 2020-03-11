apt-get install tor
sudo service golf-bot start
git pull
sudo rm /etc/systemd/system/golf-bot.service
sudo cp golf-bot.service /etc/systemd/system/golf-bot.service
sudo systemctl enable golf-bot.service
npm install
sudo service golf-bot start
