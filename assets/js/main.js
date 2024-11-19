function changeLocationHandler(which) {
  switch (which) {
    case "basket":
      window.location.href = "basket/index.html";
      break;
    case "dashboard":
      window.location.href = "dashboard/index.html";
      break;
    case "nft":
      window.location.href = "NFT/index.html";
      break;
    default:
      break;
  }
}
