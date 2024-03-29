import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme"
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './state'
import MainCarousel from "./scenes/home/MainCarousel";

const store = configureStore({
    reducer: { cart: CartReducer}
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
)