// place files you want to import through the `$lib` alias in this folder.

type TArticle = {
	urlTitle: string;
	title: string;
	description: string;
	imageUrl: string;
	context: string;
	observations: string[];
	sources: string[];
};

export const articles: TArticle[] = [
	{
		urlTitle: 'calathea-makoyana',
		title: 'Calathéa Makoyana',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/calathea.jpg',
		context:
			"Ma plante avait un air sec, une lumière indirecte et une eau calcaire. Pendant un an, elle a très bien vécu en donnant un feuillage magnifique. En un mois, à cause d'un excès d'eau, ses feuilles ont commencé à jaunir et à sécher. Mon réflexe a été de rempoter. En enlevant la terre des racines j'ai découvert qu'elles avaient pourries, j'en ai donc enlevé la plupart mais ce n'a pas suffit à la sauver. Elle réside à présent dans le composte.",
		observations: [
			"Malgrè les conseils contre l'utilisation de l'eau calcaire, la plante ne semble pas déranger par cette eau",
			"Forme de petits turbécules, ils servent d'énergie pour la future petite pousse du plan",
			"Manque d'eau ou air trop sec = feuilles qui sèchent sur des petites parties",
			"Excés d'eau = feuilles qui jaunissent et sèchent"
		],
		sources: [
			'https://www.jardiner-malin.fr/fiche/calathea.html',
			'https://plantespourtous.co/products/calathea-makoyana',
			'https://botaniquepragmatique.com/2021/01/14/calathea/'
		]
	},
	{
		urlTitle: 'philodendron-jose-buono',
		title: 'Philodendron Jose Buono',
		description:
			"Le Philodendron Jose Buono est une espèce unique dans la famille des Philodendron. Elle se distingue par ses feuilles en forme de pagaie qui ont des taches et des motifs blancs. Elle aime recevoir un peu d'attention sous forme d'arrosage lorsque son sol devient sec. Mais sinon, vous pouvez la laisser tranquille. Elle est toxique une fois ingérée par des animaux de compagnie ou des enfants. Cette beauté est une vraie grimpeuse, elle sera donc une étoile montante en un rien de temps !",
		imageUrl: '/plants/philo-jose.png',
		context:
			"J'ai acheté ce Philodendron à Jardiland car je trouvais son feuillage magnifique et que le magasin semblait le maltraiter un peu (c'était mon excuse pour l'acheter). Je l'arrose avec une eau calcaire et l'air de ma chambre est sec. Il a fait deux nouvelles feuilles en un rien de temps donc je pense lui mettre un tuteur pour bientôt.",
		observations: [
			"L'eau calcaire ne semble pas avoir d'importance",
			"Indifférent à l'humidité dans l'air",
			'Pousse très rapidement',
			"À besoin d'une luminosité moyenne"
		],
		sources: ['https://plnts.com/fr/product/philodendron-jose-buono']
	},
	{
		urlTitle: 'monstera-andosini',
		title: 'Monstera Andosinii',
		description:
			"Le Monstera Adansonii, parfois appelé Swiss cheese plant ou masque de singe, est un grimpeur naturel. Si vous lui donnez un peu d'espace dans votre salon, vous verrez rapidement des racines émerger pour essayer de trouver des choses à saisir. Offrez-leur un fil ou un poteau auquel s’accrocher et en un rien de temps votre Monstera sera sur son chemin vers le haut, et montrera à quel point elle est heureuse en faisant de grandes et belles nouvelles feuilles. ",
		imageUrl: '/plants/monstera-andosini.png',
		context:
			"Je ne sais plus pourquoi je voulais une Monstera Andosinii mais j'en ai acheté une. Elle s'épanouit énormément chez moi grâce à une très bonne luminosité et un arrosage régulier (1 fois par semaine mais je garde un tuteur en sphaigne humide à côté).",
		observations: [
			"L'eau calcaire ne semble pas avoir d'importance",
			"Aime l'humidité",
			'Aime la lumière indirecte mais forte',
			"À besoin d'un tuteur pour grimper mais peut aussi être laissée tombante",
			'Pousse très rapidement'
		],
		sources: ['https://plnts.com/fr/product/monstera-adansonii']
	},
	{
		urlTitle: 'pilea-peperomioides',
		title: 'Pilea Peperomioides',
		description:
			'Tout en rondeur, le Pilea peperomioides, aussi appelé la « plante à monnaie chinoise », est une star végétale qui se suffit à elle-même pour donner une personnalité douce, mais affirmée à n’importe quelle pièce. Il aurait été rapporté en Europe depuis la province chinoise du Yunnan en 1946 par le missionnaire norvégien Agnar Espegren, ce qui lui vaut aujourd’hui le surnom de « plante du missionnaire ». ',
		imageUrl: '/plants/pilea.png',
		context:
			"Pour sa rapidité de pousse, de racinage et ses feuilles toutes rondes absolument trop mignonnes, je pense que c'est ma plante préférée. Je l'ai beaucoup multipliée pour la donner à mes proches.",
		observations: [
			"L'eau calcaire lui provoque des petites tâches blanches sur les feuilles mais ne la dérange pas dans son développement",
			"La régularité de l'arrosage n'est pas importante, elle est très résistante",
			'Aime la lumière vive, directe ou indirecte',
			'Bouturage (par feuilles avec bout de tronc, tronc ou pas rejet) très facile et rapide à raciner (en eau ou terre)'
		],
		sources: [
			'https://www.bergamotte.fr/le-journal-vegetal/plantes/tout-savoir-plantes/nos-conseils-pour-entretenir-votre-pilea',
			'https://www.jardiland.com/conseils-idees/pilea-entretien-exposition-bouture',
			'https://plantespourtous.co/products/pilea-peperomioides'
		]
	},
	{
		urlTitle: 'avocat',
		title: 'Avocat',
		description:
			'L’avocatier, de nom latin Persea americana, est un arbre subtropical qui appartient à la famille des Lauracées, au même titre que les lauriers ou encore la cannelle. Originaire d’Amérique centrale, on le cultive dans de nombreuses régions tropicales et subtropicales où il peut atteindre 15 à 20 m de hauteur. Il est également cultivé dans la région de Malaga, dans le sud de l’Espagne. L’avocatier possède de belles feuilles persistantes lancéolées, de couleur vert clair à vert foncé. Lorsqu’il est cultivé en pleine terre sous un climat adapté, il donne en été de larges grappes de petites fleurs jaunes en forme d’étoiles. Elles se transforment par la suite en avocats que l’on récolte durant les mois d’hiver. ',
		imageUrl: '/plants/avocat.png',
		context:
			"J'ai eu mes 4 avocats en les faisant pousser après m'être préparé des salades cet été. Ils poussent si vite ! J'en ai rempoté 3 ensemble mais un semble avoir du mal à s'affirmer et se nourir dans le pot. Je pense que je vais devoir le rempoter seul. Mon dernier est dans un pot en verre avec de l'eau et des cailloux pour le maintenir en hauteur. Il a déjà des racines qui poussent. Par contre les avocats de mon copain n'ont pas eu un sort aussi heureux. Par manque de lumière, ils ont poussé très haut et après de très nombreux manque d'arrosage, ils ont perdus leurs feuilles. Ils sont actuellement à l'état de tiges nues.",
		observations: [
			"Aiment l'eau calcaire",
			'Ne meurent pas après quelques oublis (mais pas trop !)',
			'Aiment la lumière indirecte mais peuvent supporter le soleil direct'
		],
		sources: [
			'https://www.aujardin.info/plantes/avocatier.php',
			'https://www.jardiland.com/conseils-idees/avocatier-plantation-entretien'
		]
	},
	{
		urlTitle: 'maranta-lemon-lime',
		title: 'Maranta Lemon Lime',
		description:
			"La Maranta Lemon Lime, également connue sous son nom latin, Maranta leuconeura, fait partie de la famille des Marantaceae. Originaire des régions tropicales d'Amérique du Sud, notamment du Brésil, cette plante est un véritable joyau de la nature.",
		imageUrl: '/plants/maranta-lemon-lime.png',
		context:
			"J'ai eu ma Maranta à la Plante pour tous. Je ne connaissais pas du tout l'espèce et je l'ai pris pour une Calathéa. Feuillage magnifique, ma seconde plante préférée. J'ai des complication avec elle actuellement car je l'ai sur arrosée et ses racines ont commencé à pourir, j'ai rempoté d'urgence. Affaire à suivre",
		observations: [
			"Eaux non calcaire recommandée mais ça va, elle s'est habituée je pense",
			"Aime l'humidité",
			'Aime les bonnes expositions lumineuses mais pas le soleil direct',
			"N'aime pas l'exces d'eau"
		],
		sources: [
			'https://www.detentejardin.com/plantes/plantes-dinterieur/la-maranta-cette-plante-decorative-qui-rappelle-les-forets-denses-et-humides-damazonie-1030334#:~:text=Pourquoi%20les%20feuilles%20de%20ma,de%20la%20plante%20tr%C3%A8s%20r%C3%A9guli%C3%A8rement.',
			'https://plantespourtous.co/products/maranta-lemon-lime'
		]
	},
	{
		urlTitle: 'sansevieria',
		title: 'Sansevieria',
		description:
			'Si cette plante se plaît en intérieur, c’est avant tout parce que l’intérieur de nos domiciles ou bureaux est souvent chauffé… ce qui convient parfaitement à ces plantes originaires d’Afrique, entre le Congo et le Nigéria. Le sansevieria est une plante tout à fait adaptée aux climats chauds. Ainsi, si vous placez votre sansevieria en extérieur à la belle saison, de la fin du printemps à la fin de l’été, veillez à ne pas l’exposer à des nuits trop froides. ',
		imageUrl: '/plants/sanseveria.png',
		context:
			"Très honnêtement, j'ai pas compris cette plante, elle est là et c'est tout. C'est un cadeau de mon copain, au début c'était des feuilles très foncées et à moitié enfoncé dans le sol (boutures) puis pleins de rejets sont apparus mais il n'ont jamis eu la couleur de la plante mère et ont fait à leur tour de nouveaux rejets claires. J'en ai rempoté certains, pas de récation.",
		observations: [
			'Aime lumière direct, indirect ou ombre ?',
			'Peut être oublié pendant un mois, elle va encore bien ( mais pas plus )',
			'Fait pleins de rejets'
		],
		sources: ['https://www.interflora.fr/blog/sansevieria/#toc-2']
	},
	{
		urlTitle: 'pothos',
		title: 'Pothos',
		description:
			"l'Epipremnum aureum, ou plus communément appelée le scindapsus ou encore lierre du diable est une plante grimpante emblématique. Elle est panachée de vert et de jaune moutarde. C'est une plante extrêmement facile d'entretien qui s'adaptera à des conditions de lumière variées. Elle est résistante et tolère un arrosage irrégulier.",
		imageUrl: '/plants/pothos.png',
		context:
			"J'ai volé des boutures à mon voisin mais ça va car j'ai vu que j'étais pas la seule :). J'ai mis les boutures en eaux mais elles ont mis du temps à raciner car c'était l'hivers. Je les ai rempoté au printemps et là elle commencent à faire des petites feuilles trop mignonnes.",
		observations: [
			'Se met en pause en hiver',
			'Aime lumière indirect',
			"Peu importe l'eau mais un bon arrosage",
			"Pas d'excès d'eau sinon feuilles jaunes"
		],
		sources: [
			'https://flowy.fr/products/pothos-epipremnum-aureum',
			'https://pepinierelocas.com/conseil/decouvrez-ou-redecouvrez-le-pothos/'
		]
	},
	{
		urlTitle: 'alocasia-zebrina',
		title: 'Alocasia Zebrina',
		description:
			"Le genre Alocasia comprend environ 70 espèces, originaires d'Asie tropicale. Alocasia zebrina est l'une de ces espèces, endémique aux Philippines. Cette plante d'appartement atteint 1,20 m de hauteur pour une largeur de 0,60 m. Remarquable par ses feuilles en forme de lance, de 30 cm de long, vert clair portées par des pétioles blancs zébrés de brun, très décoratifs.",
		imageUrl: '/plants/alocasia-zebrina.png',
		context:
			"Cette plante a le pouvoir de me faire pleurer. Achetée adulte à la plante pour tous, j'ai été aux petits soins et ses feuilles ont commencé à ramollir et chutter. J'en ai coupé et là ça aillait mieux. Ses feuilles varient entre le mou et le sec. Moins j'arrose mieux c'est mais je ne comprend pas pourquoi car son substrat est aéré et drainant. ACtuellemnt l'espoir revient car elle fait une nouvelle feuille.",
		observations: [
			"Aime pas l'eau calcaire (mais alors pas du tout)",
			"A du mal avec l'air sec",
			'Aime la lumière indirecte'
		],
		sources: ['https://plantespourtous.co/products/alocasia-zebrina']
	},
	{
		urlTitle: 'alocasia-pink-dragon',
		title: 'Alocasia Pink Dragon',
		description:
			'Originaire du sud de l’Asie, les Alocasia Pink Dragon sont de magnifiques plantes aux tiges roses et aux grandes feuilles nervurées. Ces plantes d’intérieur ont besoin de chaleur et de lumière, cependant elles craignent les rayons du soleil. Les Alocasia n’ont pas besoin de taille particulière.',
		imageUrl: '/plants/alocasia-pink-dragon.png',
		context:
			"Je l'ai commandé sur le site de Vertigea. Elle allait bien jusqu'à que je l'arrose trop. Maintenant une de ses feuilles (1/2) tombe un peu et à un peu jaunit. Du coup je l'ai rempoté dans un substrat sec. Comme c'est un bébé alocasia, j'ai peur de la faire mourir. Par contre elle a produit une bullebille malgré sa petite taille ! Je l'ai rempoté dans un substart sphaigne, on verra bien.",
		observations: ["Aime pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: [
			"https://lagreentouch.fr/blogs/conseils-entretien-plantes/entretien-alocasia-pink-dragon#:~:text=%E2%86%92%20Trop%20d'arrosage%20peut,partie%20de%20nos%20plante%20moyennes%20!",
			'https://fytaluv.com/nos-bulbilles-dalocasias/#:~:text=Planter%20le%20bulbille%20dans%20le,une%20exposition%20directe%20au%20soleil.'
		]
	},
	{
		urlTitle: 'cafeier',
		title: 'Caféier',
		description:
			"Le caféier appartient à la famille des Rubiacées. La plante est facile à reconnaître à ses feuilles ovales, aux bords ondulés. Quand la plante se sent bien, elle prend rapidement de la hauteur. Si vous la laissez s'en donner à coeur joie, elle reprendra en un clin d'oeil son allure sauvage. Mais avec une petite taille délicatement réalisée, la plante retrouvera rapidement belle allure. Et avec les bons soins apportés, de véritables grains de café pourront apparaître. Dans le salon, le caféier peut atteindre de 2 à 3 mètres de haut. ",
		imageUrl: '/plants/cafeier.png',
		context:
			"Acheté à la Plante pour tous, je ne savais pas ce que c'étatit avant mes recherches. Bon il s'avère que je n'aime pas le café mais cette plante est très chouette. Après l'avoir longtemps oublié, la reprise des arrosages hebdomadaires lui a fait faire pleins de nouvelles feuilles !",
		observations: [
			"A besoin d'un arrosage hebdomadaire si l'air est sec",
			'Aime la lumière indirecte'
		],
		sources: [
			'https://www.matelma.com/fr-fr/articles/plante_d_interieur_de_la_semaine_:_le_cafeier'
		]
	},

	{
		urlTitle: 'mini-palmier',
		title: 'Palmier Chamaedorea (mini)',
		description:
			"Originaire de Madagascar, le palmier Chamaedorea est aujourd'hui naturellement présent dans de nombreuses zones tropicales, comme les Caraïbes et les îles Canaries. Comme l'Areca, il est reconnu pour ses talents exceptionnels de purification d'air.",
		imageUrl: '/plants/mini-palmier.png',
		context:
			"Cette plante me faisait pitié à IKEA et je voulais une petite plante pour mon premier appart. À un moment j'ai essayé de le tuer car je ne l'aimais plus, mais j'ai pas réussit du coup j'ai commené à en prendre vraiment soin ( l'arroser plus en gros) et là il est devenu beaucoup plus beau. Morale si ta plante est moche c'est que tu ne sais pas t'en occuper.",
		observations: [
			'Aime être vivant',
			"S'accorche à la vie plus qu'une sangsue",
			"Aime l'eau et la lumière"
		],
		sources: ['https://flowy.fr/products/palmier-chamaedorea-mini']
	},
	{
		urlTitle: 'chlorophytum',
		title: 'Chlorophytum',
		description:
			"Les Chlorophytum sont des plantes herbacées vivaces originaires des pays chauds. Le genre compte plus de 200 espèces, dont la plus connue est sans doute Chlorophytum comosum, également appelée plante-araignée, phalangère ou chlorophytum chevelu. Cette plante se rencontre généralement en intérieur, en pot. C'est en suspension que son feuillage rubané et arqué, souvent panaché de crème, au port retombant, est le mieux mis en valeur. Gracieuse, considérée comme dépolluante, elle est en outre très résistante : c'est la plante idéale pour les oublieux !",
		imageUrl: '/plants/chlorophytum.png',
		context:
			"Une copine m'a donné une bouture car son chat a démolit sa plante, maintenant, elle va bien (la plante), elle a très vite poussé, aimait les arrosage réguliers, mais là je l'ai trop arrosé alors sa mini feuilles ont pourries, j'espère que ça va aller.",
		observations: ["Aime l'eau mais pas trop", 'Aime la lumière indirecte'],
		sources: ['https://www.gerbeaud.com/jardin/fiches/chlorophytum.php']
	},
	{
		urlTitle: 'philodendron-gloriosum',
		title: 'Philodendron Gloriosum',
		description:
			"Le Philodendron Gloriosum, nous vient tout droit des forêts tropicales d'Amérique du Sud et d'Amérique centrale, découvert dans les canopées des forêts de Colombie, il est une vraie perle rare.",
		imageUrl: '/plants/philodendron-gloriosum.png',
		context: "Je l'ai eu à la plante pour tous, il va bien et fait de nouvelles feuilles ! ",
		observations: ["Aime pas l'eau", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.canopee-marseille.fr/post/fiche-entretien-philodendron-gloriosum-1']
	},
	{
		urlTitle: 'philodendron-florida',
		title: 'Philodendron Florida',
		description:
			"Le philodendron florida beauty green est une très bonne plante d'intérieur grimpante. Comme beaucoup de philodendron, le philodendron florida beauty green s'installera facilement au climat d'intérieur avec peu d'entretien, il demandera surtout une pulvérisation régulière et un apport nutritif ainsi qu'un support pour grimpé. Le feuillage est vert luisant, il est original par ces feuilles découpées. Famille des Aracées, cette variété est un croisement entre philodendron squamiferum et pedatum.",
		imageUrl: '/plants/philodendron-florida.png',
		context:
			"Je l'ai eu à la plante pour tous, il va bien et fait de nouvelles feuilles ! Ses jeunes feuilles peuvent être troublantes au début car elles ont une forme de pénis, ou du moins c'est le cas pour ma plante. Mais elles sont très belles (ses feuilles, outre la forme).",
		observations: ["Aime l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: [
			'https://www.lamaisondubananier.com/plantes-exotiques/6018-philodendron-florida-green-.html',
			'https://plantespourtous.co/products/philodendron-florida'
		]
	},
	{
		urlTitle: 'anthurium',
		title: 'Anthurium',
		description:
			'Que ce soit pour leur charme ou leur élégance, les anthuriums font chavirer bien des cœurs. Ces fleurs tropicales, aussi appelées langue de feu, se déclinent en plusieurs couleurs et formes. Avec ses fleurs roses, rouges, oranges ou blanches en forme de cœur, cette plante d’intérieur possède également un feuillage dense et brillant très décoratif, en toute saison. Ces sublimes fleurs peuvent être unicolores ou multicolores. Il existe également des variétés miniatures. Quelle que soit la variété pour laquelle vous avez succombé, découvrez les secrets pour réussir l’entretien de l’anthurium.',
		imageUrl: '/plants/anthurium.png',
		context:
			"Ma mère m'a filé cette plante mais je ne l'apprécie pas, j'ai quand même essayé de la bouturer pour voir si je l'apprécierais plus. Elle a fait des racines et une nouvelle feuille. Je suis mitigée.",
		observations: [
			"N'aime pas être oubliée",
			'Tente de survivre (désolée)',
			'Aime la lumière indirecte'
		],
		sources: ['https://www.jardiland.com/conseils-idees/comment-bien-entretenir-anthurium']
	},
	{
		urlTitle: 'spathiphyllum',
		title: 'Spathiphyllum',
		description:
			'D’origine tropicale, le spathiphyllum se cultive en intérieur sous nos climats. Cette plante d’intérieur apporte à la décoration une floraison hors du commun, une élégante spathe blanche qui lui vaut les surnoms de fleur de lune ou encore lis de la paix. En plus d’être élégante, cette plante fleurie est facile de culture et bien peu exigeante. ',
		imageUrl: '/plants/spathiphyllum.png',
		context:
			"Ma mère m'a donné cette plante et celle ci donne de très jolie feuilles en plus de prendre un certain espace. J'aime beaucoup le fait qu'elle soit volumineuse. Elle est bien plus jolie quand on l'arrose régulièrement.",
		observations: ["Aime l'eau calcaire", 'Aime la lumière indirecte'],
		sources: [
			'https://www.jardiland.com/conseils-idees/spathiphyllum-fleur-de-lune-entretien-arrosage-floraison'
		]
	},
	{
		urlTitle: 'monstera-thai-constellation',
		title: 'Monstera Thai Constellation',
		description:
			"Le Monstera Thaï Constellation, plante exotique du  Sud de la Thaïlande,  te fera peut être penser à sa cousine variegata mais détrompe-toi ! Contrairement à elle, le Monstera Thaï est stable dans sa mutation de couleur, ce qui signifie donc qu'elle gardera toujours ses nuances beiges/jaunes et ses petites tâches sur son feuillage donnant l'impression d'être une constellation d'étoiles ! Bien qu'appelée 'Thaï constellation', la plante est de base originaire d'Amérique centrale (comme les autres de sa famille d'ailleurs), mais est cultivée maintenant en Asie du Sud. ",
		imageUrl: '/plants/monstera-thai-constellation.png',
		context:
			"Commandée sur le site de Vertigea, je l'ai reçu en très bon état. Elle n'a pas fait de nouvelle feuille mais sa croissance est lente alors je ne perd pas espoir (c'est un bébé plante). Je l'arrose avec une eau calcaire et elle a l'air de bien s'en porter. Je la trouve très belle.",
		observations: ['Ne pas trop arroser', "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: [
			'https://www.canopee-marseille.fr/post/fihce-entretien-monstera-tha%C3%AF-constellation',
			'https://plnts.com/fr/product/monstera-thai-constellation'
		]
	}
];
