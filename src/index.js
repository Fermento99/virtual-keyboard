function sendKeyStroke(url, button) {
    let cname = button.className
    button.className += ' pressed'
    fetch(url)
      .then(res => {
        if (res.status == 200) button.className = cname;
        else console.log(res.status);
      })
  }

  start.addEventListener('click', () => {
    console.log("start/stop");
    sendKeyStroke("http://172.16.0.12:4567/start", start);
  })
  fs.addEventListener('click', () => {
    console.log("fullscreen");
    sendKeyStroke("http://172.16.0.12:4567/fullscreen", fs)
  })
  mute.addEventListener('click', () => {
    console.log("mute");
    sendKeyStroke("http://172.16.0.12:4567/mute", mute)
  })
  s10.addEventListener('click', () => {
    console.log("+10");
    sendKeyStroke("http://172.16.0.12:4567/plus10", s10)
  })
  p10.addEventListener('click', () => {
    console.log("-10");
    sendKeyStroke("http://172.16.0.12:4567/minus10", p10)
  })
  vu.addEventListener('click', () => {
    console.log("volume up");
    sendKeyStroke("http://172.16.0.12:4567/volumeup", vu)
  })
  vd.addEventListener('click', () => {
    console.log("volume down");
    sendKeyStroke("http://172.16.0.12:4567/volumedown", vd)
  })
  skip.addEventListener('click', () => {
    console.log("skip");
    sendKeyStroke("http://172.16.0.12:4567/skip", skip)
  }) 