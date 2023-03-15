import pickle

model = None
with open("HCV-best-model-pickle.pkl", "rb") as file:
    model = pickle.load(file)
