import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PageHeader from "../../Components/PageHeader";
import Header from "../../Components/Header";
import Input from "../../Components/Inputs/Text";
import Button from "../../Components/Button";

import * as S from "../../styles/2";
import { updateData, validateJSON } from "@/Util";
import Head from "next/head";

const exercicie2 = () => {
  const { control, handleSubmit } = useForm();

  const [jsons, setJsons] = useState([
    { country: "Japão", age: 33 },
    { price: 89.9, amount: 15, description: "camiseta 100% algodão" },
  ]);

  const defaultValueInput = { name: "Marcos", country: "Brasil", age: 22 };

  const onSubmit = (data: any) => {
    if (validateJSON(data?.json)) {
      const newValue = [...jsons, JSON.parse(data.json)];

      setJsons(newValue);
    } else {
      alert("JSON inválido");
    }
  };

  return (
    <>
      <Head>
        <title>Mobiauto - Exercicio 2</title>
      </Head>
      <Header />
      <PageHeader title="Exercicio 2" />

      <S.InfoPage>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InfoObject>
            Objecto Padrão: {JSON.stringify(defaultValueInput)}
          </S.InfoObject>

          <Input
            name="json"
            label="JSON Update"
            control={control}
            multiline
            rows={4}
            required
            defaultValue={JSON.stringify(defaultValueInput)}
          />

          <S.ContainerButton>
            <Button label="Enviar" type="submit" />
          </S.ContainerButton>
        </S.Form>

        <S.Details>
          <ul>
            {jsons?.map((item, i) => (
              <React.Fragment key={i}>
                <S.InfoDetails>
                  <p>
                    <strong> Objeto Padrão:</strong>{" "}
                    {JSON.stringify(defaultValueInput)}
                  </p>
                  <p>
                    <strong>Objeto Update:</strong> {JSON.stringify(item)}
                  </p>
                  <p>
                    <strong>Resultado:</strong>{" "}
                    {JSON.stringify(updateData(defaultValueInput, item))}{" "}
                  </p>
                </S.InfoDetails>
              </React.Fragment>
            ))}
          </ul>
        </S.Details>
      </S.InfoPage>
    </>
  );
};

export default exercicie2;
