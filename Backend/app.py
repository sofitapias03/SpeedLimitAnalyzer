from flask import Flask, request, jsonify
import osmnx as ox
import networkx as nx
import requests 
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

#Mapillary Tocken

TOKEN = 'MLY|34380392688240687|1539995db751210ec2de514e556ad0e0'

# The flask backend defines the API endpoint
@app.route("/get-route-images", methods=["POST"])
def get_route_images():
    data = request.json
    pointA = data.get("pointA")  # [lat, lon]
    pointB = data.get("pointB")  # [lat, lon]
    street = data.get("street")  

    print("Point A:", pointA)
    print("Point B:", pointB)
    print("Street:", street)

    return jsonify({"status": "received", "pointA": pointA, "pointB": pointB, "street": street})

if __name__ =="__main__":
    app.run(debug=True)