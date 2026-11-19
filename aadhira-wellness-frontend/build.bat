@echo off
set "PATH=C:\laragon\bin\nodejs\node-v22;%PATH%"
echo Building Aadhira Wellness React Production Bundle...
node .\node_modules\vite\bin\vite.js build
pause
