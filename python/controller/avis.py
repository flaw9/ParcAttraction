import request.request as req

def add_avis(data):
    print(data, flush=True)
    if (not "texte" in data or data["texte"] == ""):
        return False
    
    if (not "note" in data or data["note"] is None):
        return False

    if(not "attraction_id" in data or data["attraction_id"] is None):
       return False

    if ("avis_id" in data and data["avis_id"]):
      requete = f"UPDATE avis SET texte='{data['texte']}', note='{data['note']}', nom={data['nom']}, prenom={data['prenom']}, attraction_id ={data['attraction_id']} WHERE avis_id = {data['avis_id']}"
      req.insert_in_db(requete)
      id = data['avis_id']
    else:
      requete = "INSERT INTO avis (texte, note, nom, prenom, attraction_id) VALUES (?, ?, ?, ?, ?);"
      id = req.insert_in_db(requete, (data["texte"], data["note"], data["nom"], data["prenom"], data["attraction_id"]))

    return id

def get_avis(id):
  json = req.select_from_db("SELECT * FROM avis WHERE attraction_id = ?", (id,))
  return json