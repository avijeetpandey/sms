package com.avijeet.demo.student;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class StudentService {
    public List<Student> getAllStudents(){
        return List.of(
                new Student(UUID.randomUUID(),"James","Bond","james@gmail.com", Student.Gender.MALE),
                new Student(UUID.randomUUID(),"Anna","Belle","anna@test.com", Student.Gender.FEMALE)
        );
    }
}
