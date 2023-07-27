import React, { useState } from 'react';

const MyComponent = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    // Afficher la boîte de dialogue de confirmation
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    // Effectuer l'action de suppression ici
    console.log("Suppression effectuée !");
    // Mettre à jour l'état pour masquer la boîte de dialogue de confirmation
    setShowConfirmation(false);
  };

  const handleCancelDelete = () => {
    // L'utilisateur a annulé la suppression, masquer la boîte de dialogue de confirmation
    setShowConfirmation(false);
  };

  return (
    <div>
      {/* Bouton pour déclencher la suppression */}
      <button onClick={handleDelete}>Delete</button>

      {/* Boîte de dialogue de confirmation */}
      {showConfirmation && (
        <div className="confirmation-modal">
          <p>Êtes-vous sûr de vouloir supprimer ?</p>
          <button onClick={handleConfirmDelete}>Oui</button>
          <button onClick={handleCancelDelete}>Non</button>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
