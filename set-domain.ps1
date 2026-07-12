param([Parameter(Mandatory=$true)][string]$NewDomain)
$OldDomain = "https://accesspath-guide.pages.dev"
Get-ChildItem -Recurse -File | Where-Object { $_.Extension -in ".html", ".xml", ".txt", ".json", ".js", ".md", ".csv" } | ForEach-Object {
  $content = Get-Content $_.FullName -Raw
  $content.Replace($OldDomain, $NewDomain) | Set-Content $_.FullName -NoNewline
}
Write-Host "Domain replaced with $NewDomain. Re-run QA before deployment."
