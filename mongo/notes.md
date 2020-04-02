# instalation
start the mongo deamon
```
  mkdir data
  cd data
  mkdir db
  cd ..
  sudo chown -R `id -un` data/db
  sudo mongod --dbpath data/db
```
in another terminal window

```
mongo
```
