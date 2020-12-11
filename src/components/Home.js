import React from "react";
import styles from "../styles/main.module.css";
import Top from "./Top";
import TodoList from "./Todo";
import News from "./News";

const Home = ({ news, weather }) => {
  return (
    <div className={styles.grid}>
      <Top weather={weather} />
      <div className={styles.largeBox}></div>
      <TodoList />
      <News news={news} className={styles.lastBox} />
    </div>
  );
};

export default Home;
