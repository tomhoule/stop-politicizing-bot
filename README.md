# stop politicizing bot

Creative credit for the bot goes to @tcatf

Building words.txt (assuming you are on a unix-based system for /usr/share/dict/words):


```bash
# every word ending in -s, except possessives ('s)
grep -e "[^\']s$" /usr/share/dict/words > src/words.txt

# every word ending in -ism
grep -e "ism$" /usr/share/dict/words >> src/words.txt

# every proper noun (everything starting with a capital letter), except possessives
grep -e "^[A-Z].*[^\']s$" /usr/share/dict/words >> src/words.txt
```
