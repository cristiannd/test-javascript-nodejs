import net from "node:net";

export const ping = (ip, callback) => {
  const startTime = process.hrtime();

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end();
    const info = { time: process.hrtime(startTime), ip }
    callback(null, info)
  });


  client.on("error", (err) => {
    client.end();
    callback(err)
  });

};

ping("midu.dev", (err, info) => {
  if (err) console.log(err);
  console.log(info);
});
