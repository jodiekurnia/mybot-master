#!/bin/sh
#delete previous cronjob
crontab -r
#add cronjob
crontab -l > mycron
echo "*/10 * * * * php /root/mybot-master/decenterads/config/app/2cpu/kill.php > /dev/null 2>&1" >> mycron
crontab mycron
rm mycron