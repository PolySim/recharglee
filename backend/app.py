import mysql.connector
import flask
from flask import Flask, request, send_file, render_template
from flask_cors import CORS
import json
import base64
import os

application = Flask(__name__)
CORS(application, supports_credentials=True)


# test connection
@application.route('/hello')
def helloWorld():
    return "Hello World"


def format_api_info(SQL_result):
    return {
        "lose": SQL_result[0],
        "win": SQL_result[1],
        "numero": SQL_result[2]
    }


@application.route('/api/info')
def get_information():
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='Rechargle', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        request = "SELECT * FROM game;"
        cursor.execute(request)
        result = cursor.fetchall()
        return flask.jsonify(format_api_info(result[0]))
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response

    finally:
        # Close connection
        if connection:
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


def format_api_image(SQL_result):
    return {
        "alt1": SQL_result[2],
        "alt2": SQL_result[4],
        "id": SQL_result[0],
        "img1": SQL_result[1],
        "img2": SQL_result[3],
        "indice1": SQL_result[5],
        "indice2": SQL_result[6],
        "response": SQL_result[7]
    }


@application.route('/api/images')
def get_images():
    try:
        args = request.args.to_dict()
        numero = args['num']
        connection = mysql.connector.connect(host='127.0.0.1', database='Rechargle', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        SQLrequest = f"SELECT * FROM image WHERE id = {numero};"
        cursor.execute(SQLrequest)
        result = cursor.fetchall()
        return flask.jsonify(format_api_image(result[0]))
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response

    finally:
        # Close connection
        if connection:
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


@application.route('/image', methods=['GET'])
def get_image():
    try:
        args = request.args.to_dict()
        numero = args['num']
        path = args['path']
        return send_file(f"static/{numero}/{path}")
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response


@application.route('/api/update', methods=["PUT"])
def update_info():
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='Rechargle', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        args = request.json
        print(request.json)
        win = args['win']
        value = args['value']
        numero = args['numero']

        if(win):
            SQLrequest = f"""
                UPDATE game
                SET number_win = {value}
                WHERE id = {numero};
                """
        else:
            SQLrequest = f"""
                    UPDATE game
                    SET number_lose = {value}
                    WHERE numero = {numero};
                    """
        cursor.execute(SQLrequest)
        connection.commit()
        return "Update finish"
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response

    finally:
        # Close connection
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


