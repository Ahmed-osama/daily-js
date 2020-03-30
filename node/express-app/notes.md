# Middlewares

```
app.use(callback)
app.use('route', callback)
app['get', 'post', 'put', 'patch', 'delete']('route', callback)
```

## what can EExpress Middlewares do?

- execute any code
- change req res object as they are passed as params
- end the req-res cycle and mostly send data to the caller
- call the next middle ware in the stack

```
  app.use((req,res,next)=>{
    //do some stuff
    return next()
  })
```

## parameter routes

```
app.get('speakers/:speakerId')
```

client

```
http://loocalhoost/speakers/ahmedOsama
```
