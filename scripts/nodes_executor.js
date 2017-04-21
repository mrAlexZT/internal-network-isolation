var oEnvInfo,
	oNodes,
	i, n,
	aResult = [],
	AllNodes = "";

oEnvInfo = jelastic.env.control.GetEnvInfo("${env.envName}", session);

if (!oEnvInfo || oEnvInfo.result != 0) {
	return oEnvInfo;
}

oNodes = oEnvInfo.nodes;

//aResult = {result: 0, onAfterReturn: []};

for (i = 0, n = oNodes.length; i < n; i += 1) {
	//AllNodes += oNodes[i].id + ";";

	aResult.push({
		setIpRules: {
			AllNodes: oNodes[i].id,
			ipArray: "${this.ipArray}"
		}
	});
}

return {
	result: 0,
	onAfterReturn: aResult
}
