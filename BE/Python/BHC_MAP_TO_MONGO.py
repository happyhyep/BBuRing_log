import requests
from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By
API_KEY ='8D666D83-E9AC-3A40-9D46-788E56CABC1F'
resData = requests.get("http://api.vworld.kr/req/search?key={}&&query={}&&request=search&&type=ADDRESS&&category=ROAD".format(API_KEY,'인천 남동구 백범로294번길 19 (간석동, 간석LH1단지상가)')).json()
loc = resData['response']['result']['items'][0]['point']
print(loc['x'],loc['y'])

dr = webdriver.Chrome()
dr.get('https://www.bhc.co.kr/location/search.asp')
act = ActionChains(dr)
elem = dr.find_elements(By.CLASS_NAME,'mt10.mb10')
for i in elem:
    print(i.text)
