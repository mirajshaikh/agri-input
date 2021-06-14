export function HandelDownload( name, file) {
  const link = document.createElement("a");
  link.download = `${name}.xlsx`;
  link.href = file;
  link.click();
}

export default HandelDownload;
