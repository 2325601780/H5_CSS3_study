import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = join(__dirname, "./data");

async function main(){
    const text = readFileSync(join(DATA, "article.txt"), "utf-8");
    console.log(text.length);
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 200,      // 每块目标长度
        chunkOverlap: 40,    // 相邻块重叠长度
    });
    const docs = await splitter.createDocuments([text]);

}

main().catch(console.error);