import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes.ts';
import { HomePage } from 'pages/HomePage';
import { Login, NotFound } from 'components/common';

export const Router: FC = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={<HomePage />}
      />
      <Route
        path={ROUTES.LOGIN}
        element={<Login />}
      />
      <Route
        path={'*'}
        element={<NotFound />}
      />
    </Routes>
  );
};
