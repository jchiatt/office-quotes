import React from "react";
import { ThemeProvider } from 'emotion-theming';
import Layout from '../components/Layout';
import 'normalize.css';
import '../globalStyles.css'
import theme from '../theme';

export default ({ path }) => (
  <ThemeProvider theme={theme}>
    <Layout page={path}>
      <p>Home</p>
    </Layout>
  </ThemeProvider>
)