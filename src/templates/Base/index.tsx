import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import * as Styled from './styles';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { ToggleTheme } from '../../components/ToggleTheme';

import { Cancel } from '@styled-icons/material-outlined/Cancel';
import { CheckCircleOutline } from '@styled-icons/material-outlined/CheckCircleOutline';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router?.query?.q || '');
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [isReady, setIsReady] = useState(true);
  const inputTimeout = useRef(null);

  useEffect(() => {
    if (isReady) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }, [isReady]);

  useEffect(() => {
    clearTimeout(inputTimeout.current);

    if (router?.query?.q === searchValue) {
      return;
    }

    const q = searchValue;

    if (!q || q.length <= 3) {
      return;
    }

    inputTimeout.current = setTimeout(() => {
      setIsReady(false);

      router
        .push({ pathname: '/search/', query: { q: searchValue } })
        .then(() => {
          setIsReady(true);
        });
      console.log('ola', searchValue);
    }, 600);

    return () => clearTimeout(inputTimeout.current);
  }, [searchValue, router]);

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
          <Styled.SearchInput
            type={'search'}
            placeholder="Buscar post"
            name="q"
            defaultValue={router?.query?.q}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            // ref={inputTimeout}
            disabled={searchDisabled}
          />
          {searchValue === router?.query?.q &&
            (searchDisabled ? (
              <Cancel
                className="search-cancel-icon"
                aria-label="Input disabled"
              />
            ) : (
              <CheckCircleOutline
                className="search-ok-icon"
                aria-label="Input enabled"
              />
            ))}
          {}
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
