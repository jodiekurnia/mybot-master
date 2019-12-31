#!bin/bash
killall -9 firefox
killall -9 Xvfb
killall -9 start.sh
killall -9 kill.php
cd /tmp
sudo rm -r slimerjs*
cd /root/mybot-master/ && git pull
#extract DB-IP
unzip -o /root/mybot-master/dependencies/GeoLite2-City.mmdb.zip -d /root/mybot-master/decenterads/app/www/inc
unzip -o /root/mybot-master/dependencies/IP2PROXY-LITE-PX8.BIN.zip -d /root/mybot-master/decenterads/app/www/inc
#copy config nginx
cp /root/mybot-master/decenterads/app/config/default /etc/nginx/sites-available/default
#ganti chown & chmod
chown www-data:www-data /root/mybot-master/decenterads/app/www/ -R
chmod +x /root/mybot-master/decenterads/app/www/ -R
chmod +x root/mybot-master/decenterads/app/config/*
#start bot
/root/mybot-master/decenterads/app/config/start.sh