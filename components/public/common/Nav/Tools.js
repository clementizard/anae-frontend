const Blog = {
	name: 'Blog',
	link: '/blog',
};
const Products = {
	name: 'Produits',
	sub: [
		{
			name: 'Tous les produits',
			link: '/products',
		},
		{
			name: 'Nouveautes',
			link: '/products/news',
		},
		{
			name: 'Collections',
			link: '/products/collections',
		},
		{
			name: 'Bracelets',
			link: '/products/bracelets',
		},
		{
			name: "Boucles d'oreilles",
			link: '/products/earrings',
		},
		{
			name: 'Pour enfants',
			link: '/products/kids',
		},
		{
			name: 'Autres',
			link: '/products/others',
		},
	],
};

export const buildNavItems = ({
	article
}) => {
	const out = [];

	if (article && article.sections) {
		const item = {
			name: 'Article',
			type: 'article',
			sub: [],
		};
		
		article.sections.forEach((section) => {
			item.sub.push({ name: section.title });
		});
		out.push(item);
	}
	out.push(Blog);
	out.push(Products);
	return out;
};
// Produits
// Blog
// Article
// ...

// FOOTER:
/*
*Déesse Cosmique
Nous, les Déesses
Quelle taille de bague choisir ?
	Purifier & Recharger
	FAQ
	
*Mentions légales
Conditions générales de vente
Politique de confidentialité
Livraison
Retours

*Propriétés de nos pierres
Pouvoirs
Zodiaque
Grimoire Cosmique
*Restez en contact
Facebook Instagram
*Besoin d'un conseil de Déesse ?
Appelez-nous au  05 31 61 98 00

Ou envoyez-nous un email à
contact@deesse-cosmique.com


 */
