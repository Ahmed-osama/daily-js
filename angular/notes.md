# angular conceptual aside

- componenets tree like structure
- angular modules meant to be containers
- [componenets, service, directive, pipe] are registred to modules

## angular cli

- install `npm i -g angular/cli`
- creat new project `ng new <project name>`

## NgModule

- declarations : for componenets
- imports : import other modules
- providers : for services

## acessing static files

- use `#` floowed by any name that will give you acess to componenet instance or dom elelemnt

## Templates

- fast
- simple
- no side effects
- idemponent
- `*` in the begining means it is a structural directive
- **structural directive :** changes the shape of the dom _(add/remove)_ not just hiding
- safe naviagation operator `?` ex `obj?.name` <- this wont throw error in case `obj` is undefined
