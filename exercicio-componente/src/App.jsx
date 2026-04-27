import ButtonCard from "./components/ButtonCard";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <img src="./public/img-card.jpg" alt=""
      style={{
        width : "200px",
        border: "10px solid black",
        boxShadow : "0px 10px 10px black"
      }}
      
       />
      <div
      style={{
        display : "flex",
        flexDirection : "column",
        gap : "30px"
    
      }}
      >
        <Title />
        <Subtitle />
        <ButtonCard />
      </div>
    </div>
  );
}

export default App;
