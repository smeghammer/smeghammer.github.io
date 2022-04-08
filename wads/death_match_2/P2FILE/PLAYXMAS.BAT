@echo off
REM (c) 1995 ByteBrothers Software
REM batchfile to play XMAS NIGHTMARE on DOOM I or II
REM note that you have to run this patch on doom I
REM to play the xmas level. When installing on doom2
REM you only have the new sprites and sounds 
REM (you won't have new graphics though)

IF EXIST DOOM.EXE doom -file xmas_gfx.wad xmas_lvl.wad xmas_smp.wad
IF EXIST DOOM2.EXE doom2 -file xmas_gfx.wad xmas_smp.wad