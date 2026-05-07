import { Router } from "express";
import { projectController } from "./project.controller.js";

const router = Router();
router.post('/create-project' , projectController.createProject);
router.get('/get-projects' , projectController.getProjects);
router.put('/update/:id' , projectController.updateProject);
router.delete('/delete/:id' , projectController.deleteProject)

export const projectRouter = router