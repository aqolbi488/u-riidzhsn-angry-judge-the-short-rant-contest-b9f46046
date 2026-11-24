import { mkdirSync, writeFileSync } from "node:fs";

const rant =
  "The self-checkout just flagged my own reusable bag as an 'unexpected item in the bagging area.' The store begged me to bring it. It has their logo on it. Now I stand here like a shoplifter while the machine lectures me about the bag it sold me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", rant, "utf8");
