import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { CustomButtonForm, CustomTitleForm, Icon } from 'components/common';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import { RegisterSchema, registerSchema } from 'schema/registerSchema';
import styles from './ModalRegisterForm.module.scss';

export const ModalRegisterForm: FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema), mode: 'onChange' });

  const onSubmitRegister: SubmitHandler<RegisterSchema> = (data) => {
    console.log(data);
    navigate('/');
  };

  const errorDot = { backgroundColor: errors.email || errors.password ? '#f04438' : '#12b76a' };

  return (
    <div className={styles.Register}>
      <form
        className={styles.Register__form}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmitRegister)}>
        <Link
          to={ROUTES.HOME}
          className={styles.Register__form_close}>
          <Icon
            size={20}
            name='Close'
            className={styles.Register__form_closeIcon}
          />
        </Link>
        <CustomTitleForm title='Register' />
        <p className={styles.Register__form_descr}>Register now and get full access to our app.</p>
        <div className={clsx(styles.Register__form_input, styles.Input)}>
          <label
            htmlFor='firstName'
            className={styles.Input__label}>
            First name
          </label>
          <input
            id='firstName'
            type='text'
            {...register('firstName')}
            className={styles.Input__input}
            style={{ borderColor: errors.firstName ? '#f04438' : '' }}
          />
          <span
            className={styles.Input__error}
            style={{ color: errors.firstName ? '#f04438' : '' }}>
            {errors.firstName?.message}
          </span>
          <Icon
            name='User'
            size={20}
            className={styles.Input__iconRight}
          />
        </div>
        <div className={clsx(styles.Register__form_input, styles.Input)}>
          <label
            htmlFor='lastName'
            className={styles.Input__label}>
            Last name
          </label>
          <input
            id='lastName'
            type='text'
            {...register('lastName')}
            className={styles.Input__input}
            style={{ borderColor: errors.lastName ? '#f04438' : '' }}
          />
          <span
            className={styles.Input__error}
            style={{ color: errors.lastName ? '#f04438' : '' }}>
            {errors.lastName?.message}
          </span>
          <Icon
            name='User'
            size={20}
            className={styles.Input__iconRight}
          />
        </div>
        <div className={clsx(styles.Register__form_input, styles.Input)}>
          <label
            htmlFor='email'
            className={styles.Input__label}>
            Email
          </label>
          <input
            id='email'
            type='email'
            {...register('email')}
            className={styles.Input__input}
            style={{ borderColor: errors.email ? '#f04438' : '' }}
          />
          <span
            className={styles.Input__error}
            style={{ color: errors.email ? '#f04438' : '' }}>
            {errors.email?.message}
          </span>
          <Icon
            name='Email'
            size={20}
            className={styles.Input__iconRight}
          />
        </div>
        <div className={clsx(styles.Register__form_input, styles.Input)}>
          <label
            htmlFor='password'
            className={styles.Input__label}>
            Password
          </label>
          <input
            id='password'
            type='password'
            {...register('password')}
            className={styles.Input__input}
            style={{ borderColor: errors.password ? '#f04438' : '' }}
          />
          <span
            className={styles.Input__error}
            style={{ color: errors.password ? '#f04438' : '' }}>
            {errors.password?.message}
          </span>
          <Icon
            name='Password'
            size={20}
            className={styles.Input__iconRight}
          />
        </div>
        <CustomButtonForm
          text='Registration'
          disabled={false}
          errors={errors}
          style={errorDot}
          className={styles.Register__form_btn}
        />
        <div className={styles.Register__form_wrapperReg}>
          <p className={styles.Register__form_wrapperReg_descr}>Do you have an account ?</p>
          <Link
            to={ROUTES.LOGIN}
            className={styles.Register__form_wrapperReg_link}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};
