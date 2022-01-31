import { MenuLinkProps } from '../components/MenuLink';

export type SettingsStrapi = {
  id: string;
  blogName: string;
  blogDescription: string;
  showText?: boolean;
  logo: {
    url: string;
    id: string;
    alternativeText?: string;
  };
  menuLink: MenuLinkProps[];
  footer: string;
};
