import { createAgent, HumanMessage,  } from 'langchain';
import {createModel} from '../../lib/model.ts'
import {  MultiServerMCPClient } from '@langchain/mcp-adapters';

async function main (){
    const serverUrl = "https://mcp.context7.com/mcp";
    const mcpClient = new  MultiServerMCPClient({
        context7: {
        transport: "http",
        url: serverUrl,
        },
    })

    try {
        console.log("🔧 正在获取工具列表……");
        const tools = await mcpClient.getTools();
        console.log(`✅ 拿到 ${tools.length} 个工具：`);

        for (const t of tools) console.log(`   • ${t.name}：${t.description}`);

        // 关键点：MCP 工具和自定义工具用起来一模一样，直接丢给 createAgent
        const agent = createAgent({
            model: createModel(),
            tools,
        });
        const query = "React 的 useState 怎么用？给我最新文档。";

        const res = await agent.invoke({ messages: [new HumanMessage(query)] });

        console.log(res);

        
    } catch (error) {
        console.error("❌ 获取工具列表失败:", error);
    }
}


main().catch(console.error);
