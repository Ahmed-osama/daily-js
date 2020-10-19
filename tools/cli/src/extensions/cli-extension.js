// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  // A function to install packages present in package.json
  function installPackages(props) {
    const {
      system: { which, spawn },
      print: { info }
    } = toolbox
    info('Starting package installation')
    // get the path of npm installation, you can also run `which npm` in terminal to see the output
    const npmPath = which('npm')
    /* 
      1. Spawn a shell process that will navigate to the folder
      2. Run npm install
      3. Run npm run format (which is also defined in package.json)
    */
    return spawn(
      `cd ${props.name} && ${npmPath} install && ${npmPath} run --quiet format`,
      {
        shell: true,
        stdio: 'inherit',
        stderr: 'inherit'
      }
    )
  }
  // Put the function into the toolbox
  toolbox.installPackages = installPackages
}
