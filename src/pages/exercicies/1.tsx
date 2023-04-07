import { useState } from "react";
import { useForm } from "react-hook-form";
import PageHeader from "../../Components/PageHeader";
import Header from "../../Components/Header";
import Input from "../../Components/Inputs/Text";
import Button from "../../Components/Button";

import * as S from "../../styles/1";
import { maskifi } from "@/Util";
import Head from "next/head";

const exercicie1 = () => {
  const { control, handleSubmit, reset } = useForm();

  const [characters, setCharacters] = useState([
    "4556364607935616",
    "64607935616",
    "1",
    "",
    "Skippy",
    "Nanananananananananana Batman!",
  ]);

  const onSubmit = (data: any) => {
    const newValue = [...characters, data?.characters];

    setCharacters(newValue);
    reset();
  };

  return (
    <>
      <Head>
        <title>Mobiauto - Exercicio 1</title>
      </Head>
      <Header />
      <PageHeader title="Exercicio 1" />

      <S.InfoPage>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="characters"
            label="Palavra"
            control={control}
            defaultValue=""
          />

          <S.ContainerButton>
            <Button label="Enviar" type="submit" />
          </S.ContainerButton>
        </S.Form>

        <S.Details>
          <ul>
            {characters?.map((item, i) => (
              <li key={i}>{`${item} -> ${maskifi(item)}`}</li>
            ))}
          </ul>
        </S.Details>
      </S.InfoPage>
    </>
  );
};

export default exercicie1;
