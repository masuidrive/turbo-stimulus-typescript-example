import { Application } from "@hotwired/stimulus";
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers";
import * as Turbo from "@hotwired/turbo";

Turbo.start();
const application = Application.start();
const context = require.context("./controllers", true, /\.(js|ts)$/);
application.load(definitionsFromContext(context));
