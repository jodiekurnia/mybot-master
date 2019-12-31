#!bin/bash
killall -9 firefox
killall -9 Xvfb
killall -9 start.sh
killall -9 kill.php
cd /tmp
sudo rm -r slimerjs*
cd /root/mybot-master/ && git pull
#extract DB-IP
unzip -o /root/mybot-master/dependencies/GeoLite2-City.mmdb.zip -d /root/mybot-master/decenteradsBig/web/www/inc
unzip -o /root/mybot-master/dependencies/IP2PROXY-LITE-PX8.BIN.zip -d /root/mybot-master/decenteradsBig/web/www/inc
#ganti chown & chmod
chown www-data:www-data /root/mybot-master/decenteradsBig/web/www/ -R
chmod +x /root/mybot-master/decenteradsBig/web/www/ -R
chmod +x root/mybot-master/decenteradsBig/web/config/*
systemctl reload nginx
#start bot
/root/mybot-master/decenteradsBig/web/config/start.sh