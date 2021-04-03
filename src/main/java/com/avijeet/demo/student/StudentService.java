package com.avijeet.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class StudentService {

    private final StudentDataAccessService studentDataAccessService;

    @Autowired
    public StudentService(StudentDataAccessService studentDataAccessService) {
        this.studentDataAccessService = studentDataAccessService;
    }

     List<Student> getAllStudents(){
        return studentDataAccessService.selectAllStudents();
    }

    void addStudent(Student student){
        addStudent(null,student);
    }

     void addStudent(UUID studentId,Student student) {
        UUID generatedStudentId =  Optional.ofNullable(studentId).orElse(UUID.randomUUID());
        // TODO : verify email is not taken
        studentDataAccessService.insertStudent(generatedStudentId,student);
    }

    public List<StudentCourse> getAllCoursesForStudent(UUID studentId) {
        return studentDataAccessService.getAllCoursesForStudent(studentId);
    }
}
