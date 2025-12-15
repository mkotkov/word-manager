import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

class Word(BaseModel):
    word: str

class Desk(BaseModel):
    desk: List[Word]


app = FastAPI()

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

memory_db = {"desk": []}

@app.get(path="/desk", response_model=Desk)
def get_desk():
    return Desk(desk=memory_db["desk"])

@app.post(path="/desk")
def add_word(word: Word):
    memory_db["desk"].append(word)
    return word

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)