
import json
import os
from http.server import BaseHTTPRequestHandler, HTTPServer

def add_user(name, email):
    if os.path.exists('users.json'):
        with open('users.json', 'r') as file:
            users = json.load(file)
    else:
        users = []

    users.append({'name': name, 'email': email})

    with open('users.json', 'w') as file:
        json.dump(users, file, indent=4)

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        query = self.path.split('?')[-1]
        params = dict(qc.split('=') for qc in query.split('&')) if query else {}

        name = params.get('name')
        email = params.get('email')

        if name and email:
            add_user(name, email)

        self.send_response(302)
        self.send_header('Location', 'index.html')
        self.end_headers()

def run(server_class=HTTPServer, handler_class=RequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting httpd server on port {port}')
    httpd.serve_forever()

if __name__ == "__main__":
    run()