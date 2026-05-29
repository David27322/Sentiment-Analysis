import re
import nltk 
from nltk.corpus import stopwords 

nltk.download("stopwords", quiet=True)
_stop_words = set(stopwords.words("english"))


def clean_text(text: str) -> str:
    text = text.lower()
    text = re.sub(r"http\S+|www\S+", "", text)
    text = re.sub(r"@\w+", "", text)
    text = re.sub(r"#\w+", "", text)
    text = re.sub(r"[^a-z\s]", "", text)
    words = [w for w in text.split() if w not in _stop_words]
    return " ".join(words)