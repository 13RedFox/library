import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import { LoginSchema, loginSchema } from 'schema/loginSchema';
import { CustomInputForm, CustomTitleForm } from '..';
import { CustomButtonForm } from '../CustomButtonForm';
import styles from './LoginForm.module.scss';

export const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema), mode: 'onChange' });

  const onSubmitLogin: SubmitHandler<LoginSchema> = (data) => {
    console.log(data);
  };

  const errorDot = { backgroundColor: errors.email || errors.password ? '#f04438' : '#12b76a' };
  const errorsObj = {
    input: { borderColor: errors.email || errors.password ? '#f04438' : '' },
    message: { color: errors.email || errors.password ? '#f04438' : '' },
  };

  return (
    <div className={styles.Login}>
      <form
        className={styles.Login__form}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmitLogin)}>
        <CustomTitleForm
          title='Login'
          className={styles.Login__form_title}
        />
        <span className={styles.Login__form_descr}>Login now and get full access to our app.</span>
        <CustomInputForm
          name='email'
          type='email'
          label='Email'
          style={errorsObj}
          errors={errors}
          register={register}
          iconNameRight={'Email'}
        />
        <CustomInputForm
          name='password'
          type='password'
          label='Password'
          style={errorsObj}
          errors={errors}
          register={register}
          iconNameRight={'Password'}
        />
        <CustomButtonForm
          text='Login'
          errors={errors}
          style={errorDot}
          disabled={false}
          className={styles.Login__form_btn}
        />
        <div className={styles.Login__form_wrapperReg}>
          <p className={styles.Login__form_wrapperReg_descr}>Don't hane an account ?</p>
          <Link
            to={ROUTES.REGISTRATION}
            className={styles.Login__form_wrapperReg_link}>
            Registration
          </Link>
        </div>
      </form>
    </div>
  );
};
