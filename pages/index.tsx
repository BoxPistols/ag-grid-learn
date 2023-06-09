import Head from "next/head";
import styles from "../styles/Home.module.css";
import AgGridTable from "../src/AgGrid/AgTableBasic";
import MuiDocs from "../src/docs/docs-mui";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container sx={{ mt: 2, p: 4 }}>
        <Typography variant="h2" color="initial">
          AgGrid Basic Table
        </Typography>

        <AgGridTable />
        <MuiDocs />
      </Container>
    </>
  );
}
