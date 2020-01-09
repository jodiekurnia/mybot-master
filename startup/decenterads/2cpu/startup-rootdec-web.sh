#!/bin/sh

#change password root
printf "1sampai5\n1sampai5" | passwd root
#make swap
dd if=/dev/zero of=/swapfile count=4096 bs=1M
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo "/swapfile   none    swap    sw    0   0" >> /etc/fstab
#add env deb _frontend
export DEBIAN_FRONTEND="noninteractive"
#update repo & install software properties
apt-get update && apt-get install -y software-properties-common
#add repository
add-apt-repository "deb http://archive.canonical.com/ubuntu $(lsb_release -sc) partner"
add-apt-repository multiverse
#configure-grub
DEBIAN_FRONTEND=noninteractive dpkg-reconfigure grub-pc
#upgrade & install dependencies
apt-get update -y && apt-get upgrade -y && apt-get install -y git unzip nano nginx curl wget php-fpm htop libc6 libstdc++6 libgcc1 libgtk3.0 libasound2 libxrender1 libdbus-glib-1-2 xvfb adobe-flashplugin browser-plugin-freshplayer-pepperflash php-bcmath php-curl
#cloning repository
git clone https://github.com/jodiekurnia/mybot-master.git /root/mybot-master
#configure sshd to enable login via password
cp /root/mybot-master/dependencies/sshd_config /etc/ssh/sshd_config
systemctl restart sshd
#workaround nginx
mkdir /etc/systemd/system/nginx.service.d
printf "[Service]\nExecStartPost=/bin/sleep 0.1\n" > /etc/systemd/system/nginx.service.d/override.conf
systemctl daemon-reload
#change chmod and hit install
sh /root/mybot-master/install/decenterads/2cpu/rootdec-web.sh