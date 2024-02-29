# Installation and Decumentation

## frontend_installation
~~~
cd frontend
npm i 
nmp run dev
~~~
## backend_installation
~~~
cd backend
run.sh
~~~

## search_engine

This converts all quest data into vector embeddings to generate the vectors of n dimenssion, which are then stored into vector DB like elastic search vector db. 
After which query data is converted to vector and using K-Nearest Neighbors (Knn) we finding the nost nearest search results 
