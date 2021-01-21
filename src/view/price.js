import AbstractView from "./abstract";

const createPriceTemplate = () =>
  `<p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">1230</span>
            </p>`;

export default class Price extends AbstractView {
  getTemplate() {
    return createPriceTemplate();
  }
}
