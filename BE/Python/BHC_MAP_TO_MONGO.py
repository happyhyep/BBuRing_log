import requests
from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By
import time
import pymongo

host = 'localhost'
port = 27017
client = pymongo.MongoClient(host=host,port=port)
db=client['BHC_PROJECT'].MAP

API_KEY ='8D666D83-E9AC-3A40-9D46-788E56CABC1F'
# resData = requests.get("http://api.vworld.kr/req/search?key={}&&query={}&&request=search&&type=ADDRESS&&category=ROAD".format(API_KEY,'경기 광주시 곤지암읍 곤지암리 337-12')).json()
# loc = resData['response']['result']['items'][0]['point']
# print(loc['x'],loc['y'])

dr = webdriver.Chrome()
dr.get('https://www.bhc.co.kr/location/search.asp')
act = ActionChains(dr)
lst = []

print(dr.find_element(By.CLASS_NAME, 'pr0'))
dr.find_element(By.CLASS_NAME, 'pr0').click()
time.sleep(5)
for i in range(15):
    next = dr.find_element(By.CLASS_NAME, 'paging').find_elements(By.TAG_NAME, 'a')
    start=2
    end = 13
    for j in range(start,end):
        next[j].click()
        print(next[j].text)
        time.sleep(5)
        elem = dr.find_element(By.CLASS_NAME, 'register01').find_element(By.TAG_NAME, 'tbody').find_elements(
            By.TAG_NAME, 'tr')
        for k in range(len(elem)):
            temp = elem[k].text
            temp_lst = temp.split('\n')
            temp_lst[1]= temp_lst[1][5:]
            temp_lst[2]=temp_lst[2][7:]
            x=0
            y=0
            print(temp_lst)
            resData = requests.get(
                "http://api.vworld.kr/req/search?key={}&&query={}&&request=search&&type=ADDRESS&&category=ROAD".format(
                    API_KEY, temp_lst[1])).json()
            if 'result' in resData['response']:
                loc = resData['response']['result']['items'][0]['point']
                x = loc['x']
                y= loc['y']
            db.insert_one({'name':temp_lst[0],'address':temp_lst[1],'phone':temp_lst[2],'x':x,'y':y})
        next = dr.find_element(By.CLASS_NAME, 'paging').find_elements(By.TAG_NAME, 'a')
    dr.find_elements(By.CLASS_NAME, 'pr0')[1].click()

print(lst)