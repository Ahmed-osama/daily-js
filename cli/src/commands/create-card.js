module.exports = {
  name: 'create-card',
  run: async toolbox => {
    const { print, installPackages, prompt, parameters } = toolbox
    const details = await prompt.ask({
      type: 'input',
      name: 'name',
      message: 'name?'
    })
    installPackages(details)
    print.info('Welcome to your CLI')
  }
}
