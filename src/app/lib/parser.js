export function parseTwee(tweeText) {
  const passages = {};
  const blocks = tweeText.split(":: ").slice(1); // pisah tiap passage
  blocks.forEach(block => {
    const [titleLine, ...contentLines] = block.split("\n");
    const title = titleLine.trim();
    const content = contentLines.join("\n").trim();

    // cari link [[text->target]]
    const regex = /\[\[(.*?)\-\>(.*?)\]\]/g;
    const options = [];
    let cleanText = content.replace(regex, (_, text, target) => {
      options.push({ text, next: target.trim() });
      return "";
    });

    passages[title] = { text: cleanText.trim(), options };
  });
  return passages;
}
