import { LoginForm, NotFound } from 'components/common';
import { ModalProfile } from 'components/common/Modal/';
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
        path={ROUTES.LOGIN}
        element={<LoginForm />}
      />
      <Route
        path={ROUTES.PROFILE}
        element={<ModalProfile />}
      />
      <Route
        path={'*'}
        element={<NotFound />}
      />
    </Routes>
  );
};
