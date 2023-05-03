from typing import Union

from fastapi import FastAPI

app = FastAPI()

from bs4 import BeautifulSoup
import requests

def get_job_offers():
  url = 'https://www.pracuj.pl/praca'
  response = requests.get(url)
  soup = BeautifulSoup(response.content, 'html.parser')
  job_offers = []
  for offer in soup.find_all('div', class_='offer__info'):
    title = offer.find('h2', class_='offer__title').text.strip()
    company = offer.find('span', class_='offer-company__name').text.strip()
    location = offer.find('li', class_='offer-labels__item--location').text.strip()
    job_offers.append({
      'title': title,
      'company': company,
      'location': location
    })
  return job_offers


# Importowanie pliku job_offers.py
from main import get_job_offers

# Wywołanie funkcji get_job_offers() i przypisanie wyniku do zmiennej job_offers
job_offers = get_job_offers()

# Wyświetlenie wyniku
print(job_offers)


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}