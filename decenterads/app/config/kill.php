<?php
$do = "sleep ".rand(0,299)." && sh /root/mybot-master/decenterads/app/config/kill.sh";
exec($do);