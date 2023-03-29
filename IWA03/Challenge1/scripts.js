// scripts.js

import { company } from "./configuration.js"
import { year } from "./configuration.js"


const message = document.getElementById("footer")
message.innerText =  "© " + company + " (" + year + ")"

 //document.querySelector("footer").innerText = message;

