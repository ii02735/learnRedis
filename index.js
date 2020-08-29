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