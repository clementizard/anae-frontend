import Loadable from 'react-loadable';

const Landing = Loadable({
  loader: () => import(/* webpackChunkName: "Public-landing" */ '../components/public/Landing'),
  loading: () => null,
});
const BlogLanding = Loadable({
  loader: () => import(/* webpackChunkName: "Public-blog-landing" */'../components/public/Blog/Landing'),
  loading: () => null,
});
const BlogArticle = Loadable({
  loader: () => import(/* webpackChunkName: "Public-blog-article" */'../components/public/Blog/Article'),
  loading: () => null,
});

// Urls
export const Urls = {
  public: [
    {
      name: 'Blog Article',
      url: '/blog/article/:id',
      Component: BlogArticle,
    },
    {
      name: 'Blog Landing',
      url: '/blog',
      Component: BlogLanding,
    },
    {
      name: 'Home Landing',
      url: '/',
      Component: Landing,
    },
  ],
  perso: [

  ],
  pro: [

  ],
  admin: [

  ],
};
