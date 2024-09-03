# Bash configuration for WSL

## Install Dependencies

### [Install WSL](https://learn.microsoft.com/en-us/windows/wsl/install)
`wsl --install`

### [Install OhMyPosh into distro](https://ohmyposh.dev/docs/installation/linux)

`curl -s https://ohmyposh.dev/install.sh | bash -s`

## Configure

### Add OhMyPosh to PATH
> [!IMPORTANT]  
> OhMyPosh was not added to the PATH by default. However, the installer gave a warning which provided a line of code to add OhMyPosh to the PATH. Ensure run that line of code. 

### Edit ~/.profile 

Add the following to the bottom of the file: 
```
# Start OhMyPosh
eval "$(oh-my-posh init bash --config '/mnt/c/Users/<USER>/Projects/Templates/Bash/atomic-modified.omp.json')"
```