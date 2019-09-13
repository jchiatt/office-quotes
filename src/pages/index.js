import React from "react";
import { ThemeProvider } from 'emotion-theming';
import Layout from '../components/Layout';
import Hero from "../components/Hero"
import Tagline from "../components/Tagline"
import 'normalize.css';
import '../globalStyles.css'
import theme from '../theme';

export default ({ path }) => (
  <ThemeProvider theme={theme}>
    <Hero><Tagline>Quotes from the best show to ever air on TV.</Tagline></Hero>
    <Layout page={path}>
      <p>Home</p>
    </Layout>
  </ThemeProvider>
)