import { NotFound } from 'components/common';
import { HomePage } from 'pages/HomePage';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes.ts';

export const Router: FC = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={<HomePage />}
      />
      <Route
        path={'*'}
        element={<NotFound />}
      />
    </Routes>
  );
};
