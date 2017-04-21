var oEnvInfo,
	oNodes,
	i, n,
	aResult = [],
	oIps = {},
	aAllIps = "";

oEnvInfo = jelastic.env.control.GetEnvInfo("${env.envName}", session);

if (!oEnvInfo || oEnvInfo.result != 0) {
	return oEnvInfo;
}

oNodes = oEnvInfo.nodes;

aResult = {result: 0, onAfterReturn: []};

for (i = 0, n = oNodes.length; i < n; i += 1) {
	aAllIps += oNodes[i].address + ";";
}

return {
	result: 0,
	onAfterReturn: {
		NodesExec: {
			ipArray: aAllIps
		}
	}
}
