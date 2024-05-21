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
		urlTitle: 'calathea',
		title: 'Calathéa',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/calathea.jpg',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	},
	{
		urlTitle: 'monstera',
		title: 'Monstera',
		description:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		imageUrl: '/plants/calathea.jpg',
		context:
			"La Calathéa est une plante d'intérieur très appréciée pour ses feuilles aux motifs uniques. Elle est originaire des forêts tropicales d'Amérique du Sud. Elle est très facile à entretenir et peut vivre longtemps si elle est bien soignée.",
		observations: ["AIme pas l'eau calcaire", "Aime l'humidité", 'Aime la lumière indirecte'],
		sources: ['https://www.jardiner-malin.fr/fiche/calathea.html']
	}
];
