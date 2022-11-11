from flask import Flask
from flask import render_template

__name__ = '__main__' #?

import support.app_object as app_object

app = app_object.app


@app.route('/')
def home():
	return render_template('mainform.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True, use_reloader=False)
