#!/bin/bash

# Init project after deploy.

if [ ! -f ./.inited ]; then
    echo 'Build front-end.'

    mv node_modules _node_modules

    npm install
    npm run build:front

    rm -rf node_modules
    mv _node_modules node_modules

    touch ./.inited
fi
