<?php
$do = "sleep ".rand(0,299)." && sh /root/mybot-master/decenterads/1cpu/app/config/kill.sh";
exec($do);