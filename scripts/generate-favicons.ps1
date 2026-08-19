# Generate landing favicon set from the Derhami Lab "L" monogram (dark gradient + white L + indigo dot)
Add-Type -AssemblyName System.Drawing

$out = Join-Path (Split-Path $PSScriptRoot -Parent) "public"
New-Item -ItemType Directory -Force -Path $out | Out-Null

$bgTop = [System.Drawing.Color]::FromArgb(39, 39, 42)     # #27272a
$bgBottom = [System.Drawing.Color]::FromArgb(24, 24, 27)  # #18181b
$ink  = [System.Drawing.Color]::FromArgb(255, 255, 255)   # white
$dot  = [System.Drawing.Color]::FromArgb(77, 99, 213)     # #4d63d5

function New-MonoIcon([int]$size, [string]$path) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.Clear([System.Drawing.Color]::Transparent)

    $bgRect = New-Object System.Drawing.Rectangle(0, 0, $size, $size)
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($bgRect, $bgTop, $bgBottom, [System.Drawing.Drawing2D.LinearGradientMode]::ForwardDiagonal)
    $g.FillRectangle($brush, $bgRect)
    $brush.Dispose()

    # Rounded-rect clip same as rx=118/512 = 23%
    $r = $size * 0.23
    $pathgd = New-Object System.Drawing.Drawing2D.GraphicsPath
    $d = 2 * $r
    $rect = New-Object System.Drawing.RectangleF(0, 0, $size, $size)
    $pathgd.AddArc($rect.X, $rect.Y, $d, $d, 180, 90)
    $pathgd.AddArc($rect.Right - $d, $rect.Y, $d, $d, 270, 90)
    $pathgd.AddArc($rect.Right - $d, $rect.Bottom - $d, $d, $d, 0, 90)
    $pathgd.AddArc($rect.X, $rect.Bottom - $d, $d, $d, 90, 90)
    $pathgd.CloseFigure()
    $g.SetClip($pathgd)

    # L monogram: x1/y1 166..344 of 512 -> f = size/512
    $scale = $size / 512.0
    $pen = New-Object System.Drawing.Pen($ink, (52.0 * $scale))
    $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
    $g.DrawLine($pen, 166 * $scale, 166 * $scale, 166 * $scale, 346 * $scale)
    $g.DrawLine($pen, 166 * $scale, 346 * $scale, 344 * $scale, 346 * $scale)
    $pen.Dispose()

    # dot r=22 of 512
    $dotR = 22 * $scale
    $g.FillEllipse((New-Object System.Drawing.SolidBrush($dot)), 392 * $scale - $dotR, 392 * $scale - $dotR, $dotR * 2, $dotR * 2)

    $g.ResetClip()
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose(); $bmp.Dispose()
}

New-MonoIcon 512 (Join-Path $out "favicon-512.png")
New-MonoIcon 192 (Join-Path $out "favicon-192.png")
New-MonoIcon 180 (Join-Path $out "apple-touch-icon.png")
New-MonoIcon 32  (Join-Path $out "favicon-32x32.png")
New-MonoIcon 16  (Join-Path $out "favicon-16x16.png")

Write-Output "Landing favicon set generated:"
Get-ChildItem $out -Include "favicon-*.png", "apple-touch-icon.png" | ForEach-Object { "$($_.Name)  $($_.Length) bytes" }