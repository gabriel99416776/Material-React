import styles from "./styles.module.css";
function Button(props) {
  return (
    <div >
      <button className={styles.button}>{props.text}</button>
    </div>
  );
}

export default Button;
