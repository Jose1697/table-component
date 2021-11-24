import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './TableComponent-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<table-component></table-component>
```

##styling-doc

@customElement table-component
*/
export class TableComponent extends LitElement {
  static get is() {
    return 'table-component';
  }

  // Declare properties
  static get properties() {
    return {
      title: { type: String },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.title = '';
  }

  static get styles() {
    return [styles, getComponentSharedStyles('table-component-shared-styles')];
  }

  // Define a template
  render() {
    return html`
      <div class="table-component">
        <h2>${this.title}<h2>
        <div class="table-container">
            <table>
              <tr>
                <td class="table-top">N°</td>
                <td class="table-top">DATOS</td>
                <td class="table-top">PLAN SELECCIONADO</td>
                <td class="table-top">VIGENCIA</td>
                <td class="table-top">ACCIONES</td>
              </tr>
              <tr>
                <!-- Filas -->
                <td class="table-bottom">1</td>
                <td class="table-bottom">
                  <div>
                    <p><span>PLACA:</span> ABC123</p>
                    <p><span>TELEFONO:</span> 987654321</p>
                    <p><span>CORREO ELECTRONICO:</span> mariela-minaya@gmail.com</p>
                  </div>
                </td>
                <td class="table-bottom">
                  <div>
                    <p><span>PRECIO:</span> US$ 936</p>
                    <p><span>PLAN:</span> ESTÁNDAR</p>
                  </div>
                </td>
                <td class="table-bottom">
                  <div>
                    <p><span>ESTADO:</span> ACTIVO</p>
                    <p><span>VENCIMIENTO:</span> 2021-06-02</p>
                  </div>
                </td>
                <td class="table-bottom">
                  <div>
                    <p>Descargar</p>
                    <p>Contratar</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
      </div>
    `;
  }
}
