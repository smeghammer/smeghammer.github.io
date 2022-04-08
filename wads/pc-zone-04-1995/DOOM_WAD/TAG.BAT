@echo off
copy doom.exe tag.exe
dmaud 27 -q -e s27.wav
dmaud 28 -q -e s28.wav
dmaud 29 -q -e s29.wav
dmaud 27 -q -x -s boohaha.wav
dmaud 28 -q -x -s boohaha.wav
dmaud 29 -q -x -s boohaha.wav
dehacked -load tag.deh
echo .
echo .
echo .
echo All set, just load up your favorite Doom level and start the madness!
echo [Type UNDOTAG to restore your old doom.exe file,]
echo [Type UNDOSND to restore your previous sounds.]
echo .
echo .
echo .



