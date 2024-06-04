import { Log } from "./loghelpers";

export function convertToCSV(data) {
  const array = [Object.keys(data[0])].concat(data);
  return array
    .map((row) => {
      return Object.values(row)
        .map(String)
        .map((v) => `"${v.replace(/"/g, '""')}"`)
        .join(",");
    })
    .join("\n");
}

export function downloadCSV(csv, filename) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  Log.success("CSV file successfully exported.");
}
