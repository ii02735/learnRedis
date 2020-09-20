const SortedSets = (redis) => {

    //Les sets triés sont indiqué, similaires aux sets, à l'exception qu'ils sont triés
    //La particularité est qu'on doit associer à chaque élément, un index (ou un "score") afin que Redis puisse justement ordonner les valeurs

    redis.zadd("chronologie",1914,"Début première guerre mondiale",1917,"Révolution russe",1918,"Traité d'Armistice à Versailles")

    //Pour afficher les valeurs (on est obligé de passer par une promesse, car on peut encore rajouter des arguments après avoir précisé l'intrevalle)

    redis.zrange("chronologie",0,-1).then((res) => console.log(res))

    //Affichage avec les scores / index -> option WITHSCORES

    redis.zrange("chronologie",0,-1,"WITHSCORES").then((res) => console.log(res))

    //Pour afficher dans l'ordre inverse

    redis.zrevrange("chronologie",0,-1).then((res) => console.log(res))
}
export default SortedSets;