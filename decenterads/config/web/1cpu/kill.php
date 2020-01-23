<?php
$do = "sleep ".rand(0,299)." && sh /root/mybot-master/decenterads/config/web/1cpu/kill.sh";
exec($do);