import requests
from . import parse.py

res = requests.get('https://www.linkedin.com/jobs/view/mechanical-technician-1-at-northrop-grumman-3285901132?trk=org-job-results')

parse(res.text)
