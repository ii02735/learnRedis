const Sets = (redis) => {
    //Les sets fonctionnent comme les lists
    //La particularité est qu'elles n'acceptent que des valeurs uniques

    //Pour ajouter des éléments (attention, l'ordre d'insertion est aléatoire)

    redis.sadd("myset","hello","world","world")

    //Pour récupérer les éléments de notre set

    redis.smembers("myset",(err,res) => console.log(res))

    //Vérifier qu'un élément appartient au set
    redis.sismember("myset","hello",() => console.log("ok"))

    redis.sadd("keyhash1","key1","key2","key3")
    redis.sadd("keyhash2","key4","key5","key6")

    //Pour transférer des éléments d'un set à un autre
    //On précise d'abord la destination
    //Puis la ou LES SOURCES

    redis.sunionstore("keyhash","keyhash1","keyhash2");

    //Désormais, le "keyhash" comporte les éléments des sets keyhash1 et keyhash2

    //Pour compter le nombre d'éléments dans un set

    redis.scard("keyhash",(number) => console.log(number));
}

export default Sets;