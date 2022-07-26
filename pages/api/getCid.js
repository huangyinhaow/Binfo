// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let id = String(req.query.id);
  let cid = await getCid(id);
  await res.send({ cid: cid.data.cid });
}

async function getCid(id) {
  let aob = String(id.substr(0, 2) + "id");
  aob = aob.toLowerCase();
  var url = String(
    "https://api.bilibili.com/x/web-interface/view?" + aob + "=" + id
  );
  console.log(url);
  let cid = await (await fetch(url)).json();
  // console.log(cid); // it's a json
  // console.log(typeof cid); // object
  return cid;
}
