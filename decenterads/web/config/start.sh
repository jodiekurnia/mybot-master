#!/bin/bash
killall -9 kill.sh
for ((i=0; i<15; i++));
 do xvfb-run -a /root/mybot-master/core/slimerjs /root/mybot-master/decenterads/web/bot/decenteradsweb.js . &
 sleep 1
done