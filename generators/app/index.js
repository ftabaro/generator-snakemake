"use strict";
const Generator = require("yeoman-generator");
// Const chalk = require('chalk');
// const yosay = require('yosay');

module.exports = class extends Generator {
  /*  Constructor(args, opts) {
    super(args, opts);

    // This makes `appname` a required argument.
    this.argument("appname", {
      type: String,
      required: false,
      default: this.env.cwd
    });

    // set root dir
    // this.sourceRoot(this.options.appname);

    // And you can then access it later; e.g.
    this.log(this.options.appname);
  } */

  initializing() {
    this.composeWith(
      "git-init",
      {
        options: { commit: "initial commit" }
      },
      {
        local: require.resolve("generator-git-init")
      }
    );
    // This.composeWith('github-project', {}, {
    //   local: require.resolve('generator-github-project')
    // });
  }

  prompting() {
    // Have Yeoman greet the user.
    // this.log(
    //   yosay(
    //     `Welcome to the ${chalk.red('Snakemake')} generator!`
    //   )
    // );
    // const prompts = [
    //   {
    //     type: 'confirm',
    //     name: 'modules',
    //     message: 'Would you like to create modules?',
    //     default: true
    //   },
    //   {
    //     type: 'confirm',
    //     name: 'github_actions',
    //     message: 'Would you like to add GitHub Actions workflow?',
    //     default: true
    //   }
    // ];
    // return this.prompt(prompts).then(props => {
    //   // To access props later use this.props.someAnswer;
    //   this.props = props;
    // });
  }

  writing() {
    this.log(this.props);

    this.fs.copy(
      this.templatePath("github-actions-dummy.yml"),
      this.destinationPath(".github/workflows/main.yml")
    );

    this.fs.copy(
      this.templatePath("test-placeholder.md"),
      this.destinationPath("tests/README.md")
    );

    this.fs.copy(
      this.templatePath("module.smk"),
      this.destinationPath("workflow/modules/module.smk")
    );

    this.fs.copy(
      this.templatePath("Snakefile-modules"),
      this.destinationPath("workflow/Snakefile")
    );

    this.fs.copy(
      this.templatePath("config.yaml"),
      this.destinationPath("workflow/config.yaml")
    );

    this.fs.copy(
      this.templatePath("Snakefile"),
      this.destinationPath("workflow/Snakefile")
    );

    this.fs.copy(
      this.templatePath("README.md"),
      this.destinationPath("README.md")
    );
  }

  install() {
    //    This.installDependencies();
  }
};
