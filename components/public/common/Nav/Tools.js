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
			name: 'Nouveautés',
			link: '/products/new',
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
			name: 'Boucles d\'oreilles',
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
