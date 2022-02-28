import { Controller } from "@hotwired/stimulus";
import * as Turbo from "@hotwired/turbo";

export default class extends Controller {
  static targets = ["output"];
  declare readonly outputTarget: Element;
  declare readonly outputTargets: Element[];
  declare readonly hasOutputTarget: boolean;

  connect() {
    this.outputTarget.textContent = "Run in foo_controller";
  }

  jump() {
    Turbo.visit("/index.html");
  }
}
