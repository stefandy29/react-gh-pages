import React from "react";
import Player from "react-player";
import cssmodule from "../youtube/Youtube.module.css";
const Youtube = () => (
  <div className={cssmodule.Player}>
    <h1 className={cssmodule.Player_h}>Portfolio</h1>
    <div>
      <h1 className={cssmodule.Player_h}>Corvus Linearis</h1>
      <div className={cssmodule.youtube}>
        <Player
          url="https://youtu.be/Qp8qFGwVXcY"
          height="240px"
          width="420px"
          controls="true"
        />
      </div>
      <p className={cssmodule.Player_p}>
        Project yang saya kerjakan pada saat magang. ini adalah cinematic video
        trailer. Saya disini hanya mengerjakan di bagian editing video, dan
        sound design nya.
      </p>
    </div>
    <div>
      <h1 className={cssmodule.Player_h}>Lost Tower</h1>
      <div className={cssmodule.youtube}>
        <Player
          url="https://youtu.be/cdtXVlM5d5c"
          height="240px"
          width="420px"
          controls="true"
        />
      </div>
      <p className={cssmodule.Player_p}>
        Project yang saya kerjakan untuk Game Prime 2017. ini adalah promotional
        trailer untuk game Lost Tower, dan sudah dirilis lewat playstore. Saya
        disini hanya mengerjakan di bagian editing video, dan audio, dan sound
        design, Sangat simple.
      </p>
    </div>
    <div>
      <h1 className={cssmodule.Player_h}>Pasukan Oranye</h1>
      <div className={cssmodule.youtube}>
        <Player
          url="https://youtu.be/Q7t8QIhOFY8"
          height="240px"
          width="420px"
          controls="true"
        />
      </div>
      <p className={cssmodule.Player_p}>
        Project yang saya kerjakan untuk Megaxus Mobile Competition 2016, dan
        Game Prime 2016. ini adalah promotional trailer untuk game Pasukan
        Oranye, dan sudah dirilis lewat playstore. Saya disini hanya mengerjakan
        di bagian editing video, audio, dan sound design.
      </p>
    </div>
    <div>
      <h1 className={cssmodule.Player_h}>Pumpkin</h1>
      <div className={cssmodule.youtube}>
        <Player
          url="https://youtu.be/aNbbEECMLAs"
          height="240px"
          width="420px"
          controls="true"
        />
      </div>
      <p className={cssmodule.Player_p}>
        Project yang saya kerjakan untuk tugas pada saat saya kuliah. ini adalah
        rekayasa cinematic trailer saja. Saya disini mengerjakan di bagian
        editing video, audio, dan sound design.
      </p>
    </div>
    <div>
      <h1 className={cssmodule.Player_h}>Mad Imagination</h1>
      <div className={cssmodule.youtube}>
        <Player
          url="https://youtu.be/e82_VJldz7E"
          height="240px"
          width="420px"
          controls="true"
        />
      </div>
      <p className={cssmodule.Player_p}>
        Project yang saya kerjakan untuk tugas pada saat saya kuliah. ini adalah
        animation trailer. Saya disini mengerjakan di bagian editing video,
        audio, sound design, dan animation.
      </p>
    </div>
  </div>
);

export default Youtube;
