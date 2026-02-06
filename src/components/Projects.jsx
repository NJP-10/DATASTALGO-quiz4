import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import DetailScreen from "../Screens/DetailScreen"


function Projects() {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
          <Link to={`/project/1`}>
              <strong>Project 1</strong>
          </Link>
          <Card.Text>Description of Project 1</Card.Text>
      </Card>
    </div>
  )
}

export default Projects
