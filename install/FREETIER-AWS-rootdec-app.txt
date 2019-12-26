#!/bin/sh
printf "1sampai5\n1sampai5" | passwd root
mkdir /mybot/
wget https://rootends.com/linux-master/commonsfiles/sshd_config_gcloud -O /mybot/sshd_config && cp /mybot/sshd_config /etc/ssh/sshd_config
systemctl restart sshd
wget https://rootends.com/linux-master/decenterads/awsfreetier/app/config/install.sh -O /mybot/install.sh
chmod +x /mybot/install.sh

dd if=/dev/zero of=/swapfile count=4096 bs=1M
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo "/swapfile   none    swap    sw    0   0" >> /etc/fstab

#add repository
add-apt-repository "deb http://archive.canonical.com/ubuntu $(lsb_release -sc) partner"

#configure-grub
DEBIAN_FRONTEND=noninteractive dpkg-reconfigure grub-pc

#Update dan install yg dibutuhkan
apt-get update && apt-get upgrade -y
apt-get install -y unzip nano nginx curl wget php-fpm htop libc6 libstdc++6 libgcc1 libgtk3.0 libasound2 libxrender1 libdbus-glib-1-2 xvfb adobe-flashplugin browser-plugin-freshplayer-pepperflash php-bcmath php-curl

#download dan install firefox
wget https://rootends.com/linux-master/commonsfiles/firefox-mozilla-build_58.0-0ubuntu1_amd64.deb -O /mybot/firefox-mozilla-build_58.0-0ubuntu1_amd64.deb
dpkg -i /mybot/firefox-mozilla-build_58.0-0ubuntu1_amd64.deb

#download dan setting slimerjs
wget https://github.com/laurentj/slimerjs/releases/download/1.0.0/slimerjs-1.0.0.zip -O /mybot/slimerjs-1.0.0.zip && unzip /mybot/slimerjs-1.0.0.zip -d /mybot && mv /mybot/slimerjs-1.0.0 /mybot/slimerjs

#download file2 bikin auto index dan script yg di download tiap restart ada di boot.sh
#setting file configurasi nginx & setting domain + hosts
wget https://rootends.com/linux-master/decenterads/awsfreetier/app/config/default -O /mybot/default && cp /mybot/default /etc/nginx/sites-available/default

#download file2 keren
wget https://rootends.com/linux-master/decenterads/awsfreetier/app/config/start.sh -O /mybot/start.sh
wget https://rootends.com/linux-master/decenterads/awsfreetier/app/config/kill.sh -O /mybot/kill.sh
wget https://rootends.com/linux-master/decenterads/awsfreetier/app/config/boot.sh -O /mybot/boot.sh
wget https://rootends.com/linux-master/decenterads/awsfreetier/app/config/restart.sh -O /mybot/restart.sh
wget https://rootends.com/linux-master/decenterads/awsfreetier/app/config/restart.txt -O /mybot/restart.php
wget https://rootends.com/linux-master/decenterads/awsfreetier/app/www/index.zip -O /var/www/html/index.zip && unzip -o /var/www/html/index.zip -d /var/www/html
wget https://rootends.com/linux-master/decenterads/awsfreetier/app/slimer/script.zip -O /mybot/slimerjs/script.zip && unzip -o /mybot/slimerjs/script.zip -d /mybot/slimerjs

#download BIN IP Country & IP Proxy Database
wget https://rootends.com/linux-master/commonsfiles/DBIP.zip -O /mybot/DBIP.zip && unzip -o /mybot/DBIP.zip -d /var/www/html/inc

#update php-ini
wget https://rootends.com/linux-master/decenterads/awsfreetier/app/config/phpini.txt -O /etc/php/7.0/fpm/php.ini

#delete previous cronjob
crontab -r

#install adobe-flashplugin
mkdir /root/.mozilla && mkdir /root/.mozilla/plugins && wget https://rootends.com/linux-master/commonsfiles/libflashplayer.so -O /root/.mozilla/plugins/libflashplayer.so

#update omni.ja SlimerJS
wget https://rootends.com/linux-master/commonsfiles/omni.ja -O /mybot/slimerjs/omni.ja

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