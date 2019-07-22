import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Player from '../containers/Player';
import NotFound from '../containers/NotFound';

const serverRoutes = (isLogged) => {
  return [
    {
      path: '/',
      component: isLogged ? Home : Login,
      exact: true,
    },
    {
      path: '/player/:id',
      component: isLogged ? Player : Login,
      exact: true,
    },
    {
      path: '/login',
      component: Login,
      exact: true,
    },
    {
      path: '/register',
      component: Register,
      exact: true,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
};

export default serverRoutes;
