async function main() {
    // Grab the contract factory 
    const MyNFT = await ethers.getContractFactory("MyNFT");

    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy(
        "KungFu Geckos",
        "GECKOS",
        "https://clonex-assets.rtfkt.com/",
        "https://gateway.pinata.cloud/ipfs/QmNeASo5avCYi5McvS6rbZgk9zx2zyj59RsiNhrqodMUBS?preview=1"
    ); // Instance of the contract 
    console.log("Contract deployed to address:", myNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });