import datetime
from flask import jsonify
import jwt

key = "AAAAB3NzaC1yc2EAAAADAQABAAABAQC3AXRA84GNbptx2Mr8EWxlHWYUvacaBPDMm2jO8+u0gXMVMiBHtH9DdNYrmOWVbCjPKUuqwup5t3Z7sDWkGQThEWf6+VdfjcEdndM1/WOdAyyMSBGXxCrXkjhXnc/IV1haNEqNZAdt+QjNvODBJH1m4ChTdGhAQupggQaC5zblXgmWGwXK7gxHekWJ02OtZqC6DZsmN6pTo7gJdZzfdS0AXj7yCY2ZSo9OnuDccVklKbq11p7UiF7NB+wmIcOxO9KnnSipHm0uR7d2O/0KNtjIG1GeUgzaWK53WL8tzV8Kek3yoyOmDvFMgULG1HHLWBqjfyaEDGoheIklxlvr7RvZ"

def encode_auth_token(user_id):
    try:
        payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1, seconds=0),
            'iat': datetime.datetime.utcnow(),
            'sub': user_id
        }

        testjwt = jwt.encode(
            payload,
            key,
            algorithm='HS256'
        )
        return testjwt
    except Exception as e:
        return e

def decode_auth_token(auth_token):
    try:
        payload = jwt.decode(auth_token, key, algorithms=['HS256'])
        return True
    except jwt.ExpiredSignatureError as e:
        return 'Le token a expiré. Veuillez-vous reconnecter.'
    except jwt.InvalidTokenError as e:
        return 'Le token est invalide. Veuillez-vous reconnecter.'

# Fonction vérif token
def check_token(request):
    if ('Authorization' in request.headers):
        token = request.headers['Authorization']
        if (token != ""):
            token = token.replace('Token ', '').replace('"', '')

            response = decode_auth_token(token)
            if (response != True):
                result = jsonify({"message": response})
                return result, 401
            return True
    result = jsonify({"message": "Aucun token"})
    return result, 401
