# Rips data from CSV

# DBH is in inches
# AREAWATER AREALAND is in Sq Ft
# Shade is in Sq Ft

# DB shadytreesdb.cp5qykdsxe3g.us-east-1.rds.amazonaws.com
# shadytreesdb / trees

import pandas as pd
import urllib
import json
import MySQLdb
import re

def area_of_circle(radius):
  return 3.1415926 * radius * radius

def shade_area(dbh):
   if (dbh <= 6):
       z_ratio = 27
   elif (dbh <= 8):
       z_ratio = 24
   elif (dbh <= 10):
       z_ratio = 22
   elif (dbh <= 12):
       z_ratio = 21
   elif (dbh <= 14):
       z_ratio = 20
   elif (dbh <= 18):
       z_ratio = 19
   elif (dbh <= 23):
       z_ratio = 18
   else:
       z_ratio = 17

   return area_of_circle(z_ratio * dbh / 12 / 2)

def gimmeData():
    print 'Beginning data load'
    connector = MySQLdb.connect(host="shadytreesdb.cp5qykdsxe3g.us-east-1.rds.amazonaws.com",
                                user="shadytrees",
                                passwd="gsahackathon",
                                db="shadytreesdb")
    SQL = connector.cursor()

    treestuff = pd.read_csv(open('UFA_Street_Trees.csv', 'rU'), header=0, low_memory=False, error_bad_lines=False, encoding='utf-8')
    indexes = [str(i) for i in list(treestuff.index)]

    for i in indexes:
        if(int(i)%100 == 0 and int(i) > 0):
            print 'Completed ' + i
            connector.commit()
        tree_row = treestuff.iloc[int(i)]

        lat = tree_row.loc["Y"]
        lng = tree_row.loc[u"\uFEFFX"]
        tbox_stat = tree_row.loc["TBOX_STAT"]
        dbh = tree_row.loc["DBH"]
        condition = tree_row.loc["CONDITION"]
        sci_name = re.escape(str(tree_row.loc["SCI_NM"]))
        cmmn_name = re.escape(str(tree_row.loc["CMMN_NM"]))
        fam_name = re.escape(str(tree_row.loc["FAM_NAME"]))
        genus_name = re.escape(str(tree_row.loc["GENUS_NAME"]))
        wires = tree_row.loc["WIRES"]

        if condition == "":
            continue
        if str(condition) == "nan":
            continue
        if condition.lower() == "dead":
            continue
        if tbox_stat.lower() == "delete":
            continue
        if str(dbh).lower() == "nan":
            continue

        geocoderURL = "http://geocoding.geo.census.gov/geocoder/geographies/coordinates?x=" + str(lng) + "&y=" + str(lat) + "&benchmark=4&vintage=4&layers=12&format=json"

        fipsCodes = json.loads((urllib.urlopen(geocoderURL)).read())
        fipsCodes = fipsCodes[u'result'][u'geographies'][u'2010 Census Blocks'][0]

        blockGroup = fipsCodes[u'BLKGRP']
        block = fipsCodes[u'BLOCK']
        tract = fipsCodes[u'TRACT']
        state = fipsCodes[u'STATE']
        county = fipsCodes[u'COUNTY']

        arealand = fipsCodes[u'AREALAND']
        areawater = fipsCodes[u'AREAWATER']

        areashade = shade_area(dbh)

        sqlInsert = "INSERT INTO trees (lat, lng, tbox_stat, cond, dbh, sci_name, cmmn_name, fam_name, genus_name, wires, blockGroup, block, tract, state, county, arealand, areawater, areashade) VALUES (%s, %s, '%s', '%s', %s, '%s', '%s', '%s', '%s', '%s', %s, %s, %s, %s, %s, %s, %s, %s);" % (lat, lng, tbox_stat, condition, dbh, sci_name, cmmn_name, fam_name, genus_name, wires, blockGroup, block, tract, state, county, arealand, areawater, areashade)
        SQL.execute(sqlInsert)
    connector.commit()
    connector.close()
    print 'Done'

gimmeData()