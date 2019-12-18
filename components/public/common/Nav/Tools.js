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

const createArticleSection = (sections) => {
	if (sections && sections.length) {
		const item = {
			name: 'Article',
			type: 'article',
			target: 'section',
			sub: [],
		};
		
		sections.forEach((section) => {
			item.sub.push({ name: section.title });
		});
		return item;
	}
	return null
};

export const buildNavItems = ({
	article
}) => {
	const out = [];

	if (article && article.sections) {
		const item = createArticleSection(article.sections);
		if (item) out.push(item);
	}
	out.push(Blog);
	out.push(Products);
	return out;
};

export const buildDrawerItems = ({
	sections,
}) => {
	const out = [];
	const articleItem = createArticleSection(sections);
	if (articleItem) out.push(articleItem);
	out.push(Blog);
	Products.sub.forEach(product => out.push(product));
	return out;
};
