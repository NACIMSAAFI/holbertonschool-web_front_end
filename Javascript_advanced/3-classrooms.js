function createClassRoom(numbersOfStudents) {
    const students = [];

    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }

    for (let i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }

    return students;
}

const classRoom = createClassRoom(10);

