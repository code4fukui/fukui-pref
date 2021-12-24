import { CSV } from "https://js.sabae.cc/CSV.js";
import { fetchBin } from "https://js.sabae.cc/fetchBin.js";
import { cutLast } from "./cutLast.js";

const data = CSV.toJSON(await CSV.fetch("org_fukuijizakana.csv"));
for (const d of data) {
  const bin = await fetchBin(d.URL);
  const fn = cutLast(d.URL, "/");
  console.log(d.URL, fn);
  await Deno.writeFile("org_img/" + fn, bin);
}
