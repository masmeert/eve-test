import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const env = createEnv({
	server: {
		OUTLINE_MCP_URL: z.url(),
		OUTLINE_CONNECTOR: z.string().trim().min(1).default("outline"),
	},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});
