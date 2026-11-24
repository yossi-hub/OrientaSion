/*
 * Contenus de démonstration documentaire — sources officielles consultées le 24/11/2026.
 * Sélection non exhaustive. Les critères, ouvertures de candidature et conditions
 * applicables au bac français doivent être vérifiés pour la rentrée visée.
 * « À confirmer » signifie qu'aucune preuve suffisamment précise n'a été retenue.
 * Les couleurs sont des repères graphiques de la maquette, pas des identités officielles.
 */
window.OS_DATA = {
  institutions: [
    {
      id: 'huji',
      name: 'Université hébraïque de Jérusalem',
      short: 'Université hébraïque',
      kind: 'Université',
      city: 'Jérusalem',
      initials: 'HUJI',
      color: '#236567',
      description: 'Une université à Jérusalem proposant des cursus dans les sciences, les sciences humaines et sociales, notamment en économie et en sciences cognitives.',
      url: 'https://en.huji.ac.il/'
    },
    {
      id: 'technion',
      name: 'Technion — Institut israélien de technologie',
      short: 'Technion',
      kind: 'Université',
      city: 'Haïfa',
      initials: 'TEC',
      color: '#315778',
      description: 'Un établissement universitaire à Haïfa dont les cursus couvrent notamment les sciences, l’informatique et les différentes disciplines de l’ingénierie.',
      url: 'https://www.technion.ac.il/en/'
    },
    {
      id: 'tau',
      name: 'Université de Tel-Aviv',
      short: 'Université de Tel-Aviv',
      kind: 'Université',
      city: 'Tel-Aviv',
      initials: 'TAU',
      color: '#55548A',
      description: 'Une université à Tel-Aviv avec des cursus dans de nombreuses disciplines, dont la psychologie et l’économie présentées dans cette sélection.',
      url: 'https://english.tau.ac.il/'
    },
    {
      id: 'bgu',
      name: 'Université Ben-Gourion du Néguev',
      short: 'Université Ben-Gourion',
      kind: 'Université',
      city: 'Beer-Sheva',
      initials: 'BGU',
      color: '#B67740',
      description: 'Une université dont le campus de Beer-Sheva accueille notamment le cursus d’informatique et des préparations académiques présentés ici.',
      url: 'https://www.bgu.ac.il/en/'
    },
    {
      id: 'afeka',
      name: 'Afeka — Collège académique d’ingénierie de Tel-Aviv',
      short: 'Afeka',
      kind: 'Mihlala',
      city: 'Tel-Aviv',
      initials: 'AF',
      color: '#85733B',
      description: 'Une mihlala académique spécialisée dans l’ingénierie et les sciences, avec notamment un cursus de génie logiciel.',
      url: 'https://www.afeka.ac.il/en/'
    },
    {
      id: 'hit',
      name: 'HIT — Institut de technologie de Holon',
      short: 'HIT Holon',
      kind: 'Mihlala',
      city: 'Holon',
      initials: 'HIT',
      color: '#A25B64',
      description: 'Un établissement académique de Holon proposant des cursus en technologie, sciences et design, dont l’informatique et le génie électrique.',
      url: 'https://www.hit.ac.il/en/'
    }
  ],
  courses: [
    {
      id: 'huji-cognitive-sciences',
      title: 'Sciences cognitives et du cerveau',
      institution: 'huji',
      domain: 'Sciences humaines',
      degree: 'Bachelor — double cursus',
      duration: '3 ans',
      language: 'Hébreu',
      summary: 'Comprendre la cognition en croisant plusieurs disciplines. Le programme se suit avec un second domaine, par exemple la psychologie, l’informatique ou la linguistique ; le choix de la combinaison est à vérifier.',
      subjects: ['Psychologie et cognition', 'Linguistique et philosophie', 'Calcul et neurosciences'],
      source: 'https://en.cognitive.huji.ac.il/bachelors-degree'
    },
    {
      id: 'huji-economics',
      title: 'Économie',
      institution: 'huji',
      domain: 'Économie & gestion',
      degree: 'B.A.',
      duration: '3 ans',
      language: 'Hébreu',
      summary: 'Un cursus d’économie au campus du mont Scopus. Tous les étudiants commencent dans une formule à deux disciplines ; un passage vers un cursus élargi en économie est possible selon les règles du département.',
      subjects: ['Analyse économique', 'Méthodes quantitatives', 'Cours d’économie au choix'],
      source: 'https://economics.huji.ac.il/ba-%D7%91%D7%9B%D7%9C%D7%9B%D7%9C%D7%94'
    },
    {
      id: 'technion-computer-science',
      title: 'Informatique — parcours de trois ans',
      institution: 'technion',
      domain: 'Sciences & ingénierie',
      degree: 'B.Sc.',
      duration: '3 ans',
      language: 'Hébreu',
      summary: 'Le parcours de trois ans est l’une des voies de premier cycle en informatique au Technion. Le catalogue distingue aussi d’autres parcours et combinaisons : leur contenu et leur durée doivent être comparés séparément.',
      subjects: ['Fondements de l’informatique', 'Logiciels et systèmes', 'Mathématiques et algorithmique'],
      source: 'https://www.cs.technion.ac.il/undergraduate/'
    },
    {
      id: 'technion-electrical-engineering',
      title: 'Génie électrique',
      institution: 'technion',
      domain: 'Sciences & ingénierie',
      degree: 'B.Sc.',
      duration: '4 ans',
      language: 'Hébreu',
      summary: 'Un cursus structuré autour des sciences fondamentales, des enseignements de génie électrique, puis des spécialisations. La formation comprend des laboratoires et des projets.',
      subjects: ['Mathématiques et physique', 'Circuits électroniques', 'Signaux et systèmes'],
      source: 'https://ece.technion.ac.il/degree-studies-programs/undergraduate-studies/study-programs-courses/electrical-engineering/'
    },
    {
      id: 'tau-psychology',
      title: 'Psychologie',
      institution: 'tau',
      domain: 'Sciences humaines',
      degree: 'B.A.',
      duration: '3 ans',
      language: 'Hébreu',
      summary: 'Étudier scientifiquement les comportements et les processus mentaux, avec des enseignements de méthodes de recherche et de statistiques. Les formules à une ou deux disciplines sont à comparer dans le programme officiel.',
      subjects: ['Comportements et processus mentaux', 'Statistiques', 'Méthodes de recherche'],
      source: 'https://social-sciences.tau.ac.il/psy-home/FAQ1'
    },
    {
      id: 'tau-economics',
      title: 'Économie',
      institution: 'tau',
      domain: 'Économie & gestion',
      degree: 'B.A.',
      duration: '3 ans',
      language: 'Hébreu',
      summary: 'Analyser les décisions des individus, des entreprises et des marchés, ainsi que les évolutions économiques d’ensemble. Plusieurs formules de cursus sont proposées par l’école d’économie.',
      subjects: ['Microéconomie', 'Macroéconomie', 'Méthodes d’analyse économique'],
      source: 'https://go.tau.ac.il/he/social-sciences/ba/economics'
    },
    {
      id: 'bgu-computer-science',
      title: 'Informatique',
      institution: 'bgu',
      domain: 'Sciences & ingénierie',
      degree: 'B.Sc.',
      duration: '3 ans',
      language: 'À confirmer',
      summary: 'Un premier cycle d’informatique au campus de Beer-Sheva, avec un socle théorique et des enseignements dans plusieurs domaines du calcul et du logiciel. La formule choisie et sa langue sont à vérifier auprès de l’université.',
      subjects: ['Théorie de l’informatique', 'Intelligence artificielle', 'Logiciels et systèmes distribués'],
      source: 'https://www.bgu.ac.il/welcome/ba/catalog/categories/computer-science/'
    },
    {
      id: 'afeka-software-engineering',
      title: 'Génie logiciel',
      institution: 'afeka',
      domain: 'Sciences & ingénierie',
      degree: 'B.Sc.',
      duration: '4 ans',
      language: 'À confirmer',
      summary: 'Apprendre à concevoir, développer, tester et faire évoluer des systèmes logiciels. Le programme associe les fondements de l’informatique aux méthodes de l’ingénierie ; les spécialisations proposées sont à vérifier pour la rentrée visée.',
      subjects: ['Conception de logiciels', 'Tests et intégration', 'Sécurité et intelligence artificielle'],
      source: 'https://external.afeka.ac.il/en/academic-programs/bachelor-degree/software-engineering/'
    },
    {
      id: 'hit-computer-science',
      title: 'Informatique',
      institution: 'hit',
      domain: 'Sciences & ingénierie',
      degree: 'B.Sc.',
      duration: '3 ans',
      language: 'À confirmer',
      summary: 'Un cursus combinant bases mathématiques et théoriques, logiciel et matériel. L’établissement présente notamment des approfondissements en intelligence artificielle, cybersécurité et réseaux.',
      subjects: ['Fondements mathématiques', 'Logiciels et matériel', 'IA, cybersécurité et réseaux'],
      source: 'https://www.hit.ac.il/en/academic/sciences/computer-science-b-sc/'
    },
    {
      id: 'hit-electrical-engineering',
      title: 'Génie électrique et électronique',
      institution: 'hit',
      domain: 'Sciences & ingénierie',
      degree: 'B.Sc.',
      duration: '4 ans',
      language: 'À confirmer',
      summary: 'Un cursus comprenant des enseignements théoriques, des laboratoires et un projet final. Les domaines présentés incluent les communications, la microélectronique et les systèmes embarqués.',
      subjects: ['Communications et traitement du signal', 'Microélectronique', 'Systèmes embarqués'],
      source: 'https://www.hit.ac.il/en/academic/electrical-and-electronics-engineering/electrical-and-electronics-engineering-bsc/'
    }
  ],
  glossary: [
    {
      id: 'psychometrique',
      term: 'Psychométrique',
      hebrew: 'פסיכומטרי',
      aliases: ['psychométrique', 'psychometrique', 'psychometric', 'PET'],
      category: 'Admissions',
      short: 'Une épreuve utilisée dans certaines voies d’admission aux études supérieures.',
      detail: 'Le psychométrique est organisé par le NITE. Dès la session d’hiver de décembre 2026, il porte sur le raisonnement verbal et quantitatif : l’anglais est évalué séparément avec AMIRNET. Son rôle dépend de la voie d’admission du cursus.',
      practical: 'Vérifiez la version de l’épreuve correspondant à votre session et les résultats demandés par le cursus. Ne confondez pas score au test et décision d’admission.',
      source: 'https://www.nite.org.il/two-domain-psychometric-entrance-test/faqs/?lang=en'
    },
    {
      id: 'yael',
      term: 'YAEL',
      hebrew: 'יע״ל',
      aliases: ['Yaël', 'Yael', 'test d’hébreu'],
      category: 'Hébreu',
      short: 'Une évaluation du niveau d’hébreu, dans sa version sur papier.',
      detail: 'Le YAEL mesure la maîtrise de l’hébreu. Le NITE le présente comme l’épreuve papier proposée après le psychométrique passé dans une langue autre que l’hébreu ; l’inscription indépendante concerne la version informatisée YAELNET.',
      practical: 'Vérifiez quel justificatif d’hébreu votre cursus accepte, le niveau attendu et la date limite de transmission du résultat.',
      source: 'https://www.nite.org.il/other-tests/yael/?lang=en'
    },
    {
      id: 'yaelnet',
      term: 'YAELNET',
      hebrew: 'יעלנט',
      aliases: ['Yaelnet', 'Yael-Net', 'YAEL NET', 'יעלנ״ט'],
      category: 'Hébreu',
      short: 'La version informatisée de l’évaluation d’hébreu du NITE.',
      detail: 'Le YAELNET évalue les mêmes types de compétences que le YAEL, sur ordinateur. Une inscription autonome est possible auprès du NITE ; certaines sessions sont aussi organisées par des établissements.',
      practical: 'Consultez les consignes et exercices officiels. Le score attendu et son utilisation relèvent de l’établissement et du cursus.',
      source: 'https://www.nite.org.il/other-tests/yaelnet/?lang=en'
    },
    {
      id: 'sekhem',
      term: 'Sekhem',
      hebrew: 'סכם',
      aliases: ['sekhem', 'sekhem admission', 'sehem', 'sechem', 'sékhem', 'score combiné'],
      category: 'Admissions',
      short: 'Un score de sélection calculé selon les règles de l’établissement.',
      detail: 'Le terme désigne un score combinant des éléments du dossier, souvent des résultats de fin de secondaire et du psychométrique. La formule, les pondérations et les variantes peuvent dépendre de l’établissement et du domaine. Ce n’est pas une note nationale unique.',
      practical: 'Utilisez uniquement le calculateur officiel adapté à votre diplôme et à votre voie d’admission. Ne transposez pas directement une moyenne française dans une formule prévue pour la bagrout.',
      source: 'https://www.bgu.ac.il/welcome/blog/articles/admission-requirements-guide/'
    },
    {
      id: 'mechina',
      term: 'Mechina académique',
      hebrew: 'מכינה קדם־אקדמית',
      aliases: ['mechina', 'mékhina', 'mekhina', 'mehina', 'mehinot', 'mechinot', 'année préparatoire'],
      category: 'Parcours',
      short: 'Une préparation à l’entrée dans les études supérieures.',
      detail: 'Une mechina académique peut associer langues, matières scolaires et initiation au travail universitaire. Son contenu et son public varient selon le dispositif. Le terme est ici utilisé pour les préparations académiques, distinctes des préparations prémilitaires.',
      practical: 'Avant de choisir, demandez au cursus visé si cette préparation est pertinente, comment ses résultats seront pris en compte et quelles autres conditions restent à remplir.',
      source: 'https://overseas.huji.ac.il/academics/preparatory-program/'
    },
    {
      id: 'mihlala',
      term: 'Mihlala académique',
      hebrew: 'מכללה אקדמית',
      aliases: ['mihlala', 'michlala', 'mikhlala', 'mihlalot', 'michlalot', 'academic college'],
      category: 'Établissements',
      short: 'Un établissement d’enseignement supérieur de type « academic college ».',
      detail: 'Le système israélien comprend des universités et des collèges académiques. Le mot mihlala ne suffit pas à connaître le diplôme proposé : il faut examiner le statut de l’établissement, le programme précis et le diplôme délivré.',
      practical: 'Comparez les cursus sur leur contenu et leur diplôme. Vérifiez auprès du Conseil de l’enseignement supérieur le statut du programme qui vous intéresse.',
      source: 'https://che.org.il/wp-content/uploads/2012/05/HIGHER-EDUCATION-BOOKLET.pdf'
    },
    {
      id: 'bagrout',
      term: 'Bagrout',
      hebrew: 'בגרות',
      aliases: ['bagrout', 'bagrut', 'teoudat bagrout', 'matriculation'],
      category: 'Diplômes',
      short: 'Le diplôme israélien de fin d’études secondaires.',
      detail: 'La bagrout est une référence utilisée dans les conditions d’admission israéliennes. Pour un candidat titulaire du bac français, l’établissement examine les règles applicables aux diplômes obtenus à l’étranger ; aucune conversion générale n’est proposée ici.',
      practical: 'Préparez votre diplôme et vos relevés, puis demandez les consignes propres au bac français au service d’admission. Vérifiez les traductions et justificatifs réellement exigés.',
      source: 'https://info-overseas.huji.ac.il/admission-requirements-bachelor%E2%80%99s-degrees'
    },
    {
      id: 'oulpan',
      term: 'Oulpan',
      hebrew: 'אולפן',
      aliases: ['oulpan', 'ulpan', 'oulpanim', 'ulpanim', 'cours d’hébreu'],
      category: 'Hébreu',
      short: 'Un programme d’apprentissage de l’hébreu, souvent intensif.',
      detail: 'Un oulpan développe les compétences en lecture, écriture, compréhension orale et expression. Les formats, niveaux et évaluations diffèrent d’un programme à l’autre. Il peut précéder ou accompagner un parcours académique.',
      practical: 'Vérifiez le niveau de départ, le volume de cours et l’évaluation finale. Un certificat d’oulpan ne doit pas être supposé accepté à la place du justificatif demandé par le cursus.',
      source: 'https://overseas.huji.ac.il/academics/hebrew-and-other-languages/study-hebrew-language-at-the-hebrew-university-of-jerusalem/'
    },
    {
      id: 'amirnet',
      term: 'AMIRNET',
      hebrew: 'אמירנט',
      aliases: ['Amirnet', 'Amir-Net', 'AMIR NET', 'test d’anglais'],
      category: 'Anglais',
      short: 'Un test informatisé de positionnement en anglais.',
      detail: 'Le NITE organise AMIRNET pour évaluer le niveau d’anglais utilisé par les établissements pour le classement linguistique. À partir de la session du psychométrique de décembre 2026, l’anglais est évalué séparément du psychométrique.',
      practical: 'Consultez les instructions actuelles du NITE et les règles du cursus sur les résultats acceptés, les dispenses éventuelles et les délais.',
      source: 'https://www.nite.org.il/other-tests/amirnet/?lang=en'
    }
  ],
  preps: [
    {
      id: 'huji-rothberg-mechina',
      name: 'Mechina — Rothberg International School',
      institution: 'huji',
      text: 'Une préparation destinée aux diplômés du secondaire venant de l’étranger, avec apprentissage intensif des langues et introduction aux études en hébreu. Le parcours pertinent et ses effets sur l’admission doivent être confirmés selon le diplôme et le cursus visé.',
      focus: ['Hébreu', 'Anglais', 'Initiation aux études académiques'],
      source: 'https://overseas.huji.ac.il/academics/preparatory-program/'
    },
    {
      id: 'technion-preacademic-mechina',
      name: 'Mechina — Centre d’éducation préacadémique',
      institution: 'technion',
      text: 'Une préparation aux études scientifiques et d’ingénierie du Technion. Le programme présente notamment des mathématiques, de la physique, de l’anglais et de l’écriture scientifique. L’accès avec un diplôme étranger et les conditions de poursuite sont à vérifier directement.',
      focus: ['Mathématiques', 'Physique', 'Anglais et écriture scientifique'],
      source: 'https://kdam.technion.ac.il/node/275'
    },
    {
      id: 'bgu-engineering-mechina',
      name: 'Mechina — Ingénierie et sciences exactes',
      institution: 'bgu',
      text: 'Une préparation académique de Ben-Gourion orientée vers les études d’ingénierie et de sciences exactes, comprenant notamment des mathématiques et de la physique. La réussite ne doit pas être interprétée comme une admission automatique dans le cursus choisi.',
      focus: ['Mathématiques', 'Physique', 'Préparation aux cursus scientifiques'],
      source: 'https://www.bgu.ac.il/welcome/kdam/programs/engineering/'
    }
  ],
  parentFaq: [
    {
      question: 'Comment vérifier si le bac français permet de candidater ?',
      answer: 'Repérez le cursus exact et la rentrée souhaitée, puis consultez la rubrique des diplômes étrangers de l’établissement. Demandez une confirmation écrite sur le traitement du bac français, les matières attendues et les pièces à fournir. Une condition affichée pour la bagrout ne se transpose pas directement au bac.'
    },
    {
      question: 'Faut-il prévoir une mechina avant le premier cycle ?',
      answer: 'Partez du cursus visé et du dossier de votre enfant. Demandez au service d’admission si une préparation est exigée, utile ou évitable, puis quels programmes sont pris en compte et sous quelles conditions. Comparez aussi les besoins linguistiques et scientifiques : toutes les préparations ne répondent pas au même objectif.'
    },
    {
      question: 'Comment construire un budget réaliste ?',
      answer: 'Préparez un tableau comprenant scolarité, frais annexes, préparation éventuelle, logement, alimentation, transport, santé, voyages et installation. Demandez des tarifs pour la bonne année et le bon statut. Inscrivez les aides dans une colonne distincte jusqu’à confirmation écrite de leur attribution et de leur montant.'
    },
    {
      question: 'Comment évaluer les besoins en hébreu et en anglais ?',
      answer: 'Distinguez la langue des cours, les justificatifs exigés à l’admission et les obligations linguistiques pendant les études. Relevez les tests acceptés et les dates limites dans chaque cursus. Prévoyez ensuite une préparation adaptée au niveau réel de votre enfant, au-delà du seul score demandé.'
    },
    {
      question: 'Que demander à un étudiant francophone du cursus ?',
      answer: 'Préparez des questions sur une semaine de cours, la charge de travail, les langues réellement utilisées, les examens, l’accompagnement et les difficultés rencontrées au début. Vérifiez qu’il suit actuellement le cursus et le campus envisagés. Son expérience complète les informations officielles ; les règles d’admission restent à confirmer auprès de l’établissement.'
    }
  ]
};
