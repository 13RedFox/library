import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes.ts';
import { HomePage } from 'pages/HomePage';

export const Router: FC = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={<HomePage />}
      />
    </Routes>
  );
};
