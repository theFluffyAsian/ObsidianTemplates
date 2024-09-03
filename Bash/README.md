# Bash configuration for WSL

## Install Dependencies

### [Install WSL](https://learn.microsoft.com/en-us/windows/wsl/install)
`wsl --install`

### [Install OhMyPosh into distro](https://ohmyposh.dev/docs/installation/linux)

`curl -s https://ohmyposh.dev/install.sh | bash -s`

## Configure

### Add OhMyPosh to PATH
> [!IMPORTANT]  
> When installing OhMyPosh there was a warning that it was not added to the PATH. Run that line of code if it hasn't been added by default.

### Edit ~/.profile 

Add the following to the bottom of the file: 
```
# Start OhMyPosh
eval "$(oh-my-posh init bash --config '/mnt/c/Users/<USER>/Projects/Templates/Bash/atomic-modified.omp.json')"
```