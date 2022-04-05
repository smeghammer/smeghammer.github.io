@Echo Off
If Exist BLASTER\OBLAST1.GIF goto PATCH
Cls
Echo *** This file will install the new Blaster graphics into your DOOM.WAD
Echo *** file, saving the old graphics. They can be restored with
Echo *** UNBLAST.BAT
Echo *** I _think_ that with Doom v1.6 (registered only, of course),
Echo *** this shouldn't be necessary. First try if BLASTER.WAD alone
Echo *** can do the trick.
Pause
Echo Saving the old graphics
DmGraph MISGA0 -e BLASTER\OBLAST1.GIF
DmGraph MISGB0 -e BLASTER\OBLAST2.GIF
DmGraph MISFA0 -e BLASTER\OBLAST3.GIF
DmGraph MISFB0 -e BLASTER\OBLAST4.GIF
DmGraph MISFC0 -e BLASTER\OBLAST5.GIF
DmGraph MISFD0 -e BLASTER\OBLAST6.GIF
DmGraph MISLA1   -e BLASTER\OLASER1.GIF
DmGraph MISLA5   -e BLASTER\OLASER2.GIF
DmGraph MISLA6A4 -e BLASTER\OLASER3.GIF
DmGraph MISLA7A3 -e BLASTER\OLASER4.GIF
DmGraph MISLA8A2 -e BLASTER\OLASER5.GIF
Echo Inserting blaster graphics
DmGraph MISGA0 -s BLASTER\BLAST1.GIF -i -138,-106
DmGraph MISGB0 -s BLASTER\BLAST2.GIF -i -138,-106
DmGraph MISFA0 -s BLASTER\BLAST3.GIF -i -138,-106
DmGraph MISFB0 -s BLASTER\BLAST4.GIF -i -138,-106
DmGraph MISFC0 -s BLASTER\BLAST5.GIF -i -138,-106
DmGraph MISFD0 -s BLASTER\BLAST6.GIF -i -141,-86
Echo Inserting laser beam graphics
DmGraph MISLA1   -s BLASTER\LASER1.GIF -i 7,13
DmGraph MISLA5   -s BLASTER\LASER2.GIF -i 7,13
DmGraph MISLA6A4 -s BLASTER\LASER3.GIF -i 12,13
DmGraph MISLA7A3 -s BLASTER\LASER4.GIF -i 25,13
DmGraph MISLA8A2 -s BLASTER\LASER5.GIF -i 16,13
:PATCH
Echo Executing the DOOM patch
DeHacked -load BLASTER\BLASTER.DEH
Echo Finished installing the standard Blaster!
Echo To try it out, type                DOOM -FILE BLASTER\BLASTER.WAD
Echo To uninstall the changes, type     UNBLAST
