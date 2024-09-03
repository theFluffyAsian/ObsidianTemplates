# Setting up powershell

## Install dependencies

### Install Terminal
This is probably shipping out of the box. If not get it from the windows store

### Install Font
Right click -> install `MesloLGMDZNerdFontMono-Regular.ttf`

### [Install Powershell Core](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.4)

```
winget install --id Microsoft.PowerShell --source winget
```


### [Install Oh My Posh](https://ohmyposh.dev/docs/installation/windows)
```
winget install JanDeDobbeleer.OhMyPosh -s winget
```

### [Install Terminal Icons](https://learn.microsoft.com/en-us/windows/terminal/tutorials/custom-prompt-setup#)

```
Install-Module -Name Terminal-Icons -Repository PSGallery
```
## Create powershell profile

- Edit the profile.ps1 in this repo, replacing the variables in `<>`
- Run `$PROFILE` in a new pwsh window to get you powershell profile path.
- Copy profile.ps1 into the `$PROFILE` location

## Edit VsCode terminal font
Edit the fontFamily setting in VsCode so it renders properly:

```
"editor.fontFamily": "MesloLGMDZ Nerd Font Mono, Consolas, 'Courier New', monospace"
```