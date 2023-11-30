import {Router} from 'express';
import {studentRoute} from '../modules/student/student.route';
import {userRoute} from '../modules/user/user.route';
import {semesterRoute} from "../modules/academicSemester/semester.route";
import { academicFRoute } from '../modules/academicFaculty/academicF.route';

const router: Router = Router();

// const routesModule = [
//     {
//         path: "/students",
//         route: userRoute,
//     },
//     {
//         path: "/users",
//         route: userRoute
//     }
// ]
//
// routesModule.forEach(route => router.use(route.path, route.route))

router.use('/students', studentRoute);
router.use('/users', userRoute);
router.use("/semesters", semesterRoute)
router.use("/academic-faculty", academicFRoute)

export default router;
