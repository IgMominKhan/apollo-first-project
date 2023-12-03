import Student from "./student.model";

// Get students from database
async function getStudentsFromDB() {
  const result = await Student.find().populate("admissionSemester").populate(
    "academicDepartment",
  ).populate({
    path: "academicDepartment",
    populate: {
      path: "academicFaculty",
    },
  });

  return result;
}

async function getSingleStudentFromDB(id: number) {
  return Student.findOne({ id }).populate("admissionSemester").populate(
    {
      path: "academicDepartment",
      populate: {
        path: "academicFaculty",
      },
    },
  );
}

export default {
  getStudentsFromDB,
  getSingleStudentFromDB,
};
