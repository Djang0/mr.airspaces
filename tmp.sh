cp /etc/letsencrypt/live/mister.mr-airspaces.cloud/fullchain.pem /home/ludo/golf-status-bot/sslcert/fullchain.pem
cp /etc/letsencrypt/live/mister.mr-airspaces.cloud/privkey.pem /home/ludo/golf-status-bot/sslcert/privkey.pem

chown ludo:ludo /home/ludo/golf-status-bot/sslcert/*.pem
chmod 777 /home/ludo/golf-status-bot/sslcert/*.pem
