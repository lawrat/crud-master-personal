const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// GET /api/movies - Récupérer tous les films
router.get('/', async (req, res) => {
  const movies = await Movie.findAll();
  res.json(movies);
});

// POST /api/movies - Créer un nouveau film
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const newMovie = await Movie.create({ title, description });
  res.json(newMovie);
});

// GET /api/movies/:id - Récupérer un film par ID
router.get('/:id', async (req, res) => {
  const movie = await Movie.findByPk(req.params.id);
  res.json(movie);
});

// PUT /api/movies/:id - Mettre à jour un film par ID
router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  const movie = await Movie.findByPk(req.params.id);
  movie.title = title;
  movie.description = description;
  await movie.save();
  res.json(movie);
});

// DELETE /api/movies/:id - Supprimer un film par ID
router.delete('/:id', async (req, res) => {
  const movie = await Movie.findByPk(req.params.id);
  await movie.destroy();
  res.json({ message: 'Film supprimé' });
});

module.exports = router;
