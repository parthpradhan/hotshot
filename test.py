#!C:\Users\AsUS\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html")
print()
import cgi
import requests,json

form= cgi.FieldStorage()
imageurl = form.getvalue('url')
value = requests.get('https://serpapi.com/search.json?engine=google_reverse_image&image_url='+imageurl+'&api_key=bc89973b66a8d7ba5a3636267dfd669dfc4976ce7ff0dcb98bf8b2e9262f3292')
li = value.json()['inline_images']
dic = {}
for i in range(len(li)):
      var = "img"+str(i)
      dic[var] = li[i]['link']

with open("sample.json", "w") as outfile:
   json.dump(dic, outfile)
print("<h1>done</h1>")
print('<meta http-equiv="refresh" content="3; URL=http://localhost/Hackathon/pyhtml.html" />')