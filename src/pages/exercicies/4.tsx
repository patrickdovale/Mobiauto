import { useState } from "react";
import { useForm } from "react-hook-form";
import PageHeader from "../../Components/PageHeader";
import Header from "../../Components/Header";
import Input from "../../Components/Inputs/Text";
import Button from "../../Components/Button";

import * as S from "../../styles/4";
import { checkIfTheFirstLetterIsUppercase } from "@/Util";
import Head from "next/head";

const exercicie4 = () => {
  const { control, handleSubmit, reset } = useForm();

  const [characters, setCharacters] = useState([
    "Brasil",
    "mobiauto",
    "xXx xXx",
    "xDD",
    "Deu Certo!",
  ]);

  const onSubmit = (data: any) => {
    const newValue = [...characters, data?.characters];

    setCharacters(newValue);
    reset();
  };

  return (
    <>
      <Head>
        <title>Mobiauto - Exercicio 4</title>
      </Head>
      <Header />
      <PageHeader title="Exercicio 4" />

      <S.InfoPage>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="characters"
            label="Palavra"
            control={control}
            defaultValue=""
            required
          />

          <S.ContainerButton>
            <Button label="Enviar" type="submit" />
          </S.ContainerButton>
        </S.Form>

        <S.Details>
          <ul>
            {characters?.map((item, i) => (
              <li key={i}>{`${item} -> ${checkIfTheFirstLetterIsUppercase(
                item
              )}`}</li>
            ))}
          </ul>
        </S.Details>
      </S.InfoPage>
    </>
  );
};

export default exercicie4;
