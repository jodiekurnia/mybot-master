#!/bin/bash
for ((i=0; i<350; i++));
 do xvfb-run -a /root/mybot-master/core/slimerjs /root/mybot-master/decenterads/6cpu/app/bot/decenterads.js . &
 sleep .5
done
killall -9 kill.sh