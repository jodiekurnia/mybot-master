#!bin/bash
killall -9 firefox
killall -9 Xvfb
killall -9 start.sh
killall -9 kill.php
cd /tmp
sudo rm -r slimerjs*
cd /root/mybot-master/ && git pull
#hit update file
/root/mybot-master/decenterads/update/web/cron_16cpu.sh
#extract DB-IP
unzip -o /root/mybot-master/dependencies/GeoLite2-City.mmdb.zip -d /root/mybot-master/decenterads/www/web/inc
unzip -o /root/mybot-master/dependencies/IP2PROXY-LITE-PX8.BIN.zip -d /root/mybot-master/decenterads/www/web/inc
#copy config nginx
cp /root/mybot-master/decenterads/config/web/16cpu/default /etc/nginx/sites-available/default
#Copy var www & set owner + chmod
rm -rf /var/www/html
cp -avr /root/mybot-master/decenterads/www/web /var/www/html
chown www-data:www-data /var/www/html
chmod +x /var/www/html
systemctl reload nginx
#start bot
/root/mybot-master/decenterads/config/web/16cpu/start.sh