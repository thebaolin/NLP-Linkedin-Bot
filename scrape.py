import requests
from . import parse

res = requests.get('https://www.linkedin.com/jobs/view/mechanical-technician-1-at-northrop-grumman-3285901132?trk=org-job-results')

parse.Parse(res)
