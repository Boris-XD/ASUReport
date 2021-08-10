import csv
import json
import pandas as pd 
nombreJson = "archivo.json"
nombreArchivo = input("ingrese el nombre del Archivo a Seleccionar:")
with open(nombreJson, "w", encoding="utf-8") as archivo:
    archivo.write("")
    archivo.close()
pasarlo = pd.DataFrame(pd.read_csv(nombreArchivo, sep = ",", header = 0, index_col = False))
pasarlo.to_json(nombreJson, orient = "records", date_format = "epoch", double_precision = 10, force_ascii = False, date_unit = "ms", default_handler = None)
