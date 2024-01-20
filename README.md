
Dokumentacja Projektu Aplikacja SkillScout<br>
Opis Projektu<br>
Aplikacja SkillScout to wieloplatformowa platforma stworzona z myślą o juniorach IT, umożliwiająca przeglądanie i wyszukiwanie ofert pracy oraz kursów z branży technologicznej. Aplikacja wykorzystuje web scraping<br> do zbierania i aktualizowania informacji o ofertach pracy i kursach z różnych źródeł internetowych. Napisana jest w języku JavaScript, co pozwala na łatwą integrację z różnymi technologiami webowymi.<br>

Technologie<br>
JavaScript: 50.0%<br>
HTML: 19.9%<br>
CSS: 15.1%<br>
Python: 15.0%<br>
Struktura Projektu<br>
src/ - Źródłowy kod aplikacji<br>
components/ - Komponenty JavaScript<br>
styles/ - Style CSS<br>
index.html - Plik HTML startowy<br>
app.js - Główny plik JavaScript<br>
scripts/ - Skrypty Python do web scrapingu<br>
data/ - Zbierane dane z ofert pracy i kursów<br>
docs/ - Dokumentacja projektu<br>
Uruchamianie Projektu<br>
Instalacja zależności<br>

bash<br>
Copy code<br>
cd src<br>
npm install<br>
Uruchomienie aplikacji<br>

bash<br>
Copy code<br>
cd src<br>
npm start<br>
Uruchomienie skryptów do web scrapingu<br>

bash<br>
Copy code<br>
cd scripts<br>
python scrape_jobs.py<br>
python scrape_courses.py<br>
Web Scraping<br>
Aplikacja korzysta z web scrapingu do zbierania informacji o ofertach pracy i kursach.<br>
Skrypty do web scrapingu znajdują się w folderze scripts/.<br>
Dane zbierane są i przechowywane w folderze data/.<br>
Konfiguracja<br>
Konfiguracja aplikacji znajduje się w pliku src/config.js.<br>
W pliku konfiguracyjnym można dostosować źródła danych i inne ustawienia.<br>
Licencja<br>
Projekt dostępny jest na licencji MIT. Zobacz plik LICENSE.md dla więcej informacji.<br>

Autor<br>
[Jolanta N, Katarzyna B.]<br>

Uwagi<br>
Projekt wymaga dostępu do internetu w celu aktualizacji danych za pomocą web scrapingu.
Aplikacja nie posiada jeszcze interfejsu użytkownika i funkcji wyszukiwania. Planowane jest dodanie tych funkcji w przyszłych wersjach.
Znane Problemy


Dodano web scraping ofert pracy
Dodano web scraping kursów
Utworzono strukturę projektu
