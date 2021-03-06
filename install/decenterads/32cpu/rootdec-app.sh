#!/bin/sh
#download dan install firefox
dpkg -i /root/mybot-master/dependencies/firefox-mozilla-build_58.0-0ubuntu1_amd64.deb
#install adobe-flashplugin
mkdir /root/.mozilla && mkdir /root/.mozilla/plugins && cp /root/mybot-master/dependencies/libflashplayer.so /root/.mozilla/plugins/libflashplayer.so
#Copy var www & set owner + chmod
rm -rf /var/www/html
cp -avr /root/mybot-master/decenterads/www/app /var/www/html
chown www-data:www-data /var/www/html
chmod +x /var/www/html
#copy config file php + nginx
cp /root/mybot-master/decenterads/config/app/32cpu/default /etc/nginx/sites-available/default
cp /root/mybot-master/dependencies/php.ini /etc/php/7.0/fpm/php.ini
cp /root/mybot-master/dependencies/www.conf /etc/php/7.0/fpm/pool.d/www.conf
#delete previous cronjob
crontab -r
#add cronjob
crontab -l > mycron
echo "*/30 * * * * php /root/mybot-master/decenterads/config/app/32cpu/kill.php > /dev/null 2>&1" >> mycron
#echo "@reboot sh /root/mybot-master/dependencies/disable_cpu.sh" >> mycron
crontab mycron
rm mycron
#add /etc/hosts
echo "127.0.0.1 monespace.me" >> /etc/hosts
#enable php-fpm and nginx
systemctl enable nginx && systemctl enable php7.0-fpm
#set chmod
chmod +x /root/mybot-master/decenterads/config/app/32cpu/*
#reboot
shutdown -r now