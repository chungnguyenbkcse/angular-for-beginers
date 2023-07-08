filename=docker-compose.yml

main_dir=$PWD

# NOTE: tren window bo dong nay
. "$NVM_DIR/nvm.sh"

nvm install 18.10.0


#royal-bccn-main-api
nvm use 18.10.0
cd ../../day1
sudo rm -Rf yarn.lock package-lock.json node_modules;
yarn install
yarn server
cd $main_dir


# docker-compose -f $filename build
docker compose -f $filename up --detach

docker compose logs --tail=0 --follow
