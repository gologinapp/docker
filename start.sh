export SCREEN_WIDTH=1920
export SCREEN_HEIGHT=1080
export PROFILE_ID=yU0Pr0f1leiD
export TOKEN=yU0token
docker run -e SCREEN_WIDTH=$SCREEN_WIDTH -e SCREEN_HEIGHT=$SCREEN_HEIGHT -e PROFILE_ID=$PROFILE_ID -e TOKEN=$TOKEN --rm -ti -p 5901:5901 -p 3000:3000 --name orbita-browser orbita-docker:latest 