import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider as ProjectContextProvider } from "../Context/Project";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ProjectContextProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ProjectContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
