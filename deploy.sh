#!/bin/bash
rm -rf server/public/*
cd client
ng build
cd ..
mv client/dist/client/* server/public