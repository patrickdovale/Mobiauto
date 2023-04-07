import { useEffect } from "react";
import PageHeader from "../../Components/PageHeader";
import Header from "../../Components/Header";
import { useProjectContext } from "../../Context/Project";
import { Box, Grid } from "@material-ui/core";

import * as S from "../../styles/result";
import { getValue } from "../../services/getInfoVehicle";
import Head from "next/head";

const Result = () => {
  const { carInfo, setResult, result } = useProjectContext();

  useEffect(() => {
    const getResultValue = async () => {
      if (carInfo) {
        const resultResponse: any = await getValue(
          carInfo.brand,
          carInfo.model,
          carInfo.year
        );

        if (resultResponse.status === 200) {
          setResult(resultResponse.data);
        }
      }
    };

    if (carInfo) {
      getResultValue();
    }
  }, []);

  return (
    <S.Page>
      <Head>
        <title>Mobiauto - Projeto Resultado Fipe</title>
      </Head>
      <Header />
      <PageHeader href={"./search"} />

      <S.InfoPage>
        {Object.keys(result).length > 1 ? (
          <Grid
            container
            spacing={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={"100%"}
          >
            <Grid
              item
              xs={10}
              md={10}
              lg={12}
              bgcolor="#dcf5f2"
              borderRadius={2}
              marginTop={16}
            >
              <Box textAlign="center">
                <h2>
                  Tabela Fipe: Preço{" "}
                  {`${result?.Marca} ${result?.Modelo} ${result?.AnoModelo}`}
                </h2>

                <S.Price>{result?.Valor}</S.Price>

                <S.Description>
                  Este é o preço de compra do veículo
                </S.Description>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <>
            <Grid
              container
              spacing={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={"100%"}
            ></Grid>
            <Box textAlign="center" marginTop={25}>
              <h2>Ainda não há dados a serem apresentados</h2>
            </Box>
          </>
        )}
      </S.InfoPage>
    </S.Page>
  );
};

export default Result;
