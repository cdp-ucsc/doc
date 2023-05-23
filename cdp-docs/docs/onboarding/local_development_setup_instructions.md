---
sidebar_position: 1
---

# Local Development Setup Instructions
How to set up a developer's local workstation so it is aligned with project standards and requirements. Managing Python versions and utilizing virtual environments is key to a developer's local environment.

### 1. Install Visual Studio Code (VSCode)
Visual Studio Code (VSCode) is the integrated development environment (IDE) of choice for our developers. Download VSCode [here](https://code.visualstudio.com/) for your specific operating system (OS).

For Windows developers, set the default shell for VSCode's integrate terminal as `Git Bash`. To do this go to Settings and in the search bar enter `Terminal>Integrated>Default Profile` and for Windows select `Git Bash` from the dropdown box.

![Windows VSCode Default Shell](/img/onboarding/windows_vscode_terminal_default.png)

Now as a Windows developer you have access to `bash`.

For MacOS developers, the default shell will be the default shell used in your terminal. For many, this is now `zsh`. Note, the core functionality of `zsh` and `bash` do not differ greatly. But some instructions in this document may need to be modified depending on the shell you are using. 


### 2. Install `pyenv`
`pyenv` is a tool used to manage multiple versions of Python on your computer. It allows you to download multiple versions and switch between desired versions all from the CLI. 

#### MacOS Instructions
Before `pyenv` can be installed, the following must be installed:
XCode command line tools, Homebrew, `openssl`, `readline`, `sqlite3`, `xz` and `zlib`.

<details>
<summary> Installation instructions: XCode </summary>

To check if XCode is installed already, in the terminal command line enter the following to print the location of the package.
```shell
$ xcode-select -p
```
If a directory is printed, then XCode is installed. For example,
```shell
/Library/Developer/CommandLineTools
```
If an error is printed, then XCode is not installed. For example,
```shell
xcode-select: error: unable to get active developer directory...
```
To install XCode enter the following in the command line.
```shell
$ xcode-select --install
```
</details>

<details>
<summary> Installation instructions: Homebrew </summary>

To check if Homebrew is installed already, in the terminal command line enter the following to print the version of the package.
```shell
$ brew --version
```
If a version is printed, then Homebrew is installed. For example,
```shell
Homebrew 2.2.2
```
If an error is printed, then Homebrew is not installed. For example,
```shell
brew: command not found
```
To install Hombrew enter the following in the command line.
```shell
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

</details>

<details>
<summary> Installation instructions: openssl, readline, sqlite3, xz, zlib </summary>

To install `openssl`, `readline`, `sqlite3`, `xz` and `zlib` libraries enter the following in the command line.
```shell
$ brew install openssl readline sqlite3 xz zlib
```
</details>

Using Homebrew install `pyenv` by entering the following in the terminal command line.
```shell
$ brew update
$ brew install pyenv
```

After `pyenv` has successfully installed, add `pyenv` to your `$PATH` by entering the following in the command line.
```shell
$ echo 'eval "$(pyenv init --path)"' >> ~/.zshrc
```

Close/exit the current terminal for the command to be applied.


#### Windows Instructions
Create a directory in your user folder called `.pyenv` by entering the following in PowerShell's command line.
```powershell
> mkdir $HOME/.pyenv
```
Download the `pyenv-win` ZIP-archive [here](https://github.com/pyenv-win/pyenv-win/archive/master.zip). Download the ZIP-archive somewhere you can access it. Once the ZIP-archive is downloaded, extract and move all the files to `.pyenv` directory you just created.

Set the environment variables `PYENV` and `PYENV_HOME` that point to the installation folder by entering the following in the command line.
```powershell
> [System.Environment]::SetEnvironmentVariable('PYENV',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")
> [System.Environment]::SetEnvironmentVariable('PYENV_HOME',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")
```

Add the bin folder to the `PATH` variable so `pyenv` can be found when using the command line by entering the following in the command line.
```powershell
> [System.Environment]::SetEnvironmentVariable('path', $env:USERPROFILE + "\.pyenv\pyenv-win\bin;" + $env:USERPROFILE + "\.pyenv\pyenv-win\shims;" + [System.Environment]::GetEnvironmentVariable('path', "User"),"User")
```

Close the current window of PowerShell for the commands to be applied.

Open a new window of PowerShell and enter the following in the command line to confirm `pyenv` has been installed successfully.
```powershell
> pyenv
```

### 3. Install Python using `pyenv`
`pyenv` is our Python version manager. Therefore, when installing any version of Python we will be using `pyenv`. 

To avoid confusion between different OS systems Windows developers should use VSCode's integrated terminal. It is also recommended that MacOS developers complete the next steps in VSCode's integrated terminal as well so they can become familiar with VSCode's terminal.

To see all available versions of Python to install enter the following in the terminal command line.
```shell
$ pyenv install -l
```

To install a version of Python enter the following in the terminal command line.
```shell
$ pyenv install [PYTHON_VERSION]
```

We are currently using Python version 3.9.13. Install this version of Python by entering the following in the command line.
```shell
$ pyenv install 3.9.13
```

To view which versions of Python have been installed enter the following in the command line.
```shell
$ pyenv versions
```
The version with the (`*`) in front of it is the currently active version. For example,
```shell
  3.10.0rc1
* 3.9.6 (set by /home/Programming/ml_acc_timing_model_extraction/.python-version)
  pypy3.7-7.3.5
```

To view just the active version enter the following in the command line.
```shell
$ pyenv version
```
It is important to set a global version of Python when having multiple versions of Python installed. The global version of Python is like the default version of Python that will be used unless otherwise specified. To set the global version of python enter the following in the command line.
```shell
$ pyenv global [PYTHON_VERSION]
```

The global version of Python does not necessarily need to be version 3.9.13. A specific version of Python will be necessary for a dbt project when we get there. For now, you may set the global version of Python as 3.9.13.

The other key benefit of `pyenv` is the ability to set a local version of Python for specific directories. This will be important when setting up virtual environments. The following is the command to specify a local version of Python in a directory.
```shell
$ cd [DESIRED_DIRECTORY]
$ pyenv local [PYTHON_VERSION]
```
### 4. Install `venv` using Python

### 5. Setup a `venv`

### 6. Use a `venv`