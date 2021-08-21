const {Command, flags} = require('@oclif/command')

class ServeCommand extends Command {
  async run() {
    const {flags} = this.parse(ServeCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /data/projects/cookn/components/whisker/src/commands/serve.js`)
  }
}

ServeCommand.description = `Describe the command here
...
Extra documentation goes here
`

ServeCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ServeCommand
