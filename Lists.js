const Lists = (redis) => 
{
    //Création puis insertion d'éléments dans une liste nommée "ingredients" (rpush = empiler)
    redis.rpush("ingredients","apple","flour","sugar","dough", "eggs");
    //On précise l'intervalle d'éléments qu'on souhaite récupérer
    //On commence par le premier élément, et on termine par -1 : ce qui signifie qu'on récupère TOUT
    redis.lrange("ingredients",0,-1, (err,res) => {
        console.log(res); //["apple","flour","sugar","dough", "eggs"]
    });

    //Si on souhaite insérer des éléments au début de la liste (lpush = insérer (fifo))

    redis.lpush("ingredients","butter","oven","paper");

    redis.lrange("ingredients",0,-1, (err,res) => console.log(res)) //["paper","oven","butter","apple","flour","sugar","dough", "eggs"]

    //Pour dépiler (attention, on supprime bien sûr le dernier élément)

    redis.rpop("ingredients",(err,res) => {
        console.log(res) //["eggs"]
    })

    //Pour récupérer le premier élément

    redis.lpop("ingredients",(err,res) => console.log(res)) //["paper"]

    //Extraire une partie de la liste

    redis.ltrim("ingredients",0,3,() => console.log("trim succeded")) //ingredients = ["oven","butter","apple","flour"]

    //Insérer un élément dans la liste si cette dernière (la clé, "ingredients") existe déjà

    redis.rpushx("ingredients","table");
}

export default Lists;