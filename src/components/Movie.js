import { useState } from "react";
import styles from './Movie.module.css';

function Movie(props){
  const [pop, setPop] = useState(false);
  const [toggle, setToggle] = useState(false);
  const onClick = (event)=>{
    event.preventDefault();
    setPop(!pop);
    setToggle(!toggle);
  }
  return(
    <div className= {styles.container}>
      <div className={toggle? styles.transparent :styles.box}>
        <button className={styles.card} onClick={onClick}>
          <img src={props.coverImg} alt={props.title}/>
        </button>
        <div className={styles.title}><h2>{props.title}({props.year})</h2></div>
      </div>
      {pop? 
        <div className={styles.detail}>
          <button onClick={onClick}>X</button>
          <h2>
            {props.title}({props.year})
          </h2>
          <span>장르</span> {props.genres.map((g, index)=> 
            <p key={index}>{g}</p>
          )}
          <span>평점</span>
          <p>{props.rating}</p>
          <span>상영시간</span>
          <p>{props.runtime}분</p>
          <span>줄거리</span>
          <p>{props.summary}</p>
          <a href={props.url}>상세페이지</a>
        </div>: null} 
    </div>
  )
}
export default Movie;