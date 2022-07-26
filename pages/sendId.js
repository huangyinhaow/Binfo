function sendId() {
  let id = document.getElementById("inn").value;
  let url = String("./api/getCid?id=" + id);
  let cid = fetch(url);
  cid = String(cid.cid);
  return cid;
}
