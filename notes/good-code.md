# Simple RUles for simpler code

## no abbreviation

**bad :**

```
    class trsnltr {
        translateSingle(singleWord){}
    }

    Order{
       shipOrder(){

        }
    }
    forEach(x in people){}
```

**good**

```
    class Translator {
        translateSingle(word){}
    }
    class Order{
        ship(){}
    }
     forEach(person in people){}
```

## never use else

**bad :**

```
    function doThing(variable){
        if(variable=='x'){
            return 1
        }else{
            return 0
        }
    }
```

**good**

```
function doThing(variable){
    if(variable!='x'){
        return 0
    }
    return 1
}
```

## One level of indentation

**bad :**

```

```

**good**

```

```
