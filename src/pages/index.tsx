import Head from "next/head";
import * as S from "../styles/home";
import Header from "@/Components/Header";
import Navegation from "@/Components/Navegation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mobiauto - Teste Seletivo</title>
      </Head>
      <Header />
      <S.Container>
        <Navegation />
      </S.Container>
    </>
  );
}
