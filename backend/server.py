from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from model import model

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)


class PredictionInput(BaseModel):
    age: int
    sex: int
    alb: int
    alp: int
    alt: int
    ast: int
    bil: int
    che: int
    chol: int
    crea: int
    ggt: int
    prot: int


@app.post("/predict")
async def predict(prediction_input: PredictionInput):
    prediction = model.predict([[
        prediction_input.age,
        prediction_input.sex,
        prediction_input.alb,
        prediction_input.alp,
        prediction_input.alt,
        prediction_input.ast,
        prediction_input.bil,
        prediction_input.che,
        prediction_input.chol,
        prediction_input.crea,
        prediction_input.ggt,
        prediction_input.prot,
    ]])
    return {"prediction": prediction[0]}


@app.get("/prediction_classes")
async def prediction_classes():
    return {"classes": list(model.classes_)}
