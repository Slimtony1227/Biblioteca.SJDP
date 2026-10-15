@echo off
setlocal DisableDelayedExpansion
title Biblioteca SJDP - Local Network Server
pushd "%~dp0" || exit /b 1

set "BIBLIOTECA_NODE="
for /f "delims=" %%N in ('where node.exe 2^>nul') do if not defined BIBLIOTECA_NODE set "BIBLIOTECA_NODE=%%N"
if not defined BIBLIOTECA_NODE if exist "%ProgramFiles%\nodejs\node.exe" set "BIBLIOTECA_NODE=%ProgramFiles%\nodejs\node.exe"

if not defined BIBLIOTECA_NODE (
  echo Node.js could not be found. Install Node.js 22.12 or newer, then try again.
  popd
  pause
  exit /b 1
)

"%BIBLIOTECA_NODE%" "%~dp0scripts\start-local.mjs"
set "BIBLIOTECA_EXIT=%ERRORLEVEL%"
popd
if not "%BIBLIOTECA_EXIT%"=="0" pause
exit /b %BIBLIOTECA_EXIT%
