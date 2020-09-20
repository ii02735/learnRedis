import Redis from "ioredis"; //manipulation de redis depuis NodeJS grâce à ioredis
import Strings from "./Strings.js";
import Hashes from "./Hashes.js";
import Lists from "./Lists.js";
import Sets from "./Sets.js";
import SortedSets from "./SortedSets.js";

/**
 * Création d'une instance qui communiquera
 * avec le serveur Redis
 * Utilisation des paramètres par défaut si aucun
 * objet de configuration est passé en paramètre
 */
const redis = new Redis();

Strings(redis);
Hashes(redis);
Lists(redis)
Sets(redis);
SortedSets(redis);