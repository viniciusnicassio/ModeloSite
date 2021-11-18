import type { NextPage } from "next";
import Head from "next/head";

import { Container } from "../styles/pages/Home";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>New world</title>
      </Head>

      <main>
        <img src={require("../assets/wall.png").default} alt="logo-homepage" />
        <h1>Welcome to new world</h1>
      </main>

      <footer>Powered by Vinicius (and Google 😜)</footer>
    </Container>
  );
};

export default Home;
