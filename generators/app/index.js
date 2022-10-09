'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

/*  constructor(args, opts) {
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
  }*/

  prompting() {

    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the ${chalk.red('Snakemake')} generator!`
      )
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'modules',
        message: 'Would you like to create modules?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {

    if (this.props.modules) {
      this.fs.copy(
      this.templatePath('module.smk'),
      this.destinationPath("workflow/modules/module.smk")
    )

    this.fs.copy(
        this.templatePath('Snakefile-modules'),
        this.destinationPath('workflow/Snakefile')
      );

    } else {
      this.fs.copy(
        this.templatePath('config.yaml'),
        this.destinationPath('workflow/config.yaml')
      );

      this.fs.copy(
        this.templatePath('Snakefile'),
        this.destinationPath('workflow/Snakefile')
      );
    }

    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('workflow/README.md')
    );

  }

  install() {
//    this.installDependencies();
  }
};
