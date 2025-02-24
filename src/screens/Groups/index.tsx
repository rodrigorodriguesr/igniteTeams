import { Header } from '@components/Header';
import { Highligth } from '@components/Highligth';

import { Container } from './styles';
// import * as S from './styles'; o S serve com um Alias

export function Groups() {
  return (
    <Container>
      <Header/>

      <Highligth 
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />
    </Container>
  );
};

