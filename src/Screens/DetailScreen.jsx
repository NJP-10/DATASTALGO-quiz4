import React, {useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom"
import { Card, Col } from "react-bootstrap"
import axios from 'axios'


function DetailScreen() {
    const { id } = useParams()
    const [project, setProject] = useState({})
    useEffect(() => {
        const fetchProject = async () => {
            const { data } = await axios.get(`/api/projects/${id}`)
            setProject(data)
        }
        fetchProject()
    }, [id])
  return (

    <div>
        <Link to="/">Go Back</Link>
        <Card className="my-3 p-3 rounded">
        <Col md={6} align="center">
            <strong>Project</strong>
            <Card.Text>{project.name}</Card.Text>
            <Card.Text>{project.description}</Card.Text>
            <Card.Text>Status: {project.status}</Card.Text>
            <Card.Text>Hours Consumed: {project.hoursConsumed}</Card.Text>
            <Card.Text>Start Date: {project.startDate}</Card.Text>
            <Card.Text>End Date: {project.endDate}</Card.Text>
        </Col>
        <Col md={6} align="center">
            <strong>Task</strong>
            <Card.Text>{project.task}</Card.Text>
            <Card.Text>{project.taskDescription}</Card.Text>
            <Card.Text>Status: {project.taskStatus}</Card.Text>
            <Card.Text>Hours Consumed: {project.taskHoursConsumed}</Card.Text>
            <Card.Text>User Assigned: {project.taskUserAssigned}</Card.Text>
            <Card.Text>Start Date: {project.taskStartDate}</Card.Text>
            <Card.Text>End Date: {project.taskEndDate}</Card.Text>
        </Col>
        </Card>
    </div>
  )
}

export default DetailScreen
