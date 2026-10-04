# Local preview server that never lets the browser cache files,
# so every reload shows the latest build.  Usage: python3 serve.py [port]
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoCache(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        self.send_header('Expires', '0')
        super().end_headers()


port = int(sys.argv[1]) if len(sys.argv) > 1 else 4877
ThreadingHTTPServer(('', port), NoCache).serve_forever()
