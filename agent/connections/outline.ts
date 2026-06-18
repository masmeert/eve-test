import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";
import { once } from "eve/tools/approval";

import { env } from "../env.js";

export default defineMcpClientConnection({
	url: env.OUTLINE_MCP_URL,
	description: "Outline workspace: search, read, create, and edit knowledge-base documents.",
	auth: connect({
		connector: env.OUTLINE_CONNECTOR,
		instructions: "Sign in to Outline in your browser to continue.",
	}),
	approval: once(),
});
