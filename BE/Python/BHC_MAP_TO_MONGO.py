import requests
import pymongo

client = pymongo.MongoClient('localhost', 27017)
db=client.BHC_PROJECT
collection = db.MAP
if collection.find_one()==None:
    REST_API_KEY = 'e0bfedd412178e73dee2a88eae8f3ad0'
    headers = {'Authorization': "KakaoAK {}".format(REST_API_KEY)}
    count = 0
    for page_idx in range(1,45):
        resData = requests.get("https://dapi.kakao.com/v2/local/search/keyword.json?query=bhc&&page={}".format(page_idx),headers=headers).json()
        for map in resData['documents']:
            collection.insert_one(map)
            count+=1



    print(count)
