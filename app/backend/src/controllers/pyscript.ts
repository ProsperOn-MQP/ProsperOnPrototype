import { Request, Response } from "express";
import { spawn } from "child_process";
import { existsSync } from "fs";
import { exec } from "child_process";

const pythonScriptPath = "./src/python/script.py";
const requirementsPath = "./src/python/requirements.txt";

// Function to install Python requirements
const installRequirements = () => {
  return new Promise((resolve, reject) => {
    exec(`pip install -r ${requirementsPath}`, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(`Failed to install requirements: ${stderr}`));
      } else {
        resolve(stdout);
      }
    });
  });
};

// Function to run the Python script
const runPythonScript = (args: string[]): Promise<string> => {
  return new Promise((resolve, reject) => {
    const process = spawn("python", [pythonScriptPath, ...args]);

    let output = "";
    let errorOutput = "";

    process.stdout.on("data", (data) => {
      output += data.toString();
    });

    process.stderr.on("data", (data) => {
      errorOutput += data.toString();
    });

    process.on("close", (code) => {
      if (code === 0) {
        resolve(output.trim()); // Trim the output to remove extra whitespace
      } else {
        reject(
          new Error(`Python script exited with code ${code}: ${errorOutput}`)
        );
      }
    });
  });
};

// Main controller function
const pyscriptController = async (req: Request, res: Response) => {
  try {
    // Check if requirements.txt exists before installing
    if (existsSync(requirementsPath)) {
      await installRequirements();
    }

    // Extract the message from the request body
    const userMessage = req.body.message.content;

    // Run the Python script with the user message
    const response = await runPythonScript([userMessage]);

    // Send back the response from the Python script
    res.status(200).json({ response });
  } catch (error) {
    console.error("Error running Python script:", error);
    res.status(500).json({ error: error.message });
  }
};

export default pyscriptController;
