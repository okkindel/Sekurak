# Lista 5

Certyfikaty dla `Brave` znajdują się [tutaj](chrome://settings/certificates) (chrome://settings/certificates). 

## Pytania:
* Czym jest certificate pinning? Dlaczego się go stosuje? 
  ``` 
  HTTP Public Key Pinning (HPKP) – mechanizm, realizowany poprzez nagłówek protokołu HTTP, który pozwala na poinformowanie klienta (przeglądarki) o powiązaniu danego klucza publicznego z konkretnym serwerem (domeną). Zabezpiecza strony działające w oparciu o protokół HTTPS przed próbami podszywania się przez atakujących, korzystających z niewłaściwych, sfałszowanych certyfikatów klucza publicznego. Hakerzy czasami są w stanie złamać zabezpieczenia urzędów certyfikacji, a następnie wydawać sfałszowane certyfikaty. Serwer działający w oparciu o HTTPS przechowuje klucze publiczne, w związku z czym przy kolejnych połączeniach klienci mogą spodziewać się, iż serwer użyje jednego lub więcej publicznych kluczy ze swojej puli.
  ```

* Czym jest Extended validation dla certyfikatów SSL?
  ```
  Extended Validation Certificates (EV SSL, ang. certyfikaty rozszerzonej walidacji) – specjalny typ certyfikatu X.509, który wymaga obszerniejszego postępowania z wnioskiem podmiotu przez Urząd certyfikacji przed wydaniem.
  Kryteria wydawania certyfikatów EV definiowane są przez wytyczne dla    certyfikatów rozszerzonej walidacji, aktualnie w wersji 1.6.8.  Kryteria tworzone są przez CA/Browser Forum, dobrowolną organizację.
  ```
* Kto da się nabrać na taki atak (w kontekscie zadania 3)?
  ```
  Każdy, kto nie sprawdza adresu strony, certyfikatu, nie jest świadomy niebezpieczeństa.
  ```
* Czym są CRL, OCSP?
  ```
  OCSP- standard opisujący protokół komunikacyjny. Określa format i strukturę zapytania o status certyfikatu oraz format i strukturę odpowiedzi, która zawiera wynik weryfikacyjny w postaci: "poprawny", "unieważniony", "nieznany".

  CRL - lista zawierająca numery seryjne unieważnionych certyfikatów. Certyfikaty unieżanione przez organ certyfikujący np. z powodu ujawnienia klucza prywatnego. Publikowana przez wystawcę certyfikatów.
  ```
* Co się stanie, gdy ktoś pozna klucz tajny serwera WWW?
* Co się stanie, gdy ktoś pozna klucz tajny CA, który podpisywał certyfikat serwera WWW?
* Co się stanie, gdy ktoś pozna klucz tajny jakiegoś CA?
* Co się stanie, gdy pewne CA wydaje certyfikaty w oparciu o słabe funkcje haszujące np. MD5?
* Czym są downgrade attacks na TLS?
* Czym jest HTTP Strict Transport Security (HSTS)?
  ```
  HTTP Strict Transport Security (HSTS) – mechanizm bezpieczeństwa sieci, który chroni strony przed atakami takimi, jak wymuszone zmniejszenie poziomu protokołu oraz przechwytywanie sesji. Dzięki niemu do serwerów można połączyć się tylko za pomocą przeglądarek, korzystających z bezpiecznych połączeń HTTPS[a], natomiast nigdy nie dopuszcza on połączeń na bazie niezabezpieczonego protokołu HTTP. HSTS jest uznawany za standardowy protokół przez IETF; został opisany w dokumencie RFC 6797.

  O stosowaniu polityki HSTS serwer informuje użytkownika za pomocą pola znajdującego się w nagłówku odpowiedzi HTTP o nazwie „Strict-Transport-Security”. Polityka HSTS określa czas, w którym użytkownik może być połączony z serwerem tylko poprzez bezpieczne połączenie.
  ```

## Zadanie 2

Klucz został wygenerowany według [tego](https://medium.freecodecamp.org/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec) poradnika (klucz generowany z sposobem Profesora jest nieważny na wstępie, przeglądarki od dłuższego czasu nie przyjmują już zwychłych kluczy).

Klucz do zadania drugiego znajduje się w katalogu `./2`.

1. Generowanie a RSA-2048  
`openssl genrsa -des3 -out rootCA.key 2048`
2. Generowanie certyfikatu Root SSL  
`openssl req -x509 -new -nodes -key rootCA.key -sha 256 -days 1024 -out rootCA.pem`
3. Dodanie certyfikatu do zaufanych maszyny  
`sudo cp rootCA.pem /usr/local/share/ca-certificates`  
`sudo update-ca-certificates`
4. Plik konfuguracji `OpenSSL`  
Plik `server.csr.cnf`:

```
[req]
default_bits = 2048
prompt = no
default_md = sha256
distinguished_name = dn

[dn]
C=US
ST=RandomState
L=RandomCity
O=RandomOrganization
OU=RandomOrganizationUnit
emailAddress=hello@example.com
CN = localhost
```
5. Plik `v3.ext`:

```
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = localhost
```

1. Tworzenie klucza  
`openssl req -new -sha256 -nodes -out server.csr -newkey rsa:2048 -keyout server.key -config <( cat server.csr.cnf )`
7. Tworzneie certyfikatu do podpisu  
`openssl x509 -req -in server.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out server.crt -days 500 -sha256 -extfile v3.ext`

## Zadanie 3

Serwer uruchamiamy poleceniem `npm start`. Przechwycone dane znajdują się w katalogu `./3/data`.

HTTPS nie musi być wolniejsze: [link](https://snowball.digital/blog/https-is-faster-than-http).

### Wyniki dla `Apache Benchmark`: Http:

```
This is ApacheBench, Version 2.3 <$Revision: 1807734 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /
Document Length:        14180 bytes

Concurrency Level:      1
Time taken for tests:   0.630 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      14471000 bytes
HTML transferred:       14180000 bytes
Requests per second:    1586.49 [#/sec] (mean)
Time per request:       0.630 [ms] (mean)
Time per request:       0.630 [ms] (mean, across all concurrent requests)
Transfer rate:          22420.06 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       0
Processing:     0    1   0.4      0       6
Waiting:        0    0   0.3      0       6
Total:          0    1   0.4      0       6
ERROR: The median and mean for the processing time are more than twice the standard
       deviation apart. These results are NOT reliable.
ERROR: The median and mean for the total time are more than twice the standard
       deviation apart. These results are NOT reliable.

Percentage of the requests served within a certain time (ms)
  50%      0
  66%      1
  75%      1
  80%      1
  90%      1
  95%      1
  98%      2
  99%      2
 100%      6 (longest request)
```

### Wyniki dla `Apache Benchmark`: Https:

```
This is ApacheBench, Version 2.3 <$Revision: 1807734 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)


Server Software:        
Server Hostname:        localhost
Server Port:            8880
SSL/TLS Protocol:       TLSv1.2,ECDHE-RSA-AES128-GCM-SHA256,2048,128
TLS Server Name:        localhost

Document Path:          /
Document Length:        14180 bytes

Concurrency Level:      1
Time taken for tests:   2.512 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      14471000 bytes
HTML transferred:       14180000 bytes
Requests per second:    398.16 [#/sec] (mean)
Time per request:       2.512 [ms] (mean)
Time per request:       2.512 [ms] (mean, across all concurrent requests)
Transfer rate:          5626.67 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        2    2   0.4      2       7
Processing:     0    1   0.2      1       2
Waiting:        0    1   0.2      1       2
Total:          2    2   0.5      2       9

Percentage of the requests served within a certain time (ms)
  50%      2
  66%      2
  75%      2
  80%      3
  90%      3
  95%      3
  98%      4
  99%      5
 100%      9 (longest request)
```