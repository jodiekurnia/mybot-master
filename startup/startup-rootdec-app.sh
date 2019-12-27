#!/bin/sh
printf "1sampai5\n1sampai5" | passwd root
mkdir /mybot/
wget https://rootends.com/linux-master/commonsfiles/sshd_config_gcloud -O /mybot/sshd_config && cp /mybot/sshd_config /etc/ssh/sshd_config
systemctl restart sshd
#make swap
dd if=/dev/zero of=/swapfile count=4096 bs=1M
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo "/swapfile   none    swap    sw    0   0" >> /etc/fstab
#add repository
add-apt-repository "deb http://archive.canonical.com/ubuntu $(lsb_release -sc) partner"
#configure-grub
DEBIAN_FRONTEND=noninteractive dpkg-reconfigure grub-pc
#update and install dependencies
apt-get update && apt-get upgrade -y
apt-get install -y git unzip nano nginx curl wget php-fpm htop libc6 libstdc++6 libgcc1 libgtk3.0 libasound2 libxrender1 libdbus-glib-1-2 xvfb adobe-flashplugin browser-plugin-freshplayer-pepperflash php-bcmath php-curl
#cloning repository
git clone https://github.com/jodiekurnia/mybot-master.git /root/mybot-master
#hit install
sh /root/mybot-master/install/FREETIER-AWS-rootdec-app.sh