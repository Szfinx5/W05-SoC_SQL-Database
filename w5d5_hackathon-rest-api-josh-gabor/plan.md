file structure

.env variables - from heroku ✅
  scripts to run anything will need to require these variables ❗

db / index.js pg import - set up pool - export query ✅


db / scripts / all our script.js - import query - 
set up table and populate table and drop table respectively
  use random info - not bothered what just want this working!
   we have a seed query to populate

models / datahelperfunctions in models.js - functions that interact 
with data - will all create an sql string and return the result - 
export functions 

routes / our routes.js - server code to deal with anything passed 
to the route by the app.js servercode file and call the functions 
rom models so import functions

app.js main server code file - most seems already wrote 
  need to pass the url path to the correct routes file
  need a way to unpack jsons I think for when/if(!) 
  we make a front end


STRETCH GOALS

TBA - front end
TBA - multiple tables