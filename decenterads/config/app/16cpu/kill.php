<?php
$do = "sleep ".rand(0,299)." && sh /root/mybot-master/decenterads/config/app/16cpu/kill.sh";
exec($do);