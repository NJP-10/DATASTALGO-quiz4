import React, {useState, useEffect} from 'react'
import { Row, Container } from 'react-bootstrap'
import Projects from '../components/Projects'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { listProjects } from '../Actions/projectActions'

function HomeScreen() {
    const dispatch = useDispatch()
    const projectList = useSelector((state) => state.projectList)
    const { loading, error, projects } = projectList
    const [setProjects] = useState([])

    useEffect(() => {
        const fetchProjects = async () => {
            const { data } = await axios.get('/api/projects')
            setProjects(data)
        }
        fetchProjects()
    }, [])
  return (
    <div>
      <h1>DASHBOARD</h1>
        <Container>
        <Row>
           {projects.map((project) => (
                <Projects project={project} />
            ))}
        </Row>
        </Container>
    </div>
  )
}

export default HomeScreen
