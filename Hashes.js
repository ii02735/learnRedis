const Hashes = (redis) => 
{
    //création d'un dictionnaire / hash
    //myhash est le nom du hash
    //Ensuite vient un ensemble de clés - valeurs pour ce dernier
    redis.hmset("myhash",[{"name":"bilaal","lastname":"yadallee"}]);

    redis.hset("myhash","score",600);

    //pour incrémenter, mais en passant cette fois-ci par un hash
    
    redis.hincrby("myhash","score",10) //la valeur 10 de la clé "score" sera incrémentée de 10

    //récupérer toutes les entrées du hash
    redis.hgetall("myhash",(err,res)=>console.log(res))
    //récupérer une entrée en particulier
    redis.hget("myhash","name",(err,res)=>console.log(res))
}

export default Hashes;