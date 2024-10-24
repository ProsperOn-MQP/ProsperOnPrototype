import { Request, Response } from "express";
import { spawn } from "child_process";
import { existsSync } from "fs";
import { exec } from "child_process";

const pythonScriptPath = "./src/python/script.py";
const requirementsPath = "./src/python/requirements.txt";

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
        resolve(output.trim());
      } else {
        reject(
          new Error(`Python script exited with code ${code}: ${errorOutput}`)
        );
      }
    });
  });
};

const pyscriptController = async (req: Request, res: Response) => {
  try {
    // Check if requirements.txt exists before installing
    if (existsSync(requirementsPath)) {
      await installRequirements();
    }

    const userMessage = req.body.message.content;

    const response = await runPythonScript([userMessage]);

    res.status(200).json({ response });
  } catch (error) {
    console.error("Error running Python script:", error);
    res.status(500).json({ error: error.message });
  }
};

export default pyscriptController;
