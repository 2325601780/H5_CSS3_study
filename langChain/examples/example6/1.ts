import { TextLoader } from "@langchain/classic/document_loaders/fs/text";
import { Document } from "@langchain/core/documents";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = join(__dirname, "./data");

async function main(){
    const loader = new TextLoader(join(DATA, "article.txt"));
    const docs = await loader.load();
    console.log(docs);

    const manual = new Document({
        pageContent: "这是手工创建的文档内容。",
        metadata: { source: "手工创建", category: "示例" },
    });
    console.log("\n" + "=".repeat(72));
    console.log("\n✍️  手工创建 Document：");
    console.log("   内容：", manual.pageContent);
    console.log("   元数据：", manual.metadata);
    
}

main().catch(console.error);