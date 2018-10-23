#!/bin/bash
rm -rf server/public/*
cd client
ng build --prod --aot
cd ..
mv client/dist/client/* server/public