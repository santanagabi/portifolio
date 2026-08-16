import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../AppContext';

const TogglerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  color: ${(props) => props.theme.navbarTheme.linkColor};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }

  span {
    padding: 0 4px;
  }

  .active {
    color: ${(props) => props.theme.accentColor};
  }
`;

function LanguageToggler() {
  const { language, setLanguage } = useContext(AppContext);

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <TogglerContainer onClick={toggleLanguage}>
      <span className={language === 'pt' ? 'active' : ''}>PT</span>
      <span>|</span>
      <span className={language === 'en' ? 'active' : ''}>EN</span>
    </TogglerContainer>
  );
}

export default LanguageToggler;
