@echo off
echo restoring demon graphics

dmgraph SARGA1 -s sarga\sarga1.gif
dmgraph SARGA2A8 -s sarga\sarga2a8.gif
dmgraph SARGA3A7 -s sarga\sarga3a7.gif
dmgraph SARGA4A6 -s sarga\sarga4a6.gif
dmgraph SARGA5 -s sarga\sarga5.gif
dmgraph SARGB1 -s sarga\sargb1.gif
dmgraph SARGB2B8 -s sarga\sargb2b8.gif
dmgraph SARGB3B7 -s sarga\sargb3b7.gif
dmgraph SARGB4B6 -s sarga\sargb4b6.gif
dmgraph SARGB5 -s sarga\sargb5.gif
dmgraph SARGC1 -s sarga\sargc1.gif
dmgraph SARGC2C8 -s sarga\sargc2c8.gif
dmgraph SARGC3C7 -s sarga\sargc3c7.gif
dmgraph SARGC4C6 -s sarga\sargc4c6.gif
dmgraph SARGC5 -s sarga\sargc5.gif
dmgraph SARGD1 -s sarga\sargd1.gif
dmgraph SARGD2D8 -s sarga\sargd2d8.gif
dmgraph SARGD3D7 -s sarga\sargd3d7.gif
dmgraph SARGD4D6 -s sarga\sargd4d6.gif
dmgraph SARGD5 -s sarga\sargd5.gif
dmgraph SARGE1 -s sarga\sarge1.gif
dmgraph SARGE2 -s sarga\sarge2.gif
dmgraph SARGE3 -s sarga\sarge3.gif
dmgraph SARGE4 -s sarga\sarge4.gif
dmgraph SARGE5 -s sarga\sarge5.gif
dmgraph SARGE6 -s sarga\sarge6.gif
dmgraph SARGE7 -s sarga\sarge7.gif
dmgraph SARGE8 -s sarga\sarge8.gif
dmgraph SARGF1 -s sarga\sargf1.gif
dmgraph SARGF2 -s sarga\sargf2.gif
dmgraph SARGF3 -s sarga\sargf3.gif
dmgraph SARGF4 -s sarga\sargf4.gif
dmgraph SARGF5 -s sarga\sargf5.gif
dmgraph SARGF6 -s sarga\sargf6.gif
dmgraph SARGF7 -s sarga\sargf7.gif
dmgraph SARGF8 -s sarga\sargf8.gif
dmgraph SARGG1 -s sarga\sargg1.gif
dmgraph SARGG2 -s sarga\sargg2.gif
dmgraph SARGG3 -s sarga\sargg3.gif
dmgraph SARGG4 -s sarga\sargg4.gif
dmgraph SARGG5 -s sarga\sargg5.gif
dmgraph SARGG6 -s sarga\sargg6.gif
dmgraph SARGG7 -s sarga\sargg7.gif
dmgraph SARGG8 -s sarga\sargg8.gif
dmgraph SARGH1 -s sarga\sargh1.gif
dmgraph SARGH2 -s sarga\sargh2.gif
dmgraph SARGH3 -s sarga\sargh3.gif
dmgraph SARGH4 -s sarga\sargh4.gif
dmgraph SARGH5 -s sarga\sargh5.gif
dmgraph SARGH6 -s sarga\sargh6.gif
dmgraph SARGH7 -s sarga\sargh7.gif
dmgraph SARGH8 -s sarga\sargh8.gif
dmgraph SARGI0 -s sarga\sargi0.gif
dmgraph SARGJ0 -s sarga\sargj0.gif
dmgraph SARGK0 -s sarga\sargk0.gif
dmgraph SARGL0 -s sarga\sargl0.gif
dmgraph SARGM0 -s sarga\sargm0.gif
dmgraph SARGN0 -s sarga\sargn0.gif

echo deleting demon graphics
del sarga\*.gif
rd sarga

echo Restoring DOOM.EXE & removing Barrel
dehacked -load doomexe.deh


echo Done 
echo -----Enjoy----

