"use strict";(self.webpackChunkcdp_docs=self.webpackChunkcdp_docs||[]).push([[9255],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=l,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(v,i(i({ref:n},c),{},{components:t})):a.createElement(v,i({ref:n},c))}));function v(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),l=t(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>b});var a=t(7462),l=t(7294),r=t(6010),i=t(2466),o=t(6550),s=t(1980),p=t(7392),c=t(12);function u(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}function d(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,p.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=d(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[s,p]=v({queryString:t,groupId:a}),[u,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Nk)(t);return[a,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),k=(()=>{const e=s??u;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),h(e)}),[p,h,r]),tabValues:r}}var k=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=p[t].value;a!==o&&(u(n),s(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},p.map((e=>{let{value:n,label:t,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=h(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},l.createElement(g,(0,a.Z)({},e,n)),l.createElement(y,(0,a.Z)({},e,n)))}function b(e){const n=(0,k.Z)();return l.createElement(N,(0,a.Z)({key:String(n)},e))}},3559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=t(7462),l=(t(7294),t(3905)),r=t(4866),i=t(5162);const o={sidebar_position:2,tags:["Draft","Onboarding"]},s="Workstation Setup",p={unversionedId:"program_overview/practitioner/onboarding/workstation_setup",id:"program_overview/practitioner/onboarding/workstation_setup",title:"Workstation Setup",description:"This page is a work in progress",source:"@site/docs/program_overview/practitioner/onboarding/workstation_setup.md",sourceDirName:"program_overview/practitioner/onboarding",slug:"/program_overview/practitioner/onboarding/workstation_setup",permalink:"/doc/docs/program_overview/practitioner/onboarding/workstation_setup",draft:!1,editUrl:"https://github.com/cdp-ucsc/doc/blob/main/cdp-docs/docs/program_overview/practitioner/onboarding/workstation_setup.md",tags:[{label:"Draft",permalink:"/doc/docs/tags/draft"},{label:"Onboarding",permalink:"/doc/docs/tags/onboarding"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Draft","Onboarding"]},sidebar:"documentationSidebar",previous:{title:"Account Request Form",permalink:"/doc/docs/program_overview/practitioner/onboarding/account_request_form"},next:{title:"GitHub Setup",permalink:"/doc/docs/program_overview/practitioner/onboarding/github_setup_instructions"}},c={},u=[{value:"1. Install Visual Studio Code (VSCode)",id:"1-install-visual-studio-code-vscode",level:3},{value:"2. Install <code>pyenv</code>",id:"2-install-pyenv",level:3},{value:"Windows Instructions:",id:"windows-instructions",level:4},{value:"MacOS Instructions:",id:"macos-instructions",level:4},{value:"3. Install Python using <code>pyenv</code>",id:"3-install-python-using-pyenv",level:3},{value:"5. Make a virtual environment using <code>venv</code>",id:"5-make-a-virtual-environment-using-venv",level:3},{value:"6. Activate/deactivate virtual environment with alias",id:"6-activatedeactivate-virtual-environment-with-alias",level:3},{value:"Windows Instructions:",id:"windows-instructions-1",level:4},{value:"MacOS Instructions:",id:"macos-instructions-1",level:4},{value:"7. Set up virtual environment from <code>requirements.txt</code>",id:"7-set-up-virtual-environment-from-requirementstxt",level:3}],d={toc:u},m="wrapper";function v(e){let{components:n,...o}=e;return(0,l.kt)(m,(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"workstation-setup"},"Workstation Setup"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This page is a work in progress")),(0,l.kt)("p",null,"How to set up a developer's local workstation so it is aligned with project standards and requirements. Managing Python versions and utilizing virtual environments is key to a developer's local environment."),(0,l.kt)("h3",{id:"1-install-visual-studio-code-vscode"},"1. Install Visual Studio Code (VSCode)"),(0,l.kt)("p",null,"Visual Studio Code (VSCode) is the integrated development environment (IDE) of choice for our developers. Download VSCode ",(0,l.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"here")," for your specific operating system (OS)."),(0,l.kt)("p",null,"For Windows developers, set the default shell for VSCode's integrated terminal as ",(0,l.kt)("inlineCode",{parentName:"p"},"Git Bash"),". To do this go to Settings and in the search bar enter ",(0,l.kt)("inlineCode",{parentName:"p"},"Terminal>Integrated>Default Profile")," and for Windows select ",(0,l.kt)("inlineCode",{parentName:"p"},"Git Bash")," from the dropdown box.\n",(0,l.kt)("img",{alt:"Windows VSCode Default Shell",src:t(3678).Z,width:"777",height:"439"})),(0,l.kt)("p",null,"Now as a Windows developer you have access to ",(0,l.kt)("inlineCode",{parentName:"p"},"bash"),"."),(0,l.kt)("h3",{id:"2-install-pyenv"},"2. Install ",(0,l.kt)("inlineCode",{parentName:"h3"},"pyenv")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pyenv")," is a tool used to manage multiple versions of Python on your computer. It allows you to download multiple versions and switch between desired versions from the CLI. "),(0,l.kt)("p",null,"Learn more about ",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},"here"),". "),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,l.kt)("h4",{id:"windows-instructions"},"Windows Instructions:"),(0,l.kt)("p",null,"Create a directory in your user folder called ",(0,l.kt)("inlineCode",{parentName:"p"},".pyenv")," by entering the following in PowerShell's command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"> mkdir $HOME/.pyenv\n")),(0,l.kt)("p",null,"Download the ",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv-win")," ZIP-archive ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pyenv-win/pyenv-win/archive/master.zip"},"here"),". Download the ZIP-archive somewhere you can access it. Once the ZIP-archive is downloaded, extract and move all the files to the ",(0,l.kt)("inlineCode",{parentName:"p"},".pyenv")," directory you just created."),(0,l.kt)("p",null,"Set the environment variables ",(0,l.kt)("inlineCode",{parentName:"p"},"PYENV")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"PYENV_HOME")," that point to the installation folder by entering the following in the command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'> [System.Environment]::SetEnvironmentVariable(\'PYENV\',$env:USERPROFILE + "\\.pyenv\\pyenv-win\\","User")\n> [System.Environment]::SetEnvironmentVariable(\'PYENV_HOME\',$env:USERPROFILE + "\\.pyenv\\pyenv-win\\","User")\n')),(0,l.kt)("p",null,"Add the bin folder to the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," variable so ",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv")," can be found when using the command line by entering the following in the command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'> [System.Environment]::SetEnvironmentVariable(\'path\', $env:USERPROFILE + "\\.pyenv\\pyenv-win\\bin;" + $env:USERPROFILE + "\\.pyenv\\pyenv-win\\shims;" + [System.Environment]::GetEnvironmentVariable(\'path\', "User"),"User")\n')),(0,l.kt)("p",null,"Close the current window of PowerShell for the commands to be applied."),(0,l.kt)("p",null,"Open a new window of PowerShell and enter the following in the command line to confirm ",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv")," has been installed successfully."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"> pyenv\n"))),(0,l.kt)(i.Z,{value:"macos",label:"Mac OS",mdxType:"TabItem"},(0,l.kt)("h4",{id:"macos-instructions"},"MacOS Instructions:"),(0,l.kt)("p",null,"For MacOS developers, the default shell will be the default shell used in your terminal. For many, this is now ",(0,l.kt)("inlineCode",{parentName:"p"},"zsh")," rather than ",(0,l.kt)("inlineCode",{parentName:"p"},"bash"),". The core functionality of ",(0,l.kt)("inlineCode",{parentName:"p"},"zsh")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"bash")," do not differ greatly but some instructions in this document may need to be modified depending on the shell you are using. "),(0,l.kt)("p",null,"Before ",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv")," can be installed, the following must be installed:\nXCode command line tools, Homebrew, ",(0,l.kt)("inlineCode",{parentName:"p"},"openssl"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"readline"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"sqlite3"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"xz")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"zlib"),"."),(0,l.kt)("details",null,(0,l.kt)("summary",null," Installation instructions: XCode "),(0,l.kt)("p",null,"To check if XCode is installed already, in the terminal command line enter the following to print the location of the package."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ xcode-select -p\n")),(0,l.kt)("p",null,"If a directory is printed, then XCode is installed. For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"/Library/Developer/CommandLineTools\n")),(0,l.kt)("p",null,"If an error is printed, then XCode is not installed. For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"xcode-select: error: unable to get active developer directory...\n")),(0,l.kt)("p",null,"To install XCode enter the following in the command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ xcode-select --install\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Installation instructions: Homebrew "),(0,l.kt)("p",null,"To check if Homebrew is installed already, in the terminal command line enter the following to print the version of the package."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew --version\n")),(0,l.kt)("p",null,"If a version is printed, then Homebrew is installed. For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Homebrew 2.2.2\n")),(0,l.kt)("p",null,"If an error is printed, then Homebrew is not installed. For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew: command not found\n")),(0,l.kt)("p",null,"To install Hombrew enter the following in the command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Installation instructions: openssl, readline, sqlite3, xz, zlib "),(0,l.kt)("p",null,"To install ",(0,l.kt)("inlineCode",{parentName:"p"},"openssl"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"readline"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"sqlite3"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"xz")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"zlib")," libraries enter the following in the command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew install openssl readline sqlite3 xz zlib\n"))),(0,l.kt)("p",null,"Using Homebrew install ",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv")," by entering the following in the terminal command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew update\n$ brew install pyenv\n")),(0,l.kt)("p",null,"After ",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv")," has been successfully installed, add ",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv")," to your ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH")," by entering the following in the command line. For ",(0,l.kt)("inlineCode",{parentName:"p"},"bash")," replace ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc")," with ",(0,l.kt)("inlineCode",{parentName:"p"},".bashrc"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ echo 'eval \"$(pyenv init --path)\"' >> ~/.zshrc\n")),(0,l.kt)("p",null,"Close/exit the current terminal for the command to be applied."),(0,l.kt)("p",null,"Open a new terminal and enter the following in the command line to confirm pyenv has been installed successfully."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ pyenv\n")))),(0,l.kt)("h3",{id:"3-install-python-using-pyenv"},"3. Install Python using ",(0,l.kt)("inlineCode",{parentName:"h3"},"pyenv")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pyenv")," is our Python version manager. Therefore, when installing any version of Python we will be using ",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv"),". "),(0,l.kt)("p",null,"To avoid confusion between different OS systems Windows developers should use VSCode's integrated terminal. It is also recommended that MacOS developers complete the next steps in VSCode's integrated terminal as well so they can become familiar with VSCode's terminal."),(0,l.kt)("p",null,"To see all available versions of Python for installation enter the following in the terminal command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ pyenv install -l\n")),(0,l.kt)("p",null,"To install a version of Python enter the following in the terminal command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ pyenv install [PYTHON_VERSION]\n")),(0,l.kt)("p",null,"We are currently using Python version 3.9.13. Install this version of Python by entering the following in the command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ pyenv install 3.9.13\n")),(0,l.kt)("p",null,"To view which versions of Python have been installed enter the following in the command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ pyenv versions\n")),(0,l.kt)("p",null,"The version with the (",(0,l.kt)("inlineCode",{parentName:"p"},"*"),") in front is the current active version. For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"  3.10.0rc1\n* 3.9.6\n  pypy3.7-7.3.5\n")),(0,l.kt)("p",null,"To view only the current active version enter the following in the command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ pyenv version\n")),(0,l.kt)("p",null,"It is important to set a global version of Python when having multiple versions of Python installed. The global version of Python is the default version of Python that will be used unless otherwise specified. To set the global version of Python enter the following in the command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ pyenv global [PYTHON_VERSION]\n")),(0,l.kt)("p",null,"The global version of Python does not necessarily need to be version 3.9.13. (A specific version of Python will be necessary for different projects and can be different than an operating system's global version.) For now, you may set the global version of Python as 3.9.13."),(0,l.kt)("p",null,"The other key benefit of ",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv")," is the ability to set a local version of Python for specific directories. This will be important when setting up virtual environments. The following is the command to specify a local version of Python in a directory."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd [DESIRED_DIRECTORY]\n$ pyenv local [PYTHON_VERSION]\n")),(0,l.kt)("h3",{id:"5-make-a-virtual-environment-using-venv"},"5. Make a virtual environment using ",(0,l.kt)("inlineCode",{parentName:"h3"},"venv")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"venv")," is already included in Python's standard library so there is no additional action needed to install ",(0,l.kt)("inlineCode",{parentName:"p"},"venv"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"venv")," is a package that allows you to create and use virtual environments. Virtual environments create isolated environments to manage different package versions and allow developers to switch between various ones. With the addition of ",(0,l.kt)("inlineCode",{parentName:"p"},"pyenv")," developers can also set different Python versions for each virtual environment. "),(0,l.kt)("p",null,"Learn more about ",(0,l.kt)("inlineCode",{parentName:"p"},"venv")," ",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/3.9/library/venv.html#module-venv"},"here"),"."),(0,l.kt)("p",null,"Each virtual environment is stored and represented as a directory. Since it is possible and likely that developers will have multiple virtual environments we use the practice of storing all virtual environments in a central directory. "),(0,l.kt)("p",null,"At the same directory level as ",(0,l.kt)("inlineCode",{parentName:"p"},".pyenv")," create a virtual environment central directory called ",(0,l.kt)("inlineCode",{parentName:"p"},".venv"),". To do this enter the following in VSCode's integrated terminal command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd [DIRECTORY_LEVEL_OF_.PYENV]\n$ mkdir .venv\n")),(0,l.kt)("p",null,"All virtual environments should be created inside the ",(0,l.kt)("inlineCode",{parentName:"p"},".venv")," directory. To create a virtual environment enter the following in the command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd .venv/\n$ python -m venv [NAME_OF_VENV]\n")),(0,l.kt)("p",null,"The above action will have created a directory inside ",(0,l.kt)("inlineCode",{parentName:"p"},".venv")," with the name that was entered. For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd .venv/\n$ python -m venv my_first_venv\n$ ls -a\n./ ../ my_first_venv/\n")),(0,l.kt)("p",null,"Now that the virtual environment has been created you need to set desired Python version for the virtual environment. (This step must been done before installing any Python packages for the virtual environment.) To set the Python version for the virtual environment you must be inside the virtual environment first. Enter the following in the command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd [NAME_OF_VENV]/\n$ pyenv local [PYTHON_VERSION]\n")),(0,l.kt)("p",null,"For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd my_first_venv/\n$ pyenv local 3.9.13\n")),(0,l.kt)("p",null,"Note, you cannot change the Python version of a virtual environment after you have set it. To use a different version of Python you must create a new virtual environment."),(0,l.kt)("h3",{id:"6-activatedeactivate-virtual-environment-with-alias"},"6. Activate/deactivate virtual environment with alias"),(0,l.kt)("p",null,"From the previous steps we have created a virtual environment. Before we can install packages to a virtual environment we must be able to ",(0,l.kt)("inlineCode",{parentName:"p"},"activate")," the virtual environment."),(0,l.kt)("p",null,"In order to activate a virtual environment, you must refer to a specific activate script that is stored in the virtual environment's directory. Activation is slightly different between MacOS and Windows."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,l.kt)("h4",{id:"windows-instructions-1"},"Windows Instructions:"),(0,l.kt)("p",null,"For Windows users, you activate the virtual environment by referring to the ",(0,l.kt)("inlineCode",{parentName:"p"},"activate")," script in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Scripts")," directory. For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd [NAME_OF_VENV]/Scripts/\n$ ls -a\n./ ../ activate activate.bat Activate.ps1 ...\n")),(0,l.kt)("p",null,"Therefore, to activate the virtual environment enter the following in the command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ . /path_to_[NAME_OF_VENV]/Scripts/activate\n"))),(0,l.kt)(i.Z,{value:"macos",label:"Mac OS",mdxType:"TabItem"},(0,l.kt)("h4",{id:"macos-instructions-1"},"MacOS Instructions:"),(0,l.kt)("p",null,"For MacOS users, you activate the virtual environment by referring to the ",(0,l.kt)("inlineCode",{parentName:"p"},"activate")," script in the ",(0,l.kt)("inlineCode",{parentName:"p"},"bin")," directory. For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd [NAME_OF_VENV]/bin/\n$ ls -a\n./ ../ activate activate.bat Activate.ps1 ...\n")),(0,l.kt)("p",null,"Therefore, to activate the virtual environment enter the following in the command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ . /path_to_[NAME_OF_VENV]/bin/activate\n")))),(0,l.kt)("p",null,"That is the end of the MacOS and Windows specific instructions."),(0,l.kt)("p",null,"Once the virtual environment has been activated, the command line will indicate that a virtual environment is active. Above the current line you will see the name of the active virtual environment in parentheses. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"([NAME_OF_VENV])\n$ \n")),(0,l.kt)("p",null,"For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ . /path/.venv/my_first_venv/bin/activate\n\n(my_first_venv)\n$ \n")),(0,l.kt)("p",null,"To deactivate the virtual environment simply enter the following in the command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"(my_first_vend)\n$ deactivate\n\n$\n")),(0,l.kt)("p",null,"Once the virtual environment has been deactivated you will no longer see its name above the command line's current line."),(0,l.kt)("p",null,"Since it is a lot of manual work to specify the entire path to the ",(0,l.kt)("inlineCode",{parentName:"p"},"activate")," script of the virtual environment every time you would like to activate it we recommend using aliases. To set the activation command for a virtual environment as an alias complete the following steps."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cd")," to your home directory."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd\n")),(0,l.kt)("p",null,"Check if you have a ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc")," file (or ",(0,l.kt)("inlineCode",{parentName:"p"},".bashrc")," if using ",(0,l.kt)("inlineCode",{parentName:"p"},"bash"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ ls -a\n./ ../ .zshrc ...\n")),(0,l.kt)("p",null,"If you do not have a ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc")," file, then create one."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ touch .zshrc\n")),(0,l.kt)("p",null,"Add the activation command as an alias to the ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc")," file. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat >> .zshrc\nalias [NAME_OF_VENV]='. /path/.venv/[NAME_OF_VENV]/bin/activate'\n\n# ENTER CTRL+D TO SAVE AND EXIT EDIT MODE\n")),(0,l.kt)("p",null,"Close/exit the current terminal for the alias to be applied."),(0,l.kt)("p",null,"Now, to activate the virtual environment enter the alias' name in the command line and the deactivate use the same method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ [NAME_OF_VENV]\n\n([NAME_OF_VENV])\n$\n\n([NAME_OF_VENV])\n$ deactivate\n\n$\n")),(0,l.kt)("p",null,"For example, if I have already added the activate command for ",(0,l.kt)("inlineCode",{parentName:"p"},"my_first_venv")," in my ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc")," file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ my_first_venv\n\n(my_first_venv)\n$\n\n(my_first_venv)\n$ deactivate\n\n$\n")),(0,l.kt)("p",null,"Note, these instructions work because Windows developers are using ",(0,l.kt)("inlineCode",{parentName:"p"},"bash")," via VSCode's integrated terminal. The instructions do not work for Windows developers using PowerShell. Windows users should use VSCode's integrated terminal as the default terminal for their command line needs."),(0,l.kt)("h3",{id:"7-set-up-virtual-environment-from-requirementstxt"},"7. Set up virtual environment from ",(0,l.kt)("inlineCode",{parentName:"h3"},"requirements.txt")),(0,l.kt)("p",null,"Virtual environments can be set up to a project's specific specifications by using the project's ",(0,l.kt)("inlineCode",{parentName:"p"},"requirement.txt"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"requirement.txt")," will specify all of the necessary packages and their exact versions that are required by the project."),(0,l.kt)("p",null,"For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dbt-core==1.4.4\ndbt-snowflake==1.4.1\n")),(0,l.kt)("p",null,"Assuming you have cloned the project repo, the ",(0,l.kt)("inlineCode",{parentName:"p"},"requirements.txt")," that specifies the exact project requirements can be found at the top level of the directory and in the ",(0,l.kt)("inlineCode",{parentName:"p"},"main")," branch. To install all of the packages from the ",(0,l.kt)("inlineCode",{parentName:"p"},"requirements.txt")," to a virtual environment complete the following instructions from the terminal command line."),(0,l.kt)("p",null,"Make a new virtual environment in the ",(0,l.kt)("inlineCode",{parentName:"p"},".venv")," directory dedicated for the specified project. The naming convention for the virtual environment should indicate the specific project. Commonly the project name can be used as the virtual environment's name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd /path/.venv/\n$ python -m venv [PROJECT_NAME]\n")),(0,l.kt)("p",null,"Set the Python version for the virtual environment."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd /path/.venv/[PROJECT_NAME]\n$ pyenv local [PYTHON_VERSION]\n")),(0,l.kt)("p",null,"Create an alias for the virtual environment."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd\n$ cat >> .zshrc\n$ [PROJECT_NAME] = '. /path/.venv/[PROJECT_NAME]/bin/activate'\n\n# ENTER CTRL+D TO SAVE AND EXIT EDIT MODE\n")),(0,l.kt)("p",null,"Close/exit the current terminal for the alias to be applied."),(0,l.kt)("p",null,"Open a new terminal and activate the virtual environment."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ [PROJECT_NAME]\n\n([PROJECT_NAME])\n$\n")),(0,l.kt)("p",null,"Install the packages from the ",(0,l.kt)("inlineCode",{parentName:"p"},"requirements.txt")," to the virtual environment."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"([PROJECT_NAME])\n$ pip install -r /path/project/requirements.txt\n")),(0,l.kt)("p",null,"Check the packages that have been installed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"([PROJECT_NAME])\n$ pip list\n")),(0,l.kt)("p",null,"The virtual environment is now set up to the project's requirements. Every time you are working on the project activate the virtual environment first!"))}v.isMDXComponent=!0},3678:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/windows_vscode_terminal_default-af8ec9c3d7aa70ec29963084c069cdfd.png"}}]);