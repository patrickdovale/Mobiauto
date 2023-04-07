import { useState } from "react";
import PageHeader from "../../Components/PageHeader";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import getRickAndMortyCharacters from "../../services/getRickAndMortyCharacters";

import * as S from "../../styles/3";
import Head from "next/head";

type Character = {
  nome: string;
  genero: string;
  avatar: string;
  especie: string;
};

const exercicie1 = () => {
  const [result, setResult] = useState<Character[] | []>([]);

  const characters = [1, 2, 3, 4, 5];

  const getCharacters = async (characters: number[]) => {
    const response: any = await getRickAndMortyCharacters(characters);

    if (response.status == 200) {
      const formatedData = response.data.map((item: any) => ({
        nome: item.name,
        genero: item.gender,
        avatar: item.image,
        especie: item.species,
      })) as Character[];

      setResult(formatedData);
    }
  };

  return (
    <>
      <Head>
        <title>Mobiauto - Exercicio 3</title>
      </Head>
      <Header />
      <PageHeader title="Exercicio 3" />

      {result.length < 1 ? (
        <S.ContainerButton>
          <Button
            label="Buscar"
            type="button"
            onClick={() => getCharacters(characters)}
          />
        </S.ContainerButton>
      ) : (
        <S.InfoPage>
          <S.Cards>
            {result.map((item, i) => (
              <S.Card key={i}>
                <S.ImageContainer>
                  <S.ImageCard src={item.avatar} />
                </S.ImageContainer>
                <S.BodyCard>
                  <S.LabelName>
                    {item.nome}{" "}
                    <S.LabelEspecie>({item.especie})</S.LabelEspecie>
                  </S.LabelName>
                  <S.LabelGender>{item.genero}</S.LabelGender>
                </S.BodyCard>
              </S.Card>
            ))}
          </S.Cards>

          <S.Details>{JSON.stringify(result)}</S.Details>
        </S.InfoPage>
      )}
    </>
  );
};

export default exercicie1;
