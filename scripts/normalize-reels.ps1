param(
  [string]$Source = "public/media/reels-raw",
  [string]$Destination = "public/media/reels"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $Source)) {
  throw "Source folder does not exist: $Source"
}

if (-not (Test-Path -LiteralPath $Destination)) {
  throw "Destination folder does not exist: $Destination"
}

$videos = Get-ChildItem -LiteralPath $Source -Filter "*.mp4" | Sort-Object LastWriteTime -Descending | Select-Object -First 30

$index = 1
foreach ($video in $videos) {
  $name = "reel-{0:D2}.mp4" -f $index
  Copy-Item -LiteralPath $video.FullName -Destination (Join-Path $Destination $name) -Force
  $index++
}

"Copied $($videos.Count) videos into $Destination as reel-01.mp4 onward."
