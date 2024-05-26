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
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/philo-jose.png',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	},
	{
		urlTitle: 'monstera-andosini',
		title: 'Monstera Andosinii',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/monstera-andosini.png',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	},
	{
		urlTitle: 'pilea-peperomioides',
		title: 'Pilea Peperomioides',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/pilea.png',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	},
	{
		urlTitle: 'avocat',
		title: 'Avocat',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/avocat.png',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	},
	{
		urlTitle: 'maranta-lemon-lime',
		title: 'Maranta Lemon Lime',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/maranta-lemon-lime.png',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	},
	{
		urlTitle: 'sansevieria',
		title: 'Sansevieria',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/sanseveria.png',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	},
	{
		urlTitle: 'pothos',
		title: 'Pothos',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/pothos.png',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	},
	{
		urlTitle: 'alocasia-zebrina',
		title: 'Alocasia Zebrina',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/alocasia-zebrina.png',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	},
	{
		urlTitle: 'alocasia-pink-dragon',
		title: 'Alocasia Pink Dragon',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/alocasia-pink-dragon.png',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	},
	{
		urlTitle: 'cafeier',
		title: 'Caféier',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/cafeier.png',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	},

	{
		urlTitle: 'mini-palmier',
		title: 'Palmier Chamaedorea (mini)',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/mini-palmier.png',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	},
	{
		urlTitle: 'chlorophytum',
		title: 'Chlorophytum',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/chlorophytum.png',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	},
	{
		urlTitle: 'philodendron-gloriosum',
		title: 'Philodendron Gloriosum',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/philodendron-gloriosum.png',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	},
	{
		urlTitle: 'philodendron-florida',
		title: 'Philodendron Florida',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/philodendron-florida.png',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	},
	{
		urlTitle: 'anthurium',
		title: 'Anthurium',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/anthurium.png',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	},
	{
		urlTitle: 'spathiphyllum',
		title: 'Spathiphyllum',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/spathiphyllum.png',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	},
	{
		urlTitle: 'monstera-thai-constellation',
		title: 'Monstera Thai Constellation',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/monstera-thai-constellation.png',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	}
];
