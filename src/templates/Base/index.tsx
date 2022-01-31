import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import * as Styled from './styles';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  return (
    <>
      <Styled.Wrapper>
        <Menu
          // logoLink={settings.logo}
          text={settings.logo.alternativeText}
          link={'/'}
          srcImg={settings.logo.url}
          newTab={false}
          links={settings.menuLink}
        />
        <Styled.HeaderContainer>
          <Header
            blogDescription={settings.blogDescription}
            blogName={settings.blogName}
            logo={settings.logo}
          />
        </Styled.HeaderContainer>
        <Styled.ContentContainer>{children}</Styled.ContentContainer>
        <Styled.Footer>
          <Footer footerHtml={settings.footer} />
        </Styled.Footer>
        <GoTop />
      </Styled.Wrapper>
    </>
  );
};
