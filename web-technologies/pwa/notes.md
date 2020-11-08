## cache storage api

- indexedDB stores objects
- cache storage api stores strings

---

you can git the storage imit by using

```js
navigator.storage.estimate().then((storage) => {
  console.log({
    quota: storage.quota,
    usage: storage.usage,
  });
});
```

```
safari limit is 50mb
safari will delete data and SW after 2 weeks of non activity
```

---

```js
navigator.storage.persist().then((granted) => {
  console.log({
    granted,
  });
});
```
