# Rips data from CSV

# DBH is in inches
# AREAWATER AREALAND is in Sq Ft
# Shade is in Sq Ft

import pandas as pd
import urllib
import json


treestuff = pd.read_csv(open('UFA_Street_Trees.csv', 'rU'), header=0, low_memory=False, error_bad_lines=False, encoding='utf-8')
indexes = [str(i) for i in list(treestuff.index)]

for i in indexes:
    tree_row = treestuff.iloc[int(i)]

    lat = tree_row.loc["Y"]
    lng = tree_row.loc[u"\uFEFFX"]
    tbox_stat = tree_row.loc["TBOX_STAT"]
    dbh = tree_row.loc["DBH"]
    condition = tree_row.loc["CONDITION"]
    sci_name = tree_row.loc["SCI_NM"]
    cmmn_name = tree_row.loc["CMMN_NM"]
    fam_name = tree_row.loc["FAM_NAME"]
    genus_name = tree_row.loc["GENUS_NAME"]
    wires = tree_row.loc["WIRES"]

    if condition.lower() == "dead":
        continue
    if condition.lower() == "":
        continue
    if tbox_stat.lower() == "delete":
        continue
    if dbh.lower() == "":
        continue

    geocoderURL = "http://geocoding.geo.census.gov/geocoder/geographies/coordinates?x=" + str(lng) + "&y=" + str(lat) + "&benchmark=4&vintage=4&layers=12&format=json"

    fipsCodes = json.loads((urllib.urlopen(geocoderURL)).read())
    fipsCodes = fipsCodes[u'result'][u'geographies'][u'2010 Census Blocks']

    blockGroup = fipsCodes[u'BLKGRP']
    block = fipsCodes[u'BLOCK']
    tract = fipsCodes[u'TRACT']
    state = fipsCodes[u'STATE']
    county = fipsCodes[u'COUNTY']

    arealand = fipsCodes[u'AREALAND']
    areawater = fipsCodes[u'AREAWATER']

