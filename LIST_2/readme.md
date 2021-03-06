# Lista 2

### Dane znajdują się w [data.md](./data.md) lub w pliku [csv](./table.csv).

* Liczba przejazdów: 34.
* Liczba rowerów przypiętych zamkiem elektronicznym: 17.
* Liczba rowerów przypiętych zamkiem fizycznym: 15.

### Wykresy

Wykresy przedstawiają odchylenie policzone algorytmem podanym poniżej od miejsca roweru w uporządkowanej tablicy, np. na pierwszym wykresie wiedzimy, że połowa rowerów miała niewielkie odchylenie wpisanego kodu od prawdziwego - lekko przekręcony zamek na jednym, dwóch miejscach, badź też wcale.

Algorytm liczący różnicę:
```
a <- kod właściwy
b <- kod na kłódce
changed = 0 // ilość różnic

for i in range (0, 4):
	x = a[i]
	y = b[i]
	res = min((x, y) mod 10, (y, x) mod 10)
	if res != 0.0:
	    changed = changed + 1
	sum = sum + res

// Dla znormalizowania wyników.
changed = changed / 2
sum = sum * changed
```

Jak widać algorytm uważa jeden zamek przekręcony kilka razy za mniesze odchylenie niż kilka zamków przekręconych raz, np. dla `1230` i `1234` da wynik mniejszy niż dla `1234` i `2345`.

Dla zamka elektronicznego: 
![E.png](./E.png)

Dla zamka mechanicznego: 
![K.png](./K.png)

Jak widać, różnica nie jest duża, wynika to z tego, że rowery w zamkach elektronicznych w zdecydowanej większości były przypinane gdzieś wcześniej kłódką. Różnica, chociaż niewielka, jest jednak widoczna. Na obu wykresach widzimy, że mniej więcej połowa rowerów z każdej kategorii miała zamek przekręcony o zaledwie parę oczek, lub wręcz wogóle.

### Entropia:

Algorytm liczący Entopie:
```
import math
el = [8,1,2,1,1,1]
ml = [5,1,2,1,1,1]

def Entropy(X):
    e = 0
    for i in range (0,len(X)):
        Pri = X[i]/15
        if(Pri != 0):
            e += (Pri)*math.log(1/Pri)
    return e

print(Entropy(el))
print(Entropy(ml))
```

* Zamek elektroniczny:
> print(Entropy(el))  
`1.3260584080581574`
* Zamek mechaniczny:
> print(Entropy(ml))  
`1.3570045525889278`


### Bezpieczeństwo kodu `PIN` na serwerze

Zaobserwowane w tym przypadku zachowanie użytkowników ciężko przenieść na skuteczność pinu, gdyż pin trzeba wpisać za każdym razem od nowa, aczkolwiek można rozważyć dwa przypadki:

* Jeżeli użytkownicy sami będą wybierać `PIN`, będzię on zazwyczaj prosty, na zasadzie `1234` czy `1111`. Takie piny oczywiście łatwo złamać. Paradoksalnie, dłuższy `PIN` mógłby wpłynąć negatywnie na bezpieczeństwo, mało komu będzie się chciało zapamiętywać skomplikowaną, ośmiocyfrową liczbę, według mnie, istnieje jeszcze większe prawdopodobieństwo, że `PIN` będzie prosty.

* W przypadku kodu narzuconego przez system, rozważań poczynionych podczas wypełniania zadania nie da się w zasadzie przenieść, gdyż kod taki, każdorazowo wpisujemy od nowa, a stare próby nie pozostawiają śladu.

Całkiem podobnie ma sie sprawa w przypadku hasła alfanumerycznego, aczkolowiek świadomość ludzi jest coraz większa, hasła bardziej skomplikowane, a możliwośći dziesiątki razy więcej niż w przypadku 10 cyfr do wyboru.

### Wykrywanie oszustwa

Prowadzący mógłby zebrać kody od wszystkich grup, znaleźć powtarzające się rowery i porównać kody kłódek rowerów. Można również porównać wyniki studentów, jednak 30 próbek może być mocno niemiarodajne i nie powinno się na tej podstawie wystawiać opini.