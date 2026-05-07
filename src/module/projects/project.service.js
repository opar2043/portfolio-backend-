import prisma from "../../lib/prisma.js";

const createProject = async (data) => {
  try {
    const result = await prisma.project.create({
      data,
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getProjects = async () => {
  try {
    const result = await prisma.project.findMany();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateProject = async (id, data) => {
  try {
    const result = await prisma.project.update({
      where: {
        id,
      },
      data,
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

const deleteProject = async (id) => {
  try {
    const result = await prisma.project.delete({
      where: {
        id,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const projectService = {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
};
