import json
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import parse_qs

# اسم ملف JSON لتخزين بيانات المستخدمين
USERS_FILE = 'users.json'

# دالة لإضافة مستخدم جديد إلى ملف JSON
def add_user(name, email):
    try:
        # قراءة البيانات الحالية من ملف JSON
        with open(USERS_FILE, 'r') as f:
            users = json.load(f)
    except FileNotFoundError:
        users = []  # إذا لم يكن الملف موجودًا، نبدأ بقائمة فارغة

    # إضافة المستخدم الجديد إلى القائمة
    users.append({'name': name, 'email': email})

    # كتابة البيانات المحدثة إلى ملف JSON
    with open(USERS_FILE, 'w') as f:
        json.dump(users, f)

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        # قراءة ملف HTML
        with open('index.html', 'r') as f:
            content = f.read()

        # إرسال استجابة مع محتوى HTML
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write(content.encode('utf-8'))

    def do_POST(self):
        # قراءة البيانات من الطلب
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode('utf-8')
        params = parse_qs(post_data)

        name = params.get('name', [None])[0]
        email = params.get('email', [None])[0]

        if name and email:
            add_user(name, email)

        # إعادة توجيه المستخدم إلى صفحة التسجيل
        self.send_response(302)
        self.send_header('Location', 'index.html')
        self.end_headers()

def run(server_class=HTTPServer, handler_class=RequestHandler):
    server_address = ('', 8000)  # استمع على المنفذ 8000
    httpd = server_class(server_address, handler_class)
    print('Starting server on port 8000...')
    httpd.serve_forever()

if __name__ == "__main__":
    run()
