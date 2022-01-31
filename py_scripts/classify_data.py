import gspread
import pickle
from nltk.tokenize import word_tokenize


gc = gspread.service_account(filename='squartic-default-f399c945be32.json')

sh = gc.open_by_url('https://docs.google.com/spreadsheets/d/1DjMrsMH9erslRNwCGfT9pn4B1qyA4otPB9kRH7rstgY')

worksheet = sh.worksheet("Form responses 1")

#import models(classifer and vectorizer) in pickle
loaded_model = pickle.load(open("MNB_Clf.sav", "rb"))
word_features = pickle.load(open("word_features.sav", "rb"))

def find_features(document):
    words = word_tokenize(document)
    features = {}
    for w in word_features:
        features[w] = (w in words)
    return features

#classifies a given text
def sentiment(text):
    feats = find_features(text)
    return loaded_model.classify(feats)

