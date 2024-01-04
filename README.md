# 🤖 Bot Discord sous discord.js v14

## Instructions de Base

1. Renommer le fichier `env.example` en `.env`.
2. Insérer le token de votre bot dans le fichier `.env` et assurez-vous d'ajuster les identifiants nécessaires.
3. Exécuter la commande `npm install` pour installer les dépendances.
4. Exécuter la commande `node index.js` pour démarrer le bot.

## Fonctionnalités

### 1. Message de Bienvenue & Rôle

Lorsqu'un utilisateur rejoint le serveur Discord, le bot affiche un message de bienvenue, mentionnant la personne qui l'a invité, ainsi que le nombre total d'utilisateurs sur le serveur. De plus, le bot attribue automatiquement un rôle par défaut (par exemple, le rôle "membre" de Discord) à l'utilisateur.

### 2. Salon Vocal Temporaire

En rejoignant un salon spécifique, l'utilisateur peut créer son propre salon vocal qu'il peut administrer lui-même.

### 3. Système de Ticket 

Les utilisateurs peuvent sélectionner un problème dans un menu déroulant (select menu), créant ainsi un ticket dans une catégorie dédiée. Des commandes sont disponibles pour ajouter/retirer des utilisateurs du ticket, ainsi que pour le fermer et l'archiver au format HTML. *(Remarque : Aucune configuration d'ID n'est nécessaire pour ce module, mais vérifiez le code source pour des ajustements potentiels)*

### 4. Système de Suggestion

Les messages des utilisateurs dans un salon spécifique sont transformés en embed, avec des réactions ajoutées, et un thread est ouvert pour permettre des discussions plus approfondies.

### 5. Affichage des Membres Discord et Joueurs Minecraft

Cette fonctionnalité affiche le nombre de joueurs connectés au serveur Minecraft ainsi que le nombre total de membres Discord.

### 6. Système de Notification (ou Role Bouton) 

En cliquant sur un bouton spécifique, les joueurs peuvent se voir attribuer un rôle particulier. *(Remarque : Aucune configuration d'ID n'est nécessaire pour ce module, mais vérifiez le code source pour des ajustements potentiels)*

### 7. Message lorsqu'un Joueur Boost le Discord

Un message d'embed est affiché lorsque quelqu'un booste le serveur Discord.

### 8. Rôle en Fonction du Statut

Les utilisateurs obtenant un statut spécifique (comme discord.gg/akira) recevront un rôle associé. Si le statut est retiré, le rôle sera également retiré automatiquement.


