import { createAgent, HumanMessage } from 'langchain';
import * as z from 'zod';
import {createModel} from '../../lib/model.ts';
import {evaluate} from 'mathjs';
import { tool } from 'langchain/tools';

const calculatorTool = tool(
  async (input) => String(evaluate(input.expression)),
  {
    name: "calculator",
    description: "执行数学计算。需要计算数学表达式时使用。",
    schema: z.object({
      expression: z.string().describe("要计算的数学表达式，例如 '25 * 8'"),
    }),
  }
);

async function main() {
  console.log("🤖 你的第一个智能体\n");

  const model = createModel();

  // 就这么多——模型 + 工具 = 一个会自己思考、自己用工具的智能体
  const agent = createAgent({
    model,
    tools: [calculatorTool],
  });
  const query = "125 * 8 等于多少？";
  console.log(`👤 用户：${query}\n`);

  // createAgent 返回的是一个"图"，输入输出都用 messages 数组
  const response = await agent.invoke({
    messages: [new HumanMessage(query)],
  });

  const last = response.messages[response.messages.length - 1]
  console.log(last.content);

}

main().catch(console.error);