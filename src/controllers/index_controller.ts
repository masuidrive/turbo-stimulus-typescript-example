import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["output"];
  outputTarget!: HTMLElement;

  connect() {
    this.outputTarget.textContent = "Run in index_controller";
  }
}
