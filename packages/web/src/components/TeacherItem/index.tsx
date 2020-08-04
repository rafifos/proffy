import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
  name: string;
  profileImageUrl: string;
  subject: string;
  aboutMe: string;
  pricePerHour: number;
}

const TeacherItem: React.FC<TeacherItemProps> = (props: TeacherItemProps) => {
  const aboutMe = props.aboutMe.split('\n').map((item, i) => {
    return <p key={i}>{item}</p>;
  });

  return (
    <article className="teacher-item">
      <header>
        <img src={props.profileImageUrl} alt={props.name} />
        <div>
          <strong>{props.name}</strong>
          <span>{props.subject}</span>
        </div>
      </header>

      <p>{aboutMe}</p>

      <footer>
        <p>
          Preço/hora
          <strong>
            R$ {props.pricePerHour.toFixed(2).toString().replace('.', ',')}
          </strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Ícone do WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
