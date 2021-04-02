import React, { useState, useEffect } from 'react'
import { Table, Avatar } from 'antd'
import Container from '../containers'

const Student = () => {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)

  const columns = [
    {
      title: '',
      key: 'avatar',
      render: (text, student) => (
        <Avatar size="large">
          {`${student.firstName
            .charAt(0)
            .toUpperCase()} ${student.lastName.charAt(0).toUpperCase()}`}
        </Avatar>
      ),
    },
    {
      title: 'Student Id',
      dataIndex: 'studentId',
      key: 'studentId',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
  ]

  // fetch student details at render
  useEffect(() => {
    fetch('/students')
      .then((res) => res.json())
      .then((students) => {
        setStudents(students)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <Container>
      <Table
        loading={loading}
        columns={columns}
        dataSource={students}
        rowKey="studentId"
        pagination={false}
      />
    </Container>
  )
}

export default Student
