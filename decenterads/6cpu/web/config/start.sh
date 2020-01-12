#!/bin/bash
for ((i=0; i<175; i++));
 do xvfb-run -a /root/mybot-master/core/slimerjs /root/mybot-master/decenterads/6cpu/web/bot/decenteradsweb.js . &
 sleep .5
done
killall -9 kill.sh