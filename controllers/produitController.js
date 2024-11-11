



// controllers/ProduitController.js
import Produit from '../models/Produit.js';
import Categorie from '../models/Categorie.js';

export const createProduit = async (req, res) => {
  try {
    const produit = await Produit.create(req.body);
    res.status(201).json(produit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getProduits = async (req, res) => {
  try {
    const produits = await Produit.findAll({
      include: { model: Categorie, as: 'categorie' } // Inclut les catégories associées
    });
    res.status(200).json(produits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProduitById = async (req, res) => {
  try {
    const produit = await Produit.findByPk(req.params.id, {
      include: { model: Categorie, as: 'categorie' }
    });
    if (!produit) return res.status(404).json({ error: "Produit non trouvé" });
    res.status(200).json(produit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProduit = async (req, res) => {
  try {
    const [updated] = await Produit.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ error: "Produit non trouvé" });
    const updatedProduit = await Produit.findByPk(req.params.id);
    res.status(200).json(updatedProduit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProduit = async (req, res) => {
  try {
    const deleted = await Produit.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ error: "Produit non trouvé" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

