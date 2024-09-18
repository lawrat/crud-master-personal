D'accord, commençons par une vue d'ensemble complète de votre projet de plateforme de streaming de films en microservices. Nous allons aborder chaque composant, technologie et concept en détail, avec des exemples concrets pour vous aider à comprendre leur utilité et leur mise en œuvre dans le contexte de ce projet.

Table des Matières
Introduction au Projet
Technologies et Concepts Clés
Microservices
API Gateway
Node.js et Express
Sequelize
PostgreSQL
RabbitMQ
Vagrant et VirtualBox
PM2
Postman
Docker et Kubernetes (Optionnel)
Architecture du Projet
Étapes de Mise en Œuvre
1. Configuration de l'Environnement de Développement
2. Création de l'API d'Inventaire
3. Création de l'API de Facturation
4. Mise en Place de l'API Gateway
5. Configuration de Vagrant et VirtualBox
6. Gestion des Applications avec PM2
7. Test des APIs avec Postman
8. Documentation de l'API
Conclusion et Bonnes Pratiques
Introduction au Projet
Objectif
Créer une plateforme de streaming de films basée sur une architecture de microservices, composée de deux API principales :

API d'Inventaire : Gère les informations sur les films disponibles (CRUD).
API de Facturation : Traite les paiements via RabbitMQ.
L'ensemble sera orchestré par une API Gateway qui redirigera les requêtes HTTP vers l'API d'Inventaire et utilisera RabbitMQ pour communiquer avec l'API de Facturation.

Pourquoi Microservices ?
Scalabilité : Chaque service peut être mis à l'échelle indépendamment.
Modularité : Facilite la maintenance et le développement en équipe.
Résilience : Une panne dans un service n'affecte pas nécessairement les autres.
Déploiement indépendant : Possibilité de déployer des mises à jour sans downtime global.
Architecture Générale

Diagramme d'architecture de la plateforme de streaming de films.

Technologies et Concepts Clés
1. Microservices
Définition :
Une architecture où une application est divisée en petits services indépendants, chacun exécutant un processus spécifique et communiquant avec les autres via des interfaces bien définies.

Exemple dans le Projet :

Service d'Inventaire : Gère les films (CRUD).
Service de Facturation : Gère les paiements et les commandes.
API Gateway : Ordonne le trafic entre les services.
Utilité :
Permet une gestion indépendante, une meilleure isolation des problèmes, et facilite la scalabilité.

2. API Gateway
Définition :
Un point d'entrée unique pour toutes les requêtes clients, qui redirige les requêtes vers les microservices appropriés.

Exemple dans le Projet :

/api/movies : Redirigé vers l'API d'Inventaire via HTTP.
/api/billing : Redirigé vers l'API de Facturation via RabbitMQ.
Utilité :

Sécurité : Centralise l'authentification et l'autorisation.
Routage : Gère la distribution des requêtes vers les services appropriés.
Agrégation : Peut combiner les réponses de plusieurs services.
3. Node.js et Express
Node.js :
Environnement d'exécution JavaScript côté serveur, idéal pour les applications en temps réel et les microservices.

Express :
Framework web pour Node.js, simplifie la création d'API RESTful.

Exemple dans le Projet :

API d'Inventaire : Utilise Express pour définir les routes CRUD.
API Gateway : Utilise Express pour gérer le routage des requêtes.
Utilité :
Facilite le développement rapide d'API robustes et performantes.

4. Sequelize
Définition :
Un ORM (Object-Relational Mapping) pour Node.js qui simplifie les interactions avec les bases de données relationnelles comme PostgreSQL.

Exemple dans le Projet :

API d'Inventaire : Utilise Sequelize pour interagir avec la base de données movies.
API de Facturation : Utilise Sequelize pour interagir avec la base de données orders.
Utilité :

Abstraction : Simplifie les requêtes SQL en méthodes JavaScript.
Modèles : Définit les modèles de données en code.
Migration : Facilite la gestion des schémas de base de données.
5. PostgreSQL
Définition :
Système de gestion de base de données relationnelle open-source puissant et flexible.

Exemple dans le Projet :

Base de Données movies : Stocke les informations des films.
Base de Données orders : Stocke les informations des commandes et des paiements.
Utilité :

