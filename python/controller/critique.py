import request.request as req

def get_all_critique():
    json = req.select_from_db("SELECT * FROM critique")

    return json

def get_critique(id):
    if (not id):
        return False

    json = req.select_from_db("SELECT * FROM critique WHERE critique_id = ?", (id,))

    if len(json) > 0:
        return json[0]
    else:
        return []

def add_critique(data):
    if (not "note" in data or data["note"] is None):
        return False

    if (not "commentaire" in data or data["commentaire"] == ""):
        return False

    if (not "attraction_id" in data or data["attraction_id"] is None):
        return False

    requete = "INSERT INTO critique (note, commentaire, attraction_id, nom, prenom) VALUES (?, ?, ?, ?, ?);"
    id = req.insert_in_db(requete, (data["note"], data["commentaire"], data["attraction_id"], data["nom"], data["prenom"]))

    return id

def delete_critique(id):
    if (not id):
        return False

    req.delete_from_db("DELETE FROM critique WHERE critique_id = ?", (id,))

    return True

def get_critique_for_attraction(id):
    if (not id):
        return False

    query = """
    SELECT critique_id, note, commentaire, critique.nom as critique_nom,
    prenom as critique_prenom, attraction.nom as attraction_nom
    FROM critique
    LEFT JOIN attraction ON critique.attraction_id = attraction.attraction_id
    WHERE critique.attraction_id = ?;
    """
    json = req.select_from_db(query, (id,))

    return json