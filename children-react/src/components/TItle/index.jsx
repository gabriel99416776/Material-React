import styles from "./styles.module.css";

function Title(props) {
  return <div className={styles.wrapper}>{props.children}</div>;
}

export default Title;
