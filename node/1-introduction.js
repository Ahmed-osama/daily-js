

<html>
    <head>
        <title>title case</title>
    </head>
    <body>
        <div id="view">
            here i'm
        </div>
       <input type="checkbox" id="input">
       <div id="observerLog">

       </div>
        <script>
           let address = 'Egypt, Cairo, 993'
            let {0:zone,1:area,2:street}= address.split(',')
           console.log(typeof address)
        </script>
    </body>
</html>