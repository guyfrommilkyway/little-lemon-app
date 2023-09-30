// packages
import { ReactNode } from 'react';
import {
  UseFormRegister,
  UseFormHandleSubmit,
  UseFormRegisterReturn,
  FieldErrors,
  UseFormReset,
} from 'react-hook-form';

type RenderJSX = () => ReactNode;

// Topbar
export type NavItemType = {
  name: string;
  to: string;
};

export interface NavbarProps {
  data: NavItemType[];
  toggle: boolean;
  onToggle: () => void;
}

export type MenuButtonProps = {
  onToggle: () => void;
};

export type NavMenuProps = {
  toggle: boolean;
  render: RenderJSX;
};

export type NavItemProps = {
  name: string;
  to: string;
};

// Footer
export interface ColumnProps {
  title: string;
  render: RenderJSX;
}

export type HeadProps = {
  title: string;
};

export type LayoutProps = {
  title: string;
  children: ReactNode;
};

export type MenuItemProps = {
  name: string;
  price: string;
  description: string;
  imageURL: string;
};

//
export interface AboutProps {
  heading: string;
  subHeading: string;
  description: string;
  buttonText: string;
}

//
export interface MenuProps {
  render: RenderJSX;
}

// Booking
export interface BookingForm {
  firstName: string;
  lastName: string;
  mobile: string;
  guests: number;
  date: string;
  time: string;
}
export interface FormProps {
  handleSubmit: UseFormHandleSubmit<BookingForm>;
  register: UseFormRegister<BookingForm>;
  errors: FieldErrors<BookingForm>;
  reset: UseFormReset<BookingForm>;
}

export interface InputProps {
  register: UseFormRegisterReturn;
  id: string;
  label: string;
  type: string;
  isInvalid: boolean;
  errorMessage: string;
  testId: string;
}
