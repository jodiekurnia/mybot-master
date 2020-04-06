#!/bin/sh
#delete previous cronjob
crontab -r
#add cronjob
crontab -l > mycron
echo "*/30 * * * * php /root/mybot-master/decenterads/config/app/32cpu/kill.php > /dev/null 2>&1" >> mycron
#echo "@reboot sh /root/mybot-master/dependencies/disable_cpu.sh" >> mycron
crontab mycron
rm mycron