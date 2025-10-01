import fs from "fs";
import path from "path";
import { parseTwee } from "./parser";

export function getStory() {
  const filePath = path.join(process.cwd(), "src/app/lib/story.twee");
  const text = fs.readFileSync(filePath, "utf-8");
  return parseTwee(text);
}
