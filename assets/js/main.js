function changeLocationHandler(which) {
  switch (which) {
    case "basket":
      window.location.href = "basket/";
      break;
    case "dashboard":
      window.location.href = "dashboard/";
      break;
    case "nft":
      window.location.href = "NFT/";
      break;
    default:
      break;
  }
}
