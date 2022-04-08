@Echo Off
Cls
Echo *** This file will uninstall the Blaster graphics from your DOOM.WAD
Echo *** file. To reinstall them, type
Echo *** BLASTER.BAT
Pause
Echo Restoring launcher graphics
DmGraph MISGA0 -s BLASTER\OBLAST1.GIF -i -138,-106
DmGraph MISGB0 -s BLASTER\OBLAST2.GIF -i -138,-106
DmGraph MISFA0 -s BLASTER\OBLAST3.GIF -i -138,-106
DmGraph MISFB0 -s BLASTER\OBLAST4.GIF -i -138,-106
DmGraph MISFC0 -s BLASTER\OBLAST5.GIF -i -138,-106
DmGraph MISFD0 -s BLASTER\OBLAST6.GIF -i -141,-86
Echo Restoring rocket graphics
DmGraph MISLA1   -s BLASTER\OLASER1.GIF -i 7,13
DmGraph MISLA5   -s BLASTER\OLASER2.GIF -i 7,13
DmGraph MISLA6A4 -s BLASTER\OLASER3.GIF -i 12,13
DmGraph MISLA7A3 -s BLASTER\OLASER4.GIF -i 25,13
DmGraph MISLA8A2 -s BLASTER\OLASER5.GIF -i 16,13
Echo Removing backup graphics
Del BLASTER\O*.GIF
Echo Un-Executing the DOOM patch
DeHacked -load BLASTER\UNBLAST.DEH
Echo Done!
Echo To completely remove this patch from your drive, type
Echo DEL BLASTER\*.*
Echo RD BLASTER
Echo DEL BLASTER.BAT
Echo DEL MUNCHKIN.BAT
Echo DEL UNBLAST.BAT
