# Build VEXcode GO PWA icons from vexfavicon.ico (not VEX Classroom).
$root = Split-Path $PSScriptRoot -Parent
$icoPath = Join-Path $root 'public\webapp\static\img\icons\vexfavicon.ico'
$outDir = Join-Path $root 'public\webapp\pwa'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
Add-Type -AssemblyName System.Drawing
$ico = New-Object System.Drawing.Icon $icoPath
$src = $ico.ToBitmap()
foreach ($size in @(192, 512)) {
  $bmp = New-Object System.Drawing.Bitmap $size, $size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.Clear([System.Drawing.Color]::FromArgb(0, 112, 120))
  $pad = [int]($size * 0.12)
  $dim = $size - 2 * $pad
  $g.DrawImage($src, $pad, $pad, $dim, $dim)
  $g.Dispose()
  $bmp.Save((Join-Path $outDir "icon-$size.png"), [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
}
$src.Dispose()
$ico.Dispose()
Write-Host "Wrote $outDir\icon-192.png and icon-512.png"
