import pandas as pd

import numpy as np
from ast import literal_eval

import sys

def process_message(message):
    return message.upper()

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("No message provided.")
        sys.exit(1)

    message = sys.argv[1]
    
    response = process_message(message)
    
    print(response)