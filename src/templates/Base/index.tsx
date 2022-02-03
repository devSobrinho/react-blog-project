import { useRouter } from 'next/router';
import * as Styled from './styles';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { ToggleTheme } from '../../components/ToggleTheme';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  const router = useRouter();

  return (
    <>
      <Styled.Wrapper>
        <ToggleTheme />
        <Menu
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
        <Styled.SearchContainer>
          <form action="/search" method="GET">
            <Styled.SearchInput
              type={'search'}
              placeholder="Buscar post"
              name="post"
              defaultValue={router?.query?.post}
            ></Styled.SearchInput>
          </form>
        </Styled.SearchContainer>
        <Styled.ContentContainer>{children}</Styled.ContentContainer>
        <Styled.Footer>
          <Footer footerHtml={settings.footer} />
        </Styled.Footer>
        <GoTop />
      </Styled.Wrapper>
    </>
  );
};
