const app = require('./src/app');
const { sequelize } = require('./src/models')

const PORT = 5000

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}...`)
  })
})
