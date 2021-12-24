import { CSV } from "https://js.sabae.cc/CSV.js";
import { cutLast } from "./cutLast.js";
import { CBOR } from "https://js.sabae.cc/CBOR.js";

const data = CSV.toJSON(await CSV.fetch("org_fukuijizakana.csv"));
for (const d of data) {
  const fn = cutLast(d.URL, "/");
  d.URL = "https://code4fukui.github.io/fukui-pref/fukuijizakana/img/" + fn;
}
await Deno.writeTextFile("fukuijizakana.csv", CSV.stringify(data));
await Deno.writeFile("fukuijizakana.cbor", CBOR.encode(data));
