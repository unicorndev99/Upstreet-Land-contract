const UpstreetLand = artifacts.require("UpstreetLand");

const NetworkTypes = {
  "mainnet": "mainnet",
  "polygon": "polygon",
  "goerli": "goerli",
}

module.exports = async function (deployer) {
  const networkType = NetworkTypes[process.argv[4]];

  if (!networkType)
    return console.error(process.argv[4] + " was not found in the networkType list");

  console.log("Deploying on the " + networkType + " networkType");
//////////////////////////// Ordinal ////////////////////////////
  await deployer.deploy(UpstreetLand);
//////////////////////////////////////////////////////////////////////////

  console.log("*******************************")
  console.log("Deploying on the " + networkType + " networkType");
  console.log("*******************************")
  console.log("\"" + networkType + "\": {");
  console.log(" \"UpstreetLand\": " + "\"" + UpstreetLand.address + "\",")
  console.log("}");
  console.log("*******************************")
};
