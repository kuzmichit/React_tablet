import React from "react";
import App from "./App";
import { createRoot } from 'react-dom/client';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<App/>);