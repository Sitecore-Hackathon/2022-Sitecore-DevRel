@echo off
rem expects a volume share on c:\app with jss app root
cd c:\app
npm i && yarn install && yarn build && yarn dev