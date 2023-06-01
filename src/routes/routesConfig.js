import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/peoplepage';
import NotFoundPage from '@containers/NotFoundPage';
import PersonPage from '../containers/PersonPage/PersonPage';
import SearchPage from '../containers/SearchPage/SearchPage';

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/people',
        exact: true,
        component: PeoplePage
    },
    {
        path: '/people/:id',
        exact: true,
        component: PersonPage,
    },
    {
        path: '/search',
        exact: true,
        component: SearchPage
    },
    {
        path: '/not-found',
        exact: true,
        component: NotFoundPage
    },
    {
        path: '*',
        exact: false,
        component: NotFoundPage
    },
];

export default routesConfig;