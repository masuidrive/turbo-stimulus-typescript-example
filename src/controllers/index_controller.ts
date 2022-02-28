import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["output"];
  declare readonly outputTarget: Element;
  declare readonly outputTargets: Element[];
  declare readonly hasOutputTarget: boolean;

  connect() {
    this.outputTarget.textContent = "Run in index_controller";
  }
}
