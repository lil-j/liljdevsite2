import Link from "next/link";
import Image from 'next/image';
const Card = props => (
  <div className="card m-2 shadow-hover" style={{width: "18rem"}}>
    <Image className="card-img-top" src={props.image} alt="project image" width={286} height={161}/>
    <div className="card-body">
      <h5 className="card-title font-weight-bold">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <Link href={props.link}><a>Read About It ›</a></Link>
    </div>
  </div>
)

export default Card;
