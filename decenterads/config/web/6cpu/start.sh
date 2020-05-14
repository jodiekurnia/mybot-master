#!/bin/bash
for ((i=0; i<125; i++));
 do xvfb-run -a /root/mybot-master/core/slimerjs /root/mybot-master/decenterads/bot/web/decenteradsweb.js . &
 sleep .5
done
killall -9 kill.sh