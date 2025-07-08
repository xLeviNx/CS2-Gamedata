import { ChildProcessWithoutNullStreams } from "node:child_process";

export function readProcess(ps: ChildProcessWithoutNullStreams) {
  return new Promise<string>((resolve, reject) => {
    let data = "";
    ps.stdout.on("data", (chunk) => (data += chunk));
    ps.stderr.on("data", (chunk) => (data += chunk));
    ps.on("close", (code) => {
      if (code === 0) {
        resolve(data);
      } else {
        reject(data);
      }
    });
  });
}
