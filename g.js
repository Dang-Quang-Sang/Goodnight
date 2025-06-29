QRCode.toCanvas("https://yourname.vercel.app/goodnight.html", { width: 200 }, function (err, canvas) {
    if (err) console.error(err);
    else document.getElementById("qrcode").appendChild(canvas);
  });