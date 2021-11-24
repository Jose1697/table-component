/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.table-component {
  padding: 20px;
  background-color: #f1f1f1;
}

.table-container {
  display: flex;
  justify-content: center;
}

.table-top {
  background-color: #1973b8;
  color: white;
}

.table-bottom {
  background-color: white;
}

.table-container td {
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
}

td span {
  color: #1973b8;
}
`;