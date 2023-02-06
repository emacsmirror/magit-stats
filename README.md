

# magit-stats


## What is this package?

A (still under development) git statistics report
generator that can be called from inside Emacs, hopefully from magit.

![img](./doc/demo.png)


## Requirements

You need to have `node@latest` installed in your system and the `npx` tool.

Just check if you have it issuing the command: `npx --version`.


## Basic Usage

Navigate to your git folder and issue:

    npx magit-stats

And that's it! A new file `git-stats.html` is generated with your
repository statistics and will be automatically opened.


## Advanced Usage

You can get all options of this cli tool by issuing `npx magit-stats --help`.

    [magit-stats] - Your git repository statistics
    
    Usage: npx magit-stats  [options]
    
    Opções:
      -l, --html     Saves a HTML stats report                              [string]
          --no-open  Does not open the generate HTML file                  [boolean]
      -j, --json     Saves JSON to file                                     [string]
      -s, --stdout   Prints stats to stdout                                [boolean]
      -m, --minify   JSON output is minified                               [boolean]
      -h, --help     Show help                                             [boolean]
      -v, --version  Show app version                                      [boolean]
    
    Exemplos:
      npx magit-stats                           save report to git-stats.html
      npx magit-stats  [--html | -l] file.html  save report to file.html
      npx magit-stats  --json stats.json        save stats to JSON file
      npx magit-stats  --stdout                 prints to stdout
      npx magit-stats  --stdout --minify        prints to stdout minified


## TODOs <code>[69%]</code>

-   [X] Define git command to output log

-   [X] Detects if it is in a git folder

-   [X] Uses JSON parser to ensure valid JSONs are created

-   [X] Calculate total commits

-   [X] Calculate commits by author

-   [X] Calculate commits by week day

-   [X] Calculate commits per day hour

-   [ ] Calculate repository size

-   [X] Calculate initial commit date

-   [X] Calculate last commit date

-   [X] Change project language to Typescript

-   [X] Configure build scripts and bin

-   [X] Configure npm registry and npx

-   [ ] Compose time series of commits by user

-   [X] Make basic CLI

-   [X] Create exporter to JSON on stdout

-   [X] Create exporter to JSON file

-   [X] Create basic exporter do HTML

-   [ ] Add minified option to HTML

-   [X] Fix locale translation for -h and -v options on &#x2013;help

-   [X] Add chart of commitsByWeekDay and commitsByAuthor to HTML

-   [ ] Add series chart to HTML

-   [ ] Work on UI/UX on HTML

-   [ ] Create exporter to org file

-   [ ] Create exporter to md file

-   [ ] Make elisp package that calls the node function passing the project folder as argument

