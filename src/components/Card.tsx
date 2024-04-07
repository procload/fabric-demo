import React, { ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <div className={styles.card}>{children}</div>
);

export default Card;
