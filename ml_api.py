from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import pandas as pd
import difflib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app=FastAPI()

anime_data=pd.read_json("./bd_anime_recommendation/animedata.json")
selected_features=['genres','studio','description','episodes']
anime_data['genres']=anime_data['genres'].apply(lambda x:' '.join(x) if isinstance(x,list) else str(x))
anime_data['studio']=anime_data['studio'].astype(str)
anime_data['episodes']=anime_data['episodes'].astype(str)
anime_data['description']=anime_data['description'].astype(str)
combined_features=anime_data['genres']+' '+anime_data['studio']+' '+anime_data['description']+' '+anime_data['episodes']
vectorizer=TfidfVectorizer()
feature_vectors=vectorizer.fit_transform(combined_features)
similarity=cosine_similarity(feature_vectors)

class AnimeRequest(BaseModel):
    anime:str


@app.post("/recommend")
def recommendAnime(data:AnimeRequest):
    anime_name=data.anime
    list_of_anime=anime_data['name'].tolist()
    find_close_match=difflib.get_close_matches(anime_name,list_of_anime)
    if not find_close_match:
        return{"error":"Anime not found"}
    close_match=find_close_match[0]
    index_of_anime=anime_data[anime_data['name']==close_match].index[0]
    similarity_score=list(enumerate(similarity[index_of_anime]))
    sorted_similar=sorted(similarity_score,key=lambda x:x[1], reverse=True)
    recommendations=[]
    for anime in sorted_similar[1:11]:
        index=anime[0]
        title=anime_data.iloc[index]['name']
        recommendations.append({
        "id": int(anime_data.iloc[index]['id']),
        "name": anime_data.iloc[index]['name'],
        "genres": anime_data.iloc[index]['genres'],
        "studio": anime_data.iloc[index]['studio'],
        "episodes": anime_data.iloc[index]['episodes'],
        "description": anime_data.iloc[index]['description']
})
    return{
        "input":anime_name,
        "recommendations":recommendations
    }