param(
  [string]$Profile = "ali_alheneiti",
  [string]$Login = "",
  [string]$Browser = "",
  [string]$Output = "public/media/reels-raw"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath "public/media")) {
  throw "Run this script from the project root. Missing public/media."
}

python -m pip install --user instaloader browser-cookie3

$args = @(
  "-m", "instaloader",
  "--no-posts",
  "--reels",
  "--no-profile-pic",
  "--no-captions",
  "--no-metadata-json",
  "--dirname-pattern", $Output,
  "--filename-pattern", "{date_utc:%Y-%m-%d}_{shortcode}"
)

if ($Login -ne "") {
  $args += @("--login", $Login)
}

if ($Browser -ne "") {
  $args += @("--load-cookies", $Browser)
}

$args += $Profile

python @args

"Downloaded raw reels to $Output. Review the files manually, select the latest 30, then rename/copy them to public/media/reels/reel-01.mp4 through reel-30.mp4."
