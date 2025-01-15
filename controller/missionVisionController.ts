import MissionVision from "../model/MissionVision";
import { createOne, deleteOne, getAll, updateOne } from "./FactoryHandlers";

// Get the mission & vision statement
export const getMissionVision = getAll(MissionVision);

// Create a new mission & vision statement
export const createMissionVision = createOne(MissionVision);

// Update the mission & vision statement
export const updateMissionVision = updateOne(MissionVision);

// Delete the mission & vision statement
export const deleteMissionVision = deleteOne(MissionVision);
