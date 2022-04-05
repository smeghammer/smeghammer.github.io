@echo off
echo Now extracting the sounds from Halls of Death.
dmaud -f halls1-9.wad -e ds1.wav 1 -q
dmaud -f halls1-9.wad -e ds2.wav 2 -q
dmaud -f halls1-9.wad -e ds3.wav 3 -q
dmaud -f halls1-9.wad -e ds10.wav 10 -q
dmaud -f halls1-9.wad -e ds11.wav 11 -q
dmaud -f halls1-9.wad -e ds13.wav 13 -q
dmaud -f halls1-9.wad -e ds14.wav 14 -q
dmaud -f halls1-9.wad -e ds15.wav 15 -q
dmaud -f halls1-9.wad -e ds23.wav 23 -q
dmaud -f halls1-9.wad -e ds30.wav 30 -q
dmaud -f halls1-9.wad -e ds32.wav 32 -q
dmaud -f halls1-9.wad -e ds41.wav 41 -q
dmaud -f halls1-9.wad -e ds50.wav 50 -q
echo Now inserting the sounds into doom.wad.
dmaud 1 -s ds1.wav -x -q
dmaud 2 -s ds2.wav -x -q
dmaud 3 -s ds3.wav -x -q
dmaud 10 -s ds10.wav -x -q
dmaud 11 -s ds11.wav -x -q
dmaud 13 -s ds13.wav -x -q
dmaud 14 -s ds14.wav -x -q
dmaud 15 -s ds15.wav -x -q
dmaud 23 -s ds23.wav -x -q
dmaud 30 -s ds30.wav -x -q
dmaud 32 -s ds32.wav -x -q
dmaud 41 -s ds41.wav -x -q
dmaud 50 -s ds50.wav -x -q
del ds??.wav > nul
echo The sounds have been inserted. Have a happy deathmatch!
