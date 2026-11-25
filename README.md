# Orienta'Sion by CNEF

Application web statique en français pour explorer les études en Israël après le bac, destinée aux futurs étudiants francophones et à leurs parents.

## Ouvrir localement

Depuis ce dossier :

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Puis ouvrir `http://127.0.0.1:4173`.

## Parcours disponibles

- Répertoire prioritaire de 55 établissements : noms français/hébreux, anciens noms et alias, sources, sites officiels, filtres par type, localité et niveau d’études.
- Fiche consultable pour chaque établissement, y compris lorsque les cursus restent à documenter.
- Recherche de cursus ; filtres combinables, dont un filtre par établissement et un lien direct vers sa sélection.
- Technion : 61 parcours et options de premier cycle, regroupés dans 17 facultés ou domaines, avec recherche dédiée dans la fiche établissement.
- Fiches cursus avec source officielle, rubrique admissions et accès au glossaire.
- Favoris et comparaison de deux ou trois cursus.
- Présentation de trois mehinot et programmes préparatoires académiques.
- Glossaire consultable par variantes de transcription, accents et mots hébreux.
- Espace parents : FAQ et calculateur de budget saisi par l’utilisateur, sans taux de change implicite.
- Liste de préparation aux candidatures.
- Simulation d’une demande de mise en relation avec l’appui envisagé du CNEF.

## Périmètre éditorial

Le répertoire contient 55 établissements distincts, dont 53 avec un premier cycle, et 69 fiches de parcours, dont 61 parcours et options du Technion. Les cursus des autres établissements restent un échantillon ; le recensement des établissements est rapproché des publications officielles CHE/CBS et de leurs sites institutionnels. Les liens officiels figurent dans `dist/content.js` et dans les fiches. Sources consultées le 24 novembre 2026 : cette date n’est pas une validation des règles par les établissements. La base de référence comprend 57 établissements, comme le repère global CHE 2026–2027. Le catalogue publié applique une sélection éditoriale et contient 55 fiches après les retraits demandés d’Al-Qasemi, à Baqa al-Gharbiyye, et du Collège académique arabe d’éducation de Haïfa. Il ne constitue pas un export certifié du registre en temps réel. La ventilation de la base de référence, avant sélection, de 11 universités / 29 collèges généraux / 17 enseignants diffère du repère CHE 11/28/18 à cause du traitement du changement de statut de Sakhnin, décrit comme général dans ce même rapport. Les catégories du catalogue publié comptent désormais 11 universités, 29 collèges généraux et 15 enseignants. La base documentaire historique est conservée dans `research/`. Weizmann et Schechter sont conservés hors filtre post-bac. Les fusions et anciens noms sont documentés dans `research/`.

Les critères détaillés d’admission des bacheliers français, tarifs, calendriers et reconnaissances entre préparations et cursus sont à documenter pour chaque rentrée. Les informations non établies sont indiquées comme telles. La maquette n’évalue pas les chances d’admission et n’invente aucun seuil.

Le partenariat, le traitement des demandes et la disponibilité d’étudiants sont à organiser avec le CNEF. Aucun étudiant disponible ni accord de partenariat n’est affirmé. Le formulaire est entièrement simulé, sans envoi réseau et sans stockage des informations saisies.

## Données et structure

- `dist/index.html` : document et dialogues accessibles.
- `dist/styles.css` : interface responsive.
- `dist/brand.css` : charte graphique et code couleur (universités en bleu, mihlalot académiques en orange, formation des enseignants en vert).
- `dist/content.js` : établissements, cursus, préparations, glossaire et FAQ.
- `dist/app.js` : navigation, recherche et interactions côté navigateur.
- `.openai/hosting.json` : identité du Site privé et configuration d’hébergement.

Favoris, comparaison, progression et budget sont conservés uniquement dans le stockage local du navigateur. Il n’y a ni compte, ni backend, ni analyse de fréquentation. Les polices Google sont facultatives ; des polices système prennent le relais si elles ne sont pas accessibles.

## Vérification de l’ébauche

Les fichiers JavaScript sont contrôlés syntaxiquement ; le contenu est vérifié pour les identifiants, les références entre objets et les URL HTTPS. Les parcours principaux sont vérifiés dans le navigateur : recherche, comparaison, favoris, fiches, glossaire, budget et demande CNEF simulée. Les données d’exemple saisies pendant ces vérifications ne sont pas incorporées aux fichiers publiés.

## Identité visuelle

Titre : Orienta'Sion by CNEF. Palette et typographies adaptées de la charte Oulpan 2024 fournie : bleu `#025db8`, orange `#f55700`, vert `#1d8653`, jaune `#f8cf3e`, texte `#2e2e2e`, fond `#fff9f2`. League Spartan pour les titres, Playfair Display pour les accents éditoriaux, Poppins pour le texte. Les libellés accompagnent toujours les couleurs ; l’orange des petits textes est assombri pour préserver le contraste. Les formes géométriques sont dessinées en SVG, sans reprise du logotype Oulpan Lavi.

## Recensement Technion 2026–2027

Vérifié le 25 novembre 2026 à partir du tableau officiel publié en novembre, du catalogue 2026–2027 et des pages facultaires. Les 61 fiches ne représentent pas 61 diplômes indépendants : elles distinguent les variantes de durée, les parcours combinés et certaines concentrations nommées. Les programmes partagés entre facultés sont dédoublonnés. Les mineures et autres approfondissements internes sont rattachés aux fiches concernées.

Le B.Sc. de sciences médicales de trois ans est décrit comme une étape du parcours médecine ; il n’est pas présenté comme une candidature autonome. Les trois doubles cursus médicaux précisent cinq ans pour les deux B.Sc., puis une poursuite clinique distincte. L’ancien B.Arch. cinq ans est remplacé, pour le repérage des nouveaux entrants, par les sciences de l’architecture quatre ans puis le M.Arch. professionnel deux ans sous conditions. Le complément d’enseignement après diplôme et les anciennes formations non confirmées pour la rentrée ne sont pas comptés.

Les divergences officielles sur bioinformatique, informatique/mathématiques et certains combinés matériaux sont affichées dans les fiches. La première année internationale en anglais, suivie d’une intégration dans certains cursus en hébreu, et la mechina sont décrites comme voies d’entrée ou préparations. Les admissions françaises ne sont pas extrapolées. L’audit de couverture, les exclusions et les sources sont conservés dans `research/technion-2026-2027.json`.

Lien local direct : `http://127.0.0.1:4173/#explorer?institution=technion`.

Le logo officiel CNEF fourni est conservé sans modification dans `dist/assets/cnef-logo.webp` et affiché avec ses proportions d’origine dans la navigation, l’en-tête mobile et la signature de l’accueil.
