#!/bin/sh
#download dan install firefox
dpkg -i /root/mybot-master/dependencies/firefox-mozilla-build_58.0-0ubuntu1_amd64.deb
#install adobe-flashplugin
mkdir /root/.mozilla && mkdir /root/.mozilla/plugins && cp /root/mybot-master/dependencies/libflashplayer.so /root/.mozilla/plugins/libflashplayer.so
#extract DB-IP
unzip -o /root/mybot-master/dependencies/GeoLite2-City.mmdb.zip -d /root/mybot-master/decenterads/web/www/inc
unzip -o /root/mybot-master/dependencies/IP2PROXY-LITE-PX8.BIN.zip -d /root/mybot-master/decenterads/web/www/inc
#Create SymLink
#
#
# To Do List
#
#
#update php-ini
wget https://rootends.com/linux-master/decenterads/awsfreetier/website/config/phpini.txt -O /etc/php/7.0/fpm/php.ini
#delete previous cronjob
crontab -r
#change chmod to the requirement file
chmod +x /mybot/boot.sh && chmod +x /mybot/kill.sh && chmod +x /mybot/start.sh
#add cronjob
crontab -l > mycron
echo "@reboot sh /mybot/boot.sh" >> mycron
echo "*/5 * * * * sh /mybot/kill.sh" >> mycron
echo "0 * * * * php /mybot/restart.php" >> mycron
crontab mycron
rm mycron
shutdown -r now