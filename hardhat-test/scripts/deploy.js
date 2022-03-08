async function main() {
  // We get the contract to deploy
  const Token = await ethers.getContractFactory("ParthToken");
  const token = await Token.deploy(1000);

  console.log("token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });