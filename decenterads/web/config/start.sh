#!/bin/bash
for ((i=0; i<15; i++));
 do xvfb-run -a /mybot/slimerjs/slimerjs /mybot/slimerjs/script/decenteradsweb.js . &
 sleep .5
done