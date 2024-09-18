const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const Movie = require('./models/movie');

const app = express();
app.use(bodyParser.json());

// Connect to database
sequelize.sync().then(() => {
  console.log('Base de données connectée et synchronisée.');
});

// Obtenir tous les films
app.get('/api/movies', async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rechercher des films par titre
app.get('/api/movies', async (req, res) => {
  const { title } = req.query;
  try {
    const movies = await Movie.findAll({ where: { title: title } });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Créer un nouveau film
app.post('/api/movies', async (req, res) => {
  const { title, description } = req.body;
  try {
    const newMovie = await Movie.create({ title, description });
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtenir un film par ID
app.get('/api/movies/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findByPk(id);
    if (!movie) return res.status(404).json({ error: 'Film non trouvé' });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mettre à jour un film
app.put('/api/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const movie = await Movie.findByPk(id);
    if (!movie) return res.status(404).json({ error: 'Film non trouvé' });

    movie.title = title;
    movie.description = description;
    await movie.save();

    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Supprimer un film par ID
app.delete('/api/movies/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findByPk(id);
    if (!movie) return res.status(404).json({ error: 'Film non trouvé' });

    await movie.destroy();
    res.json({ message: 'Film supprimé' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Supprimer tous les films
app.delete('/api/movies', async (req, res) => {
  try {
    await Movie.destroy({ where: {}, truncate: true });
    res.json({ message: 'Tous les films ont été supprimés' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Lancement du serveur
app.listen(8080, () => {
  console.log('Serveur en cours d\'exécution sur http://localhost:8080');
});
