# 1. import Flask
from flask import Flask, jsonify

# 2. Create an app, being sure to pass __name__
app = Flask(__name__)


@app.route("/")
def index():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/"
        f"/api/v1.0/viz1<br/>" #change viz to something descriptive
        f"/api/v1.0/viz2<br/>" #change viz to something descriptive
        f"/api/v1.0/viz3<br/>" #change viz to something descriptive
        f"/api/v1.0/viz4<br/>" #change viz to something descriptive
        f"/api/v1.0/comparisons<br/>"
        f"/api/v1.0/data<br/>"
    )



# 3. Define what to do when a user hits the index route
@app.route("/")
def home():
    print("Landing page")
    return "landing page"


# 4. Define what to do when a user hits the /about route
@app.route("/viz1") #change viz to something descriptive
def viz1():
    print("Server received request for viz1 page...")
    return "viz1"

@app.route("/viz2") #change viz to something descriptive
def viz2():
    print("Server received request for viz2 page...")
    return "viz2"

@app.route("/viz3") #change viz to something descriptive
def viz3():
    print("Server received request for viz3 page...")
    return "viz3"

@app.route("/viz4") #change viz to something descriptive
def viz4():
    print("Server received request for viz4 page...")
    return "viz4"

if __name__ == "__main__":
    app.run(debug=True)
