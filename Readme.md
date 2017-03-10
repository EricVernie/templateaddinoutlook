#Addin-outlook template

#Step 6 Using command


## In order to run nodejs you need to create a certificat using openssl
* openssl genrsa -out localhost-key.pem 1024 
* openssl req -new -key localhost-key.pem -out localhost.csr

  Country Name (2 letter code) [AU]:US

  State or Province Name (full name) [Some-State]:Washington

  Locality Name (eg, city) []:Redmond

  Organization Name (eg, company) [Internet Widgits Pty Ltd]:Contoso

  Organizational Unit Name (eg, section) []:corp

  Common Name (e.g. server FQDN or YOUR name) []:localhost

  Email Address []:admin@contoso.com

  etc..
  
* openssl x509 -req -in localhost.csr -signkey localhost-key.pem -out localhost-cert.pem
* Then install the certificat in the trust root certification authority
