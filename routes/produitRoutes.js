// import express from 'express';
// import { getAllProducts ,updateProduit, deleteProduct, createProduct, likeProduct } from '../controllers/produitController.js';

// const produitrouter = express.Router();

// produitrouter.get('/produits', getAllProducts);

// // Route pour mettre à jour un produit
// produitrouter.put('/produits/:id', updateProduit);

// // Route pour supprimer un produit
// produitrouter.delete('/produits/:id', deleteProduct);

// // Route pour créer un produit
// produitrouter.post('/produits', createProduct);




// export default produitrouter;


// routes/produitRoutes.js
import express from 'express';
import {
  createProduit,
  getProduits,
  getProduitById,
  updateProduit,
  deleteProduit
} from '../controllers/produitController.js';

const router = express.Router();

router.post('/produits', createProduit);         // Créer un produit
router.get('/produits', getProduits);            // Récupérer tous les produits
router.get('/produits/:id', getProduitById);     // Récupérer un produit par ID
router.put('/produits/:id', updateProduit);      // Mettre à jour un produit
router.delete('/produits/:id', deleteProduit);   // Supprimer un produit

export default router;

