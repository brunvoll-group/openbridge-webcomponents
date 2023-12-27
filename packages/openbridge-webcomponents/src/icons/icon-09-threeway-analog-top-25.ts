import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-09-threeway-analog-top-25')
export class Obi09ThreewayAnalogTop25 extends LitElement {
  @property({type: Boolean, attribute: 'use-css-color'}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M6.80902 2H17.191C17.5627 2 17.8044 2.39116 17.6382 2.72361L14 10L21.2764 6.3618C21.6088 6.19558 22 6.43733 22 6.80902V17.191C22 17.5627 21.6088 17.8044 21.2764 17.6382L14 14H10L2.72361 17.6382C2.39116 17.8044 2 17.5627 2 17.191V6.80902C2 6.43733 2.39116 6.19558 2.72361 6.3618L10 10L6.3618 2.72361C6.19558 2.39116 6.43733 2 6.80902 2Z" fill="currentColor"/>
<path d="M19.9995 15.8816L21 16.3819V7.61794L19.9995 8.11818V15.8816Z" fill="currentColor"/>
<path d="M6 9.11792L3 7.61792L3 16.3819L6 14.8819L6 9.11792Z" fill="currentColor"/>
<path d="M13 9.76224L16.3811 3H7.61719L11 9.76562V11H9.76416L7 9.61792V14.3819L9.76371 13H14.2363L19 15.3819V8.61792L14.2358 11H13V9.76224Z" fill="currentColor"/>
<path d="M10.58 16.8816C10.4743 16.6265 10.5955 16.334 10.8506 16.2283C11.1057 16.1227 11.3982 16.2438 11.5039 16.4989L13.4173 21.1183C13.523 21.3735 13.4018 21.6659 13.1467 21.7716C12.8916 21.8773 12.5991 21.7561 12.4934 21.501L10.58 16.8816Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4278 16.1163L14.3412 20.7356C14.6582 21.501 14.2948 22.3785 13.5294 22.6955C12.764 23.0125 11.8866 22.6491 11.5696 21.8837L9.65613 17.2643C9.33911 16.4989 9.70256 15.6215 10.4679 15.3045C11.2333 14.9874 12.1107 15.3509 12.4278 16.1163ZM11.5039 16.4989L13.4173 21.1183C13.523 21.3735 13.4018 21.6659 13.1467 21.7716C12.8916 21.8773 12.5991 21.7561 12.4934 21.501L10.58 16.8816C10.4743 16.6265 10.5955 16.334 10.8506 16.2283C11.1057 16.1227 11.3982 16.2438 11.5039 16.4989Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.80902 2H17.191C17.5627 2 17.8044 2.39116 17.6382 2.72361L14 10L21.2764 6.3618C21.6088 6.19558 22 6.43733 22 6.80902V17.191C22 17.5627 21.6088 17.8044 21.2764 17.6382L14 14H10L2.72361 17.6382C2.39116 17.8044 2 17.5627 2 17.191V6.80902C2 6.43733 2.39116 6.19558 2.72361 6.3618L10 10L6.3618 2.72361C6.19558 2.39116 6.43733 2 6.80902 2Z" style="fill: var(--automation-device-tertiary-color)"/>
<path d="M19.9995 15.8816L21 16.3819V7.61794L19.9995 8.11818V15.8816Z" style="fill: var(--automation-device-secondary-color)"/>
<path d="M6 9.11792L3 7.61792L3 16.3819L6 14.8819L6 9.11792Z" style="fill: var(--automation-device-secondary-color)"/>
<path d="M13 9.76224L16.3811 3H7.61719L11 9.76562V11H9.76416L7 9.61792V14.3819L9.76371 13H14.2363L19 15.3819V8.61792L14.2358 11H13V9.76224Z" style="fill: var(--automation-device-primary-color)"/>
<path d="M10.58 16.8816C10.4743 16.6265 10.5955 16.334 10.8506 16.2283C11.1057 16.1227 11.3982 16.2438 11.5039 16.4989L13.4173 21.1183C13.523 21.3735 13.4018 21.6659 13.1467 21.7716C12.8916 21.8773 12.5991 21.7561 12.4934 21.501L10.58 16.8816Z" style="fill: var(--automation-device-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4278 16.1163L14.3412 20.7356C14.6582 21.501 14.2948 22.3785 13.5294 22.6955C12.764 23.0125 11.8866 22.6491 11.5696 21.8837L9.65613 17.2643C9.33911 16.4989 9.70256 15.6215 10.4679 15.3045C11.2333 14.9874 12.1107 15.3509 12.4278 16.1163ZM11.5039 16.4989L13.4173 21.1183C13.523 21.3735 13.4018 21.6659 13.1467 21.7716C12.8916 21.8773 12.5991 21.7561 12.4934 21.501L10.58 16.8816C10.4743 16.6265 10.5955 16.334 10.8506 16.2283C11.1057 16.1227 11.3982 16.2438 11.5039 16.4989Z" style="fill: var(--automation-device-tertiary-color)"/>
</svg>
`;

  override render() {
    return html`
      <div class="wrapper">${this.useCssColor ? this.iconCss : this.icon}</div>
    `;
  }

  static override styles = css`
    .wrapper {
      height: 100%;
      width: 100%;
    }
    .wrapper > * {
      height: 100%;
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'obi-09-threeway-analog-top-25': Obi09ThreewayAnalogTop25;
  }
}