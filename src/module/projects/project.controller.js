import { projectService } from "./project.service.js"

const createProject = async(req,res) => {
    try {
        const result = await projectService.createProject(req.body);
        res.status(200).json({
            message: "Project created successfully",
            success: true,
            data: result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message
        })
    }
}

const getProjects = async(req,res) => {
    try {
        const result = await projectService.getProjects();
        res.status(200).json({
            message: "Projects fetched successfully",
            success: true,
            data: result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message
        })
    }
}

const updateProject = async(req,res) => {
    try {
        const id = req.params.id;
       const result = await projectService.updateProject(id,req.body);
       res.status(200).json({
        message:"Project updated successfully",
        success:true,
        data:result
       })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message
        })
    }
}

const deleteProject = async(req,res) => {
    try {
        const result = await projectService.deleteProject(req.params.id);

        res.status(200).json({
            message: "Data is deleted",
            success: true,
            data:result
        })
    } catch (error) {
        res.status(500).json({
            message: "Data is not deleted",
            success: false,
            error: error.message
        })
    }
}

export const projectController = {
    createProject,
    getProjects,
    updateProject,
    deleteProject
}