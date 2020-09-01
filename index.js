import Redis from "ioredis"; //manipulation de redis depuis NodeJS grâce à ioredis

/**
 * Création d'une instance qui communiquera
 * avec le serveur Redis
 * Utilisation des paramètres par défaut si aucun
 * objet de configuration est passé en paramètre
 */
const redis = new Redis();

/**
 * Redis est un serveur de base de données
 * assez spéciale : il accepte un ensemble
 * de clé - valeur, comme du JSON (dictionnaire)
 * 
 * Pour créer un nouvel ensemble, il faut taper la commande
 * suivante au sein de redis-cli :
 * 
 * set <keyname> <valuename>
 * 
 * En JS cela se fait de la manière suivante :
 */

 redis.set("name","John")

 /**
  * Pour récupérer la valeur,
  * on passe par la clé
  * 
  * get <keyname>
  * 
  * En JS, cela est asynchrone puisqu'on interroge
  * une entité externe à NodeJS, on passe par une callback 
  * (méthode asynchrone)
  */

  redis.get("name",(err,res) => { console.log(res); return; });

  //incrémentation

  redis.set("integer",100);

  redis.incrby("integer", 200);


  //Mise en place d'une donnée expirante

  redis.set("secret","mysessionID","EX",2);

  redis.get("secret",(err,res) => console.log(res));

  redis.get("secret",(err,res) => console.log(res));

  //Puisqu'on a décidé que la donnée expire après 2 secondes
  //L'affichage du get demandé dans le setTimeout aboutira à null, puisque cette callback sera exécutée 3 secondes après
  setTimeout(() => redis.get("secret",(err,res) => console.log(res)),3000)

  //set plusieurs données à la fois

  redis.mset("data1","hello","data2","world");

  //On peut aussi récupérer plusieurs données, ce qui donnera un tableau de valeurs

  redis.mget("data1","data2", (err,res) => console.log(res));
  //création d'un dictionnaire / hash
  //myhash est le nom du hash
  //Ensuite vient un ensemble de clés - valeurs pour ce dernier
  redis.hmset("myhash",[{"name":"bilaal","lastname":"yadallee"}]);

  //récupérer toutes les entrées du hash
  redis.hgetall("myhash",(err,res)=>console.log(res))
  //récupérer une entrée en particulier
  redis.hget("myhash","name",(err,res)=>console.log(res))
