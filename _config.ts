import lume from "lume/mod.ts";
import inline from "lume/plugins/inline.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site.use(inline());
site.use(postcss());
site.copy("isaac");
site.copy("img");

export default site;
