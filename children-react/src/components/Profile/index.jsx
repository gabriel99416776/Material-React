import ImgProfile from '../../assets/foto-profile.jpg'
import Button from '../Button'
import Title from '../TItle'
import  style from './styles.module.css'

function Profile() {
  return (
    <div className={style.profile}>
      <img src={ImgProfile} alt="Foto de perfil"
      style={{
        width: "150px",
        borderRadius: "50%",
      }}
      
       />
      <Title>
        <h2>John Doe</h2>
        <button>Follow</button>
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
  )
}

export default Profile