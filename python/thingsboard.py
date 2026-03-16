#Importing required 
import paho.mqtt.client as mqtt
import json
import time

# Defining required constants
TOKEN = ""
BROKER = " "
PORT = 1883

# Configuring the client

client  = mqtt.Client()
client.username_pw_set(TOKEN)

# Connection String
print("Connecting to ThingsBoard.....")
client.connect(BROKER, PORT, 60)

# Prepare the Data

for i in range(5);
  data = { "pm10": 50 + i }

# Publish the data

client.publish("Telemetry: ",json.dump(data))
print("Sent: ", data)
time.sleep(2)

#Close the Connection 

client.disconnect()
print("Done")