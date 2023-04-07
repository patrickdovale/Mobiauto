import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PageHeader from "../../Components/PageHeader";
import Header from "../../Components/Header";
import Select from "../../Components/Inputs/Select";
import Button from "../../Components/Button";
import { Box, Grid } from "@material-ui/core";
import { useProjectContext } from "../../Context/Project";

import * as S from "../../styles/project";
import { getBrands, getModels, getYear } from "../../services/getInfoVehicle";
import Head from "next/head";
import { useRouter } from "next/router";

type AutocompleteOption = {
  nome: string;
  codigo: string;
};

const project = () => {
  const { setCarInfo } = useProjectContext();
  const router = useRouter();
  const { control, handleSubmit, reset, watch, setValue } = useForm();

  const watchBrand = watch("brand");
  const watchModel = watch("model");
  const watchYear = watch("year");

  const [selectedBrand, setSelectedBrand] = useState<AutocompleteOption | null>(
    null
  );
  const [selectedModel, setSelectedModel] = useState<AutocompleteOption | null>(
    null
  );
  const [selectedYear, setSelectedYear] = useState<AutocompleteOption | null>(
    null
  );

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);

  const onSubmit = (data: any) => {
    const payload = {
      brand: data.brand,
      model: data.model,
      year: data.year,
    };

    setCarInfo(payload);
    reset();
    router.push("./result");
  };

  const enabledButton = () => {
    if (watchBrand && watchModel && watchYear) return false;

    return true;
  };

  useEffect(() => {
    const getListBrands = async () => {
      const responseBrands: any = await getBrands();

      if (responseBrands.status === 200) {
        setBrands(responseBrands.data);
      } else {
        alert("Algo deu errrado");
      }
    };
    getListBrands();
  }, []);

  useEffect(() => {
    const getListModels = async () => {
      const responseModel: any = await getModels(watchBrand);

      if (responseModel.status === 200) {
        setModels(responseModel.data.modelos);
        setYears(responseModel.data.anos);
      } else {
        alert("Algo deu errrado");
      }
    };
    if (watchBrand) {
      getListModels();
    } else {
      setYears([]);
    }
  }, [watchBrand]);

  useEffect(() => {
    const getListYear = async () => {
      const responseYear: any = await getYear(watchBrand, watchModel);

      if (responseYear.status === 200) {
        setYears(responseYear.data);
      } else {
        alert("Algo deu errrado");
      }
    };
    if (watchBrand && watchModel) {
      getListYear();
    } else {
      setYears([]);
    }
  }, [watchBrand, watchModel]);

  return (
    <S.Page>
      <Head>
        <title>Mobiauto - Projeto Fipe</title>
      </Head>
      <Header />
      <PageHeader />

      <S.InfoPage>
        <Grid container spacing={2} display="flex" justifyContent="center">
          <Grid item xs={12}>
            <Box textAlign="center">
              <h2>Tabela Fipe</h2>
              <h4>Consulte o valor de um veículo de forma gratuita</h4>
            </Box>
          </Grid>

          <Grid item lg={5} md={7} xs={10} spacing={2} display="flex" gap={20}>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <Select
                name="brand"
                label="Marca"
                control={control}
                options={brands}
                setSelectedOption={(option: any) => {
                  setSelectedBrand(option);
                  setSelectedModel(null);
                  setSelectedYear(null);
                  setValue("model", null);
                  setValue("year", null);
                }}
                required
              />

              <Select
                key={selectedBrand?.codigo}
                name="model"
                label="Modelo"
                control={control}
                options={models}
                setSelectedOption={(option: any) => {
                  setSelectedModel(option);
                  setSelectedYear(null);
                  setValue("year", null);
                }}
                defaultValue={null}
                dependentAutocomplete={watchBrand}
                required
              />

              {watchModel && years.length > 1 && (
                <Select
                  key={selectedModel?.codigo}
                  name="year"
                  label="Ano"
                  control={control}
                  options={years}
                  setSelectedOption={(option: any) => setSelectedYear(option)}
                  dependentAutocomplete={watchModel}
                  defaultValue={null}
                  required
                />
              )}

              <Box display="flex" justifyContent="center" textAlign="center">
                <Button
                  label="Consultar Preço"
                  type="submit"
                  color="secondary"
                  size="large"
                  disabled={
                    typeof enabledButton() === "boolean"
                      ? enabledButton()
                      : false
                  }
                />
              </Box>
            </S.Form>
          </Grid>
        </Grid>
      </S.InfoPage>
    </S.Page>
  );
};

export default project;
