import Link from "next/link";
const Card = props => (
  <div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src={props.image} alt="project image"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <Link href="/projects/[id]" as={props.link}><a>More Info</a></Link>
    </div>
  </div>
)

export default Card;
