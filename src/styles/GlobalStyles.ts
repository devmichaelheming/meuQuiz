import { createGlobalStyle } from "styled-components";
import "antd/dist/antd.css";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Roboto:wght@400;500&display=swap');

    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font: 14px 'Montserrat', sans-serif;
        background:#ecf1f8;
        color: #333;
        -webkit-font-smoothing: antialiased !important;

        .ant-form-item {
            margin-bottom: 0px;
        }
    }

    ul {
        list-style: none;
    }
`;
