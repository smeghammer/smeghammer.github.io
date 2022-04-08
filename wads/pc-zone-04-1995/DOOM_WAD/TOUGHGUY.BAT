@echo off
cls
echo Extracting transporter sounds & graphics. 
dmgraph tfoga0 -e 1.gif
dmgraph tfogb0 -e 2.gif    
dmgraph tfogc0 -e 3.gif    
dmgraph tfogd0 -e 4.gif    
dmgraph tfoge0 -e 5.gif    
dmgraph tfogf0 -e 6.gif    
dmgraph tfogg0 -e 7.gif    
dmgraph tfogh0 -e 8.gif    
dmgraph tfogi0 -e 9.gif    
dmgraph tfogj0 -e a.gif    
dmaud 26 -e 1.wav -q
echo Replacing them with silence.
dmgraph tfoga0 -s clear.gif
dmgraph tfogb0 -s clear.gif    
dmgraph tfogc0 -s clear.gif    
dmgraph tfogd0 -s clear.gif    
dmgraph tfoge0 -s clear.gif    
dmgraph tfogf0 -s clear.gif    
dmgraph tfogg0 -s clear.gif    
dmgraph tfogh0 -s clear.gif    
dmgraph tfogi0 -s clear.gif    
dmgraph tfogj0 -s clear.gif    
dmaud 26 -s quiet.wav -q
call doom -file toughguy.wad %1 %2 %3 %4 %5
echo Restoring transporter sounds & graphics.
dmgraph tfoga0 -s 1.gif
dmgraph tfogb0 -s 2.gif    
dmgraph tfogc0 -s 3.gif    
dmgraph tfogd0 -s 4.gif    
dmgraph tfoge0 -s 5.gif    
dmgraph tfogf0 -s 6.gif    
dmgraph tfogg0 -s 7.gif    
dmgraph tfogh0 -s 8.gif    
dmgraph tfogi0 -s 9.gif    
dmgraph tfogj0 -s a.gif    
dmaud 26 -s 1.wav -q
del ?.gif
del 1.wav
echo Done.


