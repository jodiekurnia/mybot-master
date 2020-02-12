#!/bin/sh
#download dan install firefox
dpkg -i /root/mybot-master/dependencies/firefox-mozilla-build_58.0-0ubuntu1_amd64.deb
#install adobe-flashplugin
mkdir /root/.mozilla && mkdir /root/.mozilla/plugins && cp /root/mybot-master/dependencies/libflashplayer.so /root/.mozilla/plugins/libflashplayer.so
#Copy var www & set owner + chmod
rm -rf /var/www/html
cp -avr /root/mybot-master/decenterads/www/web /var/www/html
chown www-data:www-data /var/www/html
chmod +x /var/www/html
#copy config file php + nginx
cp /root/mybot-master/decenterads/config/web/2cpu/default /etc/nginx/sites-available/default
cp /root/mybot-master/dependencies/php.ini /etc/php/7.0/fpm/php.ini
cp /root/mybot-master/dependencies/www.conf /etc/php/7.0/fpm/pool.d/www.conf
#delete previous cronjob
crontab -r
#add cronjob
crontab -l > mycron
echo "*/10 * * * * php /root/mybot-master/decenterads/config/web/2cpu/kill.php > /dev/null 2>&1" >> mycron
crontab mycron
rm mycron
#add /etc/hosts
echo "127.0.0.1 monespace.me" >> /etc/hosts
echo "127.0.0.1 newmobility.news" >> /etc/hosts
echo "127.0.0.1 www.hyundai.news" >> /etc/hosts
echo "127.0.0.1 metrology.news" >> /etc/hosts
echo "127.0.0.1 www.sharedmobility.news" >> /etc/hosts
echo "127.0.0.1 aimotive.com" >> /etc/hosts
echo "127.0.0.1 www.vigilantekorsou.news" >> /etc/hosts
echo "127.0.0.1 www.acea.be" >> /etc/hosts
echo "127.0.0.1 www.fleetnews.co.uk" >> /etc/hosts
echo "127.0.0.1 www.cardekho.com" >> /etc/hosts
echo "127.0.0.1 www.fia.com" >> /etc/hosts
echo "127.0.0.1 www.dailysportscar.com" >> /etc/hosts
echo "127.0.0.1 automotivedigest.com" >> /etc/hosts
echo "127.0.0.1 hondanews.com" >> /etc/hosts
#new-add
echo "127.0.0.1 carcar.news" >> /etc/hosts
echo "127.0.0.1 www.time24.news" >> /etc/hosts
echo "127.0.0.1 www.autotorque.news" >> /etc/hosts
echo "127.0.0.1 www.montclairlocal.news" >> /etc/hosts
echo "127.0.0.1 www.thecarconnection.com" >> /etc/hosts
echo "127.0.0.1 mettisglobal.news" >> /etc/hosts
echo "127.0.0.1 obor.news" >> /etc/hosts
echo "127.0.0.1 www.motor1.com" >> /etc/hosts
echo "127.0.0.1 www.thedrive.com" >> /etc/hosts
echo "127.0.0.1 www.motortrend.com" >> /etc/hosts
echo "127.0.0.1 www.autoblog.com" >> /etc/hosts
echo "127.0.0.1 www.caranddriver.com" >> /etc/hosts
echo "127.0.0.1 www.topgear.com" >> /etc/hosts
echo "127.0.0.1 www.automobilemag.com" >> /etc/hosts
echo "127.0.0.1 www.motorauthority.com" >> /etc/hosts
echo "127.0.0.1 carbuzz.com" >> /etc/hosts
echo "127.0.0.1 www.thetruthaboutcars.com" >> /etc/hosts
echo "127.0.0.1 www.autoweek.com" >> /etc/hosts
echo "127.0.0.1 www.roadandtrack.com" >> /etc/hosts
echo "127.0.0.1 www.just-auto.com" >> /etc/hosts
echo "127.0.0.1 www.rushlane.com" >> /etc/hosts
echo "127.0.0.1 driving.ca" >> /etc/hosts
echo "127.0.0.1 www.topspeed.com" >> /etc/hosts
echo "127.0.0.1 www.nextgreencar.com" >> /etc/hosts
echo "127.0.0.1 www.automotiveworld.com" >> /etc/hosts
echo "127.0.0.1 www.autospies.com" >> /etc/hosts
echo "127.0.0.1 practicalmotoring.com.au" >> /etc/hosts
echo "127.0.0.1 www.drive.com.au" >> /etc/hosts
echo "127.0.0.1 www.whichcar.com.au" >> /etc/hosts

#enable php-fpm and nginx
systemctl enable nginx && systemctl enable php7.0-fpm
#set chmod
chmod +x /root/mybot-master/decenterads/config/web/2cpu/*
#reboot
shutdown -r now