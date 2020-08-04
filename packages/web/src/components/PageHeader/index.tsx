import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './styles.css';

interface PageHeaderProps {
  children?: React.ReactNode;
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props: PageHeaderProps) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