Fiabilité : Garantit l'intégrité des données avec des transactions ACID.
Scalabilité : Gère de grandes quantités de données efficacement.
Extensibilité : Supporte des extensions pour ajouter des fonctionnalités.
6. RabbitMQ
Définition :
Un broker de messages open-source qui implémente le protocole AMQP, permettant la communication asynchrone entre services.

Exemple dans le Projet :

API Gateway : Envoie des messages à RabbitMQ pour les paiements via la file d'attente billing_queue.
API de Facturation : Consomme les messages de billing_queue pour traiter les paiements.
Utilité :

Découplage : Permet aux services de communiquer sans dépendance directe.
Asynchronisme : Gère les tâches en arrière-plan sans bloquer le flux principal.
Fiabilité : Assure la livraison des messages même en cas de panne des services consommateurs.
7. Vagrant et VirtualBox
Vagrant :
Outil de gestion d'environnements de développement en machines virtuelles, facilitant la configuration et la réplication d'environnements identiques.

VirtualBox :
Logiciel de virtualisation open-source qui permet de créer et gérer des machines virtuelles.

Exemple dans le Projet :

gateway-vm : Héberge l'API Gateway.
inventory-vm : Héberge l'API d'Inventaire et la base de données movies.
billing-vm : Héberge l'API de Facturation, la base de données orders et RabbitMQ.
Utilité :

Cohérence : Assure que tous les développeurs utilisent le même environnement.
Isolation : Sépare les services dans des VMs distinctes pour une meilleure organisation et gestion.
8. PM2
Définition :
Gestionnaire de processus pour les applications Node.js, facilitant le démarrage, l'arrêt, le redémarrage et la surveillance des applications.

Exemple dans le Projet :

API Gateway : Gérée par PM2 pour assurer sa disponibilité.
API d'Inventaire et de Facturation : Gérées par PM2 pour un déploiement stable et la résilience.
Utilité :

Surveillance : Surveille les performances et l'état des applications.
Résilience : Redémarre automatiquement les applications en cas de panne.
Scalabilité : Permet de gérer plusieurs instances d'une application pour équilibrer la charge.
9. Postman
Définition :
Outil de développement d'API qui permet de tester, documenter et partager des API.

Exemple dans le Projet :

Tester les Endpoints : Utilisé pour envoyer des requêtes HTTP aux API d'Inventaire et de Facturation.
Automatiser les Tests : Créer des collections de tests pour vérifier le bon fonctionnement des endpoints.
Utilité :

Développement : Facilite le
processus de test et de débogage des API.

Documentation : Permet de créer des collections de requêtes facilement partageables.
10. Docker et Kubernetes (Optionnel)
Docker :
Outil de conteneurisation qui permet d'empaqueter une application avec toutes ses dépendances dans un conteneur léger et portable.

Kubernetes :
Système d'orchestration de conteneurs qui automatise le déploiement, la gestion et la mise à l'échelle des applications conteneurisées.

Exemple dans le Projet :

