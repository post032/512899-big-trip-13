import AbstractView from "./abstract";

const createNoPoint = () =>
  `<p class="trip-events__msg">Click New Event to create your first point</p>`;

export default class NoPoint extends AbstractView {
  getTemplate() {
    return createNoPoint();
  }
}
