#!/bin/sh

docker stop docker-dev-env-container
docker rm docker-dev-env-container
docker rmi docker-dev-env-image
