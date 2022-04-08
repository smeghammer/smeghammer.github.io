@echo off
echo Saving original weapon sprites...

dmgraph launa0 -e vertical\launa0.gif
dmgraph mguna0 -e vertical\mguna0.gif
dmgraph plasa0 -e vertical\plasa0.gif
dmgraph shota0 -e vertical\shota0.gif

echo Installing vertical weapon sprites...

dmgraph launa0 -s vertical\launa0v.gif
dmgraph mguna0 -s vertical\mguna0v.gif
dmgraph plasa0 -s vertical\plasa0v.gif
dmgraph shota0 -s vertical\shota0v.gif

echo Sprite changes completed.
