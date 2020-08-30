## Redis

Redis est un serveur de base de données **clé-valeur**
Les données sont stockées au sein de **la mémoire vive** : par conséquent il s'agit d'un serveur de stockage de données très rapide.

## Persistance

Il existe ***deux modes** de persistance* :

- **RDB (Redis Database File)** qui effectue une sauvegarde des données (*snapshot*) lorsque certaines conditions sont réunies (nombre de données, temps) dans un fichier. Ce fichier permet de recouvrir des données perdues après un problème grave (coupure de courant, etc.)
**Il s'agit du mode de persistance par *défaut*** 

- **AOF (Append-only file)** qui rédige les opérations menées sur la base de données au sein du fichier système. Ceci *est exécuté à chaque fois quand le serveur **est démarré*** afin de pouvoir reconstruire les données au lancement. Redis se contente **d'exécuter les changements les plus récents** afin que le fichier système ne s'alourdisse pas trop.

Il possible d'en choisir aucun, les données existeront uniquement durant **l'exécution du serveur.**