import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { getItem } from './utils/localStorage';
import { Provider } from './context/userContext';

function ProtectedRoutes({ redirectTo }) {
  const isAuthenticated = getItem('token');
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

function MainRoutes() {
  return (
    <Provider>
    <Routes>
       <Route path="/login" element={<Signin />} />
       <Route path="/sign-up" element={<Signup />} />
      <Route element={<ProtectedRoutes redirectTo='/login' />}>
         <Route path="/" element={<Home />} />
      </Route>
</Routes>
    </Provider>

  );
}

export default MainRoutes;