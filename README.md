# Orienta’Sion — première ébauche

Application web statique en français pour explorer les études en Israël après le bac, destinée aux futurs étudiants francophones et à leurs parents.

## Ouvrir localement

Depuis ce dossier :

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Puis ouvrir `http://127.0.0.1:4173`.

## Parcours disponibles

- Recherche de cursus et d’établissements ; filtres combinables.
- Fiches cursus avec source officielle, rubrique admissions et accès au glossaire.
- Favoris et comparaison de deux ou trois cursus.
- Présentation de trois mehinot et programmes préparatoires académiques.
- Glossaire consultable par variantes de transcription, accents et mots hébreux.
- Espace parents : FAQ et calculateur de budget saisi par l’utilisateur, sans taux de change implicite.
- Liste de préparation aux candidatures.
- Simulation d’une demande de mise en relation avec l’appui envisagé du CNEF.

## Périmètre éditorial

Les six établissements et dix cursus forment un échantillon documentaire, non exhaustif. Les liens officiels figurent dans `dist/content.js` et dans les fiches. Sources consultées le 24 novembre 2026 pour cette ébauche : cette date n’est pas une validation des règles par les établissements.

Les critères détaillés d’admission des bacheliers français, tarifs, calendriers et reconnaissances entre préparations et cursus sont à documenter pour chaque rentrée. Les informations non établies sont indiquées comme telles. La maquette n’évalue pas les chances d’admission et n’invente aucun seuil.

Le partenariat, le traitement des demandes et la disponibilité d’étudiants sont à organiser avec le CNEF. Aucun étudiant disponible ni accord de partenariat n’est affirmé. Le formulaire est entièrement simulé, sans envoi réseau et sans stockage des informations saisies.

## Données et structure

- `dist/index.html` : document et dialogues accessibles.
- `dist/styles.css` : interface responsive.
- `dist/content.js` : établissements, cursus, préparations, glossaire et FAQ.
- `dist/app.js` : navigation, recherche et interactions côté navigateur.
- `.openai/hosting.json` : identité du Site privé et configuration d’hébergement.

Favoris, comparaison, progression et budget sont conservés uniquement dans le stockage local du navigateur. Il n’y a ni compte, ni backend, ni analyse de fréquentation. Les polices Google sont facultatives ; des polices système prennent le relais si elles ne sont pas accessibles.

## Vérification de l’ébauche

Les fichiers JavaScript sont contrôlés syntaxiquement ; le contenu est vérifié pour les identifiants, les références entre objets et les URL HTTPS. Les parcours principaux sont vérifiés dans le navigateur : recherche, comparaison, favoris, fiches, glossaire, budget et demande CNEF simulée. Les données d’exemple saisies pendant ces vérifications ne sont pas incorporées aux fichiers publiés.
