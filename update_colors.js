const fs = require('fs');

try {
  let css = fs.readFileSync('style.css', 'utf8');

  // Hex colors
  css = css.replace(/#0a192f/gi, '#5e0000'); // Deep Blue -> Deep Red
  css = css.replace(/#00b4db/gi, '#ffca28'); // Cyan -> Gold/Yellow
  css = css.replace(/#00838f/gi, '#d50000'); // Teal -> Bright Red
  css = css.replace(/#0d47a1/gi, '#b71c1c'); // Dark Blue -> Dark Red
  css = css.replace(/#80deea/gi, '#ffe082'); // Light Cyan -> Light Gold
  css = css.replace(/#e0f7fa/gi, '#fff8e1'); // Very Light Cyan -> Light Gold
  css = css.replace(/#005662/gi, '#8e0000'); // Dark Teal shadow -> Dark Red shadow

  // RGB/RGBA colors
  css = css.replace(/10,\s*25,\s*47/g, '94, 0, 0'); // bg-tet
  css = css.replace(/0,\s*180,\s*219/g, '255, 202, 40'); // cyan glow -> gold glow
  css = css.replace(/13,\s*71,\s*161/g, '183, 28, 28'); // header gradient left/right
  css = css.replace(/0,\s*131,\s*143/g, '213, 0, 0'); // header gradient center

  fs.writeFileSync('style.css', css);

  let html = fs.readFileSync('index.html', 'utf8');
  html = html.replace(/#00B4DB/g, '#ffca28');
  html = html.replace(/#80DEEA/g, '#ffe082');
  html = html.replace(/0,\s*180,\s*219/g, '255, 202, 40');
  html = html.replace(/#0D47A1/g, '#b71c1c');
  html = html.replace(/#E0F7FA/g, '#fff8e1');
  html = html.replace(/#00838F/g, '#d50000');

  fs.writeFileSync('index.html', html);
  
  console.log("Đã cập nhật màu sắc thành công!");
} catch(err) {
  console.error("Lỗi:", err);
}