Docker : Conteneuriser les services (API Gateway, API d'Inventaire, API de Facturation) pour une portabilité et une gestion simplifiée.
Kubernetes : Gérer le déploiement, la scalabilité et la résilience des conteneurs Docker dans un environnement de production.
Utilité :

Portabilité : Déployer les applications de manière cohérente sur différents environnements.
Scalabilité : Gérer automatiquement le scaling des applications selon la charge.
Résilience : Assurer la disponibilité continue des services grâce à la redondance et à la gestion des pannes.
Architecture du Projet
Vue d'Ensemble
API Gateway : Point d'entrée unique pour toutes les requêtes clients.
API d'Inventaire : Gère les films disponibles, communique via HTTP avec l'API Gateway.
API de Facturation : Traite les paiements, communique via RabbitMQ avec l'API Gateway.
Bases de Données :
movies : Gérée par l'API d'Inventaire.
orders : Gérée par l'API de Facturation.
RabbitMQ : Facilite la communication asynchrone entre l'API Gateway et l'API de Facturation.
Diagramme d'Architecture

Diagramme illustrant les interactions entre les composants de la plateforme.

Étapes de Mise en Œuvre
1. Configuration de l'Environnement de Développement
1.1 Installation des Outils Nécessaires
a. Node.js et NPM

Télécharger et Installer Node.js :

Rendez-vous sur nodejs.org et téléchargez la version LTS (Long Term Support) adaptée à votre système d'exploitation.
Suivez les instructions d'installation.
Vérifier l'Installation :

bash
Copier le code
node -v
npm -v
Vous devriez voir les versions installées de Node.js et NPM.

b. PostgreSQL

Télécharger et Installer PostgreSQL :

Rendez-vous sur postgresql.org et téléchargez la version adaptée à votre système d'exploitation.
Suivez les instructions d'installation.
Configurer PostgreSQL :

Après l'installation, ouvrez le terminal PostgreSQL :
bash
Copier le code
sudo -u postgres psql
Créez les bases de données movies et orders :
sql
Copier le code
CREATE DATABASE movies;
CREATE DATABASE orders;
Créez un utilisateur et accordez-lui les permissions :
sql
Copier le code
CREATE USER your_username WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE movies TO your_username;
GRANT ALL PRIVILEGES ON DATABASE orders TO your_username;
Quittez PostgreSQL :
sql
Copier le code
\q
c. RabbitMQ

Télécharger et Installer RabbitMQ :

Rendez-vous sur rabbitmq.com et téléchargez la version adaptée.
Suivez les instructions d'installation.
Activer le Plugin de Gestion :

bash
Copier le code
sudo rabbitmq-plugins enable rabbitmq_management
sudo systemctl restart rabbitmq-server
Vérifier le Fonctionnement :

Accédez à l'interface de gestion via votre navigateur à http://localhost:15672.
Connectez-vous avec les identifiants par défaut (guest / guest).
d. VirtualBox et Vagrant

Télécharger et Installer VirtualBox :

Rendez-vous sur virtualbox.org et téléchargez la dernière version.
Suivez les instructions d'installation.
Télécharger et Installer Vagrant :

Rendez-vous sur vagrantup.com et téléchargez la version adaptée.
Suivez les instructions d'installation.
e. Postman

Télécharger et Installer Postman :
Rendez-vous sur getpostman.com et téléchargez l'application.
Suivez les instructions d'installation.
f. PM2

Installer PM2 Globalement :

bash
Copier le code
npm install pm2 -g
Vérifier l'Installation :

bash
Copier le code
pm2 -v
2. Création de l'API d'Inventaire
2.1 Initialisation du Projet
Créer le Répertoire du Projet :

bash
Copier le code
mkdir inventory-app
cd inventory-app
Initialiser NPM :

bash
Copier le code
npm init -y
Installer les Dépendances :

bash
Copier le code
npm install express sequelize pg pg-hstore body-parser
2.2 Configuration de Sequelize et PostgreSQL
Créer la Structure des Dossiers :

bash
Copier le code
mkdir config models routes controllers
Configurer la Connexion à la Base de Données :

config/database.js
javascript
Copier le code
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('movies', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
Définir le Modèle Movie :

models/movie.js
javascript
Copier le code
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Movie = sequelize.define('Movie', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'movies',
  timestamps: false
});

module.exports = Movie;
2.3 Création des Contrôleurs et des Routes
Créer le Contrôleur movieController :

controllers/movieController.js
javascript
Copier le code
const Movie = require('../models/movie');

// Récupérer tous les films
exports.getAllMovies = async (req, res) => {
  try {
    const { title } = req.query;
    let movies;
    if (title) {
      movies = await Movie.findAll({
        where: {
          title: {
            [Op.iLike]: `%${title}%`
          }
        }
      });
    } else {
      movies = await Movie.findAll();
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// Créer un nouveau film
exports.createMovie = async (req, res) => {
  try {
    const { title, description } = req.body;
    const movie = await Movie.create({ title, description });
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// Supprimer tous les films
exports.deleteAllMovies = async (req, res) => {
  try {
    await Movie.destroy({ where: {} });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// Récupérer un film par ID
exports.getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ error: 'Film non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// Mettre à jour un film par ID
exports.updateMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const movie = await Movie.findByPk(id);
    if (movie) {
      movie.title = title;
      movie.description = description;
      await movie.save();
      res.json(movie);
    } else {
      res.status(404).json({ error: 'Film non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// Supprimer un film par ID
exports.deleteMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);
    if (movie) {
      await movie.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Film non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};
Définir les Routes movies :

routes/movies.js
javascript
Copier le code
const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', movieController.getAllMovies);
router.post('/', movieController.createMovie);
router.delete('/', movieController.deleteAllMovies);
router.get('/:id', movieController.getMovieById);
router.put('/:id', movieController.updateMovieById);
router.delete('/:id', movieController.deleteMovieById);

module.exports = router;
2.4 Configuration du Serveur Express
Créer le Serveur :

server.js
javascript
Copier le code
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const moviesRoutes = require('./routes/movies');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use('/api/movies', moviesRoutes);

sequelize.sync()
  .then(() => {
    console.log('Base de données synchronisée');
    app.listen(PORT, () => {
      console.log(`API d'Inventaire en cours d'exécution sur http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erreur de synchronisation de la base de données:', err);
  });
2.5 Dockerisation de l'API d'Inventaire
Créer un Dockerfile :

Dockerfile
dockerfile
Copier le code
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080
CMD ["node", "server.js"]
Créer un fichier .dockerignore :

.dockerignore
lua
Copier le code
node_modules
npm-debug.log
Tester le Dockerfile :

bash
Copier le code
docker build -t inventory-app .
docker run -p 8080:8080 inventory-app
Configurer Docker Compose :

docker-compose.yml (À la racine du projet)
yaml
Copier le code
version: '3.8'
services:
  inventory-app:
    build: ./inventory-app
    ports:
      - "8080:8080"
    environment:
      - DB_HOST=inventory-db
      - DB_USER=your_username
      - DB_PASS=your_password
      - DB_NAME=movies
    depends_on:
      - inventory-db

  inventory-db:
    image: postgres:13
    environment:
      - POSTGRES_USER=your_username
      - POSTGRES_PASSWORD=your_password
      - POSTGRES_DB=movies
    ports:
      - "5432:5432"
    volumes:
      - inventory-db-data:/var/lib/postgresql/data

volumes:
  inventory-db-data:
Lancer les Services :

bash
Copier le code
docker-compose up
3. Création de l'API de Facturation
3.1 Initialisation du Projet
Créer le Répertoire du Projet :

bash
Copier le code
mkdir billing-app
cd billing-app
Initialiser NPM :

bash
Copier le code
npm init -y
Installer les Dépendances :

bash
Copier le code
npm install express amqplib sequelize pg pg-hstore body-parser
3.2 Configuration de Sequelize et PostgreSQL
Créer la Structure des Dossiers :

bash
Copier le code
mkdir config models controllers
Configurer la Connexion à la Base de Données :

config/database.js
javascript
Copier le code
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('orders', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
Définir le Modèle Order :

models/order.js
javascript
Copier le code
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  number_of_items: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  total_amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'orders',
  timestamps: false
});

module.exports = Order;
3.3 Création des Contrôleurs et des Routes
Créer le Contrôleur orderController :

controllers/orderController.js
javascript
Copier le code
const Order = require('../models/order');

// Fonction pour créer une nouvelle commande
exports.createOrder = async (req, res) => {
  try {
    const { user_id, number_of_items, total_amount } = req.body;
    const order = await Order.create({ user_id, number_of_items, total_amount });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};
Définir les Routes orders :

routes/orders.js
javascript
Copier le code
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.createOrder);

module.exports = router;
3.4 Configuration du Serveur Express
Créer le Serveur :

server.js
javascript
Copier le code
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const ordersRoutes = require('./routes/orders');

const app = express();
const PORT = 8081;

app.use(bodyParser.json());

app.use('/api/orders', ordersRoutes);

sequelize.sync()
  .then(() => {
    console.log('Base de données synchronisée');
    app.listen(PORT, () => {
      console.log(`API de Facturation en cours d'exécution sur http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erreur de synchronisation de la base de données:', err);
  });
3.5 Création du Consommateur RabbitMQ
Créer le Script de Consommation :

consume.js
javascript
Copier le code
const amqp = require('amqplib');
const sequelize = require('./config/database');
const Order = require('./models/order');

const queue = 'billing_queue';

async function consume() {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données réussie');

    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue(queue, { durable: true });

    console.log(`En attente des messages dans la file d'attente ${queue}`);

    channel.consume(queue, async (msg) => {
      if (msg !== null) {
        try {
          const orderData = JSON.parse(msg.content.toString());
          await Order.create(orderData);
          console.log('Commande enregistrée :', orderData);
          channel.ack(msg);
        } catch (error) {
          console.error('Erreur lors du traitement du message :', error);
          channel.nack(msg, false, false); // Rejette le message sans le ré-queue
        }
      }
    }, { noAck: false });
  } catch (error) {
    console.error('Erreur :', error);
  }
}

consume();
Dockerisation de l'API de Facturation

Dockerfile
dockerfile
Copier le code
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8081
CMD ["node", "consume.js"]
Ajouter au docker-compose.yml :

yaml
Copier le code
version: '3.8'
services:
  inventory-app:
    build: ./inventory-app
    ports:
      - "8080:8080"
    environment:
      - DB_HOST=inventory-db
      - DB_USER=your_username
      - DB_PASS=your_password
      - DB_NAME=movies
    depends_on:
      - inventory-db

  inventory-db:
    image: postgres:13
    environment:
      - POSTGRES_USER=your_username
      - POSTGRES_PASSWORD=your_password
      - POSTGRES_DB=movies
    ports:
      - "5432:5432"
    volumes:
      - inventory-db-data:/var/lib/postgresql/data

  billing-app:
    build: ./billing-app
    ports:
      - "8081:8081"
    environment:
      - DB_HOST=billing-db
      - DB_USER=your_username
      - DB_PASS=your_password
      - DB_NAME=orders
      - RABBITMQ_URL=amqp://billing-rabbitmq
    depends_on:
      - billing-db
      - billing-rabbitmq

  billing-db:
    image: postgres:13
    environment:
      - POSTGRES_USER=your_username
      - POSTGRES_PASSWORD=your_password
      - POSTGRES_DB=orders
    ports:
      - "5433:5432"
    volumes:
      - billing-db-data:/var/lib/postgresql/data

  billing-rabbitmq:
    image: rabbitmq:3-management
    ports:
      - "5672:5672"
      - "15672:15672"
    volumes:
      - rabbitmq-data:/var/lib/rabbitmq

volumes:
  inventory-db-data:
  billing-db-data:
  rabbitmq-data:
Lancer les Services :

bash
Copier le code
docker-compose up
3.6 Explications et Bonnes Pratiques
Gestion des Erreurs :
Le consommateur RabbitMQ doit gérer les erreurs lors du traitement des messages pour éviter la perte de données.

Transactions :
Utiliser des transactions pour garantir que les données sont insérées de manière atomique dans la base de données.

Sécurité :
Protéger les communications entre services et sécuriser les accès aux bases de données.

4. Mise en Place de l'API Gateway
4.1 Initialisation du Projet
Créer le Répertoire du Projet :

bash
Copier le code
mkdir api-gateway
cd api-gateway
Initialiser NPM :

bash
Copier le code
npm init -y
Installer les Dépendances :

bash
Copier le code
npm install express http-proxy-middleware amqplib body-parser
4.2 Configuration de l'API Gateway
Créer la Structure des Dossiers :

bash
Copier le code
mkdir routes
Créer le Serveur Express avec Proxy :

server.js
javascript
Copier le code
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const amqp = require('amqplib');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8082;

app.use(bodyParser.json());

// Proxy pour l'API d'Inventaire
app.use('/api/movies', createProxyMiddleware({
  target: 'http://localhost:8080',
  changeOrigin: true
}));

// Route pour l'API de Facturation
app.post('/api/billing', async (req, res) => {
  try {
    const message = JSON.stringify(req.body);
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const queue = 'billing_queue';
    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(message));
    console.log('Message envoyé à la queue billing_queue:', message);
    res.status(200).json({ message: 'Commande envoyée pour facturation' });
    setTimeout(() => {
      channel.close();
      connection.close();
    }, 500);
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message à RabbitMQ:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.listen(PORT, () => {
  console.log(`API Gateway en cours d'exécution sur http://localhost:${PORT}`);
});
4.3 Dockerisation de l'API Gateway
Créer un Dockerfile :

Dockerfile
dockerfile
Copier le code
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8082
CMD ["node", "server.js"]
Ajouter au docker-compose.yml :

yaml
Copier le code
version: '3.8'
services:
  inventory-app:
    build: ./inventory-app
    ports:
      - "8080:8080"
    environment:
      - DB_HOST=inventory-db
      - DB_USER=your_username
      - DB_PASS=your_password
      - DB_NAME=movies
    depends_on:
      - inventory-db

  inventory-db:
    image: postgres:13
    environment:
      - POSTGRES_USER=your_username
      - POSTGRES_PASSWORD=your_password
      - POSTGRES_DB=movies
    ports:
      - "5432:5432"
    volumes:
      - inventory-db-data:/var/lib/postgresql/data

  billing-app:
    build: ./billing-app
    ports:
      - "8081:8081"
    environment:
      - DB_HOST=billing-db
      - DB_USER=your_username
      - DB_PASS=your_password
      - DB_NAME=orders
      - RABBITMQ_URL=amqp://billing-rabbitmq
    depends_on:
      - billing-db
      - billing-rabbitmq

  billing-db:
    image: postgres:13
    environment:
      - POSTGRES_USER=your_username
      - POSTGRES_PASSWORD=your_password
      - POSTGRES_DB=orders
    ports:
      - "5433:5432"
    volumes:
      - billing-db-data:/var/lib/postgresql/data

  billing-rabbitmq:
    image: rabbitmq:3-management
    ports:
      - "5672:5672"
      - "15672:15672"
    volumes:
      - rabbitmq-data:/var/lib/rabbitmq

  api-gateway:
    build: ./api-gateway
    ports:
      - "8082:8082"
    depends_on:
      - inventory-app
      - billing-rabbitmq

volumes:
  inventory-db-data:
  billing-db-data:
  rabbitmq-data:
Lancer les Services :

bash
Copier le code
docker-compose up
4.4 Explications et Bonnes Pratiques
Proxy pour l'API d'Inventaire :
Utilise http-proxy-middleware pour rediriger les requêtes /api/movies vers l'API d'Inventaire.

Gestion de RabbitMQ :
Utilise amqplib pour envoyer des messages à la queue billing_queue pour le traitement des paiements.

Sécurité :
Assurez-vous que les communications entre l'API Gateway et les microservices sont sécurisées, éventuellement en utilisant HTTPS.

Optimisation :
Utilisez des pools de connexions pour RabbitMQ et PostgreSQL pour améliorer les performances.

5. Configuration de Vagrant et VirtualBox
5.1 Installation de VirtualBox et Vagrant
Assurez-vous que VirtualBox et Vagrant sont installés sur votre machine.

VirtualBox : Télécharger VirtualBox
Vagrant : Télécharger Vagrant
5.2 Création du Vagrantfile
Créer le Fichier Vagrantfile :

À la racine de votre projet, créez un fichier Vagrantfile :

ruby
Copier le code
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"

  # VM pour l'API Gateway
  config.vm.define "gateway-vm" do |gateway|
    gateway.vm.network "private_network", ip: "192.168.50.10"
    gateway.vm.provision "shell", path: "scripts/setup_gateway.sh"
  end

  # VM pour l'API d'Inventaire
  config.vm.define "inventory-vm" do |inventory|
    inventory.vm.network "private_network", ip: "192.168.50.11"
    inventory.vm.provision "shell", path: "scripts/setup_inventory.sh"
  end

  # VM pour l'API de Facturation
  config.vm.define "billing-vm" do |billing|
    billing.vm.network "private_network", ip: "192.168.50.12"
    billing.vm.provision "shell", path: "scripts/setup_billing.sh"
  end
end
Créer les Scripts de Provisionnement :

Créez un répertoire scripts à la racine du projet et ajoutez les scripts suivants :

scripts/setup_gateway.sh

bash
Copier le code
#!/bin/bash

# Mettre à jour les paquets
sudo apt-get update

# Installer Node.js et npm
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Installer PM2 globalement
sudo npm install pm2 -g

# Copier les fichiers de l'API Gateway
mkdir /home/vagrant/api-gateway
sudo cp -r /vagrant/api-gateway/* /home/vagrant/api-gateway/

cd /home/vagrant/api-gateway

# Installer les dépendances
sudo npm install

# Démarrer l'API Gateway avec PM2
sudo pm2 start server.js --name api-gateway

# Configurer PM2 pour démarrer au boot
sudo pm2 startup systemd
sudo pm2 save
scripts/setup_inventory.sh

bash
Copier le code
#!/bin/bash

# Mettre à jour les paquets
sudo apt-get update

# Installer Node.js et npm
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Installer PostgreSQL
sudo apt-get install -y postgresql postgresql-contrib

# Configurer PostgreSQL
sudo -u postgres psql -c "CREATE DATABASE movies;"
sudo -u postgres psql -c "CREATE USER your_username WITH PASSWORD 'your_password';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE movies TO your_username;"

# Installer PM2 globalement
sudo npm install pm2 -g

# Copier les fichiers de l'API d'Inventaire
mkdir /home/vagrant/inventory-app
sudo cp -r /vagrant/inventory-app/* /home/vagrant/inventory-app/

cd /home/vagrant/inventory-app

# Installer les dépendances
sudo npm install

# Démarrer l'API d'Inventaire avec PM2
sudo pm2 start server.js --name inventory-app

# Configurer PM2 pour démarrer au boot
sudo pm2 startup systemd
sudo pm2 save
scripts/setup_billing.sh

bash
Copier le code
#!/bin/bash

# Mettre à jour les paquets
sudo apt-get update

# Installer Node.js et npm
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Installer PostgreSQL
sudo apt-get install -y postgresql postgresql-contrib

# Configurer PostgreSQL
sudo -u postgres psql -c "CREATE DATABASE orders;"
sudo -u postgres psql -c "CREATE USER your_username WITH PASSWORD 'your_password';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE orders TO your_username;"

# Installer RabbitMQ
sudo apt-get install -y rabbitmq-server
sudo systemctl enable rabbitmq-server
sudo systemctl start rabbitmq-server

# Installer PM2 globalement
sudo npm install pm2 -g

# Copier les fichiers de l'API de Facturation
mkdir /home/vagrant/billing-app
sudo cp -r /vagrant/billing-app/* /home/vagrant/billing-app/

cd /home/vagrant/billing-app

# Installer les dépendances
sudo npm install

# Démarrer l'API de Facturation avec PM2
sudo pm2 start consume.js --name billing-app

# Configurer PM2 pour démarrer au boot
sudo pm2 startup systemd
sudo pm2 save
Droits d'Exécution :

Assurez-vous que les scripts sont exécutables :

bash
Copier le code
chmod +x scripts/setup_gateway.sh
chmod +x scripts/setup_inventory.sh
chmod +x scripts/setup_billing.sh
Lancer les Machines Virtuelles :

Depuis la racine du projet, exécutez :

bash
Copier le code
vagrant up
Cela va créer et configurer les trois machines virtuelles selon le Vagrantfile et les scripts de provisionnement.

6. Gestion des Applications avec PM2
PM2 est utilisé pour gérer les processus des applications Node.js, assurant qu'elles restent actives et facilitant la surveillance et la gestion.

6.1 Commandes de Base PM2
Lister les Applications :

bash
Copier le code
pm2 list
Démarrer une Application :

bash
Copier le code
pm2 start server.js --name inventory-app
Arrêter une Application :

bash
Copier le code
pm2 stop inventory-app
Redémarrer une Application :

bash
Copier le code
pm2 restart inventory-app
Supprimer une Application de PM2 :

bash
Copier le code
pm2 delete inventory-app
Sauvegarder la Configuration PM2 :

bash
Copier le code
pm2 save
Configurer PM2 pour Démarrer au Boot :

bash
Copier le code
pm2 startup systemd
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u vagrant --hp /home/vagrant
pm2 save
6.2 Utilisation dans le Projet
API Gateway :
Gérée par PM2 pour assurer sa disponibilité continue.

API d'Inventaire et de Facturation :
Gérées par PM2 pour un déploiement stable et résilient.

Exemple :
Dans les scripts de provisionnement Vagrant, nous utilisons PM2 pour démarrer et gérer les applications automatiquement au démarrage des VMs.

7. Test des APIs avec Postman
Postman est un outil puissant pour tester les APIs RESTful en envoyant des requêtes HTTP et en vérifiant les réponses.

7.1 Installation et Configuration
Télécharger et Installer Postman :
Télécharger Postman

Créer des Collections de Tests :

API d'Inventaire :

GET /api/movies : Récupérer tous les films.
GET /api/movies?title=Inception : Récupérer les films avec "Inception" dans le titre.
POST /api/movies : Créer un nouveau film.
Body :
json
Copier le code
{
  "title": "Inception",
  "description": "A mind-bending thriller"
}
DELETE /api/movies : Supprimer tous les films.
GET /api/movies/1 : Récupérer le film avec l'ID 1.
PUT /api/movies/1 : Mettre à jour le film avec l'ID 1.
Body :
json
Copier le code
{
  "title": "Inception Updated",
  "description": "An updated description"
}
DELETE /api/movies/1 : Supprimer le film avec l'ID 1.
API de Facturation :

POST /api/billing : Envoyer une commande pour facturation.
Body :
json
Copier le code
{
  "user_id": "3",
  "number_of_items": "5",
  "total_amount": "180"
}
7.2 Exécution des Tests
Tester l'API d'Inventaire :

Envoyez une requête GET /api/movies et vérifiez la liste des films.
Ajoutez un nouveau film avec POST /api/movies.
Récupérez le film ajouté avec GET /api/movies/:id.
Mettez à jour le film avec PUT /api/movies/:id.
Supprimez le film avec DELETE /api/movies/:id.
Supprimez tous les films avec DELETE /api/movies.
Tester l'API de Facturation :

Envoyez une commande via POST /api/billing et vérifiez que l'ordre est inséré dans la base de données orders.
7.3 Automatisation des Tests
Créer des Collections :
Organisez vos tests dans des collections Postman pour une exécution facile et la réutilisation.

Exporter les Collections :
Exportez vos collections pour les partager ou les utiliser sur d'autres machines.

8. Documentation de l'API
8.1 OpenAPI et Swagger
OpenAPI est une spécification pour définir les interfaces RESTful. Swagger est un ensemble d'outils basés sur OpenAPI pour documenter, développer et consommer des APIs.

8.2 Création d'une Documentation OpenAPI
Installer Swagger UI :

Ajoutez Swagger UI à votre API Gateway ou API d'Inventaire pour visualiser la documentation.
Définir le Fichier OpenAPI :

openapi.yaml
yaml
Copier le code
openapi: 3.0.0
info:
  title: CRUD Master API Gateway
  version: 1.0.0
  description: Documentation de l'API Gateway pour la plateforme de streaming de films
servers:
  - url: http://localhost:8082
paths:
  /api/movies:
    get:
      summary: Récupérer tous les films
      responses:
        '200':
          description: Liste des films
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Movie'
    post:
      summary: Créer un nouveau film
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/MovieInput'
      responses:
        '201':
          description: Film créé
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Movie'
    delete:
      summary: Supprimer tous les films
      responses:
        '204':
          description: Films supprimés
  /api/movies/{id}:
    get:
      summary: Récupérer un film par ID
      parameters:
        - in: path
          name: id
          schema:
            type: integer
          required: true
          description: ID du film
      responses:
        '200':
          description: Film trouvé
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Movie'
        '404':
          description: Film non trouvé
    put:
      summary: Mettre à jour un film par ID
      parameters:
        - in: path
          name: id
          schema:
            type: integer
          required: true
          description: ID du film
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/MovieInput'
      responses:
        '200':
          description: Film mis à jour
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Movie'
        '404':
          description: Film non trouvé
    delete:
      summary: Supprimer un film par ID
      parameters:
        - in: path
          name: id
          schema:
            type: integer
          required: true
          description: ID du film
      responses:
        '204':
          description: Film supprimé
components:
  schemas:
    Movie:
      type: object
      properties:
        id:
          type: integer
        title:
          type: string
        description:
          type: string
    MovieInput:
      type: object
      properties:
        title:
          type: string
        description:
          type: string
      required:
        - title
        - description
Intégrer Swagger UI dans l'API Gateway :

server.js (API Gateway)
javascript
Copier le code
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const amqp = require('amqplib');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();
const PORT = 8082;

const swaggerDocument = YAML.load('./openapi.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());

// Proxy pour l'API d'Inventaire
app.use('/api/movies', createProxyMiddleware({
  target: 'http://192.168.50.11:8080',
  changeOrigin: true
}));

// Route pour l'API de Facturation
app.post('/api/billing', async (req, res) => {
  try {
    const message = JSON.stringify(req.body);
    const connection = await amqp.connect('amqp://192.168.50.12');
    const channel = await connection.createChannel();
    const queue = 'billing_queue';
    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(message), { persistent: true
    }
    );
  }
}
);