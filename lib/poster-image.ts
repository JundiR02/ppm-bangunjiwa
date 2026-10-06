/**
 * Posters are stored inside a Firestore document (no Storage bucket on this project), which caps a
 * document at 1 MiB. Scale the image down and re-encode as JPEG until its data URL fits comfortably.
 */
const MAX_SIDE = 1400;
const MAX_LENGTH = 900_000;

export async function posterDataUrl(file: File): Promise<string> {
  if (!file.type.startsWith("image/")) throw new Error("File harus berupa gambar.");
  const bitmap = await createImageBitmap(file);
  let scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));

  for (let attempt = 0; attempt < 6; attempt++) {
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Browser tidak mendukung pengolahan gambar.");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    for (const quality of [0.85, 0.75, 0.65]) {
      const url = canvas.toDataURL("image/jpeg", quality);
      if (url.length <= MAX_LENGTH) return url;
    }
    scale *= 0.8;
  }
  throw new Error("Gambar terlalu besar. Coba gunakan gambar dengan ukuran lebih kecil.");
}
