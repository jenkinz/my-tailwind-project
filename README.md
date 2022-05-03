# TailwindCSS Tutorial Project

Following the video tutorials from https://youtube.com/playlist?list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR.

## From Scratch

    $ npm init -y
    $ npm install tailwindcss postcss-cli autoprefixer
    $ npx tailwind init
    $ touch postcss.config.js
    [ this file is where you specify which postcss plugins to run for project]
    $ mkdir css
    $ touch css/tailwind.css
    $ npm run build    [ runs build script from package.json  ]
    $ touch public/index.html
    [ put some content in index.html... ]
    $ npm install -g live server
    $ live-server public   [  run live server from public/ directory  ]
