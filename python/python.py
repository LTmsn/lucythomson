import json

# read file
with open('test.json', 'r') as x:
    x_dict = json.load(x)

# show values
print(x_dict)