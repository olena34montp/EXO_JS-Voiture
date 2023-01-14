function voiture (marque, modele, annee, cylindree, couleur) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.cylindree = cylindree;
    this.couleur = couleur;
}

let maVoiture = new voiture('Peugeot', '3008', '2022', '4', 'gris');
let taVoiture = new voiture('Ferrari', 'Portofino', '2022', '8', 'rouge');
let saVoiture = new voiture('Range Rover', 'Sport', '2022', '10', 'argent');

alert(`La marque de ma voiture - ${maVoiture.marque}, le modèle de ma voiture - ${maVoiture.modele}, l'année de ma voiture - ${maVoiture.annee}, la cylindrée de ma voiture - ${maVoiture.cylindree}, le couleur de ma voiture - ${maVoiture.couleur}`);