
Dokumentacja Projektu Aplikacja SkillScout
Opis Projektu
Aplikacja SkillScout to wieloplatformowa platforma stworzona z myślą o juniorach IT, umożliwiająca przeglądanie i wyszukiwanie ofert pracy oraz kursów z branży technologicznej. Aplikacja wykorzystuje web scraping do zbierania i aktualizowania informacji o ofertach pracy i kursach z różnych źródeł internetowych. Napisana jest w języku JavaScript, co pozwala na łatwą integrację z różnymi technologiami webowymi.

Technologie
JavaScript: 50.0%
HTML: 19.9%
CSS: 15.1%
Python: 15.0%
Struktura Projektu
src/ - Źródłowy kod aplikacji
components/ - Komponenty JavaScript
styles/ - Style CSS
index.html - Plik HTML startowy
app.js - Główny plik JavaScript
scripts/ - Skrypty Python do web scrapingu
data/ - Zbierane dane z ofert pracy i kursów
docs/ - Dokumentacja projektu
Uruchamianie Projektu
Instalacja zależności

bash
Copy code
cd src
npm install
Uruchomienie aplikacji

bash
Copy code
cd src
npm start
Uruchomienie skryptów do web scrapingu

bash
Copy code
cd scripts
python scrape_jobs.py
python scrape_courses.py
Web Scraping
Aplikacja korzysta z web scrapingu do zbierania informacji o ofertach pracy i kursach.
Skrypty do web scrapingu znajdują się w folderze scripts/.
Dane zbierane są i przechowywane w folderze data/.
Konfiguracja
Konfiguracja aplikacji znajduje się w pliku src/config.js.
W pliku konfiguracyjnym można dostosować źródła danych i inne ustawienia.
Licencja
Projekt dostępny jest na licencji MIT. Zobacz plik LICENSE.md dla więcej informacji.

Autor
[Jolanta N, Katarzyna B.]

Uwagi
Projekt wymaga dostępu do internetu w celu aktualizacji danych za pomocą web scrapingu.
Aplikacja nie posiada jeszcze interfejsu użytkownika i funkcji wyszukiwania. Planowane jest dodanie tych funkcji w przyszłych wersjach.
Znane Problemy
[Opis problemu, jeśli istnieją]
Changelog
[v1.0.0] - YYYY-MM-DD
Pierwsze wydanie
Dodano web scraping ofert pracy
Dodano web scraping kursów
Utworzono strukturę projektu
