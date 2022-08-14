import flask
import os
import sys
from flask import Flask, request, send_file, render_template
from flask_cors import CORS
import json
from datetime import datetime, timedelta
from pytz import timezone
import pytz


# Relative path setup
cur_path = os.path.abspath(".")
sys.path.append(cur_path)

# Setup paths to the metadata and images directories
META_IMGS_PATH = os.path.abspath("./metadata")
IMGS_PATH = os.path.abspath("./images")

# Specify the URL of the React frontned
FRONTEND_URL = "http://localhost:3000"


app = Flask(__name__)
CORS(app, supports_credentials=True)

picFolder = os.path.join("static")
app.config['UPLOAD_FOLDER'] = picFolder

# Response Header Wrapper function, setting appropriate header permissions


def add_response_headers(response):
    response.headers.add('Access-Control-Allow-Origin', FRONTEND_URL)
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    response.headers.add('Access-Control-Allow-Headers',
                         'Content-Type,Authorization,Cache-Control')
    response.headers.add('Access-Control-Allow-Methods',
                         'GET,PUT,POST,DELETE,OPTIONS')
    return response


@app.route('/hello')
def say_hello_world():
    return flask.jsonify({'result': "Hello Connected React World!!!"})


@app.route('/api/info')
def get_information():
    try:
        meta_files = os.listdir(META_IMGS_PATH)
        for meta_file in meta_files:
            if meta_file == "info.json":
                meta_fpath = os.path.join(META_IMGS_PATH, meta_file)
                with open(meta_fpath, 'r') as meta_file:
                    meta_data = json.load(meta_file)
                    return flask.jsonify(meta_data)
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        response = add_response_headers(response)
        return response


@app.route('/api/images')
def get_images():
    try:
        args = request.args.to_dict()
        numero = args['num']
        meta_files = os.listdir(META_IMGS_PATH)
        for meta_file in meta_files:
            if meta_file == str(numero) + ".json":
                meta_fpath = os.path.join(META_IMGS_PATH, meta_file)
                with open(meta_fpath, 'r') as meta_file:
                    meta_data = json.load(meta_file)
                    return flask.jsonify(meta_data)
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response


@app.route('/image1', methods=['GET'])
def load_image1():
    num = str(request.args.get('num'))
    meta_path = os.path.join(META_IMGS_PATH, num+".json")
    with open(meta_path, 'r') as meta_file:
        meta_data = json.load(meta_file)
    fpath = os.path.join(
        app.config['UPLOAD_FOLDER'], str(num), meta_data["img1"])
    if not os.path.isfile(fpath) or not os.path.exists(fpath):
        raise ValueError(f"No file found: {fpath}")

    return send_file(fpath)


@app.route('/image2', methods=['GET'])
def load_image2():
    num = str(request.args.get('num'))
    meta_path = os.path.join(META_IMGS_PATH, num+".json")
    with open(meta_path, 'r') as meta_file:
        meta_data = json.load(meta_file)
    fpath = os.path.join(
        app.config['UPLOAD_FOLDER'], str(num), meta_data["img2"])
    if not os.path.isfile(fpath) or not os.path.exists(fpath):
        raise ValueError(f"No file found: {fpath}")

    return send_file(fpath)


@app.route("/api/update", methods=["PUT"])
def update_info():
    try:
        values = request.json
        paris_day = datetime.now(pytz.timezone('Europe/Paris')).day
        meta_path = os.path.join(META_IMGS_PATH, "info.json")
        with open(meta_path, 'r') as meta_file:
            meta_data = json.load(meta_file)
        if str(paris_day) != meta_data["jour"]:
            values = {"jour": str(paris_day), "win": "0", "lose": "0", "numero": str(
                int(values["numero"]))}
            # values = {"jour" : str(paris_day), "win" : "0", "lose" : "0", "numero" : str(int(values["numero"]) + 1)}
        meta_fpath = os.path.join(META_IMGS_PATH, "info.json")
        new_info = meta_data
        if "win" in values:
            new_info["win"] = str(int(new_info["win"]) + 1)
        else:
            new_info["lose"] = str(int(new_info["lose"]) + 1)
        with open(meta_fpath, 'w') as meta_filee:
            json.dump(new_info, meta_filee)

        response = flask.jsonify({"success": True})
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
    return response


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=6789)
