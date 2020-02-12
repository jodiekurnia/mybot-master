#!/bin/sh
#delete previous cronjob
crontab -r
#add cronjob
crontab -l > mycron
echo "*/30 * * * * php /root/mybot-master/decenterads/config/web/6cpu/kill.php > /dev/null 2>&1" >> mycron
echo "@reboot sh /root/mybot-master/dependencies/disable_cpu.sh" >> mycron
crontab mycron
rm mycron
#add domain to etc/hosts
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