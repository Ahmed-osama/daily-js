module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info },
      prompt
    } = toolbox

    const { name } = await prompt.ask({
      type: 'input',
      name: 'name',
      message: 'file name ?'
    })

    console.log(`->`, name)
    await generate({
      template: 'model.js.ejs',
      target: `models/${name}-model.js`,
      props: { name }
    })

    info(`Generated file at models/${name}-model.js`)
  }
}
