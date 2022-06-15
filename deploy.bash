# consider automating certbot renewal
# pm2 stop forwarder
# sudo certbot renew --dry-run
# pm2 start forwarder

cd /root/sport-kamasutra-new

git pull 

npm config set ignore-scripts true
cd /root/sport-kamasutra-new/backend && npm i
npm config set ignore-scripts false

npm run build

pm2 restart 2
 
