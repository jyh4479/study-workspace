#!/bin/sh

docker build -t docker-dev-env-image .

docker run -d -p 80:5173 --name docker-dev-env-container docker-dev-env-image
