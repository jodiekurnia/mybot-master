#!/bin/bash
for ((i=0; i<75; i++));
 do xvfb-run -a /root/mybot-master/core/slimerjs /root/mybot-master/decenterads/bot/web/decenteradsweb.js . &
 sleep 1
done
killall -9 kill.sh