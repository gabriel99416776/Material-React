import { useState } from "react";
import ImgProfile from "../../assets/foto-profile.jpg";
import Button from "../Button";
import Title from "../Title";
import style from "./styles.module.css";

// Se mostrar alguma informação, utilizar dentro da function Profile, para que seja possível acessar o evento de clique do botão Follow
// function handleClick(ev){
//   console.log(ev)
//   alert('Followed!')
// }
function Profile() {
  // [VALOR, FUNÇÃO MODIFICADORA] = useState(VALOR INICIAL)
  const [followText, setFollowText] = useState("Follow");

  function handleClick() {
    alert("Agora voce esta seguindo!");
    setFollowText("Following");
  }
  return (
    <div className={style.profile}>
      <img
        src={ImgProfile}
        alt="Foto de perfil"
        style={{
          width: "150px",
          borderRadius: "50%",
        }}
      />
      <Title>
        <h2>John Doe</h2>
        <button className={style.followbutton} onClick={handleClick}>
          {followText}
        </button>
      </Title>
      <hr className={style.line} />
      <p>Full-stack JavaScript developer at Acme Inc.</p>
      <hr className={style.line} />
      <p>+5511987654321</p>
      <hr className={style.line} />
      <p>john.doe@gmail.com</p>
      <hr className={style.line} />
      <Button text="GitHub" />
      <Button text="LinkedIn" />
      <Button text="Twitter" />
    </div>
  );
}

export default Profile;
