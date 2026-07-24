$css = Get-Content style.css -Raw
$css = $css -replace '(?i)#0a192f', '#5e0000'
$css = $css -replace '(?i)#00b4db', '#ffca28'
$css = $css -replace '(?i)#00838f', '#d50000'
$css = $css -replace '(?i)#0d47a1', '#b71c1c'
$css = $css -replace '(?i)#80deea', '#ffe082'
$css = $css -replace '(?i)#e0f7fa', '#fff8e1'
$css = $css -replace '(?i)#005662', '#8e0000'
$css = $css -replace '10,\s*25,\s*47', '94, 0, 0'
$css = $css -replace '0,\s*180,\s*219', '255, 202, 40'
$css = $css -replace '13,\s*71,\s*161', '183, 28, 28'
$css = $css -replace '0,\s*131,\s*143', '213, 0, 0'
Set-Content style.css -Value $css

$html = Get-Content index.html -Raw
$html = $html -replace '(?i)#00B4DB', '#ffca28'
$html = $html -replace '(?i)#80DEEA', '#ffe082'
$html = $html -replace '0,\s*180,\s*219', '255, 202, 40'
$html = $html -replace '(?i)#0D47A1', '#b71c1c'
$html = $html -replace '(?i)#E0F7FA', '#fff8e1'
$html = $html -replace '(?i)#00838F', '#d50000'
Set-Content index.html -Value $html

Write-Output "Đã cập nhật màu sắc thành công!"
