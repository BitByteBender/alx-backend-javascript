import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const ROUTES_HANDLER = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default ROUTES_HANDLER;
