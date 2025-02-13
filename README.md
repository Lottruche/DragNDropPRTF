# **Portfolio - Desk**
## **Objectif**
Ce site a pour but d'être un portfolio digital simulant un bureau physique sur lequel nous trouverons des dossiers interactif pouvant être déplacé librement et les ouvrir pour accéder aux différents travaux.

## **Méthode**
Pour réaliser ce projet, j'utilise pour le moment un code très simple basé sur la librairie [Draggabilly](https://draggabilly.desandro.com) permettant de drag des éléments ciblés.

## **Asset Graphique**

### **• Dossiers**
*Déplaçables et cliquables pour voir les projets.*

<img src="./assets/Folder%201.svg" alt="image" style="width:30%;"/>

<img src="./assets/Folder%202.svg" alt="image" style="width:38%;"/>

**- Modifications**

*dossier droit pour éviter le grab dans les zones de transparence*

<img src="./assets/Dossier%20photoshop.svg" alt="image" style="width:32%;"/>

<img src="./assets/Dossier%20illustrator.svg" alt="image" style="width:32%;"/>

### **• Lampe**
*Possible de la déplacer sur une zone limitée pour changer la lumière de positions*

<img src="./assets/Lampe.svg" alt="image" style="width:40%;"/>

<img src="./assets/Light.svg" alt="image" style="width:50%;"/>

<img src="./assets/Light2.svg" alt="image" style="width:50%;"/>

**- Ajout**

*La tasse est un bouton de retour en arrière tout simplement*

<img src="./assets/Tasse.svg" alt="image" style="width:35%;"/>

*Bouton permettant d'accèder à la page About*

<img src="./assets/Pic.svg" alt="image" style="width:25%;"/>

*Support visuelle pour mettre un texte de presentation dans la page About*

<img src="./assets/feuille.png" alt="image" style="width:32%;"/>

>*Les différents éléments graphique présent dans ce projet sont des fichiers svg fait directement sur [Figma](https://www.figma.com/design/kIzGWnAUqMxBjMXi8DfAgu/Creative-coding?node-id=0-1&t=EicvjkqCWVxnQfLW-1) (pour l'instrant) exclusivement de figm*

## **Problème rencontré**

- L'effet "Grab" s'applique aussi aux zones transparentes des SVG
  *(solution possible : appliquer un "Handle" sur les parties visible)*

- Adapter le placement des éléments par rapport au format de l'écran
  