#!bin/bash
##run update
sudo apt-get update && sudo apt-get upgrade -y

#setting file configurasi nginx & setting domain + hosts
wget https://rootends.com/linux-master/decenterads/awsfreetier/website/config/default -O /mybot/default && cp /mybot/default /etc/nginx/sites-available/default

##update start.sh
wget https://rootends.com/linux-master/decenterads/awsfreetier/website/config/start.sh -O /mybot/start.sh

##update kill.sh
wget https://rootends.com/linux-master/decenterads/awsfreetier/website/config/kill.sh -O /mybot/kill.sh

##update www folder
wget https://rootends.com/linux-master/decenterads/awsfreetier/website/www/index.zip -O /var/www/html/index.zip && unzip -o /var/www/html/index.zip -d /var/www/html

##update script di slimerjs folder
wget https://rootends.com/linux-master/decenterads/awsfreetier/website/slimer/script.zip -O /mybot/slimerjs/script.zip && unzip -o /mybot/slimerjs/script.zip -d /mybot/slimerjs

##update restart.sh
wget https://rootends.com/linux-master/decenterads/awsfreetier/website/config/restart.sh -O /mybot/restart.sh

##update restart.php
wget https://rootends.com/linux-master/decenterads/awsfreetier/website/config/restart.txt -O /mybot/restart.php

##update start.php
wget https://rootends.com/linux-master/decenterads/awsfreetier/website/config/start.txt -O /mybot/start.php

##update gg.sh
wget https://rootends.com/linux-master/decenterads/awsfreetier/website/config/gg.sh -O /mybot/gg.sh

##update www.conf
wget https://rootends.com/linux-master/decenterads/awsfreetier/website/config/wwwconf.txt -O /mybot/www.conf && cp /mybot/www.conf /etc/php/7.0/fpm/pool.d/www.conf

#chmod ganti
chmod +x /mybot/start.sh && chmod +x /mybot/kill.sh && chmod +x /mybot/restart.sh && chmod +x /mybot/restart.php && chmod +x /mybot/start.php && chmod +x /mybot/gg.sh

#ganti chown & chmod
chown www-data:www-data /var/www/html/ -R
chmod +x /var/www/html/ -R

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


#reload nginx
sudo systemctl reload nginx

#start kill.sh
sh /mybot/kill.sh