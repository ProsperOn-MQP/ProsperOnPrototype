from flask import Flask, request, jsonify

app = Flask(__name__)


#example post http request
@app.route('/api/process', methods=['POST'])
def process_message():
    data = request.json
    message = data.get('message', '')
    
    response = f'Python recieved : {message}'
    
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True, port=5001) 
    print("Python backend running")
