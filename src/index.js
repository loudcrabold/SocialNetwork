import React from 'react';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from "./redux/state";
import state from './redux/state'
import {rerenderEntireTree} from "./render";






rerenderEntireTree(state);