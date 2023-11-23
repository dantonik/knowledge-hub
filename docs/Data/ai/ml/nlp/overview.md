# Overview

Natural Language Processing (NLP)  
A field of AI that allows computers to understand, interpret and generate human language data.  


Extraction of key components in our text.  
- Speech tagging
- Named entity recognition

Understanding the emotions in our text.  
- Sentiment analysis

Text vectorization  
Topic modeling  
Classifier  

## Stop words
Stop words don't carry much meaning.  
`and, of, a, to`  
```
import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
en_stopwords = stopwords.words('english')

sentence_no_stopwords = ' '.join(word for word in sentence.split() if word not in en_stopwords)
```

## Regular expressions
```
import re
result_search = re.search("pattern", r"string to contain the pattern")

for string in customer_reviews:
    if (re.search(pattern, string)):
        matching_reviews.append(string)
```
```
pattern = r"y$"
pattern = r"^a"
pattern = r"(need|want)ed"
```
```
no_punct_reviews = []
pattern = r"[^\w\s]"

for string in customer_reviews:
    no_punct_string = re.sub(pattern, "", string)
    no_punct_reviews.append(no_punct_string)
```

## Tokenization
```
import nltk
nltk.download('punkt')
from nltk.tokenize import word_tokenize, sent_tokenize

sent_tokenize(sentences)
word_tokenize(sentence)
```

## Stemming
Words get reduced to their base form.  

```
from nltk.stem import PorterStemmer

ps = PorterStemmer()
ps.stem(token)
```

## Lemmatization
```
nltk.download('wordnet')
from nltk.stem import WordNetLemmatizer

lem = WordNetLemmatizer
lem.lemmatizer(token)
```

## N-grams
```
import nltk
import pandas as pd
import matplotlib.pyplot as plt

unigrams = (pd.Series(nltk.ngrams(tokens, 1))).value_counts()
unigrams[:10].sort_values().plot.barh(color="lightsalmon", width=.9, figsize=(12,8))
plt.title("10 Most frequently occuring unigrams")
```
bigrams is the same but with n=2.  

## Language modeling
- Suggestions in messengers
- Spelling correction
- Machine translation
- Speech recognition
- Handwriting recognition

## Semantic Textual Similarity (STS)

## Word Embeddings
- Word2Vec
- GloVe
- ELMo
- FastText

## Sentence Embeddings
- Universal Sentence Encoder (USE)
- Doc2Vec
- SentenceBERT
- InferSent
