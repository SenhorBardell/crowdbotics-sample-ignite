// Ignite CLI plugin for BossBoilerplate
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'react-native-MODULENAME'
const NPM_MODULE_VERSION = '0.0.1'

// const PLUGIN_PATH = __dirname
// const APP_PATH = process.cwd()
const EXAMPLE_FILE = 'BossBoilerplateExample.js.ejs'

const add = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // install an NPM module and link it
  await ignite.addModule(NPM_MODULE_NAME, { link: true, version: NPM_MODULE_VERSION })

  await ignite.addPluginComponentExample(EXAMPLE_FILE, { title: 'BossBoilerplate Example' })

  // Example of copying templates/BossBoilerplate to App/BossBoilerplate
  // if (!filesystem.exists(`${APP_PATH}/App/BossBoilerplate`)) {
  //   filesystem.copy(`${PLUGIN_PATH}/templates/BossBoilerplate`, `${APP_PATH}/App/BossBoilerplate`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: `import '../BossBoilerplate/BossBoilerplate'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // remove the npm module and unlink it
  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true })

  await ignite.removePluginComponentExample(EXAMPLE_FILE)

  // Example of removing App/BossBoilerplate folder
  // const removeBossBoilerplate = await context.prompt.confirm(
  //   'Do you want to remove App/BossBoilerplate?'
  // )
  // if (removeBossBoilerplate) { filesystem.remove(`${APP_PATH}/App/BossBoilerplate`) }

  // Example of unpatching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   delete: `import '../BossBoilerplate/BossBoilerplate'\n`
  // )
}

// Required in all Ignite CLI plugins
module.exports = { add, remove }

