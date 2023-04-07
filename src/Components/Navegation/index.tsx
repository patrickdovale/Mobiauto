import Link from "next/link";
import CardOption from "../CardOption";
import { exerciciesOption, projectOption } from "./options";
import * as S from "./style";

const Navegation = () => {
  return (
    <S.Section>
      <S.CardSection>
        <S.TitleSection>Exercicios</S.TitleSection>
        <S.CardsContainer>
          {exerciciesOption.map((item) => (
            <Link href={item.url}>
              <CardOption text={item.label} icon={item.icon} />
            </Link>
          ))}
        </S.CardsContainer>
      </S.CardSection>

      <S.CardSection>
        <S.TitleSection>Projetos</S.TitleSection>
        <S.CardsContainer>
          {projectOption.map((item) => (
            <Link href={item.url}>
              <CardOption text={item.label} icon={item.icon} />
            </Link>
          ))}
        </S.CardsContainer>
      </S.CardSection>
    </S.Section>
  );
};

export default Navegation;
