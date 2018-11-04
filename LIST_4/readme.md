# List 4

## Runing:  
* `python3 main.py`  
lub
* `npm start`

## Algorytm

Mając wiele szyfrogramów zaszyfrowanych samym kluczem, za darmo dostajemy m_(x) XOR m_(x+1). Najczęściej występującym znakiem jest spacja, która dodatkowo należy do innego zakresu ASCII niż litery (razem ze specjalnymi i liczbami). Dowolna litera XOR spacja, daje więc rezultat rozpoczynający się od "01". Wystarczy statystycznie sprawdzić, która z dwóch wiadomości zawiera spację (powinna ona zwracać wynik "01..." ze zdecydowaną większością szyfrogramów) i wykonać jej XOR z kodem spacji, co da pojedynczy bit klucza.

SCHEMAT (może być nieczytelny, jest 3:00): 
1. Wczytać osobno każdy kryptogram
2. Utworzyć wyzerowaną tabelę pomocniczą, która ma tyle wierszy, ile jest kryptogramów i tyle kolumn, ile bitów ma największy z nich.
3. Dla każdej pary (np. 0-1, 0-2, ..., 17-19, 18-19) dokonać operacji XOR na każdym bajcie z osobna.
4. Jeśli któryś z wyników zaczyna się od "01", w kolumnie tabeli pomocniczej odpowiadającej temu bitowi, zwiększyć liczniki obu wierszy o numerach odpowiadających aktualnie sprawdzanym kryptogramom (aby oznaczyć, że potencjalnie zawiera znak specjalny). Przykład - podczas sprawdzania siódmego bitu, trzeciego i czwartego kryptogramu, wyszło 01000100, więc zwiększyć [2][6] oraz [3][6].
5. Dla każdego bajtu z osobna utworzyć nową tablicę i umieścić w niej te bajty szyfrogramów, które w tablicy pomocniczej miały lokalnie największe liczniki. Przykładowo jeśli wejściem było 5 szyfrogramów, a ósma kolumna ma wartości [2,2,3,3,2], to do nowej tablicy dla ósmego bajtu bierzemy wartość ósmego bajtu szyfrogramu nr 3 oraz wartość ósmego bajtu szyfrogramu nr 4. 
6. Wszystkie elementy wszystkich nowych tablic XORować z "00100000", otrzymując potencjalne sub-klucze.
7. W każdej tablicy odrzucić sub-klucze jednoznacznie błędne, a z pozostałych wybrać najczęściej powtarzający się.
8. Całość poskładać w jeden ciąg i odszyfrować tekst przez XOR.