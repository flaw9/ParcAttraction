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
    if (not "note" in data or data["note"] is None or data["note"] < 0 or data["note"] > 5):
        return False

    if (not "commentaire" in data or data["commentaire"] == ""):
        return False

    if (not "attraction_id" in data or data["attraction_id"] is None or data["attraction_id"] == "-1"):
        return False

    json = req.select_from_db("SELECT * FROM attraction WHERE attraction_id = ?", (data["attraction_id"],))
    if len(json) == 0:
        return False

    if ("critique_id" in data and data["critique_id"]):
        requete = "UPDATE critique SET note=?, commentaire=?, attraction_id=?, nom=?, prenom=? WHERE critique_id = ?"
        req.insert_in_db(requete, (data["note"], data["commentaire"], data["attraction_id"], data["nom"], data["prenom"], data["critique_id"]))
        id = data['critique_id']
    else:
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
    SELECT critique_id, note, commentaire, critique.nom as nom,
    prenom, attraction.nom as attraction_nom
    FROM critique
    RIGHT JOIN attraction ON critique.attraction_id = attraction.attraction_id
    WHERE attraction.attraction_id = ?;
    """
    json = req.select_from_db(query, (id,))

    return json

def get_mean_note_for_attraction(id):
    if (not id):
        return False

    query = "SELECT AVG(note) as moyenne FROM critique WHERE attraction_id = ?;"
    json = req.select_from_db(query, (id,))

    return json[0]["moyenne"]