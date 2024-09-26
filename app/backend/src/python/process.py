import sys
import json

def process_message(message):
    response = f"Python received: {message}"
    return response

if __name__ == '__main__':
    input_data = sys.stdin.read()  
    data = json.loads(input_data)
    message = data.get('message', '')
    
    response = process_message(message)
    output = json.dumps({'response': response})
    sys.stdout.write(output)
    sys.stdout.flush()  
