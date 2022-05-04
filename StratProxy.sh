#umi build
cd ./umijs 
npm run build
cd ..
#copy umijs dist
cp -r ./umijs/dist/* ./
#copy nginx.conf
cp -r ./nginx/default /etc/nginx/sites-enabled/default 
# restart
service nginx restart&&forever restart -c 'node --tls-min-v1.0' /root/siteProxy/index.js 