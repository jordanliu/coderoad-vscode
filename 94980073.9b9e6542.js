(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(2),c=a(7),o=(a(0),a(117)),i={id:"build-tutorial",title:"Building a Tutorial",sidebar_label:"Building a Tutorial"},r={id:"build-tutorial",title:"Building a Tutorial",description:"A tutorial is made up of two parts:",source:"@site/docs/build-tutorial.md",permalink:"/docs/build-tutorial",editUrl:"https://github.com/coderoad/coderoad-vscode/edit/master/docs/docs/build-tutorial.md",sidebar_label:"Building a Tutorial",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/overview"}},s=[{value:"1. Markdown",id:"1-markdown",children:[{value:"Example",id:"example",children:[]},{value:"Format",id:"format",children:[]},{value:"Parser",id:"parser",children:[]}]},{value:"2. Git Commits",id:"2-git-commits",children:[{value:"Init Commit",id:"init-commit",children:[]},{value:"Test Runner",id:"test-runner",children:[]},{value:"Types of Tests",id:"types-of-tests",children:[]}]},{value:"Editing a Tutorial",id:"editing-a-tutorial",children:[]}],l={rightToc:s};function b(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A tutorial is made up of two parts:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Markdown"),Object(o.b)("li",{parentName:"ol"},"Git Commits")),Object(o.b)("p",null,"We'll go into each in detail in more detail."),Object(o.b)("h2",{id:"1-markdown"},"1. Markdown"),Object(o.b)("p",null,"The markdown is the meta data that pulls the tutorial together."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"See a rough example below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-md"}),"# Tutorial Title\n\n> Tutorial summary description\n\n\\`\\`\\`config\nconfig:\ntestRunner:\ncommand: command to run tests\nfileFormats: - fileType (eg. JS, TS, etc)\nrepo:\nuri: https://path/to/repo\nbranch: git-branch\n\\`\\`\\`\n\n## Level Name\n\n> Level summary description\n\nLevel content in a paragraph. The text that appears when you load a level.\n\n### Step Name\n\n\\`\\`\\`config\nsetup:\nfiles: - file-to-open.js\ncommits: - 'setup-commit-hash'\ncommands: - command to run\nwatchers: - files to watch and run tests if they change\nsolution:\nfiles: - file-to-open.js\ncommits: - 'solution-commit-hash'\n\\`\\`\\`\n\nText to describe the step.\n")),Object(o.b)("h3",{id:"format"},"Format"),Object(o.b)("p",null,"From a hierarchy perspective, a tutorial is made up of levels, which are made up of steps. When each level or step is loaded, if a config is provided, it will run in the extension."),Object(o.b)("p",null,"Level"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Optional level setup config"),Object(o.b)("li",{parentName:"ul"},"Steps",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Step setup config"),Object(o.b)("li",{parentName:"ul"},"Step solution config")))),Object(o.b)("h3",{id:"parser"},"Parser"),Object(o.b)("p",null,"Markdown is parsed by a CLI script and converted into JSON. The JSON is loaded as the core of the tutorial."),Object(o.b)("h2",{id:"2-git-commits"},"2. Git Commits"),Object(o.b)("p",null,"A CodeRoad tutorial runs on Git commits:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"init",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Basic project setup code"),Object(o.b)("li",{parentName:"ul"},"test runner dependencies"),Object(o.b)("li",{parentName:"ul"},".vscode workspace configurations"))),Object(o.b)("li",{parentName:"ol"},"setup",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"add unit tests"),Object(o.b)("li",{parentName:"ul"},"add unit testing dependencies"),Object(o.b)("li",{parentName:"ul"},"add scaffolding code (if needed)"))),Object(o.b)("li",{parentName:"ol"},"solution",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"the code required to make the tests pass")))),Object(o.b)("p",null,"Then repeat steps 2 & 3."),Object(o.b)("h3",{id:"init-commit"},"Init Commit"),Object(o.b)("p",null,"Include basic setup for your project."),Object(o.b)("p",null,"The first commit requires some necessary setup. See an example: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShMcK/coderoad-fcc-basic-node-and-express/commit/c722f9e9ec8f94d7fba04cfa3375e0896346ced0"}),"init \xb7 ShMcK/coderoad-fcc-basic-node-and-express@c722f9e \xb7 GitHub"),". A JS project should include:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},".gitignore - ignore ",Object(o.b)("inlineCode",{parentName:"li"},"package-lock.json")," or it will cause merge conflicts"),Object(o.b)("li",{parentName:"ul"},".vscode/extensions - would recommend \u201cdbaeumer.vscode-eslint\u201d"),Object(o.b)("li",{parentName:"ul"},".vscode/launch.json - file for running the debugger"),Object(o.b)("li",{parentName:"ul"},".vscode/settings.json - ensure that ",Object(o.b)("inlineCode",{parentName:"li"},"formatOnSave")," and linting are enabled"),Object(o.b)("li",{parentName:"ul"},"README.md"),Object(o.b)("li",{parentName:"ul"},"package.json - include test commands - include repo - include test runner dependencies")),Object(o.b)("p",null,"If starting a project with React, bear in mind that create-react-app runs some pretty hacky processes behind the scenes. You can use the following boilerplate in your project: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShMcK/coderoad-tutorial-tweeter/commit/059e0041691f39e3bf078022512d01a93214b6bb"}),"init with coderoad react tutorial starter \xb7 ShMcK/coderoad-tutorial-tweeter@059e004 \xb7 GitHub")),Object(o.b)("h3",{id:"test-runner"},"Test Runner"),Object(o.b)("p",null,"Test output is parsed by the test runner to see if tests have passed or failed."),Object(o.b)("p",null,"Currently, it\u2019s required that the test runner produce \u201cTAP\u201d output.: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://testanything.org/"}),"Home - Test Anything Protocol"),". Mostly because every test runner produces different output, and it\u2019s easier to use a pre-existing standard available for most test runners rather than to write output parsers for every test runner. See a list of common tap producers: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://testanything.org/producers.html"}),"TAP Producers - Test Anything Protocol"),"."),Object(o.b)("p",null,"See an example using \u201cMocha\u201d and the \u201cMocha Tap Reporter\u201d:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),"{\n\u201cscripts\u201d: {\n    \u201cprogrammatic-test\u201d: \u201cmocha \u2014reporter=mocha-tap-reporter\u201d,\n    \u201ctest\u201d: \u201cmocha\u201d\n  },\n  \u201cdevDependencies\u201d: {\n    \u201cmocha\u201d: \u201c^7.0.1\u201d,\n    \u201cmocha-tap-reporter\u201d: \u201c^0.1.3\u201d\n  }\n}\n")),Object(o.b)("p",null,"In this example, the extension can run ",Object(o.b)("inlineCode",{parentName:"p"},"nom run programmatic-test")," to run the tests as TAP, but the user can still run ",Object(o.b)("inlineCode",{parentName:"p"},"nom run test")," to see a more human readable output."),Object(o.b)("p",null,"Ideally, try to choose a test runner that performs quickly. If possible, avoid Jest as it has slow install and running times."),Object(o.b)("h3",{id:"types-of-tests"},"Types of Tests"),Object(o.b)("p",null,"Integration tests are usable, but slower. Unit tests are fastest whenever possible."),Object(o.b)("p",null,"That said, anything can be tested. I\u2019ll include some examples below of tests I\u2019ve made for inspiration."),Object(o.b)("h5",{id:"equality"},"Equality"),Object(o.b)("p",null,"Testing equality\nEg. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShMcK/coderoad-tutorial-js-bug-hunter/commit/75b32ebee89853deb3b4dad6aa8654f89bc72cff"}),"https://github.com/ShMcK/coderoad-tutorial-js-bug-hunter/commit/75b32ebee89853deb3b4dad6aa8654f89bc72cff")),Object(o.b)("h5",{id:"spylistener"},"Spy/Listener"),Object(o.b)("p",null,"Code that listens for something to have been called. Use a spy.\nEg. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShMcK/coderoad-fcc-basic-node-and-express/commit/ec62e7b2cd65173a503dc2bd6be71c46f66f7c25"}),"1.2 console log \xb7 ShMcK/coderoad-fcc-basic-node-and-express@ec62e7b \xb7 GitHub")),Object(o.b)("h5",{id:"dependency-installed"},"Dependency Installed"),Object(o.b)("p",null,"Watch for a dependency to be installed.\nEg. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShMcK/coderoad-fcc-basic-node-and-express/commit/9e28073eb238a5edd41470edc407a4bfe03ebf80"}),"1.1 install express \xb7 ShMcK/coderoad-fcc-basic-node-and-express@9e28073 \xb7 GitHub")),Object(o.b)("h5",{id:"api-test"},"API Test"),Object(o.b)("p",null,"Code that calls an endpoint and validates the return.\nEg. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShMcK/coderoad-fcc-basic-node-and-express/commit/b08cb17822544ee957021c03e53eb57170c93231"}),"2.1 get root \xb7 ShMcK/coderoad-fcc-basic-node-and-express@b08cb17 \xb7 GitHub")),Object(o.b)("h5",{id:"file-creation"},"File Creation"),Object(o.b)("p",null,"Check if a file exists.\nEg. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShMcK/coderoad-fcc-basic-node-and-express/commit/eaf4220e6343de2c6bb0dda74e7c347f5e45b242"}),"6.1 create .env \xb7 ShMcK/coderoad-fcc-basic-node-and-express@eaf4220 \xb7 GitHub")),Object(o.b)("h5",{id:"regex-code"},"Regex Code"),Object(o.b)("p",null,"Run a regex matcher to find a code match. Code can expect to be formatted from the provided linter rules.\nEg. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShMcK/coderoad-fcc-basic-node-and-express/commit/8b416dcc1e262310658083a4d40090846e257dd8"}),"11.2 body parser middleware \xb7 ShMcK/coderoad-fcc-basic-node-and-express@8b416dc \xb7 GitHub")),Object(o.b)("h5",{id:"react"},"React"),Object(o.b)("p",null,"Test shallow renders with @testing-library/react.\nEg. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShMcK/coderoad-tutorial-tweeter/commit/1c248ff9846c5a27c12a2cbbb77cab1d66613be4"}),"setup: working message form input \xb7 ShMcK/coderoad-tutorial-tweeter@1c248ff \xb7 GitHub"),"\nYou can also test hooks with @testing-library/react-hooks\nEg. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShMcK/coderoad-tutorial-tweeter/commit/71deafa34fb0c271e57fb1749df184c0df3bcd8b"}),"setup: useText hook refactor \xb7 ShMcK/coderoad-tutorial-tweeter@71deafa \xb7 GitHub")),Object(o.b)("h2",{id:"editing-a-tutorial"},"Editing a Tutorial"),Object(o.b)("p",null,"When editing markdown, simply edit the markdown and re-run the parser."),Object(o.b)("p",null,"When editing code, you'll need to rebase. You can use VSCode as your default editor for Git: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.soltysiak.it/en/2017/01/set-visual-studio-code-as-default-git-editor-and-diff-tool/."}),"https://blog.soltysiak.it/en/2017/01/set-visual-studio-code-as-default-git-editor-and-diff-tool/.")),Object(o.b)("p",null,'Run rebase from a commit or just "root".'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),">git rebase -i --root\n")),Object(o.b)("p",null,"Choose the commit you want to edit"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"pick b73feaf commit 2.1 setup\npick 0a3aa83 commit 2.1 solution\npick 0d67935 commit 2.2 setup\n")),Object(o.b)("p",null,'Let\'s say we want to edit step 2.1 Change the word pick to "e".'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"e b73feaf commit 2.1 setup\n")),Object(o.b)("p",null,"Save the file."),Object(o.b)("p",null,"Git should rebase to that commit."),Object(o.b)("p",null,'Make your changes, then "add" the changes to git.'),Object(o.b)("p",null,"To complete rebasing, continue:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"git rebase --continue\n")),Object(o.b)("p",null,"If something goes wrong during your rebase, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"git rebase --abort\n")),Object(o.b)("p",null,"If you encounter any merge conflicts along the way, resolve them, add the changes and continue as above."))}b.isMDXComponent=!0}}]);