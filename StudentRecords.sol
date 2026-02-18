// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRecords {

    struct Student {
        string id;
        string name;
        string department;
        string year;
    }

    // ✅ Array to store multiple students
    Student[] public students;

    uint public minimumFee = 0.001 ether;

    // Store a new student (payable)
    function setStudent(
        string memory _id,
        string memory _name,
        string memory _dept,
        string memory _year
    ) public payable {
        require(msg.value >= minimumFee, "Minimum 0.001 ETH required");

        students.push(Student(_id, _name, _dept, _year));
    }

    // Get student by index
    function getStudent(uint index)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        require(index < students.length, "Index out of bounds");
        Student memory s = students[index];
        return (s.id, s.name, s.department, s.year);
    }

    // Get total number of students
    function totalStudents() public view returns (uint) {
        return students.length;
    }
}
