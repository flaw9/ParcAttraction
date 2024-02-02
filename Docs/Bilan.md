Etat des lieux au commencement du projet

## API

Routes dans le fichier app.py

5 routes :
- POST /attraction -> ajout d'une attraction ou update si un id est donné et qu'il correspond à une attraction déjà présente
- GET /attraction -> récupération de toutes les attractions
- GET /attraction/<id> -> récupération d'une attraction
- DELETE /attraction/<id> -> suppression d'une attraction
- POST /login -> connexion administrateur

Token expire en 1 jour

## Base de données

2 tables :

- attraction
- users

Pas de clés étrangères