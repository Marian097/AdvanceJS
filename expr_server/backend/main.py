from db import Database
import json
import os

db = Database()

cale_curenta = os.path.dirname(os.path.abspath(__file__))

# construim calea relativă către fișierul JSON (aflat cu un folder mai sus)
cale_json = os.path.join(cale_curenta, "..", "utilizatori.json")

# citim și parsem conținutul JSON
with open(cale_json, "r", encoding="utf-8") as f:
    date = json.load(f)

name = date["name"]
email = date["email"]
pasword = date["pass"]




db.openDB()

db.addUSERS(name, email, pasword)