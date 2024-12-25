import fs from "fs/promises";
import postcss from "postcss";
import tailwindcss from "tailwindcss";

export const generateInlineCSS = async (
  htmlFile: string,
  tailwindcssFile: string,
  outputFile: string,
): Promise<void> => {
  try {
    const html = await fs.readFile(htmlFile, "utf-8");
    const css = await fs.readFile(tailwindcssFile, "utf-8");

    const result = await postcss([tailwindcss]).process(css, { from: undefined });

    const styleMap = new Map<string, string>();
    result.root.walkRules((rule: postcss.Rule) => {
      const selector = rule.selector.replace(".", "").trim();
      const styles = rule.toString().replace(/^{|}$/g, "").trim();
      styleMap.set(selector, styles);
    });

    const inlineHTML = html.replace(/class="([^"]+)"/g, (match: string, classList: string) => {
      match;
      const inlineStyles = classList
        .split(" ")
        .map((cls) => styleMap.get(cls))
        .filter(Boolean)
        .join(" ");
      return `style="${inlineStyles}"`;
    });

    await fs.writeFile(outputFile, inlineHTML, "utf-8");
  } catch (error) {
    console.error(error);
  }
};
